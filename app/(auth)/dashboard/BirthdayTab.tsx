"use client";
import { templates } from "@/server/data/systemData";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import Image from "next/image";
import { useRouter } from "next/navigation";

const BirthdayTab = () => {
    const router = useRouter();
    const birthdayTemplates = templates.Birthday;

    return (
        <div className="flex flex-wrap gap-1">
            {birthdayTemplates.map((template) => {
                return (
                    <Card
                        key={template.id}
                        hoverable
                        style={{ width: 180 }}
                        cover={
                            <Image alt="example" width={100} height={100} src={template.picture} />
                        }
                        onClick={() => {
                            router.push(`${template.route}?id=${template.id}`);
                        }}
                    >
                        <Meta description={template.title} />
                    </Card>
                );
            })}
        </div>
    );
};

export default BirthdayTab;
