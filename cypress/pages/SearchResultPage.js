class SearchResultPage {
    getPropertyCount(){
        return cy.get('[aria-label="Search results count"]').invoke('text').then((text) => {
            text = text.replace(' properties','');
            text = text.indexOf(',')!==-1 ? text.replace(',', '') : text;
            return text
        })
    }


    goToCategory(catText){
        cy.xpath('//a/span[text()="'+catText+'"]').click({force:true});
    }

    
    goToPropertyDetails(orderOfProp){
        cy.xpath('(//ul[@aria-label="Properties"]/li['+orderOfProp+']//a)[1]').click({force:true});
        cy.wait(5000);
    }
}
const searchResultPage = new SearchResultPage();
export default searchResultPage;