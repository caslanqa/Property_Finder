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

    }
}
const verifications = new E2eVerifications();
export default verifications;