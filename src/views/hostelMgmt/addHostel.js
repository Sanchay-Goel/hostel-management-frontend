import React, { Component } from "react";
import { API } from "../../config";
import axios from "axios";
import Session from "react-session-api";
import { Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Redirect } from "react-router-dom";

class AddHostel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hostels: ['Amber-(A, B)', 'Amber-(C, D)', 'Diamond', 'Emerald', 'International-hostel', 'Jasper-A', 'Jasper-C', 'Jasper-B', 'Jasper-D', 'Opal', 'Rosaline-Old', 'Rosaline-Left', 'Rosaline-Right', 'Ruby-1', 'Ruby-2', 'Ruby-Annexe', 'Sapphire', 'Topaz',],
      blocks: ['A', 'B', 'C', 'D', 'E', 'Annexure', 'N/A'],
      hostel_name: '',
      block_name: '',
      room_in_floor: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      errorMessage: "",
      redirectToManageHostel: false
    }
    this.addHostelDetails = this.addHostelDetails.bind(this);
  }

  componentDidMount() {
    
  }

  onChange = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({
      [nam]: val,
    });
  }

  onChangeFloor = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    let room_in_floor = this.state.room_in_floor.slice();
    room_in_floor[nam] = val;
    this.setState({
      room_in_floor: room_in_floor
    });
  }

  handleValidation() {
    if(this.state.hostel_name === ''){
      return ({
        errorMessage: 'Select a Hostel'
      });
    }
    if(this.state.block_name === ''){
      return ({
        errorMessage: 'Select a Block'
      });
    }
    let previousEmpty = false;
    if(this.state.room_in_floor[0] === null){
      return ({
        errorMessage: 'Enter valid hostel room numbers'
      });
    }
    for(var i=1;i<=15;i++){
      if(this.state.room_in_floor[i] !== null) {
        if(previousEmpty == true) {
          return ({
            errorMessage: 'Enter valid hostel room numbers'
          });
        }
      }
      else {
        previousEmpty = true;
      }
    }
    return ({
      errorMessage: ''
    });
  }

  addHostelDetails(e) {
    e.preventDefault();
    this.setState({
      errorMessage: ""
    });
    console.log(this.state);
    let formIsValid = this.handleValidation();
    if(formIsValid.errorMessage === ''){
        axios({
          method: 'post',
          url: `${API}/hostels`,
          //  timeout: 4000,    // 4 seconds timeout
          headers: {
              Accepts: 'application/json',
              "Content-Type": "application/json"
          },
          data: {
              hostel_name: this.state.hostel_name,
              block_name: this.state.block_name,
              room_in_floor0: this.state.room_in_floor[0],
              room_in_floor1: this.state.room_in_floor[1],
              room_in_floor2: this.state.room_in_floor[2],
              room_in_floor3: this.state.room_in_floor[3],
              room_in_floor4: this.state.room_in_floor[4],
              room_in_floor5: this.state.room_in_floor[5],
              room_in_floor6: this.state.room_in_floor[6],
              room_in_floor7: this.state.room_in_floor[7],
              room_in_floor8: this.state.room_in_floor[8],
              room_in_floor9: this.state.room_in_floor[9],
              room_in_floor10: this.state.room_in_floor[10],
              room_in_floor11: this.state.room_in_floor[11],
              room_in_floor12: this.state.room_in_floor[12],
              room_in_floor13: this.state.room_in_floor[13],
              room_in_floor14: this.state.room_in_floor[14],
              room_in_floor15: this.state.room_in_floor[15],
          }
      })
      .then(response => {
        console.log(response);
        this.setState({
          redirectToManageHostel: true
        });
      })
      .catch(error => {
        console.log(error);
      });
      alert("Form submitted");
      // this.props.history.push('/hostelManagement/manage_hostel');
    }
    else{
      this.setState({
        errorMessage: formIsValid.errorMessage
      });
    }
  }

  render(props) {
    if(this.state.redirectToManageHostel == true) {
      return (
        <Redirect to="/hostelManagement/manage_hostel" />
      );
    }
    return (
      <div>
        <h1>Add Hostels</h1>
        <Form onSubmit={(value) => this.addHostelDetails(value)}>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="hostelSelect">Select Hostel</Label>
                <Input type="select" name="hostel_name" id="hostelSelect" onChange={this.onChange} >
                  <option hidden>Choose Hostel</option>
                  {
                    this.state.hostels.map((hostel, idx) => {
                      return (
                        <option key={idx}>{hostel}</option>
                      )
                    })
                  }
                </Input>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="blockSelect">Select Block</Label>
                <Input type="select" name="block_name" id="blockSelect" onChange={this.onChange}>
                  <option hidden>Choose Block</option>
                {
                    this.state.blocks.map((block, idx) => {
                      return (
                        <option key={idx}>{block}</option>
                      )
                    })
                  }
                </Input>
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            {
              this.state.room_in_floor.map((floor, idx) => {
                return (
                  <Col md={6} key={idx}>
                    <FormGroup>
                      <Label for={"selectFloor"+idx}>Rooms in {idx} Floor</Label>
                      <Input type="number" name={idx} id={"selectFloor"+idx} placeholder="Select rooms" min="0" max="100" onChange={this.onChangeFloor}/>
                    </FormGroup>
                  </Col>
                );
              })
            }
            <Col md={12} className="text-center">
              <p className="text-danger">
                {this.state.errorMessage}
              </p>
            </Col>
          </Row>
          <Button type="submit" color="primary">Add Hostel</Button>
        </Form>
      </div>
    );
  }
}
export default AddHostel;
