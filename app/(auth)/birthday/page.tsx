"use client";
import {
  CopyOutlined,
  LinkOutlined,
  PlaySquareOutlined,
} from "@ant-design/icons";
import { Button, Form, Space, Image } from "antd";
import TextArea from "antd/es/input/TextArea";
import TemplateMessageBox from "../TemplateMessageBox";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "antd/es/form/Form";

const App = () => {
  const templateMsg = [
    {
      key: "1",
      msg: "全宇宙最可爱的小仙女，生日快乐！喜欢你没道理，愿你美丽依旧，幸运有你！",
    },
    {
      key: "2",
      msg: "From the moment I met you, I knew my heart had found its home. Today, as we celebrate your special day, I want to remind you how much you mean to me. You are my everything, and I am so grateful for the love we share. Happy birthday, my love!",
    },
  ];

  const [form] = useForm();
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const onFinish = async (values: any) => {};

  const handlePreview = async () => {
    try {
      const values = await form.validateFields();
      const message = encodeURIComponent(values?.message); // Replace with the actual message

      // Navigate to the preview page with id and message in the query parameters
      router.push(`/preview/${message}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col flex gap-2">
      <h1>Wishing Birthday Template</h1>
      <h2>Template Message</h2>
      <Image src="/images/birthday-tab/birthday.png" alt="" preview={false} />
      <TemplateMessageBox data={templateMsg} />

      <Form className="space-y-8" onFinish={onFinish} form={form}>
        <Form.Item name="message">
          <TextArea
            placeholder="Please enter template message! You can paste your templae message here!"
            rows={5} // Adjust the number of rows as needed
            style={{
              resize: "none",
              width: "100%",
            }} // Make textarea responsive
          />
        </Form.Item>
        <Form.Item>
          <Space>
            <Button
              type="primary"
              htmlType="button"
              loading={loading}
              onClick={handlePreview}
            >
              Save & Preview <PlaySquareOutlined />
            </Button>
            <Button type="primary" htmlType="submit" loading={loading}>
              Generate Page Link <LinkOutlined />
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
};

export default App;
