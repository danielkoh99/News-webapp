import  React  from "react";
import "./App.css";
import NewsSearch from "./components/NewsSearch";
import 'antd/dist/antd.css';
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Layout, Menu, BackTop } from 'antd';
import BitcoinNews from './components/CryptoNewsData'
// import SelectableChart from './components/selectableChart'

    import {
      
      BarChartOutlined,
    UpOutlined,
      UserOutlined,
      
     StockOutlined,
     
    } from '@ant-design/icons';
import CoronaNews from "./components/CoronaNews";


    
    const { Sider, Footer,Content } = Layout;
    
   
const App =()=> {


  
    
   
  return (
   
      <Layout>
         <Router>
        <Sider breakpoint="md"
      
        collapsedWidth="0"
        onBreakpoint={broken => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
       style={
         {
           position: 'fixed',
           height:'100vh',
           zIndex:1
         }
       }
      
       
           
        >
          {/* <div className="logo"/> */}
          {/* <img src="News-02.svg" alt=""/> */}
          
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
       
   
   
            <Menu.Item  key="1">
              <UserOutlined />
              <Link to="/">Home</Link>
              {/* <span className="nav-text">Bitcoin news</span> */}
            </Menu.Item>
            <Menu.Item key="2">
              <StockOutlined />
              <Link to="/bitcoin">Bitcoin news</Link>
              {/* <span className="nav-text">nav 2</span> */}
            </Menu.Item>
            <Menu.Item key="3">
           
            <BarChartOutlined />
            <Link to="/corona">CoronaNews</Link>
            </Menu.Item>
           
          

          </Menu>
          </Sider>
        
        
      
        <Layout className="site-layout">
        <Content style={{ padding: '0 50px' }}>
      
        <Switch>
  <Route exact path="/" component={NewsSearch}/>
  <Route exact path="/bitcoin" component={BitcoinNews}/>
  <Route exact path="/corona" component={CoronaNews}/>
</Switch>


        <BackTop visibilityHeight={500}>
      <div style={{
        height:40,
        width:40,
        borderRadius:8,
        backgroundColor: 'grey',
        lineHeight:'40px',
        color:'blue',
        textAlign:'center',
        fontSize:14

      }}><UpOutlined/></div>
    </BackTop>
    <Footer style={{ textAlign:"center"}}>2020 Kohári Dániel</Footer>
    </Content>
   
          </Layout>
         
          
          </Router>
      </Layout>
  );
}


export default App;
