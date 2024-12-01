import {
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { Button, Tooltip } from "antd";
import { Header } from "antd/es/layout/layout";
import React, { useState } from "react";
//import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { deleteSession } from "@/lib/session/session";
import { trpc } from "@/server/client";

interface Props {
  collapsed: boolean;
  toggleSideNav?: () => void;
}

const GeneralHeader = ({ collapsed, toggleSideNav }: Props) => {
  const [username, setUsername] = useState<string>("Jacky");
  const router = useRouter();
  const signOutMutation = trpc.signOut.signOutAccount.useMutation();

  //   useEffect(() => {
  //     const fetchUserName = async () => {
  //       const supabase = createClientComponentClient();

  //       const {
  //         data: { user },
  //       } = await supabase.auth.getUser();

  //       setUsername(user?.user_metadata.firstName);
  //     };
  //     fetchUserName();
  //   }, []);

  const logout = async () => {
    try {
      const response = await signOutMutation.mutateAsync();
      if (response.success) {
        router.push(response.redirect); // Redirect on client-side
      }
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <>
      <Header className="flex items-center !bg-white justify-between !ps-8 !pe-8">
        {React.createElement(
          collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
          {
            className: "trigger",
            onClick: toggleSideNav,
          }
        )}
        <div className="flex items-center">
          <span className="font-bold text-lg">{username}</span>
          <Tooltip title="Logout">
            <Button
              className="ml-4 !border-none !text-[#008CFF] !text-lg !shadow-none !p-0"
              icon={<LogoutOutlined />}
              onClick={logout}
            ></Button>
          </Tooltip>
        </div>
      </Header>
    </>
  );
};
export default GeneralHeader;
