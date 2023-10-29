let propDetails;
class ApiUtils {

    callApiRequest(request){
        return cy.request(request).its('body').then((html) => {
            const jsonStart = html.indexOf('<script id="__NEXT_DATA__" type="application/json">') + 51;
            const jsonEnd = html.indexOf('</script>', jsonStart);
            const jsonString = html.substring(jsonStart, jsonEnd);
            const jsonData = JSON.parse(jsonString);
            return jsonData;
        })
    }

    getApiPropertyCount(body){
        return cy.wrap(body).then((data) => {
            const apiCount = data.props.pageProps.searchResult.meta.total_count;
            return apiCount;
        })
    }

    getApiProperty(body,order){
        return cy.wrap(body).then((data) => {
            const prop = data.props.pageProps.searchResult.properties;
            cy.wrap(prop).then((propList)=>{
                cy.wrap(propList[order]).then((propBody)=>{
                    return propBody;
                })
            })
        })
    }

    storePropDetailsFromApi(request,order){        
        return this.callApiRequest(request).then((body)=>{
                this.getApiProperty(body,order).then((propBody)=>{
                    return propBody;
                })
            })
    }
}

const apiUtils = new ApiUtils();
export default apiUtils;