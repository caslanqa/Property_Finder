import apiUtils from "./ApiUtils";
import propDetailsPage from "./PropertyDetailsPage";
class E2eVerifications {
    verifyApiAndUiPropCounts(uiCount){
        cy.url().then((request)=>{
            apiUtils.callApiRequest(request).then((body) => {
                apiUtils.getApiPropertyCount(body).then((apiCount)=>{
                    expect(apiCount).to.eq(uiCount);
                })
            })
        })        
    }

    verifyPropDetails(propDetails){
        propDetailsPage.getDescription().then((desc)=>{
            cy.wrap(propDetails).then((body)=>{
                expect(body.description).to.eq(desc);
            })
        })
        propDetailsPage.getLocation.then((location)=>{
            cy.wrap(propDetails).then((body)=>{
                expect(body.location.full_name).to.contains(location);
            })
        })
        propDetailsPage.getPropertyBath.then((bath)=>{
            cy.wrap(propDetails).then((body)=>{
                expect(body.bathrooms).to.eq(bath);
            })
        })
        propDetailsPage.getPropertyPrice.then((price)=>{
            cy.wrap(propDetails).then((body)=>{
                expect(body.price.value).to.contains(price);
            })
        })
        propDetailsPage.getPropertySize.then((size)=>{
            cy.wrap(propDetails).then((body)=>{
                expect(body.size.value).to.eq(size);
            })
        })
        propDetailsPage.getTitle.then((title)=>{
            cy.wrap(propDetails).then((body)=>{
                expect(body.title).to.eq(title);
            })
        })
    }
}
const verifications = new E2eVerifications();
export default verifications;