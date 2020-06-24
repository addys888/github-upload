import { LightningElement } from 'lwc';

export default class LwcIterator extends LightningElement {
    contacts = [
        {
            Id : 1,
            Name : 'Adarsh Singh',
            Email : 'adarshsingh@mindzcloud.com'
        },
        {
            Id : 2,
            Name : 'Sonika Singh',
            Email : 'sonika@astreait.com'
        },
        {
            Id : 3,
            Name : 'Test Singh',
            Email : 'Test@mindzcloud.com'
        }
    ]
}