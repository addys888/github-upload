import { LightningElement, api } from 'lwc';

export default class ChildComponent extends LightningElement {
    @api messageFromAPI;
    @api messagefromtrack;
}