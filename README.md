Burger Application created by Tim Hill

Purpose:
Users have the ability to input burger names onto a list presented on the screen. When the user is ready, they can devour the burger by a click of a button which will relocate that specifc burger.

Please go to this link to view the application: Heroku hosted: 

Breif Overview:

  Whenever a user submits a burger's name, the app will display the burger on the left side of the page -- waiting to be   devoured.

   Each burger in the waiting area also has a Devour it! button. When the user clicks it, the burger will move to the right side of the page.

  The burgers entered into the app will be stores every in a database, whether devoured or not.

Please see the app and file structure below:

Folder:

config
  connection.js
  orm.js
controllers
  burgersController.js
db
  schema.sql
  seeds.sql
models
  burger.js
public
  assets
    CSS
      style.css
    Img
views
  index.handlebars
  layouts
    main.handlebars
package.json
package-lock.json
server.js

This app utilizes mySQL, Node, Express, Handlebars and an ORM. 



