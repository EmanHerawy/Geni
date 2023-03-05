const classTemplate = (contractName, contractPath, prgma, functions) => {

  return template = `
    // SPDX-License-Identifier: UNLICENSED
// credits : Trail of Bits
pragma solidity ^0.8.0;
// import you contract here 
import "../contracts/${contractName}.sol";


// you might need to Moc your token, do it here 

contract ${contractName}FuzzTest is ${contractName} {

    // define you state vriables here 

  // define you errors here 

  constructor() public {
      // set up you testing here 
    }
   ${functions}
}
`
}
const funcTemplate = (name) => {

  return template = ` function echidna_test_${name} ()  public view returns (bool) {
       // add your test logic here
         return true == false;
    }`
}
module.exports = {
    funcTemplate,classTemplate
}