/**
 * @Author: forguo
 * @Date: 2022/6/11 13:43
 * @Description: PageLayout.tsx
 */
import React from "react";
import {Link, Route, Routes} from "react-router-dom";
import {Button, Layout, Result} from "antd";
import UserList from "@/views/user";
import UserAdd from "@/views/user/add";
const { Content } = Layout;

const PageLayout: React.FC = () => {
    return (
        <Content className="site-layout-page">
            <Routes>
                <Route path="/" key='/' element={ <UserList /> } />
                <Route path="/add" key='/add' element={<UserAdd /> } />
                <Route path='*' element={<Result
                    status="404"
                    title="404"
                    subTitle="Sorry, the page you visited does not exist."
                    extra={<Link to='/'>
                        <Button type='primary'>返回首页</Button>
                    </Link>}
                />} />
            </Routes>
        </Content>
    )
}
export default PageLayout;
