import React, { useEffect, useState } from "react";
import { selectableChartData } from "../interfaces/interface";
import SelectableChartData from "./selectableChartData";
import { Layout, Select } from "antd";
const { Option } = Select;
const { Content } = Layout;

const SelectableChart: React.FC<selectableChartData> = () => {
  function handleChange(value: any) {
    setValue(value.key);
    console.log(value); // { key: "lucy", label: "Lucy (101)" }
  }

  const [crypto, setCrypto] = useState({
    loading: true,
    data: [],
  });
  const [value, setValue] = useState('');
  console.log(value);
  const fetchAllData = () => {
    fetch(
      `https://min-api.cryptocompare.com/data/v2/histoday?fsym=${value}&tsym=USD&limit=10&api_key=979a7905d68583eb81df8ea9d869d0c5b3717dc90ababdeaac81037a339d591a`
    )
      .then((res) => res.json())
      .then((CryptoData) => {
        setCrypto({
          loading: false,
          data: CryptoData,
        });
      });
  };

  useEffect(() => {
    setTimeout(() => {
      fetchAllData();
    }, 2500);
  });
  return (
    <Layout>
      <Content
        style={{
          margin: "24px 16px 0",
          overflow: "initial",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
             
        <Select
           labelInValue
          placeholder="Select a cryptocurrency to see chart"
          style={{ width: 300 }}
        //  defaultValue="Bitcoin"
          // defaultActiveFirstOption={true}
          
          onChange={handleChange}
        >
          <Option value="BTC">Bitcoin</Option>
          <Option value="ETH">Etherium</Option>
          <Option value="XRP">Ripple</Option>
          <Option value="LTC">Litecoin</Option>
        </Select>
        <SelectableChartData data={crypto} />
      </Content>
    </Layout>
  );
};

export default SelectableChart;
