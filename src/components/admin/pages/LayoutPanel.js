import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import Sidebar from '../components/SideBar';
import { Card } from 'antd';


const { SubMenu } = Menu;
const { Header, Content } = Layout;

const LayoutPanel = (props) => {
    return (
        <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          </Menu>
        </Header>
        <Layout>
          <Sidebar />
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
            </Breadcrumb>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
            <Card bordered={false}>
              {props.children}
            </Card>

            </Content>
          </Layout>
        </Layout>
      </Layout>    
    )
}

export default LayoutPanel
