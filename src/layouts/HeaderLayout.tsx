/**
 * @Author: forguo
 * @Date: 2022/6/11 13:36
 * @Description: HeaderLayout.tsx
 */
import React, {useState} from "react";
import {Avatar, Col, Layout, Row} from "antd";
import {MenuFoldOutlined, MenuUnfoldOutlined} from "@ant-design/icons";
const { Header } = Layout;

const HeaderLayout: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <Layout>
            <Header className="site-layout-header">
                <Row justify={'space-between'} align={'middle'} style={{
                    width: '100%',
                }}>
                    <Col span={12} style={{
                        display: 'flex',
                        alignItems: 'center',
                    }}>
                        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'site-layout-collapsed-trigger',
                            onClick: () => setCollapsed(!collapsed),
                        })}
                        <span className="logo"
                              style={{
                                  margin: '24px',
                                  width: 24,
                                  height: 24,
                                  minHeight: 24,
                                  background: '#001529',
                              }}
                        />
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
    )
}

export default HeaderLayout;
