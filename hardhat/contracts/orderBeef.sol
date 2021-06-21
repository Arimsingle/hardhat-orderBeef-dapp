pragma solidity ^0.7.0;
pragma experimental ABIEncoderV2;
import "./safeMath.sol";
import {ECRecover} from "./ECRecover.sol";

contract OrderBeef is ECRecover{
    
    using SafeMath for uint256;
    
    constructor(){
        balance[msg.sender] = 10000000;
    }
    
    struct Beef{
         string menu;
         string level;
         uint256 price;
    }
    
    struct Order{
        Beef beef;
        uint256 amont;
        string moreDetails;
        string time;
    }
    
    mapping(address => Order[]) private order;
    mapping(address => uint256) private balance;
    mapping(address => uint256) private star;
    event _order(address indexed _account,string indexed _menu, uint256 indexed _price);
    
    function transfer(address _from, address _to, uint256 _amount) public returns (bool _sucess){
        require(balance[_from] >= _amount,"your balance less than amount !");
        balance[_from] = balance[_from].sub(_amount);
        balance[_to] = balance[_to].add(_amount);
        return true;
    }
    
    function setOrder(address _from, string memory _menu, string memory _level, uint256 _price, uint256 _amount, string memory _moreDetails, string memory _time) public returns (bool _sucess){
        require(balance[_from]>= _price.mul(_amount),"your balance not enough !");
        balance[_from] = balance[_from].sub(_price.mul(_amount));
        Beef memory _beefObj = Beef(_menu, _level, _price.mul(_amount));
        Order memory _orderObj = Order(_beefObj, _amount, _moreDetails, _time);
        order[_from].push(_orderObj);
        star[_from] = star[_from].add(1);
        emit _order(_from, _menu, _price);
        return true;
    }
    
    
    function metaOrder(bytes calldata _signature, address _from, string memory _menu, string memory _level, uint256 _price, uint256 _amount, string memory _moreDetails, string memory _time, uint256 _nonce) external {
        bytes32 messageHash = hashMessage(_from, _menu, _level, _price, _amount, _moreDetails, _time, _nonce);
        address signer = recoverSigner(messageHash, _signature);
        validateNonceForSigner(signer, _nonce);
        require(balance[_from]>= _price.mul(_amount),"your balance not enough !");
        balance[_from] = balance[_from].sub(_price.mul(_amount));
        Beef memory _beefObj = Beef(_menu, _level, _price.mul(_amount));
        Order memory _orderObj = Order(_beefObj, _amount, _moreDetails, _time);
        order[_from].push(_orderObj);
        star[_from] = star[_from].add(1);
        emit _order(_from, _menu, _price);
    }
    
    function hashMessage(address _from, string memory _menu, string memory _level, uint256 _price, uint256 _amount, string memory _moreDetails, string memory _time, uint256 _nonce) 
        public 
        pure
        returns (bytes32 _messageHash)
    {
        //Actually should also add contract address to avoid replay attacks
        _messageHash = keccak256(abi.encodePacked(_from, _menu, _level, _price, _amount, _moreDetails, _time, _nonce));
    }
    
    function getOrder(address _from)public view returns(Order[] memory){
        return order[_from];
    }
    
    function getBalance(address _from)public view returns(uint256){
        return balance[_from];
    }
    
    function getStar(address _from)public view returns(uint256){
        return star[_from];
    }
}