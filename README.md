# otl-react

otl-react is an application for managing open topics in a client project. otl stands for Open Topics List. In this app the user is able to set the priority project topics and has many additional options to describe the project and set its characteristics. Setting up a new topic is as easy as riding a bike.

This is my first private more or less serious project in JavaScript. But my focus is on learning ReactJS connected to a fitting data base.

Built with: 
* Node.JS 
* ReactJS 
* Webpack 
* Firebase DB
* ES6/Babel
* react-bootstrap-table
* lodash
* jQuery
* and many more...

Just ready features:
* Reading from Database (firebase)
* Editing cells and saving modified cells to Database
* Sorting columns
* Selecting rows
* Deleting rows
* Automatic date for "Updated at"
* Pagination
* Adding new row and saving new row to Database
* Color for table header
* New column widths
* Automatic date for "Created at"
* Numbering with leading zeros
* Numbering with client prefixes
* Prefixing according to selected client in table
* If client count in table is null a prefixed 8 digits zero count is used
* Authentication (Login via firebase auth), but registration (no need for reg)
* Login form if not signed in
* Logout form if user is signed in


TO DO:
* Changing prefix if client selection on topic changes
* Color coding of columns (Category, Prio, State, Cost Model)
* Collapsing/hiding rows
* Filter for only one client
* Export to CSV, XLSX (styled)
* Page styling
* User administration
* Short list export
* Pages: "Shortlist" (with filter), "Login"
* Focus on first form field in form for new topic

