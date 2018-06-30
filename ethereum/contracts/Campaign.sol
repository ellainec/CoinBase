pragma solidity ^0.4.24;

contract CampaignFactory {
    address[] public deployedCampaigns;

    function createCampaign(uint min) public {
        address newCampaign = new Campaign(min, msg.sender);
        deployedCampaigns.push(newCampaign);
    }

    function getDeployedCampaigns() public view returns (address[]) {
        return deployedCampaigns;
    }
}

contract Campaign {
    struct Request {
        string description;
        uint value;
        address recipient;
        bool complete;
        uint approvalCount;
        mapping(address => bool) approvals;
    }

    Request[] public requests;
    address public manager;
    uint public minimumContribution;
    mapping(address => bool) public approvers;
    uint public approversCount;

    modifier restricted() {
        require(msg.sender == manager);
        _;
    }

    constructor(uint min, address creator) public {
        minimumContribution = min;
        manager = creator;
    }

    function contribute() public payable {
        require(msg.value > minimumContribution);

        approvers[msg.sender] = true;

        approversCount++;
    }

    function createRequest(string description, uint value, address recipient)
    public restricted {
        Request memory newRequest = Request({
            description: description,
            value: value,
            recipient: recipient,
            complete: false,
            approvalCount: 0
            });

        requests.push(newRequest);
    }

    function approveRequest(uint index) public {
        Request storage request = requests[index];
        require(approvers[msg.sender]);
        require(!requests[index].approvals[msg.sender]);

        request.approvals[msg.sender] = true;
        request.approvalCount++;
    }

    function finalizeRequest(uint index) public restricted {
        Request storage request = requests[index];
        require(request.approvalCount > (approversCount / 2));
        require(!request.complete);
        request.complete = true;

        request.recipient.transfer(request.value);
    }

    function getSummary() public view returns (
        uint, uint, uint, uint, address
        ){
            return (
                minimumContribution,
                this.balance,
                requests.length,
                approversCount,
                manager
            );
        }

    function getRequestCount() public view returns (uint) {
        return requests.length;
    }

}