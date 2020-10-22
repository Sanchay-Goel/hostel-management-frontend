import React, { Component } from "react";
import { API } from "../../config";
import axios from "axios";
import Session from "react-session-api";
import { Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Redirect } from "react-router-dom";

class EditHostel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      hostel_name: '',
      block_name: '',
      room_in_floor: [],
      errorMessage: "",
      redirectToManageHostel: false,
      validHostel: false,
    }
    this.modifyHostelDetails = this.modifyHostelDetails.bind(this);
  }

  componentDidMount() {
    console.log('Hostel id : ' + this.props.match.params.id);
    axios.get(`${API}/hostels/${this.props.match.params.id}`)
      .then(response => {
        console.log(response);
        let old_rooms_in_floor = [];
        old_rooms_in_floor.push(response.data.response[0].room_in_floor0);
        old_rooms_in_floor.push(response.data.response[0].room_in_floor1);
        old_rooms_in_floor.push(response.data.response[0].room_in_floor2);
        old_rooms_in_floor.push(response.data.response[0].room_in_floor3);
        old_rooms_in_floor.push(response.data.response[0].room_in_floor4);
        old_rooms_in_floor.push(response.data.response[0].room_in_floor5);
        old_rooms_in_floor.push(response.data.response[0].room_in_floor6);
        old_rooms_in_floor.push(response.data.response[0].room_in_floor7);
        old_rooms_in_floor.push(response.data.response[0].room_in_floor8);
        old_rooms_in_floor.push(response.data.response[0].room_in_floor9);
        old_rooms_in_floor.push(response.data.response[0].room_in_floor10);
        old_rooms_in_floor.push(response.data.response[0].room_in_floor11);
        old_rooms_in_floor.push(response.data.response[0].room_in_floor12);
        old_rooms_in_floor.push(response.data.response[0].room_in_floor13);
        old_rooms_in_floor.push(response.data.response[0].room_in_floor14);
        old_rooms_in_floor.push(response.data.response[0].room_in_floor15);
        this.setState({
          id: response.data.response[0].id,
          hostel_name: response.data.response[0].hostel_name,
          block_name: response.data.response[0].block_name,
          room_in_floor: old_rooms_in_floor,
          validHostel: true,
        });
      })
      .catch(error => console.log(error));
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

  modifyHostelDetails(e) {
    e.preventDefault();
    this.setState({
      errorMessage: ""
    });
    // console.log(this.state);
    let formIsValid = this.handleValidation();
    if(formIsValid.errorMessage === ''){
        axios({
          method: 'put',
          url: `${API}/hostels/${this.state.id}`,
          //  timeout: 4000,    // 4 seconds timeout
          headers: {
              Accepts: 'application/json',
              "Content-Type": "application/json"
          },
          data: {
              id: this.state.id,
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
    if(this.state.validHostel === false) {
      return (
        <div>
          <h1>Edit Hostel</h1>
          <h3 className="text-center">Invalid Request</h3>
        </div>
      );
    }
    return (
      <div>
        <h1>Edit Hostel</h1>
        <Form onSubmit={(value) => this.modifyHostelDetails(value)}>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="hostelSelect">Select Hostel</Label>
                <Input type="text" name="hostel_name" id="hostelSelect" placeholder={this.state.hostel_name} disabled={true}/>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="blockSelect">Select Block</Label>
                <Input type="text" name="block_name" id="blockSelect" placeholder={this.state.block_name} disabled={true}/>
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
                      <Input 
                          type="number" 
                          name={idx} 
                          id={"selectFloor"+idx} 
                          placeholder={(this.state.room_in_floor[idx])!==null ? (this.state.room_in_floor[idx]) : ("Select Rooms")} 
                          min="0" max="100" 
                          onChange={this.onChangeFloor}
                      />
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
          <Button type="submit" color="primary">Modify Hostel</Button>
        </Form>
      </div>
    );
  }
}
export default EditHostel;
