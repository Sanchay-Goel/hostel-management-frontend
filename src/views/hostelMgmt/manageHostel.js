import React, { Component } from "react";
import { API } from '../../config';
import axios from "axios";
import MaterialTable from "material-table";
import Session from "react-session-api";
import {Table} from 'reactstrap';
import { Button } from "reactstrap";
import { Link, withRouter } from "react-router-dom";

class ManageHostel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hostels: []
    };
  }

  getHostelsDetails() {
    axios.get(`${API}/hostels`)
      .then(response => {
        console.log(response);
        this.setState({
          hostels: response.data.response,
        });
        console.log(this.state.hostels.response);
      })
      .catch(error => console.log(error));
  }

  componentDidMount() {
    this.getHostelsDetails();
  }

  render(props) {
    return (
      <div>
        <h1>Manage Hostels</h1>
        <div>
          <Link className="btn btn-primary"  to="/hostelManagement/add_hostel"><span>Add Hostel</span></Link>
        </div>
        <Table striped bordered className="bg-light" >
          <thead>
            <tr>
              <th>#</th>
              <th>Hostel Name</th>
              <th>Block</th>
              <th>Edit Rooms</th>
              <th>Edit Hostel</th>
              <th>Delete Hostel</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.hostels.map((hostel, idx) => {
                idx += 1;
                return (
                  <tr key={idx} className="text-dark">
                    <th scope="row">{idx}</th>
                    <td>{hostel.name}</td>
                    <td>{hostel.block}</td>
                    <td><i className="fa fa-plus"></i></td>
                    <td><i className="fa fa-pencil-alt"></i></td>
                    <td><i className="fa fa-trash"></i></td>
                  </tr>
                );
              })
            }
          </tbody>
        </Table>
      </div>
    );
  }
}
export default withRouter(ManageHostel);
