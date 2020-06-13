import React from "react";
import { MDBRow } from "mdbreact";

import BreadcrumSection from "./sections/BreadcrumSection";
import MonitorSection from "./dashComponents/MonitorSection";

const DashboardPage = props => {
  React.useEffect(() => {
    console.log(props.lmao);
  });
  return (
    <React.Fragment>
      <BreadcrumSection />
      <MonitorSection />
    </React.Fragment>
  );
};

export default DashboardPage;
