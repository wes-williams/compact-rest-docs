var api = {};
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
  '/courses/{courseId}' : { 
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
  '/courses/{courseId}/sections' : { 
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
  '/courses/{courseId}/sections/{sectionId}' : { 
    'verbs' : {
      'GET' : {
        'queryString' : {'limit' : '100' },
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
  '/users' : {  
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
  '/users/{userId}' : { 
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
  '/users/{userId}/courses' : { 
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
  '/teachers' : { 
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
  '/teachers/{teacherId}' : { 
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
  '/teachers/{teacherId}/courses' : { 
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
  '/teachers/{teacherId}/courses/{courseId}' : { 
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
  '/schools' : { 
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
  '/schools/{schoold}' : { 
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
  '/schools/{schoold}/campuses' : { 
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
  '/schools/{schoold}/campuses/{campusId}' : { 
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
  '/schools/{schoold}/campuses/{campusId}/courses' : { 
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
  }
 };
