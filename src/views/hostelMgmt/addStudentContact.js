import React, { Component } from "react";
import { API } from '../../config';
import axios from "axios";
import Session from "react-session-api";
import { Link, withRouter } from "react-router-dom";
import { Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

class AddStudentContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hostels: [],
      distinctHostels: [],
      hostel_name: "",
      block_name: "",
      adm_no: null,
    };
    this.saveStudent = this.saveStudent.bind(this);
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

  saveStudent(event) {
    event.preventDefault();
    let student = {
      hostel_name: this.state.hostel_name,
      adm_no: this.state.adm_no,
    }
    let students = [student];
    console.log(students);
    axios({
        method: 'post',
        url: `${API}/hostels/students`,
        headers: {
            Accepts: 'application/json',
            "Content-Type": "application/json"
        },
        data: {
          students: students,
        }
    })
    .then(response => {
      console.log(response);
      window.location.reload();
    })
    .catch(error => {
      console.log(error);
    });
  }

  componentDidMount() {
    this.getHostelsDetails();
  }

  render(props) {
    return (
      <div>
        <h2>Add student contact</h2>
        <div>
          <Form>
            <Row form>
              <Col md={5}>
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
              <Col md={5}>
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
              <Col md={5}>
                <FormGroup>
                  <Label for="selectAdmNumber">Admission No.</Label>
                  <Input type="text" name="adm_no" id="selectAdmNumber" placeholder="" onChange={this.onChange}/>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Button type="submit" color="primary" className="m-auto" onClick={this.saveStudent} 
                      disabled={(this.state.hostel_name!=="" && this.state.block_name!=="" && this.state.adm_no!==null) ? false:true}
              >
                Upload
              </Button>
            </Row>
          </Form>      
        </div>
        
      </div>
    );
  }
}
export default withRouter(AddStudentContact);
