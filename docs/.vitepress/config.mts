// 主配置文件
import { defineConfig } from 'vitepress'
import { teekConfig } from "./teekConfig";
import { HeadData } from "./config/Head"; 
import type { HeadConfig } from "vitepress"; // 在文件顶部添加类型导入
import { RSSOptions, RssPlugin } from "vitepress-plugin-rss";
import { vitepressPluginLegend } from "vitepress-plugin-legend";

const baseUrl = "https://www.peterjxl.com";
const RSS: RSSOptions = {
  title: "晓林的博客",
  baseUrl,
  copyright: "Copyright 2022-present 晓林",
  filename: 'rss.xml'
};

// https://vitepress.dev/reference/site-config
export default defineConfig({
 
  title: "晓林的博客",
  description: "个人博客, 编程基础, Java, 效率软件, 读书, 英语, 健身, 生活",
  head: HeadData as HeadConfig[],
  extends: teekConfig,
  cleanUrls: true,
  lang: "zh-CN",
  lastUpdated: true,

  // https://vitepress.dev/zh/guide/sitemap-generation
  sitemap: {
    hostname: 'https://www.peterjxl.com'
  },

  markdown: {
    math: true,
    lineNumbers: true,  // 开启行号
    image: {
      lazyLoading: true,  // 默认禁用；设置为 true 可为所有图片启用懒加载。
    },
    // 更改容器默认值标题
    container: {
      tipLabel: "提示",
      warningLabel: "警告",
      dangerLabel: "危险",
      infoLabel: "信息",
      detailsLabel: "详细信息",
    },
    config(md) {
      vitepressPluginLegend(md); 
    },
  },

  vite: {
    // ↓↓↓↓↓
    // plugins: [RssPlugin(RSS)], //开启 RSS 功能
    // ↑↑↑↑↑
  },
  
  themeConfig: {

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      {
        text: '💻 编程',
        items: [
          {
            text: '📚 计算机基础',
            items:[
              { text: '计算机简史', link: '/Computer/History/' },
              { text: '数字电路', link: '/Computer/Digital-Circuit/' },
              { text: '计算机组成原理', link: '/Computer/Principles-of-Computer-Organization/' },
              { text: '操作系统', link: '/Computer/Operating-System/' },
              { text: 'Linux', link: '/Computer/Linux/' },
              { text: '计算机网络', link: '/Computer/Network/' },
              { text: '数据库', link: '/Computer/MySQL/' },
              { text: '编程工具', link: '/Computer/Programming-Tool/' },
              { text: '装机', link: '/Computer/Assembling/' },
            ]
          },
          {
            text: '🎨 前端',
            items: [
              { text: 'Node', link: '/Front-End/Node/' },
            ]
          },
        ]
      },
      {
        text: '☕ Java',
        items: [
          { text: 'JavaSE', link: '/JavaSE/' },
          { text: 'Java 高级', link: '/JavaSenior/' },
          {
            text: 'JavaEE', items: [
              { text: '构建、依赖管理', link: '/JavaEE/1-Build/' },
              { text: 'Ant', link: '/JavaEE/Ant/' },
              { text: 'Maven', link: '/JavaEE/Maven/' },
              { text: '日志框架', link: '/JavaEE/Log4j/' },
              { text: 'Junit', link: '/JavaEE/Junit/' },
              { text: 'JDBC', link: '/JavaEE/JDBC/' },
              { text: 'XML-JSON', link: '/JavaEE/XML-JSON/' }
            ]
          },
          {
            text: 'JavaWeb', items: [
              { text: '服务器软件', link: '/JavaWeb/Web-Container/' },
              { text: '环境管理和配置管理-科普篇', link: '/JavaWeb/environment-and-code-version-manage/' },
              { text: 'Servlet', link: '/JavaWeb/Servlet/' },
            ]
          },
          {
            text: 'Spring', items: [
              { text: 'Spring基础', link: '/Spring-Basic/' },
            ]
          },
          {
            text: '主流框架', items: [
              { text: 'Redis', link: '/Java-Framework/Redis/' },
              { text: 'Mybatis', link: '/Java-Framework/Mybatis/' },
              { text: 'Lucene', link: '/Java-Framework/Lucene/' },
              { text: 'Elasticsearch', link: '/Java-Framework/Elasticsearch/' },
              { text: 'RabbitMQ', link: '/Java-Framework/RabbitMQ/' },
              { text: 'MyCat', link: '/Java-Framework/MyCat/' },
              { text: 'Lombok', link: '/Java-Framework/Lombok/' }
            ]
          },
          {
            text: 'SpringMVC', items: [
              { text: 'SpringMVC 基础', link: '/SpringMVC-Basic/' },
            ]
          },
          {
            text: 'SpringBoot', items: [
              { text: 'SpringBoot 基础', link: '/SpringBoot-Basic/' },
            ]
          },
        ]
      },
      
      {
        text: '🛠️软件',
        items: [
          { text: 'Windows 使用技巧', link: '/Windows/' },
          { text: '手机相关技巧', link: '/Phone/' },
          { text: '最全面的输入法教程', link: '/TypeWriting/' },
          { text: '最全面的浏览器教程', link: '/Browser/' },
          { text: 'Office', link: '/Office/' },
          { text: '图片类工具', link: '/Picture/' },
          { text: '效率类工具', link: '/Productive-Tool/' },
          { text: '最全面的 RSS 教程', link: '/RSS/' },
          { text: '码字工具', link: '/Word-Processing-Tool/' },
          { text: '各大平台', link: '/Internet-Giant/' },
        ]
      },    
      {
        text: '👔 职场',
        items: [
          { text: '校招', link: '/Job/on-campus-recruitment/' },
          { text: '五险一金', link: '/Job/Social-welfare/' },
          { text: '职场规划', link: '/Job/career-planning/' },
          { text: '关于离职', link: '/Job/dimission/' },
          { text: '杂谈', link: '/Job/other/' },
          { text: '自媒体', link: '/WeMedia/' },
        ]
      },
      
      {
        text: '📚 学习',
        items: [
          {
            text: '📖 读书',
            items: [
              { text: '读书工具', link: '/Reading/tool/' },
              { text: '走进科学', link: '/Reading/notes/science/' },
            ]
          },
          {
            text: '🌍 英语',
            items: [
              { text: '从零开始学英语', link: '/English/Learning-English-from-the-beginning/' },
              { text: '英语兔的相关视频', link: '/English/Yingyutu/' },
              { text: 'Larry 想做技术大佬的相关视频', link: '/English/Larry/' }
            ]
          },
          {
            text: '🏛️ 政治',
            items: [          
              { text: '新闻合订本', link: '/News/' },
              { text: '反腐', link: '/Anti-Corruption/' },
              { text: 'GFW', link: '/GFW/' },
              { text: '404 内容', link: '/404-content/' },
              { text: '审查与自我审查', link: '/Censorship/' },
              { text: '互联网', link: '/Internet/' },
              { text: '战争', link: '/War/' },
              { text: '读书笔记', link: '/Reading/notes/' },
            ]
          },
          {
            text: '💰 经济',
            items: [
              { text: '关于税', link: '/Economy/revenue/' },
              { text: '理财', link: '/Economy/management/' }
            ]
          },
          {
            text: '💪 健身',
            items: [
              { text: '睡眠', link: '/Fitness/Sleep/' },
              { text: '皮肤', link: '/Fitness/Skin/' },
              { text: '口腔健康', link: '/Fitness/Oral-Health/' },
              { text: '学会呼吸', link: '/Fitness/Breathe/' },
              { text: '健身日志', link: '/Fitness/Log/' },
            ] 
          },
          {
            text: '🏠 其他',
            items:[
              { text: '驾驶技能', link: '/driving-skill/' },
              { text: '租房与买房', link: '/property/' },
              { text: '厨艺', link: '/cooking/' },
            ]
          }
        ]
      },
      {
        text: '🎮 娱乐',
        items: [
          { 
            text: '电影', items: [
              // { text: '电影软件', link: '/movie-software/' },  
              { text: '电影推荐', link: '/Movie-Recommend/' },  
            ] 
          },
          { 
            text: '电视剧', link: '/teleplay/'
          },
          { 
            text: '漫画', items: [
              { text: '漫画软件', link: '/Comic-Software/' },  
              { text: '漫画推荐', link: '/Comic-Recommend/' },  
            ] 
          },
          { 
            text: '游戏', items: [
              { text: 'Steam', link: '/Steam/' },  
              { text: '三国杀', link: '/Sanguosha/' },  
              { text: '求生之路', link: '/L4D2/' },  
            ] 
          },
          { 
            text: '小说', link: '/Fiction/'
          },
        ]
      },
  
      {
        text: '👨‍💻 关于',
        items: [
          { text: '关于本站', link: '/About/Web/' },
          { text: '关于博主', link: '/About/me/' },
          { text: '欢迎打赏', link: '/About/reward/' },
          { text: '网站动态', link: '/About/WebLog/' },
          { text: '文章归档', link: '/archives/' },
          { text: '友人帐', link: '/About/friend-link/' },
          { text: '从零开始搭建博客', link: '/Blog/' },
          { text: '搭建邮件服务器', link: '/About/BuildMail/' },
          { text: '本站分享', link: '/About/share/' },
          {
            text: '🌈 生活',
            items: [
              { text: '2022', link: '/2022/' },
              { text: '2023', link: '/2023/' },
              { text: '2024', link: '/2024/' },
              { text: '2025', link: '/2025/' },
            ]
          },    
        ]
      }
    ],

    // 文章大纲配置
    outline: {
      level: [2, 4],  // 显示 2~4 级标题
      label: "本文导航",  // 文章大纲上方的标签
    },

    lastUpdatedText: "上次更新时间",

    // 前后文章跳转按钮的文字
    docFooter: {
      prev: "上一页",  
      next: "下一页",
    },
  }
})
