import { LightningElement, track } from 'lwc';

export default class Calculator extends LightningElement {
    number1;
    number2;
    @track calResult;
    handleEventChange(event){
        const val = event.target.value;
        const type = event.target.name;
        if(type === 'number1'){
            this.number1 = val;
        }else if(type === 'number2'){
            this.number2 = val;
        }
    }
    doSum(){
        const sumValue = parseInt(this.number1) + parseInt(this.number2);
        //alert('Sum is : '+sumValue);
        this.calResult = sumValue;
    }
    doSubs(){
        const SubsValue = parseInt(this.number1) - parseInt(this.number2);
        //alert('Substraction is : '+SubsValue);
        this.calResult = SubsValue;
    }
    doDiv(){
        const DivValue = parseInt(this.number1) / parseInt(this.number2);
        //alert('Divition is : '+DivValue);
        this.calResult = DivValue;
    }
    doMul(){
        const MultiplicationValue = parseInt(this.number1) * parseInt(this.number2);
        //alert('Multiplication is : '+MultiplicationValue);
        this.calResult = MultiplicationValue;
    }
}