// 主题配置文件，会被 ./config.mts 引用
import { defineTeekConfig } from "vitepress-theme-teek/config";

export const teekConfig = defineTeekConfig({
  teekTheme: true,             // 是否启用 teek 主题

  
  // 首页 Banner 配置，位于首页顶部
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
    switchTime: 5000, // 描述信息切换间隔时间，单位：毫秒。descStyle 为 switch 时生效
    switchShuffle: false, // 描述信息是否随机切换，为 false 时按顺序切换。descStyle 为 switch 时生效
  },
  
  // 首页卡片栏配置
  homeCardListPosition: "right", // 首页卡片栏列表位置，当为 left 则在文章列表左侧，当为 right 则在文章列表右侧
  tag: {  enabled: false  },  // 标签卡片配置
  category: {  enabled: false  },  // 分类卡片配置
  
  // 博主信息，显示在首页左边第一个卡片
  blogger: {
    name: "晓林", // 博主昵称
    slogan: "程序猿，自由职业者，博主，英语爱好者，健身达人", // 博主签名
    avatar: "https://image.peterjxl.com/blog/re0.jpg", // 博主头像
    shape: "circle", // 头像风格：square 为方形头像，circle 为圆形头像，circle-rotate 可支持鼠标悬停旋转，circle-rotate-last 将会持续旋转 59s
    circleBgImg: "/blog/bg4.webp", // 背景图片
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

  // 精选文章卡片配置
  topArticle: {
    enabled: true, // 是否启用精选文章卡片
    title: "${icon}精选文章", // 卡片标题
    emptyLabel: "暂无精选文章", // 精选文章为空时的标签
    limit: 5, // 一页显示的数量
    autoPage: false, // 是否自动翻页
    pageSpeed: 4000, // 翻页间隔时间，单位：毫秒。autoPage 为 true 时生效
    dateFormat: "yyyy-MM-dd hh:mm:ss", // 精选文章的日期格式
  },

  // 背景图片配置，将整个网站的背景色改为图片。
  bodyBgImg: {
    imgSrc: [
      "./img/backgruond-city.jpg", 
      "./img/re-background.jpg"
    ], 
    imgOpacity: 1, // 背景图透明度，选值 0.1 ~ 1.0
    imgInterval: 15000, //  当有多张背景图时（imgSrc 为数组），设置切换时间，单位：毫秒
    imgShuffle: false, // 是否随机切换
    mask: false, // 背景图遮罩
    maskBg: "rgba(0, 0, 0, 0.2)", // 背景图遮罩颜色，如果为数字，则是 rgba(0, 0, 0, ${maskBg})，如果为字符串，则作为背景色。mask 为 true 时生效
  },

  // 友情链接卡片配置
  friendLink: {
    enabled: true, // 是否启用友情链接卡片
    list: [
      {
        name: "Teeker",
        desc: "朝圣的使徒，正在走向编程的至高殿堂！",
        avatar: "https://testingcf.jsdelivr.net/gh/Kele-Bingtang/static/user/avatar2.png",
        link: "http://notes.teek.top/",
      },
    ], // 友情链接数据列表
    title: "${icon}友情链接", // 卡片标题
    emptyLabel: "暂无友情链接", // 友情链接为空时的标签
    limit: 5, // 一页显示的数量
    autoScroll: false, // 是否自动滚动
    scrollSpeed: 2500, // 滚动间隔时间，单位：毫秒。autoScroll 为 true 时生效
    autoPage: false, // 是否自动翻页
    pageSpeed: 4000, // 翻页间隔时间，单位：毫秒。autoPage 为 true 时生效
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
    overlay: false, // 代码块底部是否显示展开/折叠遮罩层
    overlayHeight: 400, // 当出现遮罩层时，指定代码块显示高度，当 overlay 为 true 时生效
    langTextTransform: "uppercase", // 语言文本显示样式，为 text-transform 的值:none, capitalize, lowercase, uppercase
    copiedDone: TkMessage => TkMessage.success("复制成功！"), // 复制代码完成后的回调
  },

  // 是否启用侧边栏展开/折叠触发器
  sidebarTrigger: true,
  author: {
    name: "晓林", // 作者名称
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


  // 社交图标，显示于博主信息栏和页脚栏。参考 https://vp.teek.top/guide/icon-use.html#社交图标-iconfont
  social: [
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
    
  ],

});
