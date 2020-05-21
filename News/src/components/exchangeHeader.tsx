import React, { useState, useEffect } from "react";
import { Layout, PageHeader } from "antd";
import { Rates } from "../interfaces/interface";
import ExchangeData from "./ExchangeData";
// import {InteractionOutlined} from '@ant-design/icons'

const ExchangeHeader: React.FC<Rates> = () => {
  // const onClick = (key:any) => {
  //   message.info(`Click on item ${{key}}`);
  // };
  
  // const menu = (
  //   <Menu onClick={onClick}>
  //     <Menu.Item key="EUR">
  //       <a href="" >
  //       EUR
  //         </a>
  //     </Menu.Item>
  //     <Menu.Item key="HUF">
      
  //         HUF
       
  //     </Menu.Item>
  //     <Menu.Item key="USD">
      
  //        USD
        
  //     </Menu.Item>
  //   </Menu>
  // );
  const [rate, setRates] = useState({
    loading: true,
    data: [],
  });
  //  console.log(rate)
  const getRates = ():void => {
    fetch("https://api.exchangeratesapi.io/latest?base=EUR")
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
      getRates();
    }, 2500);
  });
  return (
    <Layout>
      <PageHeader
        
        title={ <p style={{marginLeft:30}}>Exchange rates</p>}
        subTitle="base:HUF"
      //   { <Dropdown overlay={menu}>
      //   <a className="ant-dropdown-link" onClick={e =>e.preventDefault()}>
      //     Hover me 
      //   </a>
      // </Dropdown>}
        extra={<ExchangeData rates={rate} />}
      />
    </Layout>
  );
};

export default ExchangeHeader;
