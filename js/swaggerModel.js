/*
"apis": [
    {
      "path": "/pet",
      "description": "Operations about pets"
    },
    {
      "path": "/user",
      "description": "Operations about user"
    },
    {
      "path": "/store",
      "description": "Operations about store"
    }
  ],

+++++++++++++

"apis": [
    {
      "path": "/pet/{petId}",
      "operations": [
        {
          "method": "GET",
          "summary": "Find pet by ID",
          "notes": "Returns a pet based on ID",
          "type": "Pet",
          "nickname": "getPetById",
          "authorizations": {},
          "parameters": [
            {
              "name": "petId",
              "description": "ID of pet that needs to be fetched",
              "required": true,
              "type": "integer",
              "format": "int64",
              "paramType": "path",
              "allowMultiple": false,
              "minimum": "1.0",
              "maximum": "100000.0"
            }
          ],
          "responseMessages": [
            {
              "code": 400,
              "message": "Invalid ID supplied"
            },
            {
              "code": 404,
              "message": "Pet not found"
            }
          ]
        },
        {
          "method": "DELETE",
          "summary": "Deletes a pet",
          "notes": "",
          "type": "void",
          "nickname": "deletePet",
          "authorizations": {
            "oauth2": [
              {
                "scope": "write:pets",
                "description": "modify pets in your account"
              }
            ]
          },
          "parameters": [
            {
              "name": "petId",
              "description": "Pet id to delete",
              "required": true,
              "type": "string",
              "paramType": "path",
              "allowMultiple": false
            }
          ],
          "responseMessages": [
            {
              "code": 400,
              "message": "Invalid pet value"
            }
          ]
        },
        {
          "method": "PATCH",
          "summary": "partial updates to a pet",
          "notes": "",
          "type": "array",
          "items": {
            "$ref": "Pet"
          },
          "nickname": "partialUpdate",
          "produces": [
            "application/json",
            "application/xml"
          ],
          "consumes": [
            "application/json",
            "application/xml"
          ],
          "authorizations": {
            "oauth2": [
              {
                "scope": "write:pets",
                "description": "modify pets in your account"
              }
            ]
          },
          "parameters": [
            {
              "name": "petId",
              "description": "ID of pet that needs to be fetched",
              "required": true,
              "type": "string",
              "paramType": "path",
              "allowMultiple": false
            },
            {
              "name": "body",
              "description": "Pet object that needs to be added to the store",
              "required": true,
              "type": "Pet",
              "paramType": "body",
              "allowMultiple": false
            }
          ],
          "responseMessages": [
            {
              "code": 400,
              "message": "Invalid tag value"
            }
          ]
        },
        {
          "method": "POST",
          "summary": "Updates a pet in the store with form data",
          "notes": "",
          "type": "void",
          "nickname": "updatePetWithForm",
          "consumes": [
            "application/x-www-form-urlencoded"
          ],
          "authorizations": {
            "oauth2": [
              {
                "scope": "write:pets",
                "description": "modify pets in your account"
              }
            ]
          },
          "parameters": [
            {
              "name": "petId",
              "description": "ID of pet that needs to be updated",
              "required": true,
              "type": "string",
              "paramType": "path",
              "allowMultiple": false
            },
            {
              "name": "name",
              "description": "Updated name of the pet",
              "required": false,
              "type": "string",
              "paramType": "form",
              "allowMultiple": false
            },
            {
              "name": "status",
              "description": "Updated status of the pet",
              "required": false,
              "type": "string",
              "paramType": "form",
              "allowMultiple": false
            }
          ],
          "responseMessages": [
            {
              "code": 405,
              "message": "Invalid input"
            }
          ]
        }
      ]
    },

++++++++++++

api.uriDetails = {
  '/courses' : { 
    'verbs' : {
       'GET' : {
        'queryString' : {'limit' : 100 },
        'requestBody' : null,
        'responseBody' : {
          'id' : '123',
          'name' : 'test'
        }
      }, 
      'POST' : {
        'queryString' : null,
        'requestBody' : {
          'name' : 'test'
        },
        'responseBody' : {
          'id' : '123',
          'name' : 'test'
        }
      }
    }
  },
*/

var swaggerModel = function(space) {
  var that = this;
  that.model = {};
  that.model.space = space;
  that.model.uriDetails = {};
  that._modelsCount=0;
  that._modelsLoaded=0;

  var addResource = function(url) {
    that._modelsCount++;

    $.getJSON(url + '/index',function(data) {
      for(var i=0;i<data.apis.length;i++) {
        that._modelsCount++;
        $.getJSON(url + data.apis[i].path,function(apiData) {
          for(var j=0;j<apiData.apis.length;j++) {
            var apiPath = apiData.apis[j].path;
            that.model.uriDetails[apiPath] = { };
            that.model.uriDetails[apiPath].verbs = { };
            for(var k=0;k<apiData.apis[j].operations.length;k++) {
              that.model.uriDetails[apiPath].verbs[apiData.apis[j].operations[k].method] = {
                'queryString' : null,
                'requestBody' : {
                  'name' : 'test'
                 },
                 'responseBody' : {
                   'id' : '123',
                   'name' : 'test'
                 }
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
      console.log(that.model);
      done(that.model);
    }
  };
  that.whenReady = whenReady;

  return that;
};
