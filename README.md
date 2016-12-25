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


Auto generated users (Administrators):

UserName | Password 
--- | ---
admin | password
batman | password
John | password

address http://localhost:3200/

Action | Method | Description | Body/Query | Response | Notes 
--- | --- | --- | --- | --- | ---  
**/token** | `POST` | Gets Autotization token | ```{ pasword: "", username: "", grant_type: "password"  }``` | ```{ "access_token": "LongStringOfCharacters", "token_type": "bearer", "expires_in": 1209599, "userName": "admin", ".issued": "Sun, 25 Dec 2016 09:13:57 GMT", ".expires": "Sun, 08 Jan 2017 09:13:57 GMT"}```  | Content-Type Header Should be **application/x-www-form-urlencoded**
**api/account/register** | `POST`| User Registration | ```{ firstName: "", lastName: "", username: "", email: "", password: "", confirmPassword: ""  }``` | Password should have at least 6 symbols 
**api/tickets/buy** | `POST` | Buy new ticket | ```{ hours: 2 }``` | ```{ QRCode: "LongStringOfCharacters", Cost: "1.60" }```| Requires authorization. Cost is in leva
**api/tickets/** | `GET` | Show all tickets for current logged user | - | ```[{ Id: "GUID", BoughtAt: "Date", Cost: "Decimal", Expired: "Bool", "Activated": "Bool", "DateActivated": "Date/null", "ExpiresOn": "Date/null", Duration: "NumberHours", QRCode: "LongText", Owner: { "Owner": { Id: "GUID"  UserName: "Text", FullName: "Text"} }  ]``` | Requires authorization 
**api/tickets/all?count=2** | `GET` | Same as above but for all users | count is optional positive number | `Same as above` | for Administrators\*\*
**api/tickets/byId?id=GUID** | `GET` | Returns info of single ticket | id is **required** | `Same as above but for single item` | 
**api/tickets/isValid?id=GUID** | `GET`| Checks whether a ticked is valid (Activated and not Expired) | id is **required** | `true/false` | for Inspectors\*\*
**api/tickets/allByUsername?username=text** | `GET`| Gets tickets for a given user by username |  username is **required**, count is optional | See *api/tickets/* 
**api/tickets/allByUserid?id=GUID** | `GET` | Gets tickets for a given user by its id |  id is **required**, count is optional | See *api/tickets/* 
**api/tickets/activate** | `PUT` | Activates a ticked |  ```{ id: "GUID"}``` | ```{ Message = "Successfully activated/Ticked already activated.", ExpiresOn = "Date" }``` | Requires authorization
**api/users/** | `GET` | Gets all registered users | - | ```[ { FirstName: "Text", LastName: "Text", Email: "Text", Tickets: [], Roles: [], Id: "GUID", UserName: "Text", FullName: "" }]``` | for Administrators\*\*
**api/users/info/** | `GET` | Returns info about current logged user | - | `Simliar to above but for single user - not array` | 
**api/users/byid?id=GUID** | `GET` | Returns info about user by id | id is **required** | `Same as above` | 
**api/users/** | `POST` | Creates a new user (same as *api/account/register*) | `check api/account/register/` | `Same as aboive` | 
**api/users/** | `PUT` | Updates a user | ```{ Id: "GUID", "FirstName": "Text", LastName: "Text", Email: "Text", UserName: "Text" }``` | No response - only status code 200 - OK.
**api/users/** | `DELETE` | Removes a user | ```{ Id: "GUID" } ``` |  No response - only status code 200 - OK. 
 
TODO: 

api/users/charge - `PUT` should charge the account of the user. Card details will be required.

\*\* - Not Implemented
