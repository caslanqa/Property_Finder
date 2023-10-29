class Mainpage {
    
    clickFilter(option){
        cy.xpath("(//span[text()='"+option+"']/ancestor::div[starts-with(@class,'dd__head')])[1]").click();
    }

    typePrice(placeholder,price){
        cy.xpath("//span[text()='"+placeholder+"']/ancestor::div[starts-with(@class,'text-field')]//input").click();
        cy.wait(1000);
        cy.xpath("//li/button[text()='"+price+"']").click();
    }

    setPropertyType(option){
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        this.clickFilter('Property type');
        cy.xpath('//button[text()="'+option+'"]').click();
    }

    setPrices(min,max){
        this.clickFilter('Price');
        if (min!=='0') {
            this.typePrice('Min. Price (BHD)',min);
        }
        this.typePrice('Max. Price (BHD)',max);
    }

    searchTheProperty(){
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.get('.button-2.filter-form-component-variant__sm-hide').click();
    }

    selectCheckbox(cbLabel){
        cy.xpath('//label[text()="'+cbLabel+'"]/span').click();
    }

}
const mainPage = new Mainpage();
export default mainPage;