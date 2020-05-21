
import * as React from "react";
import {useState, useEffect} from 'react'
import BtcData from './CryptoNews'
import {Articles} from '../interfaces/interface'
import { Layout } from 'antd';
import CryptoHeader from "./CryptoHeader";
import CryptoChart from "./CryptoChart";
import SelectableChart from "./selectableChart";
// import SelectableChart from "./selectableChart";
// import CryptoChart from "./CryptoChart";
const { Content } = Layout;

const BitcoinNews:React.FC<Articles>= () =>{ 
    
    const [data, setData] = useState({
        loading:true,
        data:[]
    })
   
     const getBtcNews= async() =>  {
      // const api = 'http://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,EUR&api_key=979a7905d68583eb81df8ea9d869d0c5b3717dc90ababdeaac81037a339d591a'
    await fetch(
         "https://newsapi.org/v2/everything?q=bitcoin&language=en&apiKey=17b1135bbc5a451c98dc7c099df83559"
       )
       .then((res) => res.json())
         
         // {data.articles.map((newsData: { author: string;title:string;urlToImage:string, description:string }) =>)
         
         .then((data) => {
         if(data.status === 'ok'){
      
            setData({
                loading: false,
                data:data
            })
      console.log(data)
          
         }else{
             console.log('shit');
         }
           
         
       })  
       
     }
   useEffect(()=>{
       setTimeout(() => {
        getBtcNews()
       }, 2000);

   },[])  

   return(
      <Layout>
        <CryptoHeader/>
       
        <SelectableChart/>
            <CryptoChart/>
          
          <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
           
            <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
            
            <BtcData articles={data}/>
         </div>
          </Content>
          
          </Layout>
       
   )
 
  

 
}
 
    
  export default BitcoinNews


