import React from "react";
import { Layout, Dropdown, Menu, Row, Col } from "antd";
import { MenuFoldOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import styled from "styled-components";

const menu = (
  <Menu>
    <Menu.Item key="0">
      个人信息
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="1">
      <Link to="/login">
        退出登录
      </Link>
    </Menu.Item>
  </Menu>
);

const HeaderRow = styled(Row)`
  padding-right: 20px;
  height: 100%;
`;

const HeaderCol = styled(Col)`
  height: 100%;
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const ExtandIcon = styled(MenuFoldOutlined)`
  font-size: 18px;
  color: #FFF;
  cursor: pointer;
`

const MainHeader = () => {
  return (
    <Layout.Header>
      <HeaderRow type="flex">
        <HeaderCol>
          <ExtandIcon />
        </HeaderCol>
        <HeaderCol style={{justifyContent: 'flex-end'}}>
          <Dropdown
            overlay={menu}
            trigger={["click", "hover"]}
            placement="bottomCenter"
          >
            <div className="user-info">
              <span className="user-img" />
              <span className="user-name">{"hello"}</span>
            </div>
          </Dropdown>
        </HeaderCol>
      </HeaderRow>
    </Layout.Header>
  );
};

export default MainHeader;
