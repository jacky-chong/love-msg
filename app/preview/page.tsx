import { Suspense } from "react";
import PreviewPage from "./previewpage/PreviewPage";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading preview...</div>}>
      <PreviewPage />
    </Suspense>
  );
}