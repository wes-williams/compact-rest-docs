var docs = function(api,space) {
  var that = this;
  that.api= api;
  that.stylePosition = {};
  var getStylePosition = function(name) {
    if(that.stylePosition[name]) {
      return that.stylePosition[name];
    }
    that.stylePosition[name]=Object.keys(stylePosition).length;
    return that.stylePosition[name];
  };
  
  api.uris = Object.keys(api.uriDetails);
  api.uris.sort(function(a, b) {
    return a.length - b.length;
  });
  
  var createLinks = function(uniqueUris,partHtml) {
    var uriParams = [];
    for(var i=0;i<uniqueUris.length;i++) {
      var uriParts = uniqueUris[i].split('/');
      for(var p=0;p<uriParts.length;p++) {
        var part = uriParts[p];
        if(part.length===0) {
          continue;         
        }
   
        if(part.match(/^\{.+\}$/)) {
          if(uriParams.indexOf(part) == -1) {
            uriParams.push(part);
            var partLink = '<a class="pathparam pathstyle'+getStylePosition(part)+'" href="#" onclick="d.giveFocus(this.innerHTML)">'+part+'</a>';
            partHtml = partHtml.replace(new RegExp(part,"g"),partLink);
          }
        }
        //else if(part != focusResource) {
        else {
          var resourceMatch = '/' + part + '/';
          var partLink = '/<a class="pathresource pathstyle'+getStylePosition(part)+'" href="#" onclick="d.giveFocus(this.innerHTML)">'+part+'</a>/';
          partHtml = partHtml.replace(new RegExp(resourceMatch,"g"),partLink);
          
          resourceMatch = '/' + part + '<';
          //console.log(resourceMatch);
          partLink = '/<a class="pathresource pathstyle'+getStylePosition(part)+'" href="#" onclick="d.giveFocus(this.innerHTML)">'+part+'</a><';
          partHtml = partHtml.replace(new RegExp(resourceMatch,"g"),partLink);
        }
      }
    } 
    return partHtml;    
  };
  that.createLinks = createLinks;

  var giveFocus = function(focusResource, space) {
    if(!space) {
      space = api.space;
    }
    
    var uris = api.uris;
    var uniqueUris = [];
    var apiHtml = '';
    
    for(var i=0;i<uris.length;i++) {
  
      var uri = uris[i];
      var matchPath = '/' + focusResource + '/';
      var matchIndex = uri.indexOf(matchPath);
      if(matchIndex == -1) {
        matchPath = '/' + focusResource;
    
        matchIndex = uri.lastIndexOf(matchPath);
        if(matchIndex == -1 ||
          uri.length != (matchIndex + matchPath.length)) {
          //console.log('Could not match: ' + uri);
          continue;
        }
      }
  
      var prePath = uri.substring(0,matchIndex);
      var postPath = uri.substring(prePath.length+matchPath.length);
  
      if(matchPath[0]=='/') {
        prePath += '/';
        matchPath = matchPath.substring(1);
      }
  
      if(matchPath[matchPath.length-1]=='/') {
        postPath = '/' + postPath;
        matchPath = matchPath.substring(0,matchPath.length-1);
      }
  
      var postPathMarker = postPath.length>0 ? '/' : '';
      if(uniqueUris.indexOf(prePath+matchPath+postPathMarker) > -1) {
        continue;
      }
      uniqueUris.push(prePath+matchPath+postPathMarker);
  
      if(postPath.length>0) {
        postPath = '/<a class="morepath" href="#" ';
        postPath += 'onclick="d.extendFocus(\''+uniqueUris[uniqueUris.length-1]+'\',this,document.getElementById(\'morepath_'+i+'\'))">[+]</a>';
        postPath += '<div id="morepath_'+i+'"></div>';
      }
      else {
        postPath = '&nbsp;';
        var uriVerbs = Object.keys(api.uriDetails[uri]['verbs']);
        uriVerbs.sort();
        for(var v=0;v<uriVerbs.length;v++) { 
          postPath += '<a class="verbs" href="#" ';
          postPath += 'onclick="d.displayVerb(\''+uri+'\','+i+','+v+');">';
          postPath += uriVerbs[v];
          postPath += '</a>';
        }
      }
               
      var uriHtml = '<div class="url">';
      uriHtml += '<div class="path prepath">';
      uriHtml += createLinks(uniqueUris, prePath);
      uriHtml += '</div>';
      uriHtml += '<div class="path focuspath">';
      uriHtml += matchPath;
      uriHtml += '</div>';
      uriHtml += '<div class="path postpath">';
      uriHtml += postPath;
      uriHtml += '</div></div>';
  
      apiHtml += uriHtml;
    }

    space.innerHTML = apiHtml;
  };
  that.giveFocus = giveFocus;
  
  var extendFocus = function(partial,link,space) {
    
    if(space.innerHTML.length>0) {
      space.innerHTML='';
      link.innerHTML='[+]';
      return;  
    }
    
    var uris = api.uris;
    var apiHtml = '';

    var resourceMatch = '^' + partial.replace(/\//g,'\\/');
    var regex = new RegExp(resourceMatch);
    var uniqueUris = [];
    for(var i=0;i<uris.length;i++) {
      if(uris[i].match(regex)) {
        uniqueUris.push(uris[i]);
        var partHtml = uris[i].substring(partial.length-1);
        partHtml = '<div class="path">'+partHtml+'</div>';
        apiHtml += createLinks(uniqueUris,partHtml);
        var uriVerbs = Object.keys(api.uriDetails[uris[i]]['verbs']);
        uriVerbs.sort();
        for(var v=0;v<uriVerbs.length;v++) {
          apiHtml += '<a class="verbs" href="#" ';
          apiHtml += 'onclick="d.displayVerb(\''+uris[i]+'\','+i+','+v+');">';
          apiHtml += uriVerbs[v];
          apiHtml += '</a>';
        }
        apiHtml += '<br />';
      }
    }
  
    space.innerHTML = apiHtml;
    link.innerHTML='[-]';
  };
  that.extendFocus = extendFocus;
  
  var displayVerb = function(uri, i, v) {
    var uris = api.uris;
    var uriVerbs = Object.keys(api.uriDetails[uris[i]]['verbs']);
    uriVerbs.sort();

    window.swaggerUi = new SwaggerUi({
      url: api.uriDetails[uri]['verbs'][uriVerbs[v]]['swaggerUrl'],
      dom_id:"swagger-ui-container",
      docExpansion: 'full',
       onComplete: function(swaggerApi, swaggerUi){
         var scrollOffset = $("a[href$='" + api.uriDetails[uri]['verbs'][uriVerbs[v]]['swaggerName'] + "']").first().offset();
         if(scrollOffset) {
           document.getElementById('overlay').style.display='block';
           setTimeout(function() {
             var scrollOffset = $("a[href$='" + api.uriDetails[uri]['verbs'][uriVerbs[v]]['swaggerName'] + "']").first().offset();
             $('#documentation').animate({ scrollTop: scrollOffset.top-100 },400);

           },400);

         }
       }
    });

    window.swaggerUi.load();

   document.getElementById('fade').style.display='block';
  };
  that.displayVerb = displayVerb;
    
  return that;
};
