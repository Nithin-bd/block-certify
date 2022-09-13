pragma solidity ^0.5.0;
import "hardhat/console.sol";

contract cert{
    uint counter = 1;
    struct college{
        string colname;
        bool value;
    }
    
    struct cert_details{
        string fname;
        string course;
        string email;
        string cname;
    }
    
    mapping(address=>cert_details) certificates;
    mapping(address=>college) colleges;
    mapping(uint=>cert_details) certs;
    
    address owner;
    constructor() public {
        owner=msg.sender;
    }
    modifier ownerOnly{
        require(owner==msg.sender);
        _;
    }
    
    event coll_added(string name);//event when college is added
    
    event certadded(string fname,string course,string email);
    
    
    function addCollege(address coladd,string memory name) ownerOnly  public{
        colleges[coladd]  =  college(name,true);
        string memory s = "saved";
        emit coll_added(s); //calling event
    }
    
    function checkcoll(address col) view public returns (bool){
        return colleges[col].value;
    }
    
    function addcert(string memory fname,string memory course,string memory email) public{
     if(checkcoll(msg.sender)){
            string memory cname = colleges[msg.sender].colname;
           certificates[msg.sender]=cert_details(fname,course,email,cname);
            emit certadded(fname,course,email);
            certs[counter]=cert_details(fname,course,email,cname);
            counter = counter + 1;
     }
     else{
         console.log("INVALID ADDRESS");
         assert(false);
     }
    }
    function getid() view public returns(uint){
        return counter;
    }
    function getcert(uint id) view public returns(string memory name,string memory course,string memory cname,string memory email){
        return (certs[id].fname,certs[id].course,certs[id].cname,certs[id].email);
    }
}
