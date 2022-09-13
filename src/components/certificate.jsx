import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "../certstyle.css";
import cert from '../cert.jpg';
import { saveAsPng } from 'save-html-as-image';


class Certificate extends Component {
  state = {};
  onclickprint = event => {
    event.preventDefault();
    const node = document.getElementById('printcertificate');
    saveAsPng(node, { filename: this.props.sname, printDate: true });
  };

  render() {
    return ( 
      <div id="whole-page" className="w-100 pc">
        <div id="printcertificate" className="cert">
          <img
          src={cert}
          className="img-fluid"
          alt="Responsive image"
          />
          <div id="fname">
            <span>{this.props.sname}</span>
          </div>
          <div id="course">
            <style>{`@media print {#course{color:red;}}`}</style>
            <span>{this.props.course} </span>
          </div>
          <div id="txh">
            <span>{this.props.txh}</span>
          </div>
          <div id="id">
            <span>{this.props.id}</span>
          </div>
          
        </div>
        <Button
          className="btn1"
          onClick={this.onclickprint}
          variant="success"
          type="submit"
        >
          Print
        </Button>
      </div>
    );
  }
}

export default Certificate;