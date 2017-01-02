# **Sofia Transport - an Angular2 Application**

This project is part of the [Angular 2 Single Page Applications](https://telerikacademy.com/Courses/Courses/Details/391) course at [Telerik Academy](https://telerikacademy.com/) .

 - Check the demo hosted at heroku-cloud [Live](http://ticketing-system-ng2.herokuapp.com/)
	 - Please note that the first time login or register could be very slow (caused by REST server)
 - Check the live demostration of the application [here](https://www.youtube.com/watch?v=jplqfLO8BBg&feature=youtu.be)



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

For more information regarding the rest server please check  [here](https://github.com/NoFearForBeer/Angular2-Team-Project/blob/master/REST%20Server.md) 

### Project Description
The purpuse of the application is to allow users to buy tickets for the public transport in Sofia. Additionally, users can read the news posted by the Sofia Public Transport Team and comment them.

The application consists of:

- **public part** (accessible without authentication)
- **private part** (available for registered users)
- **administrative part** (available for administrators only)
    
### Public Part
Not register users can only access the public part of te application, which consist of:

- **Home Page**  - showing the map of the public transport in Sofia
    ![alt tag](link to the image here)

- **News Page** - shows all the news ordered by creation date 
    ![alt tag](link to the image here)
    
- **News Details Page** - shows the selected news and the list of the related comments
![alt tag](link to the image here)

- **Ticket Prices Page** - a table containing all available tickets along with their prices. 
![alt tag](link to the image here)

- And of course, users can **Register/Login**
    ![alt tag](link to the image here)


### Private Part
Additionally, registered user have access to several other part of the application:

- **Add new comment** 
    ![alt tag](link to the image here)

- **Delete their own comments** 
	![alt tag](link to the image here)

- **View their profile** 
	![alt tag](link to the image here)
	
- **Modify their profile** 
	![alt tag](link to the image here)
	
- **Charge account** 
	![alt tag](link to the image here)
	
- **Buy Tickets** 
	![alt tag](link to the image here) 

- **View and Activate Tickets** 
	![alt tag](link to the image here)   

### Administration Part
The administrator of the page is allowed to:

- **Post news**
	![alt tag](link to the image here)   

- **Delete news**
	![alt tag](link to the image here)   
	