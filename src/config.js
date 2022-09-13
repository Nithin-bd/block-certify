import web3 from "./web3";

export const address = "0x361433CD1097bd477ee3a542A195dA7ee8984A2C";

export const abi = [
	{
		inputs: [],
		payable: false,
		stateMutability: "nonpayable",
		type: "constructor"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "string",
				name: "fname",
				type: "string"
			},
			{
				indexed: false,
				internalType: "string",
				name: "course",
				type: "string"
			},
			{
				indexed: false,
				internalType: "string",
				name: "email",
				type: "string"
			}
		],
		name: "certadded",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "string",
				name: "name",
				type: "string"
			}
		],
		name: "coll_added",
		type: "event"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "address",
				name: "coladd",
				type: "address"
			},
			{
				internalType: "string",
				name: "name",
				type: "string"
			}
		],
		name: "addCollege",
		outputs: [],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "string",
				name: "fname",
				type: "string"
			},
			{
				internalType: "string",
				name: "course",
				type: "string"
			},
			{
				internalType: "string",
				name: "email",
				type: "string"
			}
		],
		name: "addcert",
		outputs: [],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: true,
		inputs: [
			{
				internalType: "address",
				name: "col",
				type: "address"
			}
		],
		name: "checkcoll",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
			{
				internalType: "uint256",
				name: "id",
				type: "uint256"
			}
		],
		name: "getcert",
		outputs: [
			{
				internalType: "string",
				name: "name",
				type: "string"
			},
			{
				internalType: "string",
				name: "course",
				type: "string"
			},
			{
				internalType: "string",
				name: "cname",
				type: "string"
			},
			{
				internalType: "string",
				name: "email",
				type: "string"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [],
		name: "getid",
		outputs: [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	}
];

export default new web3.eth.Contract(abi, address);
