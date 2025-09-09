"use client";

import { useSearchParams } from "next/navigation";
import BollanConfetti from "../(auth)/birthday/shared/BollanConfetti";
import { templateContent } from "@/server/data/systemData";

const Page = () => {
    const searchParams = useSearchParams();
    const id = searchParams.get("id") || "";
    const message = searchParams.get("message") || "";
    const templateData = templateContent[id];

    const video = templateData.video;
    const audio = templateData.audio;

    if (!templateData) {
        //return error page
        return;
    }

    return <BollanConfetti video={video} audio={audio} message={message} />;
};

export default Page;
