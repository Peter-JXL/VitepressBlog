// .vitepress/theme/index.ts
import Teek from "vitepress-theme-teek";
import type { Theme } from 'vitepress';
import "vitepress-theme-teek/index.css";
import "./style/index.scss";  // 引入 .vitepress/theme/style/index.scss 全局样式
import "vitepress-theme-Teek/vp-plus/nav-blur.scss"; // 导航栏毛玻璃
import { initComponent } from 'vitepress-plugin-legend/component';
import 'vitepress-plugin-legend/dist/index.css';


export default {
  extends: Teek,
  enhanceApp({app}) {
    initComponent(app);  // mermaid 支持
  },
} satisfies Theme;