import React, { useState, useEffect } from 'react'
import { Alert, Form, Input, InputNumber, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { createUser, updateUser } from '../../../store/actions/users';

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
};

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

const AddUserForm = () => {
    const [form] = Form.useForm();
    const dispatch = useDispatch();

    //user state
    const [user, setUser] = useState({
        _id: Math.floor(Math.random() * 10000000),
        name: '',
        email: '',
        address: '',
        website: '',
        introduction: ''
    });
    //success message state
    const [message, setMessage] = useState(false);
    //success message close handler 
    const handleClose = () => {
        setMessage(false);
      };

    //edit user
    const userUpdateId = useSelector((state) => state.userUpdateId);
    const editUser = useSelector((state) => userUpdateId ? state.users.find((user) => user._id == userUpdateId) : null);

    //update localstorage array if not already set
    useEffect(() => {
        if(editUser){
            setUser(editUser);
            form.setFieldsValue(editUser);
        }
        
        const users = localStorage.getItem('users')|| [];
        if(users==null){
            localStorage.setItem('users', []);
        }
    }, []);

    //to refresh fields if update id is changed
    useEffect(() => {
        if(userUpdateId==null){
            form.resetFields();
        }
    }, [userUpdateId]);


    const onFinish = (values: any) => {
        if(userUpdateId){
            dispatch(updateUser(userUpdateId, user));
        }else{
            dispatch(createUser(user));
            clear();
            form.resetFields();
        }
        setMessage(true);
    };

    const clear = () => {
        setUser(
            {
                _id: Math.floor(Math.random() * 10000000),
                name: '',
                email: '',
                address: '',
                website: '',
                introduction: ''
            });
        }

    return (
        <React.Fragment>
            {message ? (
                <Alert message={userUpdateId == null ? 'User Added Successfully' : 'User updated Successfully' } 
                type="success" closable afterClose={handleClose} />
            ) : null}
        
            <Form form={form} {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 4 }}>
                    <h2>{userUpdateId == null ? 'Add' : 'Edit' } User</h2>
                </Form.Item>    
                <Form.Item name={['name']} label="Name" rules={[{ required: true }]}>
                    <Input onChange={(e) => setUser({ ...user, name: e.target.value })} />
                </Form.Item>
                <Form.Item name={['email']} label="Email" rules={[{ type: 'email' }]}>
                    <Input onChange={(e) => setUser({ ...user, email: e.target.value })} />
                </Form.Item>
                <Form.Item name={['address']} label="Address">
                    <Input onChange={(e) => setUser({ ...user, address: e.target.value })} />
                </Form.Item>
                <Form.Item name={['website']} label="Website">
                    <Input onChange={(e) => setUser({ ...user, website: e.target.value })} />
                </Form.Item>
                <Form.Item name={['introduction']} label="Introduction">
                    <Input.TextArea onChange={(e) => setUser({ ...user, introduction: e.target.value })} />
                </Form.Item>
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 4 }}>
                    <Button type="primary" htmlType="submit">
                        {userUpdateId == null ? 'Add User' : 'Save' }
                    </Button>
                </Form.Item>
            </Form>
        </React.Fragment>
    )
}

export default AddUserForm


