import React, { Component } from "react";
import loadable from "@loadable/component";
import { BrowserRouter, Route, Switch } from "react-router-dom";
const Logout = loadable(() => import("./core/Logout"));
const Layout = loadable(() => import("./core/Layout"));
const FileNotFound = loadable(() => import("./core/FileNotFound"));

const loading = (
  <div class="d-flex justify-content-center">
    <div class="spinner-border" role="status">
      <span className="sr-only"> Please Wait, Loading... </span>
    </div>
  </div>
);
// Pages
const Login = loadable(() => import("./core/Login"));
class App extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}

  render() {
    return (
      <BrowserRouter>
        <React.Suspense fallback={loading}>
          <Switch>
            <Route
              exact
              path="/Logout"
              name="Logout Page"
              render={(props) => <Logout {...props} />}
            />
            <Route
              exact
              path="/"
              name="Login Page"
              render={(props) => <Login {...props} />}
            />
            <Route
              path="/Home"
              name="Home"
              render={(props) => <Layout {...props} />}
            />
            <Route
              path="/fellowship/fellowshipBill/jrf"
              name="FellowshipBillJrf"
              render={(props) => <Layout {...props} />}
            />
            <Route
              path="/fellowship/fellowshipExtension"
              name="FellowShipExtenstion"
              render={(props) => <Layout {...props} />}
            />
            <Route
              path="/fellowship/LeaveMaster"
              name="LeaveMaster"
              render={(props) => <Layout {...props} />}
            />
            <Route
              path="/fellowship/fellow/:id"
              name="fellowEdit"
              render={(props) => <Layout {...props} />}
            />
            <Route
              path="/hostelManagement/download_empty_rooms"
              name="ManageHostel"
              render={(props) => <Layout {...props} />}
            />
            <Route
              path="/hostelManagement/manage_hostel"
              name="ManageHostel"
              render={(props) => <Layout {...props} />}
            />
            <Route
              path="/hostelManagement/add_hostel"
              name="AddHostel"
              render={(props) => <Layout {...props} />}
            />
            <Route
              path="/hostelManagement/edit_hostel/:id"
              name="EditHostel"
              render={(props) => <Layout {...props} />}
            />
            <Route
              path="/hostelManagement/block_unblock_rooms"
              name="ManageHostel"
              render={(props) => <Layout {...props} />}
            />
            <Route
              path="/hostelManagement/manage_student_contact"
              name="ManageStudentContact"
              render={(props) => <Layout {...props} />}
            />
            <Route
              path="/hostelManagement/add_student_contact"
              name="AddStudentContact"
              render={(props) => <Layout {...props} />}
            />
            <Route
              path="/hostelManagement/bulk_upload_contact_student"
              name="ManageHostel"
              render={(props) => <Layout {...props} />}
            />
            <Route
              path="/hostelManagement/hostel_booking"
              name="HostelBooking"
              render={(props) => <Layout {...props} />}
            />
            <Route path="*">
              <FileNotFound />
            </Route>{" "}
          </Switch>{" "}
        </React.Suspense>{" "}
      </BrowserRouter>
    );
  }
}

export default App;
