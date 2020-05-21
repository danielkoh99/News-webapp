import React, { useEffect, useState } from 'react'
import { Layout } from 'antd'
import { ChartData } from '../interfaces/interface'
import CryptoChartData from './CryptoChartData'
const {Content } = Layout;


const CryptoChart:React.FC<ChartData> =() =>{
const [crypto,setCrypto] = useState({
    loading:true,
    data:[]
})
    const fetchAllData =()=>{
        
        fetch(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,LTC,XRP&tsyms=USD&api_key=979a7905d68583eb81df8ea9d869d0c5b3717dc90ababdeaac81037a339d591a`)
        .then(res=> res.json())
        .then((CryptoData)=>{
            setCrypto({
                loading:false,
                data:CryptoData

                
            })
        })
      
    }
    useEffect(() => {
        setTimeout(() => {
          fetchAllData();
        }, 2500);
      });
    return(
        <Layout>
            <Content style={{ margin: '24px 16px 0', overflow: 'initial', marginLeft:'auto',marginRight:'auto' }}>
           
            <CryptoChartData data={crypto}/>
    
          </Content>
      
      </Layout>
    )
}


export default CryptoChart