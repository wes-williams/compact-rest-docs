var swaggerModel = function(space) {
  var that = this;
  that.model = {};
  that.model.space = space;
  that.model.uriDetails = {};
  that._modelsCount=0;
  that._modelsLoaded=0;

  var addResource = function(url) {
    that._modelsCount++;

    $.getJSON(url,function(data) {
      for(var i=0;i<data.apis.length;i++) {
        that._modelsCount++;
        $.getJSON(url + data.apis[i].path,function(apiData) {
          for(var j=0;j<apiData.apis.length;j++) {
            var apiPath = apiData.apis[j].path;
            that.model.uriDetails[apiPath] = { };
            that.model.uriDetails[apiPath].verbs = { };
            for(var k=0;k<apiData.apis[j].operations.length;k++) {
              that.model.uriDetails[apiPath].verbs[apiData.apis[j].operations[k].method] = {
               swaggerUrl : url,
               swaggerName : apiData.resourcePath +'/'+ apiData.apis[j].operations[k].nickname
              };
            }
          }
          that._modelsLoaded++;
        });
      }
      that._modelsLoaded++;
    });
  };
  that.addResource = addResource;

  var whenReady = function(done) {
    if(that._modelsLoaded < that._modelsCount) {
      setTimeout(function(){ 
        whenReady(done);
      }, 100);
    }
    else {
      done(that.model);
    }
  };
  that.whenReady = whenReady;

  return that;
};
