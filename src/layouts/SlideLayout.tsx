/**
 * @Author: forguo
 * @Date: 2022/6/11 13:36
 * @Description: HeaderLayout.tsx
 */
import React from "react";
import {Layout, Menu} from "antd";
import {MenuFoldOutlined, UserOutlined} from "@ant-design/icons";
import {To, useNavigate} from "react-router-dom";
const {Sider} = Layout;

const SlideLayout: React.FC = (props) => {
    const {
        collapsed
    } = props;
    const navigate = useNavigate();
    const handleMenuNav = (item: { key: To; }) => {
        navigate(item.key);
    }
    return (
        <Sider theme={"light"} trigger={null} collapsible collapsed={collapsed} className='site-layout-slide'>
            <Menu
                className='site-layout-menu'
                theme="light"
                mode="inline"
                defaultSelectedKeys={['/']}
                style={{height: '100%', overflowY: "auto"}}
                items={[
                    { label: '列表', key: '/', icon: <UserOutlined /> }, // 菜单项务必填写 key
                    { label: '编辑', key: '/add', icon: <MenuFoldOutlined /> },
                ]}
                onClick={(item) => {
                    handleMenuNav(item)
                }}
            />
        </Sider>
    )
}
export default SlideLayout
