import React, { Component } from "react";
import { API } from '../../config';
import axios from "axios";
import Session from "react-session-api";
import { Link, withRouter } from "react-router-dom";
import { Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

class ManageStudentContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hostels: [],
      distinctHostels: [],
      hostel_name: "",
    };
  }

  getHostelsDetails() {
    axios.get(`${API}/hostels`)
      .then(response => {
        // console.log(response);
        var unique = response.data.response
            .map(p => p.hostel_name)
            .filter((name, index, arr) => arr.indexOf(name) == index);
        this.setState({
          hostels: response.data.response,
          distinctHostels: unique
        });
      })
      .catch(error => console.log(error));
  }

  onChange = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({
      [nam]: val,
    });
  }

  componentDidMount() {
    this.getHostelsDetails();
  }

  render(props) {
    return (
      <div>
        <h2>Manage students contact</h2>
        <div className="my-4 p-4 text-center bg-white shadow">
          <Link className="btn btn-primary" to="/hostelManagement/add_student_contact"><span>Add New Student</span></Link>
        </div>
        <h2>Search Students</h2>
        <div>
          <Form>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="hostelSelect">Select Hostel</Label>
                  <Input type="select" name="hostel_name" id="hostelSelect" onChange={this.onChange} >
                    <option hidden>Select Value</option>
                    {
                      this.state.distinctHostels.map((hostel, idx) => {
                        return (
                          <option key={idx}>{hostel}</option>
                        );
                      })
                    }
                  </Input>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="blockSelect">Select Block</Label>
                  <Input type="select" name="block_name" id="blockSelect" onChange={this.onChange}>
                    <option hidden>---</option>
                    {
                      this.state.hostels
                          .filter((hostel) => hostel.hostel_name===this.state.hostel_name)
                          .map((hostel, idx) => <option key={idx}>{hostel.block_name}</option>)
                    }
                  </Input>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="sessionSelect">Session</Label>
                  <Input type="select" name="hostel_name" id="sessionSelect" onChange={this.onChange} >
                    <option hidden>Select Value</option>
                    
                  </Input>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="sessionYearSelect">Session Year</Label>
                  <Input type="select" name="block_name" id="sessionYearSelect" onChange={this.onChange}>
                    <option hidden>Select Value</option>
                  
                  </Input>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Button type="submit" color="success" className="m-auto">Show</Button>
            </Row>
          </Form>      
        </div>
        
      </div>
    );
  }
}
export default withRouter(ManageStudentContact);
