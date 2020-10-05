import React, { Component } from "react";
import { API } from "../../config";
import axios from "axios";
import Session from "react-session-api";

class BlockUnblockRooms extends Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount() { }

  componentDidMount() {
    
  }

  render(props) {
    return (
      <div>
        <h1>Block/ Unblock Rooms</h1>
      </div>
    );
  }
}
export default BlockUnblockRooms;
