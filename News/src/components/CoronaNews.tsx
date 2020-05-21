
import * as React from "react";
import {useState, useEffect} from 'react'
import BtcData from './CryptoNews'
import {Articles} from '../interfaces/interface'
import { Layout } from 'antd';
import CoronaStats from "./CoronaStats";

const { Content } = Layout;

const CoronaNews:React.FC<Articles>= () =>{ 
    
    const [data, setData] = useState({
        loading:true,
        data:[]
    })
   
     const getBtcNews= async() =>  {
      // const api = 'http://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,EUR&api_key=979a7905d68583eb81df8ea9d869d0c5b3717dc90ababdeaac81037a339d591a'
    await fetch(
         "https://newsapi.org/v2/everything?q=corona&language=en&apiKey=17b1135bbc5a451c98dc7c099df83559"
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
        
       
   <CoronaStats/>
          
          <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
           
            <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
            
            <BtcData articles={data}/>
         </div>
          </Content>
          
          </Layout>
       
   )
 
  

 
}
 
    
  export default CoronaNews


