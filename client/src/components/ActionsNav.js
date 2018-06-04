import React, { Component, Fragment } from 'react';
import { Menu, Header, Divider } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleLogout } from '../actions/auth';

class NavBar extends Component {
  state = { call: ''}

  render() {
    return (
      <Fragment>
        <Menu pointing secondary>
          <Link to='/calls/log_new'>
            <Menu.Item name='Log New'/>
          </Link>
          <Link to='/calls/update'>
            <Menu.Item name='Update Call' />
          </Link>
          <Link to='/calls/close'>
            <Menu.Item name='Close Call' />
          </Link>
        </Menu>
      </Fragment>
    );
  }
}

// const styles = {
//   newStyle: {
//     lineHeight: '2 em !important',
//     textAlign: 'center',
//     marginTop: '1 em',
//   }
// }

const mapStateToProps = state => {
  return { user: state.user };
};

export default withRouter(connect(mapStateToProps)(NavBar));
