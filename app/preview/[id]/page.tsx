"use client";

import BollanConfetti from "../../(auth)/birthday/shared/BollanConfetti";

interface PageProps {
  params: {
    id: string;
  };
}

const Page = ({ params: { id: id } }: PageProps) => {
  const message = id ? decodeURIComponent(id) : "";
  return <BollanConfetti message={message} />;
};

export default Page;
