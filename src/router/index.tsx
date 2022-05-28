import React, { useState } from 'react';
import {Breadcrumb, Layout, Menu } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

import { Routes, Route, useNavigate, To } from "react-router-dom";
import {ConfigProvider} from 'antd';
import './index.less';
import UserList from "../views/user/index";
import UserAdd from "../views/user/add";

function AppRouter() {
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate();
    const handleMenuNav = (item: { key: To; }) => {
        navigate(item.key);
    }
    return (
        <ConfigProvider componentSize='middle'>
                <Layout style={{
                    height: '100vh',
                }}>
                    <Sider theme={"light"} trigger={null} collapsible collapsed={collapsed}>
                        <div className="logo" style={{
                            margin: '16px',
                            height: 24,
                            minHeight: 24,
                            background: '#ccc',
                        }}
                        />
                        <Menu
                            theme="light"
                            mode="inline"
                            defaultSelectedKeys={['/']}
                            items={[
                                { label: '列表', key: '/', icon: <UserOutlined /> }, // 菜单项务必填写 key
                                { label: '编辑', key: 'add', icon: <MenuFoldOutlined /> },
                            ]}
                            onClick={(item) => {
                                handleMenuNav(item)
                            }}
                        />
                    </Sider>
                    <Layout className="site-layout" style={{}}>
                        <Header className="site-layout-background" style={{ padding: 0, background: '#fff'}}>
                            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                                className: 'trigger',
                                onClick: () => setCollapsed(!collapsed),
                            })}
                        </Header>
                        <Layout className="site-layout" style={{
                            padding: '0px 24px 24px'
                        }}>
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>Home</Breadcrumb.Item>
                                <Breadcrumb.Item>List</Breadcrumb.Item>
                                <Breadcrumb.Item>App</Breadcrumb.Item>
                            </Breadcrumb>
                            <Content
                                className="site-layout-background"
                                style={{
                                    padding: 24,
                                }}
                            >
                                <Routes>
                                    <Route path="/" key='UserList' element={ <UserList /> }/>
                                    <Route path="/add/" key='UserAdd' element={<UserAdd />} />
                                </Routes>
                            </Content>
                        </Layout>
                    </Layout>
                </Layout>
        </ConfigProvider>
    )
}

export default AppRouter
