import Provider from "@/components/Provider";
import StyledComponentsRegistry from "@/lib/antd/AntdRegistry";
import theme from "@/themes/theme-config";
import { ConfigProvider } from "antd";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Love Line",
  description: "Love Line",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#FFF0F5]`}>
        <StyledComponentsRegistry>
          <ConfigProvider theme={theme}>
            <Provider>{children}</Provider>
          </ConfigProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
