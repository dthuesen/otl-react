# otl-react

otl-react is an application for managing open topics in a client project. otl stands for Open Topics List. In this app the user is able to set the priority project topics and has many additional options to describe the project and set its characteristics. Setting up a new topic is as easy as riding a bike.

This is my first private more or less serious project in JavaScript. But my focus is on learning ReactJS connected to a fitting data base.

Built with: 
* [**Node.JS**](https://nodejs.org/en/)
* [**ReactJS**](https://facebook.github.io/react/) 
* [**Webpack**](https://webpack.github.io/) 
* [**Firebase DB**](https://firebase.google.com/)
* [**ES6/Babel**](https://babeljs.io/)
* [**react-bootstrap-table**](http://allenfang.github.io/react-bootstrap-table/index.html)
* [**lodash**](https://lodash.com/)
* [**jQuery**](http://jquery.com/)
* [**Moment.JS**](http://momentjs.com/)
* [**Bootstrap**](http://getbootstrap.com/)
* and many more...

Just ready features:
* Reading from Database (firebase)
* Editing cells and saving modified cells to Database
* Sorting columns
* Selecting rows
* Deleting rows
* browserHistory instead of hashHistory for a nice URL path
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
* Color coding of columns (Category, Prio, State, Cost Model)
* Hiding of not selected rows
* Export to CSV
* First version of short list export via showing only selected rows
* Filter for topics on shortlist
* Filter for topics on Client
* Pagination shows total
* Automatic logout after x minutes
* Navigation now switches button between "Login" when user is not sigend in and "Logout"  when user is signed in
* Some more column filters


TO DO:
* Changing prefix if client selection on topic changes
* Collapsing/hiding rows
* Export to CSV, XLSX with styles
* Page styling
* User administration
* Short list export
* Pages: "Shortlist" (with filter), "Login"
* Focus on first form field in form for new topic
* Storing data related to user, or group of user

