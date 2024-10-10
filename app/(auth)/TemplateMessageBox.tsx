"use client";
import Show from "@/components/Show";
import { CopyOutlined } from "@ant-design/icons";
import { Button, message } from "antd";
import TextArea from "antd/es/input/TextArea";

type Message = {
  key: string;
  msg: string;
};

const TemplateMessageBox = ({ data }: { data: Message[] }) => {
  const copyToClipboard = (msg: string) => {
    navigator.clipboard
      .writeText(msg)
      .then(() => {
        message.success("Message copied to clipboard!"); // Optional: Provide feedback
      })
      .catch((err) => {
        console.error("Failed to copy: ", err); // Handle errors
      });
  };

  return (
    <Show isTrue={data.length > 0}>
      {data.map((result) => (
        <div className="flex" key={result.key}>
          <TextArea
            value={result.msg}
            rows={3} // Adjust the number of rows as needed
            style={{
              resize: "none",
              width: "100%",
              borderRight: "none",
              borderTopRightRadius: "0",
              borderBottomRightRadius: "0",
            }} // Make textarea responsive
            readOnly
          />
          <Button
            icon={<CopyOutlined />}
            size="middle"
            style={{
              height: "76px",
              borderLeft: "none",
              borderTopLeftRadius: "0",
              borderBottomLeftRadius: "0",
            }} // Set this to match the TextArea height
            onClick={() => copyToClipboard(result.msg)}
          />
        </div>
      ))}
    </Show>
  );
};

export default TemplateMessageBox;
