import React, { useState } from 'react';
import {Breadcrumb, Col, Layout, Menu, Row, Avatar} from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
} from '@ant-design/icons';

import { Routes, Route, useNavigate, To } from "react-router-dom";
import {ConfigProvider} from 'antd';
import '../assets/style/app.less';
import './index.less';
import UserList from "../views/user/index";
import UserAdd from "../views/user/add";
const { Header, Sider, Content } = Layout;

export default function AppRouter () {
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate();
    const handleMenuNav = (item: { key: To; }) => {
        navigate(item.key);
    }
    return (
        <ConfigProvider componentSize='middle'>
            <Layout>
                <Header className="site-layout-background"
                        style={{ padding: 24, background: '#fff', display: 'flex', alignItems: 'center',}}
                >
                    <Row justify={'space-between'} align={'middle'} style={{
                        width: '100%',
                    }}>
                        <Col span={12} style={{
                            display: 'flex',
                            alignItems: 'center',
                        }}>
                            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                                className: 'trigger',
                                onClick: () => setCollapsed(!collapsed),
                            })}
                            <span>
                                    React管理系统
                                </span>
                        </Col>
                        <Col span={12} style={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                        }}>
                            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                        </Col>
                    </Row>
                </Header>
            </Layout>
            <Layout style={{
                height: '100vh',
            }}>
                <Sider theme={"light"} trigger={null} collapsible collapsed={collapsed}>
                    <div className="logo"
                         style={{
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
                            { label: '编辑', key: '/add', icon: <MenuFoldOutlined /> },
                        ]}
                        onClick={(item) => {
                            handleMenuNav(item)
                        }}
                    />
                </Sider>
                <Layout className="site-layout"
                        style={{
                            padding: '0px 24px 24px'
                        }}
                >
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
                            <Route path="/" key='/' element={ <UserList /> } />
                            <Route path="/add" key='/add' element={<UserAdd /> } />
                            <Route path='*' element={<div>404</div>} />
                        </Routes>
                    </Content>
                </Layout>
            </Layout>
        </ConfigProvider>
    )
}
