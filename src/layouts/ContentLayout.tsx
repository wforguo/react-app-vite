/**
 * @Author: forguo
 * @Date: 2022/6/11 13:43
 * @Description: ContentLayout.tsx
 */
import React from "react";
import {Route, Routes} from "react-router-dom";
import { Layout } from "antd";
import UserList from "@/views/user";
import UserAdd from "@/views/user/add";
const { Content } = Layout;

const ContentLayout: React.FC = () => {
    return (
        <Content className="site-layout-page">
            <Layout>
                <Routes>
                    <Route path="/" key='/' element={ <UserList /> } />
                    <Route path="/add" key='/add' element={<UserAdd /> } />
                    <Route path='*' element={<div>404</div>} />
                </Routes>
            </Layout>
        </Content>
    )
}
export default ContentLayout;
