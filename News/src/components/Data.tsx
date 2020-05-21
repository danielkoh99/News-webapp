import React from "react";
import { Articles } from "../interfaces/interface";
import { Spin, Card, Empty } from "antd";

const Data = (props: Articles) => {
  console.log(props.articles.data);
  return (
    <div>
      {props.articles.data.status === "ok" ? (
        <div>
          {props.articles.data.articles.map((item: Articles) => (
            <React.Fragment key={item.title}>
              <Card
                title={<a href={item.url}>{item.title}</a>}
              
                style={{ width: 100 + "%", marginBottom:20 }}
              >
                  
                <img src={item.urlToImage} alt="img" style={{width:70 +'%'}}/> 
                
                
            <h2>{item.description}</h2>
                <h4>Published at: {item.publishedAt.replace("T", " ").slice(0, -1)}</h4>

          <h5>Source: {item.source.name}</h5>
              </Card>
            </React.Fragment>
          ))}
        </div>
      ) : (
        <Empty style={{height:100 + 'vh'}}>
        <Spin tip="Loading..."></Spin>
        </Empty>
      )}
      
    </div>
  );
};
export default Data;

