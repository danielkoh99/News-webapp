import React, { useState, useEffect } from 'react'
// import Chart from 'chart.js';
import { Layout, PageHeader } from "antd";
import { CryptoRates } from "../interfaces/interface";
import CryptoExchangeData from './CryptoHeaderData';
// import ExchangeData from "./ExchangeData";






const CryptoHeader: React.FC<CryptoRates> = () => {
 
  const [rate, setRates] = useState({
    loading: true,
    data: [],
  });
  //  console.log(rate)
  const getHeaderData = ():void => {
    fetch('https://min-api.cryptocompare.com/data/pricemulti?fsyms=LTC,XRP,BTC,ETH,&tsyms=USD,EUR,HUF&api_key979a7905d68583eb81df8ea9d869d0c5b3717dc90ababdeaac81037a339d591a')
      .then((res) => res.json())
      .then((data) =>
        setRates({
          loading: false,
          data: data,
        })
      );
  };

  useEffect(() => {
    setTimeout(() => {
      getHeaderData();
    }, 2500);
  });
  return (
    <Layout >
      <PageHeader
        
        title={ <p style={{marginLeft:30}}>Crypto News</p>}
      
      //   { <Dropdown overlay={menu}>
      //   <a className="ant-dropdown-link" onClick={e =>e.preventDefault()}>
      //     Hover me 
      //   </a>
      // </Dropdown>}
        extra={<CryptoExchangeData rates={rate} />}
      />
    </Layout>
  );
};

export default CryptoHeader;
