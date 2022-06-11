import React from 'react';
import {Layout} from 'antd';
import {ConfigProvider} from 'antd';

import HeaderLayout from "@/layouts/HeaderLayout";
import SlideLayout from '@/layouts/SlideLayout';
import BreadLayout from '@/layouts/BreadLayout';
import ContentLayout from "@/layouts/ContentLayout";
import FooterLayout from '@/layouts/FooterLayout';

export default function AppRouter () {
    return (
        <ConfigProvider componentSize='middle'>
            <HeaderLayout />
            <Layout className='site-layout-container'>
                <SlideLayout />
                <Layout className='site-layout-content'>
                    <BreadLayout />
                    <ContentLayout />
                    <FooterLayout />
                </Layout>
            </Layout>
        </ConfigProvider>
    )
}
