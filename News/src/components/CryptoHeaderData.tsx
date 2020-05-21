import React from "react";
import { CryptoRates } from "../interfaces/interface";
import {  Col, Row } from "antd";

// let today = new Date().toJSON().slice(0,10)
// console.log(today)
const CryptoExchangeData = (props: CryptoRates) => {
//console.log(props.rates)
  return (
    <div>
      {props.rates.loading === false ? (
        <div>
          <React.Fragment>
            {/* <Row style={{ marginRight: 60 }} justify="space-between"> */}
            <Row style={{marginLeft:30}}>
            <Row style={{float:"left"}}>
              <Col span={4} style={{marginRight:20}}>
                
                <p>Bitcoin(BTC):</p>
                
             
             
                
                <p>USD {props.rates.data.BTC.USD}</p>
              
             
                <p>HUF {props.rates.data.BTC.HUF}</p>
            
                <p>EUR {props.rates.data.BTC.EUR}</p>
              </Col>
              </Row>
            <Row style={{float:"left",marginRight:20}}>
              <Col span={4}>
                
                <p>Litecoin(LTC):</p>
                
             
             
                
                <p>USD {props.rates.data.LTC.USD}</p>
              
             
                <p>HUF {props.rates.data.LTC.HUF}</p>
            
                <p>EUR {props.rates.data.LTC.EUR}</p>
              </Col>
              </Row>
            <Row style={{float:"right", marginRight:20}}>
              <Col span={4}>
                
                <p>Etherium(ETH):</p>
                
             
             
                
                <p>USD {props.rates.data.ETH.USD}</p>
              
             
                <p>HUF {props.rates.data.ETH.HUF}</p>
            
                <p>EUR {props.rates.data.ETH.EUR}</p>
              </Col>
              </Row>
            <Row style={{float:"right", marginRight:20}}>
              <Col span={4}>
                
                <p>Ripple(XRP):</p>
                
             
             
                
                <p>USD {props.rates.data.XRP.USD}</p>
              
             
                <p>HUF {props.rates.data.XRP.HUF}</p>
            
                <p>EUR {props.rates.data.XRP.EUR}</p>
              </Col>
              </Row>
              
              </Row>
           
            {/* </Row> */}
          </React.Fragment>
        </div>
      ) : null}
    </div>
  );
};

export default CryptoExchangeData;
