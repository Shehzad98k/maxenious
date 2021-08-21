import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import LayoutPanel from './LayoutPanel';
import { Table, Tag, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers, deleteUser } from '../../../store/actions/users';
import { userUpdateId } from '../../../store/actions/userUpdateId';

const Home = () => {
    const dispatch = useDispatch();

    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
      },
      {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
      },
      {
        title: 'Website',
        dataIndex: 'website',
        key: 'website',
      },
      {
        title: 'Introduction',
        dataIndex: 'introduction',
        key: 'introduction',
      },
      {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <Space size="middle">
            <NavLink to={`/editUser/${record._id}`} onClick={() => dispatch(userUpdateId(record._id)) }>Edit</NavLink>
            <a onClick={() => dispatch(deleteUser(record._id)) }>Delete</a>
          </Space>
        ),
      },
    ];

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);

  const users = useSelector((state) => state.users);
  return (
      <LayoutPanel>
          <Table columns={columns} dataSource={users} />
      </LayoutPanel>
  )
}

export default Home
