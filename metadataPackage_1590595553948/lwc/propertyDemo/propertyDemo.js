import { LightningElement, track, api } from 'lwc';

export default class PropertyDemo extends LightningElement {
    @track message = 'Reactive Property';

    @api messageAPI = 'API Message';
    get ownerName(){
        return 'ADARSH SINGH';
    }
    get UpdateMessage(){
        return this.message+ ' Added through getter property..';
    }
    handleChange(event){ 
        this.message =event.target.value;
        this.messageAPI = event.target.value;
        console.log('changed value is ',event.target.value);
    }
}