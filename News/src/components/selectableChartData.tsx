import React from "react";
import { selectableChartData } from "../interfaces/interface";
import { VictoryChart, VictoryTheme, VictoryLine, VictoryAxis, VictoryLabel } from "victory";
// import { Spin  } from "antd";


const SelectableChartData = (props: selectableChartData) => {
  console.log(props.data.data.Data);
  // const data = props.data.data.Response === "Success" ? props.data.data.Data.map((item=> item.time))
  const propData = props.data.data.Data;
  // console.log(new Date(1577750400 * 1000).toISOString().slice(0, 19).replace('T', ' '));

  return (
    <div>
      {props.data.data.Response === "Success" ? (
        <div style={{minHeight:36.5+ 'em'}}>
          {/* {propData.Data.map((item: selectableChartData) => (
            // <React.Fragment>
            //    <p>{item.time}</p>
            //    <p>{item.high}</p>
            //    </React.Fragment> */}

          <VictoryChart  
             padding={{ left: 90, top: 50, right: 50, bottom: 80 }}
          width={700} height={900} theme={VictoryTheme.material}>
          <VictoryAxis style={{tickLabels:{fontSize:25}}}  tickLabelComponent={<VictoryLabel angle={45} />} />
          <VictoryAxis style={{tickLabels:{fontSize:25}}} padding={{right:30}} dependentAxis tickLabelComponent={<VictoryLabel />} />
        
            <VictoryLine
             animate={{duration:2500}}
            interpolation="natural"
           labelComponent={<VictoryLabel/>}
              style={{
                data: { stroke: "#c43a31" },
                parent: { border: "1px solid #ccc" },
              }}
              data={[
                {
                  x: new Date(propData.Data[0].time * 1000)
                    .toISOString()
                    .slice(5, 11)
                    .replace("T", " "),
                  y: propData.Data[0].low,
                 
                  
                },
                {
                  x: new Date(propData.Data[1].time * 1000)
                    .toISOString()
                    .slice(5, 11)
                    .replace("T", " "),
                  y: propData.Data[1].low,
                
                },
                {
                  x: new Date(propData.Data[2].time * 1000)
                    .toISOString()
                    .slice(5, 11)
                    .replace("T", " "),
                  y: propData.Data[2].low,
                 
                },
                {
                  x: new Date(propData.Data[3].time * 1000)
                    .toISOString()
                    .slice(5, 11)
                    .replace("T", " "),
                  y: propData.Data[3].low,
                },
                {
                  x: new Date(propData.Data[4].time * 1000)
                    .toISOString()
                    .slice(5, 11)
                    .replace("T", " "),
                  y: propData.Data[4].low,
                },
                {
                  x: new Date(propData.Data[5].time * 1000)
                    .toISOString()
                    .slice(5, 11)
                    .replace("T", " "),
                  y: propData.Data[5].low,
                  label:"Low price"
                },
                {
                  x: new Date(propData.Data[6].time * 1000)
                    .toISOString()
                    .slice(5, 11)
                    .replace("T", " "),
                  y: propData.Data[6].low,
                },
                {
                  x: new Date(propData.Data[7].time * 1000)
                    .toISOString()
                    .slice(5, 11)
                    .replace("T", " "),
                  y: propData.Data[7].low,
                },
                {
                  x: new Date(propData.Data[8].time * 1000)
                    .toISOString()
                    .slice(5, 11)
                    .replace("T", " "),
                  y: propData.Data[8].low,
                },
                {
                  x: new Date(propData.Data[9].time * 1000)
                    .toISOString()
                    .slice(5, 11)
                    .replace("T", " "),
                  y: propData.Data[9].low,
                },
              ]}
            />
            <VictoryLine        
            interpolation="natural"
            animate={{duration:2500}}

            labelComponent={<VictoryLabel/>}
            
              style={{
                data: { stroke: "blue" , strokeWidth:3},
                parent: { border: "1px solid #ccc" },
                
              }}

              data={[
                {
                  x: new Date(propData.Data[0].time * 1000)
                    .toISOString()
                    .slice(5, 11)
                    .replace("T", " "),
                  y: propData.Data[0].high,
              
                },
                {
                  x: new Date(propData.Data[1].time * 1000)
                    .toISOString()
                    .slice(5, 11)
                    .replace("T", " "),
                  y: propData.Data[1].high,
                 
                },
                {
                  x: new Date(propData.Data[2].time * 1000)
                    .toISOString()
                    .slice(5, 11)
                    .replace("T", " "),
                  y: propData.Data[2].high,
                 
                },
                {
                  x: new Date(propData.Data[3].time * 1000)
                    .toISOString()
                    .slice(5, 11)
                    .replace("T", " "),
                  y: propData.Data[3].high,
                },
                {
                  x: new Date(propData.Data[4].time * 1000)
                    .toISOString()
                    .slice(5, 11)
                    .replace("T", " "),
                  y: propData.Data[4].high,
                },
                {
                  x: new Date(propData.Data[5].time * 1000)
                    .toISOString()
                    .slice(5, 11)
                    .replace("T", " "),
                  y: propData.Data[5].high,
                  label:"High price"
                },
                {
                  x: new Date(propData.Data[6].time * 1000)
                    .toISOString()
                    .slice(5, 11)
                    .replace("T", " "),
                  y: propData.Data[6].high,
                },
                {
                  x: new Date(propData.Data[7].time * 1000)
                    .toISOString()
                    .slice(5, 11)
                    .replace("T", " "),
                  y: propData.Data[7].high,
                },
                {
                  x: new Date(propData.Data[8].time * 1000)
                    .toISOString()
                    .slice(5, 11)
                    .replace("T", " "),
                  y: propData.Data[8].high,
                },
                {
                  x: new Date(propData.Data[9].time * 1000)
                    .toISOString()
                    .slice(5, 11)
                    .replace("T", " "),
                  y: propData.Data[9].high,
                },
              ]}
            />
          
          </VictoryChart>

          {/* ))} */}
        </div>
      ) :
       null
      }
    </div>
  );
};

export default SelectableChartData;
