"use client";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import Image from "next/image";
import { useRouter } from "next/navigation";

const BirthdayTab = () => {
  const router = useRouter();
  return (
    <div className="flex flex-wrap gap-1">
      <Card
        hoverable
        style={{ width: 180 }}
        cover={
          <Image
            alt="example"
            width={100}
            height={100}
            src="/images/birthday-tab/birthday.png"
          />
        }
        onClick={() => {
          router.push("/birthday");
        }}
      >
        <Meta description="Sample brithday template" />
      </Card>
    </div>
  );
};

export default BirthdayTab;
