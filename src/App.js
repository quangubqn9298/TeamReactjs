import { Layout } from 'antd';
import './App.css';
import HeaderLayout from './components/layouts/headerLayout';
import UserLayout from './components/layouts/UserLayout';
import Footer1 from './components/Footer';


const { Header, Footer, Content } = Layout;

function App() {
  return (
    <Layout className="layout">
      <Header className="Header">
        <HeaderLayout></HeaderLayout>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content"><UserLayout></UserLayout></div>
      </Content>

      <Footer>
        <Footer1></Footer1>
      </Footer>

    </Layout>
  );
}

export default App;
