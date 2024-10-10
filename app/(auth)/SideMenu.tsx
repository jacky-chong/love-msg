"use client";

import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { BreadcrumbProps, Divider, Image, Menu, MenuProps } from "antd";
import Sider from "antd/es/layout/Sider";
import { Dispatch, SetStateAction, useState } from "react";

interface Props {
  collapsed: boolean;
  toggleSideNav: () => void;
  setTitle: Dispatch<SetStateAction<string>>;
  setRoutes: Dispatch<SetStateAction<BreadcrumbProps["items"]>>;
}

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    key: "sub1",
    label: "Navigation One",
    icon: <MailOutlined />,
    children: [
      { key: "1", label: "Option 1" },
      { key: "2", label: "Option 2" },
      { key: "3", label: "Option 3" },
      { key: "4", label: "Option 4" },
    ],
  },
  {
    key: "sub2",
    label: "Navigation Two",
    icon: <AppstoreOutlined />,
    children: [
      { key: "5", label: "Option 5" },
      { key: "6", label: "Option 6" },
      {
        key: "sub3",
        label: "Submenu",
        children: [
          { key: "7", label: "Option 7" },
          { key: "8", label: "Option 8" },
        ],
      },
    ],
  },
  {
    key: "sub4",
    label: "Navigation Three",
    icon: <SettingOutlined />,
    children: [
      { key: "9", label: "Option 9" },
      { key: "10", label: "Option 10" },
      { key: "11", label: "Option 11" },
      { key: "12", label: "Option 12" },
    ],
  },
];

const SideMenu = ({ collapsed, toggleSideNav, setTitle, setRoutes }: Props) => {
  const [current, setCurrent] = useState("1");
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <Sider
      width={256}
      collapsedWidth={0}
      collapsible
      collapsed={collapsed}
      trigger={null}
      theme="light"
      className="overflow-y-auto slim-scroll-bar"
    >
      <div className="w-full text-center pt-8">
        <Image
          src="/images/next.svg"
          className="mx-auto !h-auto"
          alt="Love Line"
          width={120}
          height={80}
        />
        <Divider />
      </div>
      <Menu
        mode="inline"
        theme="light"
        defaultSelectedKeys={["sub1"]}
        selectedKeys={[current]}
        onClick={onClick}
        items={items}
      />
    </Sider>
  );
};

export default SideMenu;
