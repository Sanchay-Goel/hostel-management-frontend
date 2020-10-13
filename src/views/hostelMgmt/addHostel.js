import React, { Component } from "react";
import { API } from "../../config";
import axios from "axios";
import Session from "react-session-api";
import { Container, Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class AddHostel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hostels: ['Jasper', 'Emerald', 'Amber', 'Topaz', 'Sapphire', 'Diamond', 'Ruby', 'Rosaline', 'Opal'],
      blocks: ['A', 'B', 'C', 'D', 'E', 'Annexure', 'N/A'],
      hostelName: '',
      block: '',
      first_floor: '',
      second_floor: '',
      third_floor: '',
      fourth_floor: '',
      fiveth_floor: '',
    }
    this.addHostelDetails = this.addHostelDetails.bind(this);
  }

  componentDidMount() {
    
  }

  addHostelDetails() {
  }

  render(props) {
    return (
      <div>
        <h1>Add Hostels</h1>
        <Form>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="hostelSelect">Select Hostel</Label>
                <Input type="select" name="select" id="hostelSelect">
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
                <Input type="select" name="select" id="blockSelect">
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
            <Col md={6}>
              <FormGroup>
                <Label for="examplePassword">Rooms in First Floor</Label>
                <Input type="number" name="password" id="examplePassword" placeholder="Select rooms" min="0" />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="examplePassword">Rooms in Second Floor</Label>
                <Input type="number" name="password" id="examplePassword" placeholder="Select rooms" min="0" />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="examplePassword">Rooms in Third Floor</Label>
                <Input type="number" name="password" id="examplePassword" placeholder="Select rooms" min="0" />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="examplePassword">Rooms in Fourth Floor</Label>
                <Input type="number" name="password" id="examplePassword" placeholder="Select rooms" min="0" />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="examplePassword">Rooms in Fiveth Floor</Label>
                <Input type="number" name="password" id="examplePassword" placeholder="Select rooms" min="0" />
              </FormGroup>
            </Col>
          </Row>
          <Button type="button" onClick={this.addHostelDetails}>Add Hostel</Button>
        </Form>
      </div>
    );
  }
}
export default AddHostel;
