Rocket Launch API
----
  _The Rocket Launch API returns a list of the top 5 available locations and time appropriate for rocket launching activities_

* **URL**

  https://apim-rocket-dev.azure-api.net/locations

* **Method:**
  

  `GET` 
  
*  **URL Params**



   **Optional Query Parameters:**
 
   `location = {location}`

   e.g. 

   `location = Melbourne`


* **Success Response:**
  
  _The successful API call will return a json payload containing the list of the top 5 available locations/time _

  * **Code:** 200
    **Content:** `{
    "launchWindows": [
        {
            "DateTime": "2019-03-21 03:00:00",
            "Location": "Melbourne",
            "Score": "281.308"
        },
        {
            "DateTime": "2019-03-20 03:00:00",
            "Location": "Melbourne",
            "Score": "320.465"
        },
        {
            "DateTime": "2019-03-20 18:00:00",
            "Location": "Melbourne",
            "Score": "320.683"
        },
        {
            "DateTime": "2019-03-21 06:00:00",
            "Location": "Melbourne",
            "Score": "323.398"
        },
        {
            "DateTime": "2019-03-20 00:00:00",
            "Location": "Melbourne",
            "Score": "331.385"
        }
    ]
}`
 
* **Error Response:**

  _The API provides error responses for invalid entries and authorisation Issues

  * **Code:** 401 UNAUTHORIZED
    **Content:** `"{
    "statusCode": 401,
    "message": "Access denied due to missing subscription key. Make sure to include subscription key when making requests to an API."
}."`

  OR

  * **Code:** 404 UNPROCESSABLE ENTRY <br />
    **Content:** `{
    "message": "Invalid location, please try again"
} `

* **Sample Call:**

_https://apim-rocket-dev.azure-api.net/locations?location=Melbourne_

*Authorisation Headers*

e.g.

`Ocp-Apim-Subscription-Key : 97131e95875847a484de509673ec5c44`



##### API Management

* **Resources**

| Data Entity| Description |
| ----------- | ----------------- |
| /locations | retrieves a collection of the top 5 available location and time for rocket launch|

* **Applied Policies**

| Policy| Description |
| ----------- | ----------------- |
| set-backend-service| redirects the API call to backend implementation
| set-method| limits consumer to indicated method `GET`
| rewrite-uri| resolve API uri to logic app callable endpoint
| set-header| requires API-M subscription key
| cache-lookup| caching policy to store HTTP response for 10 mins

* **Azure Functions**

|Serverless Functions| Description |
| ----------- | ----------------- |
| GetLaunchWindowScore| provides rocket lauch score results based on the weather variables
| GetLocationDetails| provides cross reference values for a given location
| SortPayload | sorts the result set and provide the top 5 Launch windows



* **Notes:**

This API is an Azure serverless implementation using Logic Apps and Azure functions. Serverless Implementation in Azure provides High Availability , Reliability and Auto Scaling Out of the box. As there are no infrastructure being provisioned using the functions, it automatically scales up/down when it needs to as it is being hosted on Azure's Platform. Azure also promotes its own DevOps that helps with the automation and CI/CD Implementation. It also has its API Management Component that allows API Policies , Security and Versioning to be applied if needed. 

* **Continuous Improment**
    * Unit Testing needs to be added per integration component
    *  Externalise Variables and configuration for CI/CD
    *  Automation scripts are built and needs to interface with Azure DevOps
    


