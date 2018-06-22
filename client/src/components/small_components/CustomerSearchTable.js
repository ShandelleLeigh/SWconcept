import React, { Fragment, Component } from 'react';
import { Grid, Segment, Table, Header} from 'semantic-ui-react';

class CustomerSearchTable extends Component {
  render() {
    return (
      <Fragment>
        <Header
          //as='h1'
          className="centered large"
        > Header of Tables
        </Header>

        <Table ui celled table>
          <Table.Header>
            <Table.HeaderCell>
              Header of Tables
            </Table.HeaderCell>
            <Table.HeaderCell>
              2
            </Table.HeaderCell>
            <Table.HeaderCell>
              3
            </Table.HeaderCell>
          </Table.Header>
          <tbody>
            <Table.Row>
              <td>
                First thing
               </td>
              <td>A</td>
              <td>B</td>
            </Table.Row>
            <Table.Row>
              <td>C</td>
              <td>D</td>
              <td>E</td>
            </Table.Row>
            <Table.Row>
              <td>F</td>
              <td>G</td>
              <td>H</td>
            </Table.Row>
          </tbody>
        </Table>
      </Fragment>
    );
  }
}

// const styles = {
//   grid: {
//     marginRight: '0',
//   },
// }

export default CustomerSearchTable;
