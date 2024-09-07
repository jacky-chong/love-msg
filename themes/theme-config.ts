import type { ThemeConfig } from "antd";

const theme: ThemeConfig = {
  token: {
    colorPrimary: "#00BB9B",
  },
  components: {
    Menu: {
      colorText: "#004F83",
      colorLinkActive: "#004F83",
    },
    Modal: { wireframe: true },
  },
};

export default theme;
