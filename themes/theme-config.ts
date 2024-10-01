import type { ThemeConfig } from "antd";

const theme: ThemeConfig = {
  token: {
    colorPrimary: "#FF6F61",
    colorSuccess: "#28a745",
    colorError: "#dc3545",
    colorWarning: "#ffc107",
    colorTextBase: "#333333",
    colorTextSecondary: "#FF1493",
    colorBgBase: "#FFF0F5",
  },
  components: {
    Menu: {
      colorText: "#004F83", // Menu text blue
      colorLinkActive: "#004F83", // Active link blue
    },
    Modal: { wireframe: true },
  },
};

export default theme;
