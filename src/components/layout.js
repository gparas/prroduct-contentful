import React, { Fragment } from 'react';
import { Link } from 'gatsby';
import base from './base.css';
import Container from './container';
import Navigation from './navigation';

class Template extends React.Component {
  render() {
    const { location, children, hero } = this.props;
    let header;

    let rootPath = `/`;
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`;
    }

    return (
      <Fragment>
        <Navigation />
        {hero}
        <Container>{children}</Container>
      </Fragment>
    );
  }
}

export default Template;
