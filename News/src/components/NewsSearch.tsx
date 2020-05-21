import * as React from "react";
import {useState, useEffect} from 'react'
import Data from './Data'
import {Articles} from '../interfaces/interface'
import ExchangeHeader from './exchangeHeader'
import { Layout } from 'antd';
const { Header, Content } = Layout;


const TopNews:React.FC<Articles>= () =>{ 
    
    const [data, setData] = useState({
        loading:true,
        data:[]
    })
   
     const getNews= async() =>  {
      
    await fetch(
         "http://newsapi.org/v2/top-headlines?country=hu&apiKey=17b1135bbc5a451c98dc7c099df83559"
       )
       .then((res) => res.json())
         
         // {data.articles.map((newsData: { author: string;title:string;urlToImage:string, description:string }) =>)
         
         .then((data) => {
         if(data.status === 'ok'){
      
            setData({
                loading: false,
                data:data
            })
      
          
         }else{
             console.log('shit');
         }
           
         
       })  
       
     }
   useEffect(()=>{
       setTimeout(() => {
        getNews()
       }, 2000);

   },[])  

   return(
      <Layout>
        <ExchangeHeader/>
            <Header className="site-layout-background" style={{ padding: 0 }} >
               <h2> Top News</h2>
               </Header>
          <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
            <Data articles={data}/>
         </div>
          </Content>
          
          </Layout>
       
   )
 
  

 
}
 
    
  export default TopNews


