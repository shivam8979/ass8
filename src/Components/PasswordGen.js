import { useState } from "react";
import logo from "../Images/copy.png";
import { CopyToClipboard } from "react-copy-to-clipboard";

const PasswordGen = () => {
  const [output, setOutput] = useState("");
 
  var lengthVar = 0;
  let checkUpper = false;
  let checkLower = false;
  let checkmiddle = false;
  let checkLast = false;

    const passwordGenerate = () => {
      if (lengthVar <= 0) {
        return;
      }
  
      const upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";
      const numbers = "0123456789";
      const symbols = "!@#$%&*";
      let finalChar = "";
      let length = lengthVar;
      let password = "";
      
      if (checkUpper === true) {
        finalChar = finalChar + upperCaseChar;
      }
      if (checkLower === true) {
        finalChar = finalChar + lowerCaseChar;

      }
      if (checkmiddle === true) {
        finalChar = finalChar + numbers;
      }
      if (checkLast === true) {
        finalChar = finalChar + symbols;
      }
  
      for (let i = 0; i < length; i++) {
        let index = Math.floor(Math.random() * finalChar.length + 1);
        password = password + finalChar.charAt(index);
      }
      setOutput(password)
    };
  
  
  return (
    <>
      <h1>Password Generator</h1>
      <CopyToClipboard text={output} >
       <div>
       <input type="text" disabled value={output} className="input" />
        <button className="copy">
          <img className="img" src={logo} alt="copy" />
        </button>
       </div>
      </CopyToClipboard>
      <br />
      <div className="length">
        <p>Select the length</p>
        <select
          className="select"
          onChange={(e) => {
            lengthVar = e.target.value;
          }}
        >
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
        </select>
      </div>
      <br />
      <input
        onClick={() => {
          checkUpper = !checkUpper;
        }}
        type="checkbox"
        id="UpperCase"
      />
      <label htmlFor="UpperCase">Upper Case</label>
      <br />
      <input
        onClick={() => {
          checkLower = !checkLower;
        }}
        type="checkbox"
        id="LowerCase"
      />
      <label htmlFor="LowerCase">Lower Case</label>
      <br />
      <input
        onClick={() => {
          checkmiddle = !checkmiddle;
        }}
        type="checkbox"
        id="IncludeNumbers"
      />
      <label htmlFor="IncludeNumbers">Include Numbers</label>
      <br />
      <input
        onClick={() => {
          checkLast = !checkLast;
        }}
        type="checkbox"
        id="IncludeSymbols"
      />
      <label htmlFor="IncludeSymbols">Include Symbols</label>
      <br />
      <br />
      <button className="btn" onClick={passwordGenerate}>
        Generate Password
      </button>
    </>
  );
};
export default PasswordGen;