"use client";
// import { AuthProvider } from "@/lib/hooks/useAuthState";
import { BreadcrumbProps, Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import { useEffect, useState } from "react";
// import SideMenu from "./SideMenu";
import GeneralHeader from "./GeneralHeader";
import SideMenu from "./SideMenu";
import useWindowDimensions from "@/lib/hooks/useWindowDimensions";

const AuthenticatedLayout = ({ children }: { children: React.ReactNode }) => {
  const { width } = useWindowDimensions();
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [routes, setRoutes] = useState<BreadcrumbProps["items"]>([]);
  const [title, setTitle] = useState<string>("");

  useEffect(() => {
    if (width && width > 768) {
      setCollapsed(false);
    } else {
      setCollapsed(true);
    }
  }, [width]);

  const toggleSideNav = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout hasSider className="h-screen">
      <SideMenu
        collapsed={collapsed}
        toggleSideNav={toggleSideNav}
        setTitle={setTitle}
        setRoutes={setRoutes}
      />
      <Layout>
        <GeneralHeader
          toggleSideNav={toggleSideNav}
          collapsed={collapsed}
        ></GeneralHeader>
        <Content className="m-8 overflow-y-auto h-[100%]">
          {/* <Breadcrumb className="!mb-2" items={routes} /> */}
          <div className="text-lg font-semibold ">{title}</div>
          <br />
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};
export default AuthenticatedLayout;
