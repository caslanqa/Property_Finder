Feature: Property Search Feature E2E Verification

    Background: Navigate to Property Finder Website
        Given Go to the url

    Scenario: TC_1 | Total number of displayed result of props less then the price
        When Set Property type 'Villa' and Price less then '300,000'
        Then Click to search icon for search
        Then Verify API and UI counts


    Scenario: TC_2 | Total number of displayed results E2E test for commercial props
        When Select 'Show commercial properties only' checkbox
        Then Click to search icon for search
        Then Select 'Offices' category
        Then Verify API and UI counts
        Then Get property details from API
        Then Go to '1' property details page
        Then Verify property details

    @smoke
    Scenario: TC_3 | Property Available time verification
        When Type 'Bahrain Bay' to the search box
        Then Select the first matched suggestion from list
        Then Click to search icon for search
        Then Go to '1' property details page
        Then Verify Available from date is not null

