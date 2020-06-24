public with sharing class newsCtrl {
    private static final string strCalloutURI = 'https://newsapi.org/v2/top-headlines';
    private static final string strCalloutApiKey = '32e3030b31bf4c498cae27d453bb00f1';
    public newsCtrl() {
        //all pageload properties
    }   
    @AuraEnabled
    public static newsResponseWrapper fetchNewsFeeds(){
        Http h = new Http();
        HttpRequest reqest = new HttpRequest();
        reqest.setEndpoint(strCalloutURI+'?sources=national-geographic&apiKey='+strCalloutApiKey);
        reqest.setMethod('GET');
        reqest.setHeader('Accept','application/json');
        HTTPResponse response = h.send(reqest);
        System.debug('result!!!! : '+ response.getBody());
        String strResponse = response.getBody();
        newsResponseWrapper objResponseWrappper = (newsResponseWrapper) System.JSON.deserialize(strResponse, newsResponseWrapper.class);
        System.debug('objResponseWrappper!!!! : '+ objResponseWrappper);
        return objResponseWrappper; 
    }
}
