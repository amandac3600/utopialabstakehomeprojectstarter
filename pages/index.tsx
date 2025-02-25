import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
// import styled from "styled-components";
import ConnectWallet from "../components/ConnectWallet";
import { useEthers } from "@usedapp/core";
import SendTransaction from "../components/SendTransaction";

const Home: NextPage = () => {
  //implement logic to find if account is logged in or not
  const {account} = useEthers();

  return account == null ? (
    <ConnectWallet></ConnectWallet>
  ) : (
    <SendTransaction></SendTransaction>
  );
};

export default Home;
