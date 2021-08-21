import { NavLink } from 'react-router-dom';
import { UserOutlined, LaptopOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { useDispatch } from 'react-redux';
import { userUpdateId } from '../../../store/actions/userUpdateId';

const { SubMenu } = Menu;
const { Sider } = Layout;

const Sidebar = () => {
    const dispatch = useDispatch();

    return (
        <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
              <SubMenu key="sub1" icon={<UserOutlined />} title="Users">
                <Menu.Item key="1"><NavLink to="/addUser" onClick={() => dispatch(userUpdateId(null)) }>Add User</NavLink></Menu.Item>
                <Menu.Item key="2"><NavLink to="/">All Users</NavLink></Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
    )
}


export default Sidebar
