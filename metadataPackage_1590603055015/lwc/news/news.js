import { LightningElement, track } from 'lwc';
//import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import newsFeeds from '@salesforce/apex/newsCtrl.fetchNewsFeeds';
export default class News extends LightningElement {
    @track error;
    @track newFeedObject;
    @track componentMessage;
    //runs when component loaded
    connectedCallback() {
        newsFeeds() 
        .then(result => {
            console.log('result@@@@'+JSON.stringify(result));
            //if(result.status == 'ok'){ //check articles statuc and result count
            //    if(parseInt(result.totalResults) > parseInt(0)){
                    this.newFeedObject = result;
                    console.log('res12343--'+JSON.stringify(this.newFeedObject));  
            //    }else{
                    //this.componentMessage = 'There is no item to show !';
                    //showToast('info ', 'There is no item to show !', 'Info :');
           //     }
           // }else{
                //showToast('warning', 'Something went wrong while fetching the news !', 'Error :');
            //}
        })
        .catch(error => {
            this.error = error;
            console.log('error12343--'+JSON.stringify(error));
        });
    }
    /*showToast(isSuccess, message, title){
        console.log('showToast--!!!'+isSuccess);
        const event = new ShowToastEvent({
            title : title,
            message : message,
            variant : isSuccess
        });
        this.dispatchEvent(event);
    }*/
}