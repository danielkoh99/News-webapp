
import React from "react";
import { ChartData } from "../interfaces/interface";
import {  VictoryChart, VictoryBar, VictoryAxis, VictoryTooltip, VictoryTheme } from "victory";


const CryptoChartData = (props:ChartData) => {
    //console.log(props.data.data.DISPLAY);

   


    return (
        <div>
      {props.data.loading === false ? (
          
         <VictoryChart width={300} height={500} theme={VictoryTheme.material} domainPadding={25}
         animate={{duration:3000}}  padding={{ left: 90, top: 50, right: 10, bottom: 50 }}>
        
          
         <VictoryAxis 
         tickValues={[1, 2, 3, 4, 5]}
           // tickValues specifies both the number of ticks and where
           // they are placed on the axis
           
           
         
         />
          
          
         <VictoryAxis
         
           dependentAxis
           // tickFormat specifies how ticks should be displayed
          
         />
        
         <VictoryBar  
         
         labelComponent={<VictoryTooltip/>}
         data={[
            { coin: 'XRP', price: props.data.data.DISPLAY.XRP.USD.PRICE, label: props.data.data.DISPLAY.XRP.USD.PRICE },
            { coin: 'LTC', price: props.data.data.DISPLAY.LTC.USD.PRICE, label: props.data.data.DISPLAY.LTC.USD.PRICE },
             { coin: 'ETH', price: props.data.data.DISPLAY.ETH.USD.PRICE, label: props.data.data.DISPLAY.ETH.USD.PRICE },
             { coin: 'BTC', price: props.data.data.DISPLAY.BTC.USD.PRICE, label: props.data.data.DISPLAY.BTC.USD.PRICE },
            
            
          ]}
          
            x="coin" y="price" />
       </VictoryChart>
      
      ):null}
      </div>
      
    );
  };

export default CryptoChartData



