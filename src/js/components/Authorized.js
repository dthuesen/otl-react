import React, { PropTypes } from 'react';
import _ from 'lodash';

export default class Authorized extends React.Component {
  static propTypes = {
    routes: PropTypes.array.isRequired
  };
 
  static contextTypes = {
    router: PropTypes.object.isRequired
  };
 
  componentWillMount() {
    const { routes } = this.props; // Array of routes
    const { router } = this.context;
 
    // Check if user data available
    // const user = firebase.auth().onAuthStateChanged(function(user) { return user };

    var user = firebase.auth().currentUser;
    var email, name, role, uid;

    if (user != null) {
      name = user.displayName;
      email = user.email;
      roler = user.role;
      uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
                      // this value to authenticate with your backend server, if
                      // you have one. Use User.getToken() instead.
    }

    if (!user) {
      // redirect to login if not
      router.push('/login');
    }
 
    // Get all roles available for this route
    const routeRoles = _.chain(routes)
      .filter(item => item.authorize) // Access to custom attribute
      .map(item => item.authorize)
      .flattenDeep()
      .value();
 
    // Compare routes with user data
    if (_.intersection(routeRoles, user.roles).length === 0) {
      router.push('/not-authorized');
    }
  }

    render() {
        return(
          <div>
          </div>
        );
    }
}