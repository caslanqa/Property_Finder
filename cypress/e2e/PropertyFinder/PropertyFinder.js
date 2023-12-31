import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import mainPage from '../../pages/MainPage';
import searchResultPage from "../../pages/SearchResultPage";
import verifications from "../../pages/E2eVerifications";
import apiUtils from '../../pages/ApiUtils';
import propDetailsPage from '../../pages/PropertyDetailsPage';

Given('Go to the url',() => {
    cy.visit('/');
    cy.clearAllCookies();
})

When('Set Property type {string} and Price less then {string}',(type,price) => {
    mainPage.setPropertyType(type);
    mainPage.setPrices('0',price);
})

Then("Click to search icon for search",() => {
    mainPage.clickSearchBtn();
})


Then("Verify API and UI counts",() => {
    searchResultPage.getPropertyCount().then((text)=>{
        verifications.verifyApiAndUiPropCounts(parseInt(text));                
    })
})


When("Select {string} checkbox",(cbLabel) => {
    mainPage.selectCheckbox(cbLabel);
})


Then("Select {string} category",(catText) => {
    searchResultPage.goToCategory(catText);
})


Then("Get property details from API",() => {
    const request = 'https://www.propertyfinder.bh/en/search?c=3&fu=0&ob=mr&page=1';
    apiUtils.storePropDetailsFromApi(request,0).then((body) => {
        propDetails = body;
    })
})


Then("Go to {string} property details page",(orderOfProp) => {
    searchResultPage.goToPropertyDetails(orderOfProp);
})


Then("Verify property details",() => {
    verifications.verifyPropDetails(propDetails);
})



When("Type {string} to the search box",(searchText) => {
    mainPage.searchText(searchText);
})


Then("Select the first matched suggestion from list",()=>{
    mainPage.selectNthSuggestion(1);
})


Then("Verify {string} date is not null",(property) => {
    propDetailsPage.verifyPropertyNotNull(property);
})