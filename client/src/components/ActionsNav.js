import React, { Component, Fragment } from 'react';
import { Menu, Header, Divider } from 'semantic-ui-react';
import { Link, withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleLogout } from '../actions/auth';

class NavBar extends Component {
  state = { call: '', activeItem: ''}

  handleItemClick = (e, { name }) => {
    this.state.activeItem = {name}
  }

  menuItems = () => {
     const Nav = props => (
      <NavLink
        exact
        {...props}
        activeClassName="active"
      />
     );

    const items = [
      {name:'Log New', path:'/calls/log_new'},
      {name:'Update Call', path:'/calls/update'},
      {name:'Close Call', path:'/calls/close'},
      //{name:'fourth', path:'/'},
      //{name:'fifth', path:'/'},
    ]

    return items.map(item => {
      let name = item.name
      return (
        <Menu.Item
          key={name}
          as={Nav} to={item.path}
          name={name}
          onClick={this.handleItemClick}
        />
      )
    })
  }

  render() {
    return (
      <Fragment>
        <Menu inverted borderless color="teal">
          {this.menuItems()}
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
  return {
    activeItem: state.activeItem,
    user: state.user
  };
};

export default withRouter(connect(mapStateToProps)(NavBar));
