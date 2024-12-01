"use client";
import { trpc } from "@/server/client";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Alert, Button, Card, Form, Input } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Page = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const login = trpc.login.loginAccount.useMutation();

  const onFinish = async (values: any) => {
    try {
      setIsLoading(true);
      setErrorMessage("");

      const res = await login.mutateAsync({
        email: values.email,
        password: values.password,
      });

      if (res) {
        router.push("/dashboard");
      } else {
        setErrorMessage("Login failed. Please try again.");
        setIsLoading(false);
      }
    } catch (error) {
      console.error(error);
      setErrorMessage(
        "An error occurred during Login. Please try again later."
      );
      setIsLoading(false);
    }
  };

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center">
      <Image
        src="/images/next.svg"
        className="pb-8"
        alt="MyTicket logo"
        height={200}
        width={200}
      />
      <Card
        title="Love Line"
        styles={{
          header: { textAlign: "center" },
        }}
        bordered
        className="w-full max-w-lg !mx-auto !px-4"
      >
        {errorMessage && (
          <Alert
            showIcon
            message={errorMessage}
            type="error"
            className="mb-4"
          />
        )}
        <Form className="space-y-8" onFinish={onFinish}>
          <Form.Item
            name="email"
            rules={[
              { required: true, message: "Please input your Email!" },
              { type: "email" },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Email"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              { required: true, message: "Please input your Password!" },
              { min: 8, message: "Password must be at least 8 characters." },
              {
                pattern:
                  /(?=^.{8,100}$)(?=.*\d)(?=.*[!@#$%^&*()\-_=+|\\{};:'",.<>?\/~`[\]])(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
                message:
                  "Password must be at least 8 alphanumeric with at least one special character, lowercase and uppercase.",
              },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block loading={isLoading}>
              Log in
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Page;
