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

Action | Method | Description | Body | Response | Notes 
--- | --- | --- | --- | --- | ---  
**/token** | `POST` | Gets Autotization token | ```{ pasword: "", username: "", grant_type: "password"  }``` | ```{ "access_token": "LongStringOfCharacters", "token_type": "bearer", "expires_in": 1209599, "userName": "admin", ".issued": "Sun, 25 Dec 2016 09:13:57 GMT", ".expires": "Sun, 08 Jan 2017 09:13:57 GMT"}```  | Content-Type Header Should be **application/x-www-form-urlencoded**
**api/account/register** | `POST`| User Registration | ```{ firstName: "", lastName: "", username: "", email: "", password: "", confirmPassword: ""  }``` | Password should have at least 4 symbols 
**api/tickets/buy** | `POST` | | ```{ hours: 2 }``` | ```{ QRCode: "LongStringOfCharacters", Const: "1.60" }```| Requires autotization. Cost is in leva
**

- **/token** [`POST`]  { password: "", "username": "", grant_type: "pasword"}  `Content Type: application/x-www-form-urlencoded`
    - Returns the authorization token 
-  [`POST`] { hours: "" } `Content Type: application/json`
    - retunrs an QR image data and the price of the ticked. Also check if current user has enough amount.
- **api/values/** [`GET`] `Content Type: application/json`
    - verifies that the user is authenticated correctly.
- **api/account/register** [`POST`] { firstName: "", lastName: "", username: "", email: "", password: "", confirmPassword: ""  } `Content Type: application/json`
    - Creates new user 