/**
 * @Author: forguo
 * @Date: 2022/6/11 13:43
 * @Description: BreadLayout.tsx
 */
import {Breadcrumb} from "antd";
import React from "react";

const BreadLayout: React.FC = () => {
    return (
        <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
    )
}
export default BreadLayout;
