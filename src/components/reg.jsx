import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import b1 from "../b5.jpg";

class Reg extends Component {
  sendmail = event => {
    event.preventDefault();
    window.location.href = `mailto:${this.state.email}`;
  };
  state = {
    email: "xyz@xmail.com"
  };
  render() {
    return (
      <div
        style={{
          //backgroundImage: `url(${b1})`,
          background: `url(${b1}) no-repeat center center fixed`,
          backgroundSize: "cover",
          border: "1px solid black",
          height: "665px",
          // width: "100vw%"
        }}
        className="container-fluid "
      >
      <div className="pt-3">
        <h3
          style={{
            fontFamily: "Montserrat",
            fontWeight: "bold",
            fontSize: "30px",
            color: "#66ffe7"
          }}
        >Email the following details:</h3>
        <div className="w-50 container pt-3 pb-3 mx-auto">
          <ul className="list-group">
            <li className="list-group-item">Ethereum wallet Address</li>
            <li className="list-group-item">Institute name</li>
            <li className="list-group-item">Address</li>
            <li className="list-group-item">
              Institute Registration details (scanned copy){" "}
            </li>
          </ul>
          <Form onSubmit={this.sendmail}>
            <Button variant="primary" type="submit">
              Send mail
            </Button>
          </Form>
        </div>
      </div>
      </div>
    );
  }
}

export default Reg;
