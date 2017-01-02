# **Sofia Transport - an Angular2 Application**

This project is part of the [Angular 2 Single Page Applications](https://telerikacademy.com/Courses/Courses/Details/391) course at [Telerik Academy](https://telerikacademy.com/) .

 - Check the demo hosted at heroku-cloud [Live](http://ticketing-system-ng2.herokuapp.com/)
	 - Please note that the first time login or register could be very slow (caused by REST server)
 - Check the live demostration of the application [here](https://www.youtube.com/watch?v=jplqfLO8BBg&feature=youtu.be)

 - Check [our application](http://best.telerikacademy.com/projects/420/Ticketing-system) at Telerik Akademy Showcase - System



### Team Members
- [Niya Omerska](https://github.com/medeaohm) 
- [Mihail Yankov](https://github.com/M-Yankov)

### Requirements
- node 6.9.1
- globally installed `npm`, `typescript`, `tslint`

### Installation 
- `> npm install`
- `> npm start` - you must open the browser at http://localhost:3100/

- `> tslint -c tslint.json app/**/*.ts` - checks for the warnings from TSLint

### REST Server (Web Api ASP)

- Hosted At [AppHarbour](http://ticket-system-rest.apphb.com)
- Of course you can run on http://localhost:3200
- SQL Server 2012+ is required.
- .NET 4.5

Auto generated users (Administrators):

UserName | Password 
--- | ---
admin | password
batman | password
John | password

address http://localhost:3200/

For more information regarding the rest server please check  [here](https://github.com/NoFearForBeer/Angular2-Team-Project/blob/master/REST%20Server.md) 

### Project Description
The purpose of the application is to allow users to buy tickets for the public transport in Sofia. Users can charge their accounts, buy and activate tickets. When a ticket is bought, a QR code is generated. After the purchasing, the ticket can be activated online or via the scanners present into the vehicles.

Additionally, users can read the news posted by the Sofia Public Transport Team and comment them.


The application consists of:

- **public part** (accessible without authentication)
- **private part** (available for registered users)
- **administrative part** (available for administrators only)
    
### Public Part
Not register users can only access the public part of te application, which consist of:

- **Home Page**  - showing the map of the public transport in Sofia
    ![home page](https://github.com/NoFearForBeer/Angular2-Team-Project/blob/master/images/home.JPG?raw=true)

- **News Page** - shows all the news ordered by creation date 
    ![news page](https://github.com/NoFearForBeer/Angular2-Team-Project/blob/master/images/news-not-logged.JPG?raw=true)
    
- **News Details Page** - shows the selected news and the list of the related comments
![news details page](https://github.com/NoFearForBeer/Angular2-Team-Project/blob/master/images/news-details-not-logged.JPG?raw=true)

- **Ticket Prices Page** - a table containing all available tickets along with their prices. 
![ticket price page](https://github.com/NoFearForBeer/Angular2-Team-Project/blob/master/images/prices.JPG?raw=true)

- And of course, users can **Register/Login**
    ![login](https://github.com/NoFearForBeer/Angular2-Team-Project/blob/master/images/login.JPG?raw=true)
    ![register](https://github.com/NoFearForBeer/Angular2-Team-Project/blob/master/images/login.JPG?raw=true)

### Private Part
Additionally, registered user have access to several other part of the application:

- **Add/Delete comment** 
    ![add/delete coments](https://github.com/NoFearForBeer/Angular2-Team-Project/blob/master/images/comments.JPG?raw=true)

- **View their profile** 
	![profile - view](https://github.com/NoFearForBeer/Angular2-Team-Project/blob/master/images/user-profile.JPG?raw=true)
	
- **Modify their profile** 
	![profile - view](https://github.com/NoFearForBeer/Angular2-Team-Project/blob/master/images/user-profile-edit.JPG?raw=true)
	
- **Charge account** 
	![charge account ](https://github.com/NoFearForBeer/Angular2-Team-Project/blob/master/images/charge-account.JPG?raw=true)
	
- **Buy Tickets** 
	![buy ticket](https://github.com/NoFearForBeer/Angular2-Team-Project/blob/master/images/buy-ticket1.JPG?raw=true) 
	![buy ticket](https://github.com/NoFearForBeer/Angular2-Team-Project/blob/master/images/buy-ticket2.JPG?raw=true) 

- **View and Activate Tickets** 
	![view tickets](https://github.com/NoFearForBeer/Angular2-Team-Project/blob/master/images/tickets.JPG?raw=true)   
	![view tickets](https://github.com/NoFearForBeer/Angular2-Team-Project/blob/master/images/tickets2.JPG?raw=true)   

### Administration Part
The administrator of the page is allowed to:

- **Post/Delete news**
	![post/delete](https://github.com/NoFearForBeer/Angular2-Team-Project/blob/master/images/news-admin.JPG?raw=true)   
	