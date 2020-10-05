import React, { Component } from "react";
import { API } from "../../config";
import axios from "axios";
import Session from "react-session-api";

class BulkUploadStudent extends Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount() { }

  componentDidMount() {
    
  }

  render(props) {
    return (
      <div>
        <h1>Bulk Upload Students Details</h1>
      </div>
    );
  }
}
export default BulkUploadStudent;
