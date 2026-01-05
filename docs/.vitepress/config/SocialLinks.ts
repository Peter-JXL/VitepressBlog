//  社交图标，显示于博主信息栏和页脚栏  参考 https://vp.teek.top/guide/icon-use.html#社交图标-iconfont
import { github, gitee, email, zhihu, } from "../theme/icon/icons";
import type { Social } from "vitepress-theme-teek/config";

export const SocialLinks: Social[] = [
  {
    name: "邮件",
    icon: email,
    iconType: "component",
    link: "mailto:peterjxl@qq.com",
  },
  {
    name: "GitHub",
    icon: github,
    iconType: "component", // 指定为组件类型
    link: "https://github.com/Peter-JXL",
  },
  {
    name: "Gitee",
    icon: gitee,
    iconType: "component", // 指定为组件类型
    link: "https://github.com/Peter-JXL",
  },
  {
    name: "知乎",
    icon: zhihu,
    iconType: "component",
    link: "https://www.zhihu.com/people/PeterJXL",
  }
];
