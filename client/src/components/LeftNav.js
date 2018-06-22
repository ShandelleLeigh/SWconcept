import React, { Component, Fragment } from 'react';
import { Grid, Segment, Menu, Header, Divider } from 'semantic-ui-react';
import { Link, withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleLogout } from '../actions/auth';

class LeftNav extends Component {
  state = {
    activeItem: '',
    //name: 'dash'
  }

  handleItemClick = (e, { name }) => {
    this.state.activeItem = {name}
    console.log(this.state.activeItem)
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
      {name:'home', path:'/'},
      {name:'dash', path:'/'},
      {name:'calls', path:'/calls'},
      //{name:'fourth', path:'/'},
      //{name:'fifth', path:'/'},
    ]

    return items.map(item => {
      let name = item.name
      return (
        <Menu.Item
          //active={this.state.activeItem === {name}? true : false}
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
      <Fragment >
          <Menu vertical fluid pointing color="olive" inverted>
            {this.menuItems()}
          </Menu>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    activeItem: state.activeItem,
  }
}

const styles = {

	green: {
		backgroundColor: '5ef150',

	},
}

export default withRouter(LeftNav);
