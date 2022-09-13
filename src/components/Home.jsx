import React, { Component } from "react";
import b1 from "../b5.jpg";
import web3 from "../web3.js";
import certcontract from "../config.js";
import "../login.css";

const Auth = () =>{
    const user = localStorage.getItem('admin')
    if(user){
        localStorage.setItem('loggedin','true')
        return true
    }
    else{
        return false
    }
  }

class Home extends Component {
    state = {
                account: ""
            };
    
    componentDidMount() {
        console.log('mounted')
        this.loadBlockchainData();
      }
    async loadBlockchainData() {
    //added line 30
    await window.ethereum.enable()
    const accounts = await web3.eth.getAccounts();
    web3.eth.defaultAccount = accounts[0];
    console.log(certcontract);
    console.log(accounts);
    console.log("acc", accounts[0]);
    this.setState({ account: accounts[0] });
    }
    
    Login = event =>{
        event.preventDefault();
        console.log(this.state.account)
        certcontract.methods.checkcoll(this.state.account).call({ from: this.state.account }, (error, result) => {
            if (!error) console.log(result);
            else console.log(error);
            if(result === true)
            {
                localStorage.setItem('admin','true')
                window.location.reload(false);
            }
            else{
                alert("Unauthorized user");
            }
          })
    };
    
    render(){
        const user = Auth()
        return(
            <div
            style={{
                
                background: `url(${b1}) no-repeat center center fixed`,
                backgroundSize: "cover",
                height: 665
              }}>
                  <div>
                    <h1 style={{color:"white",paddingTop:30}}>Admin Login</h1>
                  </div>
                <div class="login">
                    <h2>Admin</h2>
                    <form>
                    {
                      !user &&
                      <div class="input-group">
                            <button onClick={this.Login}>Connect</button>
                        </div>
                    }  
                    {
                    user && 
                    <div className="Logged"
                    style={{
                        color:"#03fc0f",
                        border:"10",
                        marginTop: 20
                    }}>
                        <p>Logged In</p>
                    </div>
                }
                    </form>
                </div>
            </div>
        );
    }
}
export default Home;