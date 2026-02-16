// .vitepress/theme/index.ts
import Teek from "vitepress-theme-teek";
import type { Theme } from 'vitepress';
import "vitepress-theme-teek/index.css";
import "./style/index.scss";  // 全局样式
import "vitepress-theme-Teek/vp-plus/nav-blur.scss"; // 导航栏毛玻璃
import TeekLayoutProvider from "./components/TeekLayoutProvider.vue";

import { initComponent } from 'vitepress-plugin-legend/component';
import 'vitepress-mermaid-preview/dist/index.css';

export default {
  extends: Teek,
  enhanceApp({ app }) {
    initComponent(app);
  },
  Layout: TeekLayoutProvider
} satisfies Theme;