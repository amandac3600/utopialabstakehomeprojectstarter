// import styled from "styled-components";
import { formatEther, parseEther } from "@ethersproject/units";
import { useEtherBalance, useEthers, useSendTransaction } from "@usedapp/core";
import { useState } from "react";

const SendTransaction: React.FC = () => {
  //implement logic to display address of logged in wallet
  //implement logic to display eth balance of logged in wallet
  //implement logic to take in an input of a wallet address and state to hold it
  //implement logic to take in an input of a amount to send and state to hold it
  //implement logic for the button to send a transaction with the current values of the wallet
  //address state and the amount state

  const [quantity, setQuantity] = useState("0");
  const [accountId, setAccountId] = useState("");
  const [error, setError] = useState(false);

  const {account, deactivate} = useEthers();
  const balance = useEtherBalance(account);
  const {sendTransaction} = useSendTransaction();

  const sendEther = async() => {
    try {
      sendTransaction({to: accountId, value: parseEther(quantity)})
      setQuantity("0");
      setAccountId("");
    }
    catch(error) {
      setError(true);
    }
  }

  return (
    <>
      <div id="sendPage">
        {account && <div>
          <h2>Account</h2>
          <p>Account: {account}</p>
          <button onClick={deactivate}>Disconnect</button>
        </div>}
        <br/>

        {balance && <div>
          <h2>Balance</h2>
          <p>Ethereum Balance: {Number(formatEther(balance)).toFixed(2)} ETH</p>
          <p>Balance in USD: ${(Number(formatEther(balance))*3247.24).toFixed(2)}</p>
        </div>}  
        <br/>

        {account && <div><h2>Send Ethereum</h2>
          <span>
            Send <input type="number" step="0.01" min="0" value={quantity} onChange={e => setQuantity(e.target.value)}/> 
             to <input type="text" placeholder="Account ID" value={accountId} onChange={e => setAccountId(e.target.value)}/>
            <button type="submit" onClick={() => sendEther()}>Send</button>
          </span>
        </div>}
        <br/>

        {error && <p id="error">Something went wrong; please try again.</p>}
      </div>
    </>
  );
};

export default SendTransaction;
