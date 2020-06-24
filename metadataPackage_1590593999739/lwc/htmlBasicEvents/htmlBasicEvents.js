/* eslint-disable no-alert*/
/* eslint-disable no-console*/
import { LightningElement } from 'lwc';

export default class HtmlBasicEvents extends LightningElement {
    message = "Hello Adarsh ! ";
    handlechange(event){
        const lableVal = event.target.label;
        const valueVal = event.target.value;
        console.log('Event has value is -> ',valueVal+' and its lable is -> ',lableVal);
    }
}