import { Runnable } from "mocha";

class PropertyDetailsPage{
    getTitle(){
        return cy.get('.panel.panel--style1.panel--style3 > h1').invoke('text').then((title)=>{
            return title;
        })
    }

    getDescription(){
        return cy.get('.property-page__description.div').invoke('text').then((description)=>{
            return description;
        })
    }

    getLocation(){
        return cy.get('.property-location__detail-area > :nth-child(1)').invoke('text').then((location)=>{
            return location;
        }) 
    }

    getPropertySize(){
        return cy.get('.property-facts__text:nth-child(2)').invoke('text').then((size)=>{
            return size;
        })
    }

    getPropertyPrice(){
        return cy.xpath("(//div[@class='property-page__column--right']//div[@class='property-price__price'])[2]").invoke('text').then((price)=>{
            return price;
        })
    }

    getPropertyBath(){
        return cy.xpath("//ul[@class='property-facts']/li[3]/div[2]").invoke('text').then((bath)=>{
            return bath;
        })
    }

    verifyPropertyNotNull(){
        cy.xpath('//span[text()="Available from:"]/ancestor::li//div[2]')
            .should('exist').then((elementExist)=>{
                if(elementExist){
                    return true;
                } else {
                    return false;
                }
            })
    }
}
const propDetailsPage = new PropertyDetailsPage();
export default propDetailsPage;