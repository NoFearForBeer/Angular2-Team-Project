# Course Project
_Single-page Applications with Angular 2_

This document describes the **course project assignment** for the [Single-page Applications with Angular 2](telerikacademy.com/courses/courses/Details/391) at Telerik Academy.

## Project Description

Design and implement a **Single-page application** using [Angular 2](https://angular.io/)

It can be a discussion forum, blog system, e-commerce site, online gaming site, social network, or any other web application by your choice.

The application should have a:

- **public part** (accessible without authentication)
- **private part** (available for registered users)

### Public Part

The **public part** of your projects should be **visible without authentication**.
This public part could be the application start page, application statistics, the user login and user registration forms, as well as the public data of the users, e.g. the blog posts in a blog system, the public offers in a bid system, the products in an e-commerce system, etc.

### Private Part (Registered users area)

**Registered users** should have personal area in the web application accessible after **successful login**.
This area could hold for example the user's profiles management functionality, the user's offers in a bid system, the user's posts in a blog system, the user's photos in a photo sharing system, the user's contacts in a social network, etc.

## Technical Requirements

Your Web application should use the following technologies, frameworks and development techniques:

- At least **8 different public dynamic web pages**
  1. Login - done
  2. Register - done
  3. Map -done
  4. News - done
  5. News details - done
  6. Ticket Prices - TODO
  7. TBD
  8. TBD
- At least **7 different private (authenticated) dynamic web pages**
  1. UserProfile - DONE
  2. Buy Ticket - DONE
  3. News Details (with possibility to add comments) - TODO
  4. Charge account - (add monney to account) - DONE
  5. Owned tickets - Current tickets of user - TODO
  6. TBD
  7. TBD
- At least **10 different** partial components
  1. Username and password form - TODO
  2. Comments (list) - TODO
  3. Comment (add) - TODO
  4. Buy Ticket (dropdown + button) - TODO
  5. TBD
  6. TBD
  7. TBD
  8. TBD
  9. TBD
  10. TBD
- Responsive UI with good UX
- Most of the data should be loaded from a web server
  - You can use Firebase, parse.com, Telerik Back-end Services, or any other
  - You can use your own server written on Node.js, ASP.NET, or any other framework
- Load all data using services
- **Use animations** - pay attention to this
- Create at least **3 different pipes**
  1. Values Pipe
  2. Image Data Pipe
  3. TBD
- Create at least **3 different directives**
  1. TicketPriceDirective
  2. TBD
  3. TBD
- Setup and use tslint
- Use **TypeScript** - DONE
- Use the **best practices** for software development and Object-oriented design - maybe some refractoring will be needed
- Use Dependency Injection

##  General Requirements

- Use Git - DONE
  - Github, Gitlab, Bitbucket, or other
- Brief **documentation** of the project and the project architecture - TODO
  - As `README.md` file at the root of the github repository

### Deliverables

- Record a short video showcasing your application - TODO
  - ~1-2 minutes, just show the interesting features
  - Do not record register/login functionality, this is not interesting...
- Upload your application in the cloud - TODO
  - MS Azure, HerokuCloud, Amazon, all are fine
- Register your application at [Our Showcase - TODO System](http://best.telerikacademy.com)
  - Link to the live application
  - Link to the video
  - Link to the github repository

### Public Project Defense

Each team will have to make a **public defense** of its work in front of a trainer (for about 30 minutes), in which each of the team members will answer to the trainer's questions individually.

The public defense includes:

- Live **demonstration** of the developed web application (prepare sample data).
- Explain application structure and its back-end and front-end **source code**
- Show the **commit logs** in the source control repository to prove a contribution from all team members.
- May include a simple task for each team member
  - The task must be implemented immediately

### Give Feedback about Your Teammates

You will be invited to **provide feedback** about all your teammates, their attitude to this project, their technical skills, their team working skills, their contribution to the project, etc.
The feedback is important part of the project evaluation so **take it seriously** and be honest.

