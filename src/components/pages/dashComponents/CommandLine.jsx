import React from "react";
import { MDBCard, MDBCardBody, MDBIcon, MDBRow, MDBCol, MDBCardText, MDBBox } from "mdbreact";

const CommandLine = () => {
  const [terminalText, setTerminalText] = React.useState(["a"]);
  const textareaRef = React.useRef();
  const CARRIAGE_RETURN = 13;

  const handleKeyDown = e => {
    if (e.keyCode == CARRIAGE_RETURN) {
      const newList = [...terminalText, e.target.value];
      setTerminalText(newList);
      e.target.value = "";
    }
  };
  return (
    <MDBBox display="flex" flex="column" className="h-100">
      <div className="flex-grow-1">
        {terminalText.map((item, i) => (
          <React.Fragment>
            {i != 0 ? <br /> : ""}
            {item}
          </React.Fragment>
        ))}
      </div>
      <input type="text" className="form-control" onKeyDown={handleKeyDown} />
    </MDBBox>
  );
};

export default CommandLine;
