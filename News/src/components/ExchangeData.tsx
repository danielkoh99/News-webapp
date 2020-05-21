import React from "react";
import { Rates } from "../interfaces/interface";
import { Row, Col } from "antd";

// let today = new Date().toJSON().slice(0,10)
// console.log(today)
const ExchangeData = (props: Rates) => {

  return (
    <div>
      {props.rates.loading === false ? (
        <div>
          <React.Fragment>
            <Row style={{ marginRight: 60 }} justify="space-between">
              <Col span={4}>
                
                <p>DKK {props.rates.data.rates.DKK}</p>
              </Col>
              <Col span={4}>
                <p>USD {props.rates.data.rates.USD}</p>
              </Col>
              <Col span={4}>
                {" "}
                <p>HUF {props.rates.data.rates.HUF}</p>
              </Col>
              <Col span={4}>
                {" "}
                <p>RUB {props.rates.data.rates.RUB}</p>
               
              </Col>
              
            </Row>
          </React.Fragment>
        </div>
      ) : null}
    </div>
  );
};

export default ExchangeData;
