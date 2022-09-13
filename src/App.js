import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import web3 from "./web3.js";
import "./App.css";
import Navhead from "./components/navbar";
import Forms from "./components/form";
import Getcert from "./components/getcert";
import Reg from "./components/reg";
import Home from "./components/Home";
import certcontract from "./config.js";
import Certificate from "./components/certificate";
import YourComponent from "./components/ipfs.jsx";

const Auth = () =>{
  const user = localStorage.getItem('loggedin')
  if(user){
      return true
  }
  else{
      return false
  }
}
class App extends Component {
  
  state = {
    account: "",
    name: "",
    course: "",
    txh: "",
    id: "",
    output: [],
    tofound: false,
  };
  
  componentDidMount() {
    console.log('mounted')
    this.loadBlockchainData();
  }

  async loadBlockchainData() {

    await window.ethereum.enable()
    const accounts = await web3.eth.getAccounts();
    web3.eth.defaultAccount = accounts[0];
    console.log(certcontract);
    console.log(accounts);
    console.log("acc", accounts[0]);
    this.setState({ account: accounts[0] });
  }

  add = data => {
    
    console.log(data.fname, data.course, data.email);
    var name = data.fname + " " + data.lname;
    certcontract.methods.addcert(name, data.course, data.email).send(
      {
        from: this.state.account,
        gas: 500000
      },
      (error, result) => {
        if (error) console.log("error " + error);
        else {
          this.setState({ name: data.fname + " " + data.lname });
          this.setState({ course: data.course + " " + "Course"});
          this.setState({ txh: result });

          certcontract.methods
            .getid()
            .call({ from: this.state.account }, (error, result) => {
              this.setState({ id: result });
              if (!error) console.log(result);
              else console.log(error);
            });
        }
      }
    );
  };
  get = data => {
    console.log(data.id);
    certcontract.methods
      .getcert(data.id)
      .call({ from: this.state.account }, (error, result) => {
        if (!error) {
          console.log(result);
          const v = Object.values(result);
          this.setState({ output: v });
          this.setState({ tofound: true });
          console.log(this.state.output);
        } else alert("Certificate not found");
      });
  };
  render() {
    const user = Auth()
      return (
        <div className="App">
          <Router>
            <Navhead />
            <Route
              path="/"
              exact
              component={Home}
            />{ user 
            ?<Route
              path="/add"
              render={() =><Forms addcertificate={this.add} />}
            />
            : <Redirect to="/" />
            }
            <Route
              path="/verify"
              render={() => (
                <Getcert
                  getcertificate={this.get}
                  yes={this.state.tofound}
                  details={this.state.output}
                />
              )}
            />
            <Route path="/ipfs" component={YourComponent} />
            <Route
              path="/view"
              component={() => (
                <Certificate
                  sname={this.state.name}
                  course={this.state.course}
                  txh={this.state.txh}
                  id={this.state.id}
                />
              )}
            />
            <Route path="/reg" component={Reg} />
          </Router>
        </div>
      );
  }
}

export default App;
