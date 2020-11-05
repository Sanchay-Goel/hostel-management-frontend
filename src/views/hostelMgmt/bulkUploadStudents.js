import React, { Component } from "react";
import { API } from "../../config";
import axios from "axios";
import Session from "react-session-api";
import { Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Papa from 'papaparse';
import { Link } from "react-router-dom";

class BulkUploadStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hostels: [],
      distinctHostels: [],
      hostel_name: "",
      block_name: "",
      selectedFile: null,
      fileErrorMessage: "",
    };
    this.updateData = this.updateData.bind(this);
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
  onFileChange = event => { 
    console.log(event.target.files);
    this.setState({ selectedFile: event.target.files[0] });
  };

  onFileUpload = (event) => {
    event.preventDefault();
    // console.log(this.state.selectedFile);
    const csvfile = this.state.selectedFile;
    Papa.parse(csvfile, {
      complete: this.updateData,
      header: true
    });
  };

  updateData(result) {
    var data = result.data;
    if(Array.isArray(data.meta) && data.meta.length===1 && data.meta[0]===["Admn_no"]) {
      console.log("File invalid");
    }
    else {
      // console.log(data);
      let students = [];
      data.forEach(element => {
        let student = {
          hostel_name: this.state.hostel_name,
          adm_no: element.Admn_no,
        }
        students.push(student);
      });
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
  }

  componentDidMount() {
    this.getHostelsDetails();
  }

  render(props) {
    return (
      <div>
        <h1>Bulk Upload Students Details</h1>
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
              <Col md={2}>
                <a href="/assets/sample.csv" download>
                  Download CSV Sample <i className="fa fa-download"></i>
                </a>
              </Col>
              <Col md={5}>
                <FormGroup>
                  <Label for="fileSelect">Upload Contact</Label>
                  <Input type="file" accept=".csv" name="block_name" id="fileSelect" onChange={this.onFileChange}></Input>
                </FormGroup>
              </Col>
              <Col md={5}>
                <FormGroup>
                  <Button type="submit" color="primary" className="m-auto" onClick={this.onFileUpload} 
                          disabled={(this.state.fileErrorMessage==="" && this.state.selectedFile!==null && this.state.hostel_name!=="" && this.state.block_name!=="") ? false:true}
                  >
                    Upload !
                  </Button>
                  <div className="text-danger">
                    {this.state.fileErrorMessage}
                  </div>
                </FormGroup>
              </Col>
            </Row>
          </Form>      
        </div>
      </div>
    );
  }
}
export default BulkUploadStudent;
