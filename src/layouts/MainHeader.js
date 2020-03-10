import React from 'react'
import { Layout, Dropdown, Menu, Row, Col } from "antd"
import Icon from '@ant-design/icons'
import { Link } from "react-router-dom"

const menu = (
  <Menu>
		<Menu.Item key="0">
      <Icon type="smile" />
      个人信息
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="1">
      <Link to="/login">
        <Icon type="logout" />
        退出登录
      </Link>
    </Menu.Item>
	</Menu>
)

const MainHeader = () => {
	return (
		<Layout.Header>
			<Row type="flex" style={{ paddingRight: 20 }}>
			<Col style={{ flex: 1 }}>
          <Icon
            className="trigger"
            type="menu-fold"
          />
        </Col>
				<Col>
          <Dropdown overlay={menu} trigger={['click', 'hover']} placement="bottomCenter">
            <div className="user-info">
              <span className="user-img" />
              <span className="user-name">{'hello'}</span>
            </div>
          </Dropdown>
        </Col>
			</Row>
		</Layout.Header>
	)
}

export default MainHeader