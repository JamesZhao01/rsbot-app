import React from "react";
import { MDBCard, MDBCardBody, MDBIcon, MDBRow, MDBCol, MDBCardText } from "mdbreact";
import CommandLine from "./CommandLine";

const MonitorSection = () => {
  return (
    <React.Fragment>
      <MDBRow className="dashboard-component">
        <MDBCol xl="4" m="6" s="12">
          <MDBCard className="dashboard-card">
            <MDBCardBody>Hello</MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol xl="4" m="6" s="12">
          <MDBCard className="dashboard-card">
            <MDBCardBody>Hello</MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol xl="4" m="6" s="12">
          <MDBCard className="dashboard-card">
            <MDBCardBody>
              <CommandLine />
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </React.Fragment>
  );
};

export default MonitorSection;
