import React from 'react';
import './App.css';
import { Layout, Header, Content } from 'react-mdl';


import Main from './components/main';

function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className='header-color' title="Hi, Bridestory" scroll>
        </Header>

        <Content>
            <div className="page-content" />
            <Main/>
        </Content>

        



    </Layout>
</div>
  );
}

export default App;
