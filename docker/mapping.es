 {
      "mappings": {
         "dataset": {
            "properties": {
  "suggest" : { "type" : "completion",
                          "analyzer" : "english",
                          "search_analyzer" : "english",
                          "payloads" : true
            },
               "FDPurl": {
                  "type": "string",
              "analyzer": "whitespace"
               },
               "catalogTitle": {
                  "type": "string",
	          "analyzer": "english"
               },
               "catalogURL": {
                  "type": "string",
 		   "analyzer": "whitespace"
               },
               "datasetURL": {
                  "type": "string",
 		   "analyzer": "whitespace"
               },
               "description": {
                  "type": "string",
			  "analyzer": "english"
               },
               "distribution": {
                  "properties": {
                     "accessURL": {
                        "type": "string",
				   "analyzer": "whitespace"
                     },
                     "download": {
                        "type": "string",
				        "analyzer": "whitespace"
                     },
                     "downloadHumanReadableSize": {
                        "type": "string"
                     },
                     "downloadSize": {
                        "type": "integer"
                     },
                     "format": {
                        "type": "string"
                     },
                     "licenseAcronym": {
                        "type": "string"
                     },
                     "licenseURI": {
                        "type": "string",
   "analyzer": "whitespace"
                     },
                     "title": {
                        "type": "string",
  			 "analyzer": "english"
                     }
                  }
               },
               "landingPage": {
                  "type": "string",
			  "analyzer": "whitespace"
               },
               "repositoryTitle": {
                  "type": "string",
			  "analyzer" : "english"			
               },
      	    "repositoryCountry": {
                  "type": "string",
			  "analyzer" : "whitespace"			
               },
 		    "repositoryLocation": {
                  "type": "geo_point"		
               },
               "taxonomyList": {
                  "type": "string" //put as array of URI’s
               },
               "title": {
                  "type": "string",
			  "Analyzer": "english"
               }
            }
         }
      }
}

