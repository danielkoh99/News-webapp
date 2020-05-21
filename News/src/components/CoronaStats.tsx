import React,{useState,useEffect} from "react"
import CoronaStatsData from './CoronaStatsData'
import { Stats } from "../interfaces/interface";

const CoronaStats:React.FC<Stats>=() =>{
    let [stats, setStats] = useState({
loading:true,
data:[]
});
   function getAllStatistics(){
      fetch("https://disease.sh/v2/all")
      .then(res => {
        if (res.status === 200) {
          console.log(res.status);
          res.json()
          .then(res => {
            console.log(res);
            setStats({
                loading:false,
                data:res
            });
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
   } 
useEffect(() => {
    setTimeout(() => {
        getAllStatistics()
    }, 2000);

    
}, [])  
    return (
      
            <CoronaStatsData stats={stats}/>
         
      
    );
  }
export default CoronaStats