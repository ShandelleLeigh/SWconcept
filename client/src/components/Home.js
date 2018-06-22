import React, { Fragment, Component } from 'react';
import NoMatch from './NoMatch';
import Login from './Login';
import Register from './Register';
import Flash from './Flash';
import ProtectedRoute from './ProtectedRoute';
import AuthRoute from './AuthRoute';
import FetchUser from './FetchUser';
import { Switch, Route } from 'react-router-dom';
import Dash from './Dash';
//import LogNew from './LogNew';
import { Grid, Segment} from 'semantic-ui-react';
import LeftNav from './LeftNav';
import Calls from './Calls/Calls';
import LogNewCall from './Calls/LogNewCall'
import UpdateCall from './Calls/UpdateCall'
import ActionsNav from './ActionsNav'




class Home extends Component {
  render() {
    return (
      <Grid style={styles.grid}>
        <Grid.Column style={styles.grid}computer={2}>
          <LeftNav/>
        </Grid.Column>
        <Grid.Column computer={14}>
          <ActionsNav/>
            <Switch>
              <Route exact path='/' component={Dash} />
              <Route exact path='/dash' component={Dash} />
              <Route exact path='/calls' component={Calls} />
              <Route exact path='/calls/log_new' component={LogNewCall} />
              <Route exact path='/calls/update' component={UpdateCall} />
              <Route component={NoMatch} />
            </Switch>
        </Grid.Column>
      </Grid>
    );
  }
}

const styles = {
  grid: {
    marginRight: '0',
    marginLeft: '0',
    paddingRight: '0',
    paddingLeft: '0',
    padding: '0 !important'
  },
}

export default Home;
