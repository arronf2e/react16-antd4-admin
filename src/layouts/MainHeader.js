import React from 'react'
import { Layout, Dropdown, Menu, Row, Col } from "antd"
import Icon from '@ant-design/icons'
import { Link } from "react-router-dom"
import styled from 'styled-components'

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

const HeaderRow = styled(Row)`
  padding-right: 20px;
  height: 100%;
`

const HeaderCol = styled(Col)`
  height: 100%;
`

const MainHeader = () => {
  return (
    <Layout.Header>
      <HeaderRow type="flex">
        <HeaderCol style={{ flex: 1 }}>
          <Icon
            className="trigger"
            type="menu-fold"
          />
        </HeaderCol>
        <HeaderCol>
          <Dropdown overlay={menu} trigger={['click', 'hover']} placement="bottomCenter">
            <div className="user-info">
              <span className="user-img" />
              <span className="user-name">{'hello'}</span>
            </div>
          </Dropdown>
        </HeaderCol>
      </HeaderRow>
    </Layout.Header>
  )
}

export default MainHeader