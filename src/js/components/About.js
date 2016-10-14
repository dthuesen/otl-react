import React from "react";

export default class About extends React.Component {
    render() {
        return(
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col- md-4 col-md-offset-2">
                            <h1>About Open Topics List</h1>
                            <p>OTL is a side project I started with learning programming. Having the need to make list for all open topics I'm working on with my clients in my daily job helped me to find an idea for a real life app. My first attempt to code an OTL was with learning Ruby and Ruby on Rails but after a while I had to learn JavaScript to get it done in a kind of way I liked. 
                            </p>
                            <p>My idea was, that the app should work like a SPA and therfore I started learning JQuery. But I realised that was was not way of doing it right. I heard of Node.JS and started learning Node. 
                            </p>
                            <p>After I while I found out, that's not the best for SPA but a good foundation. Then I heared or better to say I read about Angular. So I started learning Angular JS 1.x. Needless to say, that Angular 2 was right before the door and so I saddled another horse for the time of waiting for Angular 2. I learned React.JS and now here I am.
                            </p>
                            <h3>What's in it</h3>   
                                <ul>
                                    <li>Node.JS</li>
                                    <li>ReactJS</li>
                                    <li>Webpack</li>
                                    <li>Firebase DB</li>
                                    <li>Firebase Auth</li>
                                    <li>ES6/Babel</li>
                                    <li>react-bootstrap-table</li>
                                    <li>lodash</li>
                                    <li>JQuery</li>
                                    <li>Bootstrap</li>
                                    <li>and many more...</li>
                                </ul>
                            <br />
                            <h3>What's already coded</h3>   
                                <ul>
                                    <li>Reading from Database (firebase)</li>
                                    <li>Editing cells and saving modified cells to Database</li>
                                    <li>Sorting columns</li>
                                    <li>Selecting rows</li>
                                    <li>Deleting rows</li>
                                    <li>Automatic date for "Updated at"</li>
                                    <li>Pagination</li>
                                    <li>Select for size of page (as context for pagination)</li>
                                    <li>Adding new row and saving new row to Database</li>
                                    <li>Color for table header</li>
                                    <li>New column widths</li>
                                    <li>Automatic date for "Created at"</li>
                                    <li>Numbering with leading zeros</li>
                                    <li>Numbering with client prefixes</li>
                                    <li>Prefixing according to selected client in table</li>
                                    <li>If client count in table is null a prefixed 8 digits zero count is used</li>
                                    <li>Authentication (Login via firebase auth), but registration (no need for reg)</li>
                                    <li>Login form if not signed in</li>
                                    <li>Logout form if user is signed in</li>
                                    <li>About page (this) is done</li>
                                    <li>Color coding of columns (Category, Prio, State, Cost Model)</li>
                                    <li>Hiding of not selected rows</li>
                                    <li>Export to CSV</li>
                                </ul>
                            <br />
                            <h3>What's on the roadmap</h3>
                                <ul>
                                    <li>Changing prefix if client selection on topic changes</li>
                                    <li>Color coding of columns (Category, Prio, State, Cost Model)</li>
                                    <li>Collapsing/hiding rows</li>
                                    <li>Filter for only one client</li>
                                    <li>Export to CSV, XLSX (styled)</li>
                                    <li>Page styling</li>
                                    <li>User administration</li>
                                    <li>Short list export</li>
                                    <li>Pages: "Shortlist" (with filter), ...</li>
                                    <li>Focus on first form field in form for new topic</li>
                                </ul>
                            <br />
                        </div>
                        <br />
                    </div>
                </div>
            </div>
        );
    }
}