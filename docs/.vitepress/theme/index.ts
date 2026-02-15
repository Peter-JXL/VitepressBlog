// .vitepress/theme/index.ts
import Teek from "vitepress-theme-teek";
import type { Theme } from 'vitepress';
import "vitepress-theme-teek/index.css";
import "./style/index.scss";  // 引入 .vitepress/theme/style/index.scss 全局样式
import "vitepress-theme-Teek/vp-plus/nav-blur.scss"; // 导航栏毛玻璃

export default {
  extends: Teek
}