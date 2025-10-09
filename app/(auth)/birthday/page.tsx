import { Suspense } from "react";
import BirthdayPage from "./shared/BirthdayPage";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading preview...</div>}>
      <BirthdayPage />
    </Suspense>
  );
}