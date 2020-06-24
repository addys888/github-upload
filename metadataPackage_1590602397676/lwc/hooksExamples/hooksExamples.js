import { LightningElement } from 'lwc';

export default class HooksExamples extends LightningElement {
    name = 'Adarsh';
    constructor(){
        super();
        console.log('Constructor Loaded --');
        this.name = this.name + ' Constructed';
    }

    connectedCallback(){
        console.log('connectedCallback Loaded --');
    }

    disconnectedCallback(){
        console.log('disconnectedCallback Loaded --');
    }
     /*
    render(){
        return newDOM;
    }
    */
    renderedCallback(){
        console.log('renderedCallback Loaded --');
    }
   
   errorCallback(error, stack){
       console.error(error);
   }
}