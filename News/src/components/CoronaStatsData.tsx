import React from "react";
import { Stats } from "../interfaces/interface";
import { VictoryPie, VictoryTooltip } from "victory";

const CoronaStatsData = (props: Stats) => {
  console.log(props.stats.data);

  return (
    <div>
  <h2 >Total cases: {props.stats.data.cases}</h2>
        {props.stats.loading === false ? (
          
 <VictoryPie
 colorScale={["red","green","black"]}
 labelComponent={<VictoryTooltip activateData={true} flyoutWidth={120}/>}
 height={200}

 animate={{onLoad:{duration:3000}}}
 data={[
   { x: "Active", y: props.stats.data.active ,label:"Active: " + props.stats.data.active},
   { x:"Recovered" , y: props.stats.data.recovered,label:"Recovered: " + props.stats.data.recovered },
   { x: "Deaths", y: props.stats.data.deaths,label:"Deaths: "+props.stats.data.deaths }
 ]}
/>
        ):null}
     
    </div>
    // <Container>
    //   {props.stats.data.loading === false ? (
    //     <Content>
    //       <Text
    //         style={{ marginLeft: "auto", marginRight: "auto", fontWeight: "bold",fontSize:20 }}
    //       >
    //         Total cases: {stats.data.cases}
    //       </Text>
    //       <PieChart
    //         data={[
    //           {
    //             cases: stats.data.active,
    //             name: "Active",
    //             legendFontColor: "#7F7F7F",
    //             legendFontSize: 15,
    //             color: "red",
    //           },
    //           {
    //             cases: stats.data.deaths,
    //             name: "Deaths",
    //             legendFontColor: "#7F7F7F",
    //             legendFontSize: 15,
    //             color: "black",
    //           },
    //           {
    //             cases: stats.data.recovered,
    //             name: "Recovered",
    //             legendFontColor: "#7F7F7F",
    //             legendFontSize: 15,
    //             color: "green",
    //           },
    //         ]}
    //         width={deviceWidth - 50}
    //         height={230}
    //         chartConfig={chartConfig}
    //         accessor="cases"
    //         // backgroundColor="blue"
    //         paddingLeft="20"
    //       />
    //       <Text style={{ marginLeft: "auto", marginRight: "auto", fontWeight: "bold",fontSize:30 }}>
    //       Scroll down to see news
    //       </Text>

    //       <Icon type="Entypo" name="arrow-with-circle-down" style={{fontSize:100, marginLeft:"auto",marginRight:"auto",marginTop:150}}/>

    //     </Content>

    //   ) : (
    //     <Spinner
    //       style={{ marginTop: "auto", marginBottom: "auto" }}
    //       color="blue"
    //     />
    //   )}
    // </Container>
  );
};
export default CoronaStatsData;
