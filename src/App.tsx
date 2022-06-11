/**
 * @Author: forguo
 * @Date: 2022/6/11 17:22
 * @Description: App.js
 */
import {Layout} from 'antd';
import {ConfigProvider} from 'antd';
import HeaderLayout from "@/layouts/HeaderLayout";
import SlideLayout from '@/layouts/SlideLayout';
import BreadLayout from '@/layouts/BreadLayout';
import PageLayout from "@/layouts/PageLayout";
import FooterLayout from '@/layouts/FooterLayout';

export default function App () {
    return (
        <ConfigProvider componentSize='middle'>
            <Layout>
                <HeaderLayout />
                <Layout className='site-layout-container'>
                    <SlideLayout />
                    <Layout className='site-layout-content'>
                        <BreadLayout />
                        <PageLayout />
                        <FooterLayout />
                    </Layout>
                </Layout>
            </Layout>
        </ConfigProvider>
    )
}
