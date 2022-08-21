import { defineConfig } from "vitepress";
import { transformPreviewComponent } from "vitepress-component-preview-plugin";

export default defineConfig({
  title: "Vitepress-Demo-Component",
  description: "Just playing around.",
  markdown: {
    config(md) {
      md.use(transformPreviewComponent);
    },
  },
});
