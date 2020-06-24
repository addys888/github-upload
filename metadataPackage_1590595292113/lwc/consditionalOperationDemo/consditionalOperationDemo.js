import { LightningElement } from 'lwc';

export default class ConsditionalOperationDemo extends LightningElement {
    isTom = false;
    isJerry = false;
    showTom(){
        this.isJerry = false;
        this.isTom = true;
        console.log('Tom Called');
    }
    showJerry(){
        this.isTom = false;
        this.isJerry = true;
        console.log('Jerry Called');
    }
}