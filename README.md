# Angular2-Team-Project
Angular 2 Team Project 

### Team Members
-
-
-

### Requirements
- node 6.9.1
- globally installed `npm`, `typescript`, `tslint`

### Installation 
- `npm install`
- `npm start` - you must open the browser at http://localhost:3100/

### REST Server (Web Api ASP)

address http://localhost:3200/

- **/token** [`POST`]  { password: "", "username": "", grant_type: "pasword"}  `Content Type: application/x-www-form-urlencoded`
    - Returns the authorization token 
- **api/tickets/buy** [`POST`] { hours: "" } `Content Type: application/json`
    - retunrs an QR image data and the price of the ticked. Also check if current user has enough amount.
- **api/values/** [`GET`] `Content Type: application/json`
    - verifies that the user is authenticated correctly.
- **api/account/register** [`POST`] { firstName: "", lastName: "", username: "", email: "", password: "", confirmPassword: ""  } `Content Type: application/json`
    - Creates new user 