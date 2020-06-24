public with sharing class newsResponseWrapper {
    @AuraEnabled public String status;	//ok
	@AuraEnabled public Integer totalResults;	//10
	@AuraEnabled public cls_articles[] articles;

	public class cls_articles {
		@AuraEnabled public cls_source source;
		@AuraEnabled public String author;	//Antoni Virgili
		@AuraEnabled public String title;	//Fast and lethal, the Black Death spread more than a mile per day
		@AuraEnabled public String description;	//Roughly one out of three people died as this medieval plague quickly traveled along European trade routes, devastating communities along the way.
		@AuraEnabled public String url;	//https://www.nationalgeographic.com/history/magazine/2015/10-11/fast-lethal-black-death-spread-mile-per-day.html
		@AuraEnabled public String urlToImage;	//https://www.nationalgeographic.com/content/dam/archaeologyandhistory/rights-exempt/history-magazine/2015/oct-nov/black-death/black-death-opener.jpg
		@AuraEnabled public String publishedAt;	//2020-04-26T14:37:19.2275202Z
		@AuraEnabled public cls_content content;
	}
	public class cls_source {
		@AuraEnabled public String id;	//national-geographic
		@AuraEnabled public String name;	//National Geographic
	}
	public class cls_content {
	}
}
