import React from 'react';
import RouteHandler from '../../shared/RouteHandler.react';
import AuthorizedComponent from '../../shared/authorization/AuthorizedComponent.react';

export default class Profile extends AuthorizedComponent {
  render() {
    return (
      <div className="pure-g profile-container">
        <RouteHandler {...this.props} />;
      </div>
    );
  }
}