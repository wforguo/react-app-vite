/**
 * @Author: forguo
 * @Date: 2022/5/28 14:33
 * @Description: 添加
 */
import React from 'react';
import { Button } from 'antd';
import FormRender, { useForm } from 'form-render';

const schema = {
    type: 'object',
    properties: {
        input1: {
            title: '简单输入框',
            type: 'string',
            required: true,
        },
        select1: {
            title: '单选',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['早', '中', '晚'],
        }
    }
};

const Add = () => {
    const form = useForm();
    const onFinish = (formData: any, errors: any) => {
        console.log('formData:', formData, 'errors', errors);
    };
    return (
        <div>
            <FormRender form={form} schema={schema} onFinish={onFinish} />
            <Button type="primary" onClick={form.submit}>
                提交
            </Button>
        </div>
    );
};

export default Add;
