import React, { Component } from "react";
import { API } from "../../config";
import axios from "axios";
import Session from "react-session-api";

class EmptyRooms extends Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount() { }

  componentDidMount() {
    
  }

  render(props) {
    return (
      <div>
        <h1>Show Empty Rooms</h1>
      </div>
    );
  }
}
export default EmptyRooms;
