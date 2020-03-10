import React from "react";
import { Layout } from "antd";
import SiderMenu from "./SiderMenu";
import MainHeader from "./MainHeader";
import styled from "styled-components";

const Content = styled(Layout.Content)`
  background-color: #fff;
  padding: 10px;
`;

const BasicLayout = ({ route, children }) => {
  return (
    <Layout>
      <SiderMenu routes={route.childRoutes} />
      {/* 左侧菜单导航 */}
      <Layout>
        <MainHeader />
        <Content>
          {children}
          {/* <MainFooter></MainFooter> */}
        </Content>
      </Layout>
    </Layout>
  );
};

export default BasicLayout;
