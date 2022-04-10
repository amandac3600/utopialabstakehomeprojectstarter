// import styled from "styled-components";
import { useEthers } from "@usedapp/core";
import SendTransaction from "./SendTransaction";

const ConnectWallet: React.FC = () => {
  //implement logic and button to connect wallet to dapp

  const {activateBrowserWallet, account} = useEthers();

  return (
    <div>
      {!account && <div id="connectPage">
        <h2>Connect Your Account</h2>
        <button id="connectButton" onClick={() => activateBrowserWallet()}> Connect </button>
        </div>}
    </div>
  )
};
export default ConnectWallet;
