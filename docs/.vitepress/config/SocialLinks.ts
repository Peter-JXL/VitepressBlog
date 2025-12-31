//  社交图标，显示于博主信息栏和页脚栏  参考 https://vp.teek.top/guide/icon-use.html#社交图标-iconfont
import { gitee, email, WhatsApp, telegram } from "../theme/icon/icons";
import type { Social } from "vitepress-theme-teek/config";

export const SocialLinks: Social[] = [
  {
    name: "Gitee",
    icon: gitee,
    iconType: "component", // 指定为组件类型
    link: "https://gitee.com/SeasirHyde/teek-hyde",
  },
  {
    name: "邮件",
    icon: email,
    iconType: "component",
    link: "mailto:peterjxl@qq.com",
  },
  {
    name: "WhatsApp",
    icon: WhatsApp,
    iconType: "component", // 指定为组件类型
    link: "https://api.whatsapp.com/send/?phone=13527063419&text=Hello",
  },
  {
    name: "telegram",
    icon: telegram,
    iconType: "component", // 指定为组件类型
    link: "https://t.me/seasir_Bot",
  },

  //
  {
    icon: "icon-youjian",
    name: "邮件",
    link: "mailto:peterjxl@qq.com",
  },
  {
    icon: "icon-github",
    name: "GitHub",
    link: "https://github.com/Peter-JXL",
  },
  // {
  //   icon: "icon-gitee",
  //   name: "Gitee",
  //   link: "https://gitee.com/peterjxl",
  // },
  {
    icon: "icon-csdn",
    name: "CSDN",
    link: "https://peterjxl.blog.csdn.net/",
  },

  {
    icon: "icon-bokeyuan",
    name: "博客园",
    link: "https://www.cnblogs.com/PeterJXL/",
  },

  {
    icon: "icon-zhihu",
    name: "知乎",
    link: "https://www.zhihu.com/people/PeterJXL",
  },

  {
    icon: "icon-rss",
    name: "RSS",
    link: "https://www.peterjxl.com/rss.xml",
  },
  // {
  //   icon: "icon-juejin",
  //   name: "掘金",
  //   link: "https://juejin.cn/user/465848663017144",
  // },
  // {
  //   icon: "icon-jianshu",
  //   name: "简书",
  //   link: "https://www.jianshu.com/u/9bca3159ae44",
  // },
  // {
  //   icon: "icon-sf",
  //   name: "思否",
  //   link: "https://segmentfault.com/u/peterjxl",
  // },

  // {
  //   icon: "icon-bilibili",
  //   name: "Bilibili",
  //   link: "https://space.bilibili.com/53069777",
  // },
];
