// 主题配置文件，会被 ./config.mts 引用
import { defineTeekConfig } from "vitepress-theme-teek/config";
import { SocialLinks } from "./config/SocialLinks"; //导入社交链接配置
import { BodyBgImgs } from "./config/bodyBgImg"; //导入社交链接配置
import { vitepressPluginLegend } from 'vitepress-plugin-legend';


export const teekConfig = defineTeekConfig({

  teekTheme: true,          // 启用 teek 主题
  loading: "博客加载中...", // Loading 动画，可直接配置 Loading 文案.为 false 则关闭
  pageStyle: "segment-nav",          // 文章页的样式风格 default, card, segment, card-nav, segment-nav
  homeCardListPosition: "right", // 首页卡片栏列表位置，left 则在文章列表左侧，当为 right 则在文章列表右侧。本来习惯在左侧的，但是配置了看板娘后，左侧的话的移动端样式会崩

  // 首页 Banner 配置
  banner: {
    enabled: true, // 是否启用 Banner
    name: "晓林的博客", // Banner 标题，默认读取 vitepress 的 title 属性
    textColor: "#ffffff", // Banner 字体颜色，bgStyle 为 pure 时为 '#000000'，其他为 '#ffffff'
    titleFontSize: "3.2rem", // 标题字体大小
    descFontSize: "1.4rem", // 描述字体大小
    descStyle: "switch", // 描述信息风格：default 为纯文字渲染风格（如果 description 为数组，则取第一个），types 为文字打印风格，switch 为文字切换风格
    description: [
      "欢迎光临！",
      '跳出三贷之外，不在五险之中',
      '真理愈辩愈明，谎言却总靠沉默维持',
      '你知道吗，打翻咖啡比喝下咖啡让人更有精神',
      '那些说星星好看的人一定没有看过你的眼睛',
      '哪有什么突然想起，只是一直放在心里',
      '对未来的真正慷慨，是把一切献给现在',
      '做了和大多数人一样的选择，会得到和大多数人一样的结果',
      '人一旦在付出努力未能实时获得反馈时，就会变得极其懒惰',
      '年轻人的时薪已经比停车位还低了。停车费有 8 小时上限，年轻人没有'
    ], // 描述信息
    switchTime: 6000, // 描述信息切换间隔时间，单位：毫秒。descStyle 为 switch 时生效
    switchShuffle: false, // 描述信息是否随机切换，为 false 时按顺序切换。descStyle 为 switch 时生效
  },

  // 文章列表配置
  post: {
    coverImgMode: "full", // 文章封面图模式，default 模式下，封面图会显示在文章列表的右边。full 模式下，封面图会变大，尽量铺满整个空间（图片尺寸要足够），且奇数的文章列表封面图会显示在右边，偶数的文章列表封面图显示在左边。
  },

  // 页脚配置
  footerInfo: {
    // 页脚信息，支持 HTML 格式（位于主题版权上方）
    // topMessage: ["下面的内容和图标都可以修改（本条内容也可以隐藏的）"],
    // 页脚信息，支持 HTML 格式（位于主题版权下方）
    bottomMessage: `<a href="https://www.foreverblog.cn/" class="d-inline-block text-muted" target="_blank" rel="external nofollow">
    <img src="https://image.peterjxl.com/blog/foreverblog.webp" alt="点击查看十年之约" style="width:auto;height:11px;"> `,
    // 主题版权配置
    theme: {
      show: true, // 是否显示主题版权，建议显示
      name: "Theme By Teek", // 自定义名称
      link: "https://vp.teek.top", // 自定义链接
    },
    // 博客版权配置
    copyright: {
      show: true, // 是否显示博客版权
      createYear: 2022, // 创建年份
      suffix: "晓林的博客", // 后缀
    },
    // ICP 备案信息配置
    icpRecord: {
      name: "粤 ICP 备 2022067627 号 -1",
      link: "https://beian.miit.gov.cn",
    },
    // 网络安全备案信息配置
    securityRecord: {
      name: "粤公网安备 44011302003646 号",
      link: "http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44011302003646",
    },
  },
  
  // 标签卡片配置
  tag: { 
    enabled: false  
  }, 

  // 分类卡片配置
  category: { 
    enabled: false 
  },  

  // 博主信息，显示在首页左边第一个卡片
  blogger: {
    name: "晓林", // 博主昵称
    slogan: "程序猿，自由职业者，博主，英语爱好者，健身达人", // 博主签名
    avatar: "https://image.peterjxl.com/blog/re0.jpg", // 博主头像
    shape: "circle", // 头像风格：square 为方形头像，circle 为圆形头像，circle-rotate 可支持鼠标悬停旋转，circle-rotate-last 将会持续旋转 59s
    circleBgImg: "https://image.peterjxl.com/blog/sky-time-lapse.jpg", // 背景图片
    circleBgMask: true, // 遮罩层是否显示，仅当 shape 为 circle 且 circleBgImg 配置时有效
    circleSize: 100, // 头像大小
    color: "#ffffff", // 字体颜色
    // 状态，仅当 shape 为 circle 相关值时有效
    status: {
      icon: "😪", // 状态图标
      size: 24, // 图标大小
      title: "困", // 鼠标悬停图标的提示语
    },
  },

  social: SocialLinks,   // 社交图标，显示于博主信息栏和页脚栏。参考 https://vp.teek.top/guide/icon-use.html#社交图标-iconfont
  bodyBgImg: BodyBgImgs,   // 背景图片配置，将整个网站的背景色改为图片。

  // 精选文章卡片配置
  topArticle: {
    enabled: true, // 是否启用精选文章卡片
    limit: 5, // 一页显示的数量
    autoPage: true, // 是否自动翻页
    dateFormat: "yyyy-MM-dd hh:mm:ss", // 精选文章的日期格式
  },

  // 友情链接卡片配置
  friendLink: {
    enabled: true, // 是否启用友情链接卡片
    limit: 5, // 一页显示的数量
    autoScroll: true, // 是否自动滚动
    list: [
      {
        name: "Teeker",
        desc: "朝圣的使徒，正在走向编程的至高殿堂！",
        avatar: "https://testingcf.jsdelivr.net/gh/Kele-Bingtang/static/user/avatar2.png",
        link: "http://notes.teek.top/",
      },
      {
        name: "Evan's blog",
        desc: " Web 前端技术博客，积跬步以至千里",
        avatar: "https://image.peterjxl.com/blog/xugaoyi.jpg",
        link: "https://xugaoyi.com",
      },
      {
        name: "One Blog",
        desc: "明心静性，爱自己",
        avatar: "https://img.xxdevops.cn/blog/avatar/yuwen_avatar.avif",
        link: "https://onedayxyy.cn/",
      },
      {
        name: "二丫讲梵 ",
        desc: "💻学习📝记录🔗分享 ",
        avatar: "https://wiki.eryajf.net/img/logo.png",
        link: "https://wiki.eryajf.net",
      },
      {
        name: "iMaeGoo’s Blog",
        desc: "虹墨空间站",
        avatar: "https://cravatar.cn/avatar/05bb2aa29c9da6ef65fabd321135e7b6?s=200",
        link: "https://www.imaegoo.com",
      },
      {
        name: "怠惰のコエ - imba久期 BLOG",
        desc: "あなた、怠惰ですねー",
        avatar: "https://imba97.cn/uploads/2019/08/imba97-1024-300x300.png",
        link: "https://imba97.cn",
      },
      {
        name: "维基萌",
        desc: "萌即是正义！时不时分享一些 ACG 活动记录与有趣代码的小站！",
        avatar: "https://www.wikimoe.com/upload/siteImg/siteFavicon.png",
        link: "https://www.wikimoe.com",
      },
      {
        name: "陶小桃 Blog",
        desc: "热衷于分享技术的机械专业小哥哥~",
        avatar: "https://image.peterjxl.com/blog/pSuDn6H.png",
        link: "https://www.52txr.cn",
      },
      {
        name: "张洪 Heo",
        desc: "分享设计与科技生活",
        avatar: "https://bu.dusays.com/2022/12/28/63ac2812183aa.png",
        link: "https://blog.zhheo.com",
      },
      {
        name: "葱苓 sama",
        desc: "Don't worry, Be happy.",
        avatar: "https://cdn.jsdelivr.net/gh/ciraos/ciraos-static@main/img/avatar1.avif",
        link: "https://blog.ciraos.top",
      },
    ],
  },

  // 右下角回到顶部配置
  backTop: {
    enabled: true, // 是否启动回到顶部功能
    content: "icon", // 回到顶部按钮的显示内容，可选配置 progress | icon
    done: TkMessage => TkMessage.success("返回顶部成功"), // 回到顶部后的回调
  },

  // 滚动到评论区配置
  toComment: {
    enabled: true, // 是否启动滚动到评论区功能
    done: TkMessage => TkMessage.success("滚动到评论区成功"), // 滚动到评论区后的回调
  },

  // 代码块配置
  codeBlock: {
    enabled: true, // 是否启用新版代码块
    collapseHeight: 700, // 超出高度后自动折叠，设置 true 则默认折叠，false 则默认不折叠
    overlay: true, // 代码块底部是否显示展开/折叠遮罩层
    overlayHeight: 400, // 当出现遮罩层时，指定代码块显示高度，当 overlay 为 true 时生效
    langTextTransform: "uppercase", // 语言文本显示样式，为 text-transform 的值:none, capitalize, lowercase, uppercase
    copiedDone: TkMessage => TkMessage.success("复制成功！"), // 复制代码完成后的回调
  },

  // 文章默认的作者信息
  author: {
    name: "晓林",
  },

  // 站点信息卡片配置
  docAnalysis: {
    enabled: true, // 是否启用站点信息卡片
    createTime: "2020-04-01", // 站点创建时间
    wordCount: true, // 是否开启文章页的字数统计
    readingTime: true, // 是否开启文章页的阅读时长统计
    // 访问量、访客数统计配置
    statistics: {
      provider: "busuanzi", // 网站流量统计提供商
      siteView: true, // 是否开启首页的访问量和排名统计
      pageView: true, // 是否开启文章页的浏览量统计
      tryRequest: false, // 如果请求网站流量统计接口失败，是否重试
      tryCount: 5, // 重试次数，仅当 tryRequest 为 true 时有效
      tryIterationTime: 2000, // 重试间隔时间，单位：毫秒，仅当 tryRequest 为 true 时有效
      permalink: true, // 是否只统计永久链接的浏览量，如果为 false，则统计 VitePress 默认的文档目录链接
    },
    // 自定义现有信息
    overrideInfo: [
      {
        key: "lastActiveTime",
        label: "活跃时间",
        value: (_, currentValue) => (currentValue + "").replace("前", ""),
        show: true,
      },
    ],
  },

  // 赞赏功能配置 https://vp.teek.top/reference/article-config.html#appreciation
  appreciation: {
    position: "doc-after", // 赞赏位置 doc-after 评论区上方；doc-after-popper 以弹框形式出现；aside-bottom 大纲栏下方
    // 赞赏配置
    options: {
      icon: "weChatPay", // 赞赏图标，内置 weChatPay 和 alipay
      expandTitle: "打赏支持", // 展开标题，支持 HTML
      collapseTitle: "下次一定", // 折叠标题，支持 HTML
      content: `<img src='https://image.peterjxl.com/blog/reward.png'>`, // 赞赏内容，支持 HTML
      expand: false, // 是否默认展开，默认 false
    }
  },

  // 文章分享配置
  articleShare: {
    enabled: true, // 是否开启文章链接分享功能
    text: "分享此页面", // 分享按钮文本
    copiedText: "链接已复制", // 复制成功文本
    query: false, // 是否包含查询参数
    hash: false, // 是否包含哈希值
  },

  // 评论配置，内置 Giscus、Twikoo、Waline、Artalk 四种评论插件
  comment: {
    provider: "twikoo", // 评论区提供者
    // 评论区配置项，根据 provider 不同而不同，具体看对应官网的使用介绍
    options: {
      // twikoo 配置，官网：https://twikoo.js.org/
      envId: "https://peterjxl.netlify.app/.netlify/functions/twikoo"
    },
  },

  // 内置 Vite 插件配置
  vitePlugins: {
    sidebarOption: {
      initItems: false,
      collapsed: true, // 开启侧边栏折叠功能。true 默认折叠，false 默认不折叠
    },
  },

  // markdown.plugins, 加载第三方 Markdown-it 插件
  markdown: {
    config: md => {
      vitepressPluginLegend(md);  // 渲染 mermaid
    },
  },
});
