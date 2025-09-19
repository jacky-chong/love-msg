"use client";
import { Tabs } from "antd";
import BrithdayTab from "./BirthdayTab";
import ConfessionTab from "./ConfessionTab";

const App = () => {
    const tabItems = [
        {
            key: "Birthday",
            label: `🎂 Birthday`,
            children: <BrithdayTab />,
        },
        {
            key: "Confession",
            label: `💌 Confession`,
            children: <ConfessionTab />,
        },
        {
            key: "Valentine",
            label: `💖 Valentine`,
            children: <>abc</>,
        },
    ];

    return (
        <div>
            <Tabs defaultActiveKey="1" type="card" size={"small"} items={tabItems}  />
        </div>
    );
};

export default App;
