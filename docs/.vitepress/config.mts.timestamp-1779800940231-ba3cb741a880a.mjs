// docs/.vitepress/config.mts
import { defineConfig } from "file:///D:/Projects/VitepressBlog/node_modules/vitepress/dist/node/index.js";

// docs/.vitepress/teekConfig.ts
import { defineTeekConfig } from "file:///D:/Projects/VitepressBlog/node_modules/vitepress-theme-teek/es/config/index.mjs";

// docs/.vitepress/theme/icon/icons.ts
var github = `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50"><path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"></path></svg>`;
var gitee = `<svg t="1743875298298" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2388" width="200" height="200"><path d="M512 1024C229.2224 1024 0 794.7776 0 512S229.2224 0 512 0s512 229.2224 512 512-229.2224 512-512 512z m259.1488-568.8832H480.4096a25.2928 25.2928 0 0 0-25.2928 25.2928l-0.0256 63.2064c0 13.952 11.3152 25.2928 25.2672 25.2928h177.024c13.9776 0 25.2928 11.3152 25.2928 25.2672v12.6464a75.8528 75.8528 0 0 1-75.8528 75.8528H366.592a25.2928 25.2928 0 0 1-25.2672-25.2928v-240.1792a75.8528 75.8528 0 0 1 75.8272-75.8528h353.9456a25.2928 25.2928 0 0 0 25.2672-25.2928l0.0768-63.2064a25.2928 25.2928 0 0 0-25.2672-25.2928H417.152a189.6192 189.6192 0 0 0-189.6192 189.6448v353.9456c0 13.9776 11.3152 25.2928 25.2928 25.2928h372.9408a170.6496 170.6496 0 0 0 170.6496-170.6496v-145.408a25.2928 25.2928 0 0 0-25.2928-25.2672z" fill="#C71D23" p-id="2389"></path></svg>`;
var email = `<svg t="1743875620187" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="16697" width="200" height="200"><path d="M512 0A512 512 0 1 1 0 512 512 512 0 0 1 512 0z" fill="#ff485f" p-id="16698" data-spm-anchor-id="a313x.search_index.0.i13.70183a81yTylfI" class="selected"></path><path d="M726.980923 295.384615H280.123077A63.606154 63.606154 0 0 0 216.615385 358.892308v295.187692a63.606154 63.606154 0 0 0 63.507692 63.507692h446.857846a63.606154 63.606154 0 0 0 63.507692-63.507692v-295.187692A63.606154 63.606154 0 0 0 726.980923 295.384615z m25.403077 358.715077a25.481846 25.481846 0 0 1-25.403077 25.403077H280.123077a25.481846 25.481846 0 0 1-25.403077-25.403077v-295.187692a25.481846 25.481846 0 0 1 25.403077-25.403077h446.857846a25.481846 25.481846 0 0 1 25.403077 25.403077z" fill="#FFFFFF" p-id="16699"></path><path d="M693.720615 396.307692l-190.148923 119.965539-190.148923-119.965539a19.062154 19.062154 0 0 0-20.322461 32.236308l200.073846 126.247385a19.062154 19.062154 0 0 0 10.161231 2.934153h0.630153a19.062154 19.062154 0 0 0 10.161231-2.934153l200.073846-126.247385a19.101538 19.101538 0 1 0-20.48-32.236308z" fill="#FFFFFF" p-id="16700"></path></svg>`;
var zhihu = `<svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 6.5C13 6.5 10.8 7.4 10 9C9.51 9.98001 8.55729 12.4482 7.62444 14.8649C7.03429 16.3938 6.45208 17.9021 6 19C6.10872 19 6.22531 19.0026 6.34865 19.0054C7.92699 19.041 10.6087 19.1014 12 14H15V23H9C7.34315 23 6 24.3431 6 26H14.5C14 31 12.5 35 6 41C14.5255 43.3682 17.2183 32.2763 17.9036 26H25V24C25 23.4477 24.5523 23 24 23H18.0848C18.1062 21.5957 18.0777 19.9283 18.0482 18.1954C18.0244 16.8051 18 15.3726 18 14H24.5V12.5C24.5 11.5 24 11 23.3125 11L13 11L14.5 6.5Z" fill="#1570E1"/>
<path d="M23.5 41L17 32L20 30C20 30 22 33 23.5 35C25 37 23.5 41 23.5 41Z" fill="#1570E1"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M39 14.5C39 14.2239 38.7761 14 38.5 14H30.5C30.2239 14 30 14.2239 30 14.5V33.5C30 33.7761 30.2239 34 30.5 34H32.1396C32.3548 34 32.5459 34.1377 32.614 34.3419L32.9271 35.2812C32.9656 35.3967 33.0974 35.4513 33.2063 35.3969L35.6833 34.1584C35.8916 34.0542 36.1212 34 36.3541 34H38.5C38.7761 34 39 33.7761 39 33.5V14.5ZM27.5 11C27.2239 11 27 11.2239 27 11.5V36.5C27 36.7761 27.2239 37 27.5 37H30.6615C30.8659 37 31.0498 37.1245 31.1257 37.3143L31.9193 39.2982C31.9627 39.4068 32.0898 39.4551 32.1944 39.4028L36.8944 37.0528C36.9639 37.0181 37.0404 37 37.118 37H41.5C41.7761 37 42 36.7761 42 36.5V11.5C42 11.2239 41.7761 11 41.5 11H27.5Z" fill="#1570E1"/></svg>`;

// docs/.vitepress/config/SocialLinks.ts
var SocialLinks = [
  {
    name: "\u90AE\u4EF6",
    icon: email,
    iconType: "component",
    link: "mailto:peterjxl@qq.com"
  },
  {
    name: "GitHub",
    icon: github,
    iconType: "component",
    // 指定为组件类型
    link: "https://github.com/Peter-JXL"
  },
  {
    name: "Gitee",
    icon: gitee,
    iconType: "component",
    // 指定为组件类型
    link: "https://github.com/Peter-JXL"
  },
  {
    name: "\u77E5\u4E4E",
    icon: zhihu,
    iconType: "component",
    link: "https://www.zhihu.com/people/PeterJXL"
  }
];

// docs/.vitepress/config/BackgroundImg.ts
var Imgs = [
  "https://image.peterjxl.com/blog/133464975_p0.jpg",
  // 大昔涟
  "https://image.peterjxl.com/blog/X@226083260Bubai-20260513.jpg",
  // 荧妹
  "https://image.peterjxl.com/blog/144852565.jpg",
  // 绯英
  "https://image.peterjxl.com/blog/X@ZZZZZMjiangzz-20260513.jpg",
  // 绯英
  "https://image.peterjxl.com/blog/X@FMakrZHnl46IP8D-20260513.jpg",
  // 绯英
  "https://image.peterjxl.com/blog/X@yutttang-20260513.jpg",
  // 绯英
  "https://image.peterjxl.com/blog/X@BUM_HICO_20260423.jpg",
  // 银狼
  "https://image.peterjxl.com/blog/144130853_p0.jpg",
  // 银狼
  "https://image.peterjxl.com/blog/143933879_p0.jpg",
  // 银狼
  "https://image.peterjxl.com/blog/144370432_p0.jpg",
  //爱弥斯 漂泊者 合照
  "https://image.peterjxl.com/blog/X@ddengart-2019818370867294543.jpg",
  // 爱弥斯
  "https://image.peterjxl.com/blog/X@vvsimyeol-1874745010434068680.jpg",
  // 珂莱塔
  "https://image.peterjxl.com/blog/142653295_p0.jpg",
  // 绝区零 妄想天使
  "https://image.peterjxl.com/blog/142097456_p0.jpg",
  // 绝区零 妄想天使
  "https://image.peterjxl.com/blog/140937524_p0.jpg",
  // 鸣潮 爱弥斯
  "https://image.peterjxl.com/blog/120189621_p0.jpg",
  // 鸣潮 长离
  "https://image.peterjxl.com/blog/142598882_p0.jpg",
  // 鸣潮 西格莉卡
  "https://image.peterjxl.com/blog/120717943_p0.jpg",
  // 绝区零 鲨鱼
  "https://image.peterjxl.com/blog/142788495_p0.jpg",
  // 宇宙
  "https://image.peterjxl.com/blog/140381254_p0.jpg",
  // 哥伦比娅
  "https://image.peterjxl.com/blog/129010553_p0.jpg",
  // 遐蝶
  "https://image.peterjxl.com/blog/137205050_p0.jpg",
  // 昔涟
  "https://image.peterjxl.com/blog/137094784_p0.jpg",
  // 三月七组合
  "https://image.peterjxl.com/blog/142207274_p0.jpg",
  // 火花
  "https://image.peterjxl.com/blog/141913369_p0.jpg",
  // 花火火花
  "https://image.peterjxl.com/blog/134420820_p0.jpg",
  // 流萤
  "https://image.peterjxl.com/blog/142094263_p0.jpg",
  // Fate
  "https://image.peterjxl.com/blog/2026-3-12-20.jpg",
  // 绝区零 妄想天使
  "https://image.peterjxl.com/blog/2026-3-12-7.jpg",
  // 绝区零 妄想天使
  "https://image.peterjxl.com/blog/2026-02-23.jpg",
  // 绝区零 妄想天使
  "https://image.peterjxl.com/blog/140830123_p0.jpg",
  // 绝区零 妄想天使
  "https://image.peterjxl.com/blog/142223607_p1.jpg",
  // 初音
  "https://image.peterjxl.com/blog/142223607_p3.jpg",
  // 初音
  "https://image.peterjxl.com/blog/141743180_p0.jpg",
  // 初音
  "https://image.peterjxl.com/blog/96189957_p0.jpg",
  // 神子
  "https://image.peterjxl.com/blog/127166786_p0.jpg",
  // 神子 瑞希
  "https://image.peterjxl.com/blog/128019376_p0.jpg",
  // 鸣神 八条
  "https://image.peterjxl.com/blog/134732001_p0.jpg",
  // 死之执政
  "https://image.peterjxl.com/blog/142052076_p0.jpg",
  // 爱弥斯
  "https://image.peterjxl.com/blog/142210069_p0.jpg",
  // 爱弥斯
  "https://image.peterjxl.com/blog/140831812_p0.jpg",
  // 鸣潮 爱弥斯
  "https://image.peterjxl.com/blog/140161372_p0.jpg",
  // 原神群星 哥伦比娅
  "https://image.peterjxl.com/blog/141274290_p0.jpg",
  // 哥伦比娅 & 桑多涅
  "https://image.peterjxl.com/blog/141050669_p0.jpg",
  // 哥伦比娅
  "https://image.peterjxl.com/blog/140002549_p1.jpg",
  // 哥伦比娅
  "https://image.peterjxl.com/blog/139811173_p0.jpg",
  // 哥伦比娅
  "https://image.peterjxl.com/blog/138613692_p0.jpg",
  // 哥伦比娅
  "https://image.peterjxl.com/blog/140014451_p0.jpg",
  // 哥伦比娅
  "https://image.peterjxl.com/blog/139980512_p0.jpg",
  // 哥伦比娅 雅珂达 派蒙
  // 原神
  "https://image.peterjxl.com/blog/134.jpg",
  // 胡桃
  "https://image.peterjxl.com/blog/125077204_p0.jpg",
  // 胡桃
  "https://image.peterjxl.com/blog/122658264_p0.jpg",
  // 胡桃 & 芙芙 
  "https://image.peterjxl.com/blog/138439477_p0.jpg",
  // 芙芙 
  "https://image.peterjxl.com/blog/136656625_p0.jpg",
  // 芙芙
  "https://image.peterjxl.com/blog/102890180_p1.png",
  // 莱依拉
  "https://image.peterjxl.com/blog/138422625_p0.jpg",
  // 奈芙尔 原神 雅珂达 
  "https://image.peterjxl.com/blog/104486407_p0.jpg",
  // 雷电将军
  "https://image.peterjxl.com/blog/131754182_p0.jpg",
  // 丝柯克
  "https://image.peterjxl.com/blog/2026-02-04.jpg",
  // 兹白
  // 崩坏 3
  "https://image.peterjxl.com/blog/Elysia.jpg",
  // 爱莉
  "https://image.peterjxl.com/blog/100649660_p1.png",
  // 爱莉
  "https://image.peterjxl.com/blog/124205470_p0.jpg",
  // 爱莉
  "https://image.peterjxl.com/blog/101693777_p0.jpg",
  // 爱莉
  "https://image.peterjxl.com/blog/134156383_p0.jpg",
  // 爱莉
  "https://image.peterjxl.com/blog/140659332_p0.jpg",
  // 爱莉希雅
  "https://image.peterjxl.com/blog/137445639_p0.jpg",
  // 爱丽希雅 崩铁
  "https://image.peterjxl.com/blog/2024-6-2-9.png",
  // 松雀
  "https://image.peterjxl.com/blog/2024-11-10-12.png",
  // 松雀
  "https://image.peterjxl.com/blog/2024-4-8-2.png",
  // 松雀和瑟莉姆
  "https://image.peterjxl.com/blog/2024-10-12.png",
  // 薇塔
  "https://image.peterjxl.com/blog/2024-09-26-3.png",
  // 薇塔和花火
  "https://image.peterjxl.com/blog/2024-11-10-4.png",
  // 薇塔和花火
  "https://image.peterjxl.com/blog/2024-11-10-6.png",
  // 薇塔和花火
  "https://image.peterjxl.com/blog/2024-10-12-4.jpg",
  // 格蕾修
  // 绝区零
  "https://image.peterjxl.com/blog/122710477_p0.jpg",
  // 妮可 & 鲨鱼妹
  "https://image.peterjxl.com/blog/X@rina_0A-2024-7-6.jpg",
  // 妮可 超市
  "https://image.peterjxl.com/blog/121269323_p0.jpg",
  // 鲨鱼妹
  "https://image.peterjxl.com/blog/123353563_p0.png",
  // 柏妮思
  // 鸣潮
  "https://image.peterjxl.com/blog/2025-6-12.jpg",
  // 卡提希娅 飘然远去的长梦-画师：撸卜
  "https://image.peterjxl.com/blog/131473201_p0.jpg",
  // 卡提希娅
  "https://image.peterjxl.com/blog/2025-08-29.jpg",
  // 今汐
  "https://image.peterjxl.com/blog/121206620_p1.png",
  // 长离
  "https://image.peterjxl.com/blog/120767239_p0.png",
  // 长离
  "https://image.peterjxl.com/blog/119879001_p0.png",
  // 吟霖
  "https://image.peterjxl.com/blog/125117828_p0.jpg",
  // 吟霖
  "https://image.peterjxl.com/blog/125670168_p0.jpg",
  // 吟霖
  "https://image.peterjxl.com/blog/134417892_p0.jpg",
  // 奥古斯塔
  "https://image.peterjxl.com/blog/134440043_p0.jpg",
  // 奥古斯塔
  "https://image.peterjxl.com/blog/134452846_p0.jpg",
  // 奥古斯塔
  "https://image.peterjxl.com/blog/2025-09-02.jpg",
  // 奥古斯塔
  "https://image.peterjxl.com/blog/139955382_p0.jpg",
  // 奥古斯塔
  "https://image.peterjxl.com/blog/139955461_p0.jpg",
  // 奥古斯塔
  "https://image.peterjxl.com/blog/2025-04-07.jpg",
  // 坎特蕾拉
  "https://image.peterjxl.com/blog/2025-3-23.jpg",
  // 坎特蕾拉
  "https://image.peterjxl.com/blog/137499724_p0.jpg",
  // 赞妮
  "https://image.peterjxl.com/blog/139754531_p0.jpg",
  // 琳奈
  "https://image.peterjxl.com/blog/2025-12-25-2.jpg",
  // 琳奈
  "https://image.peterjxl.com/blog/2025-12-25-1.jpg",
  // 琳奈
  // 星穹铁道    
  "https://image.peterjxl.com/blog/2025-05-04.jpg",
  // 遐蝶
  "https://image.peterjxl.com/blog/2025-02-07.jpg",
  // 遐蝶
  "https://image.peterjxl.com/blog/128181590_p0.jpg",
  // 遐蝶
  "https://image.peterjxl.com/blog/128063483_p0.jpg",
  // 遐蝶
  "https://image.peterjxl.com/blog/130724632_p2.jpg",
  // 风堇
  "https://image.peterjxl.com/blog/121642710_p1.png",
  // 云璃
  "https://image.peterjxl.com/blog/2025-12-31.jpg",
  // 流萤
  "https://image.peterjxl.com/blog/119791514_p0.jpg",
  // 流萤
  "https://image.peterjxl.com/blog/116629910_p0.jpg",
  // 流萤
  "https://image.peterjxl.com/blog/2025-09-05.jpg",
  // 海瑟音
  "https://image.peterjxl.com/blog/121154474_p11.jpg",
  // Kafka
  "https://image.peterjxl.com/blog/111072628_p0.png",
  // Kafka
  "https://image.peterjxl.com/blog/109349799_p0.jpg",
  // Kafka      
  "https://image.peterjxl.com/blog/116526272_p0.jpg",
  // 花火
  "https://image.peterjxl.com/blog/117466601_p0.png",
  // 黄泉、花火
  "https://image.peterjxl.com/blog/139436858_p0.jpg",
  // 花火
  "https://image.peterjxl.com/blog/124529422_p0.png",
  // 三月七，星
  "https://image.peterjxl.com/blog/2025-10-17.jpg",
  // 三月七
  "https://image.peterjxl.com/blog/2025-09-30.jpg",
  // 长夜月
  "https://image.peterjxl.com/blog/2024-12-26-4.jpg",
  // 知更鸟
  "https://image.peterjxl.com/blog/125643183_p0.png",
  // 停云
  "https://image.peterjxl.com/blog/126508781_p0.jpg",
  // 大黑塔
  "https://image.peterjxl.com/blog/2025-02-07-6.jpg",
  // 大黑塔
  "https://image.peterjxl.com/blog/126424846_p0.jpg",
  // 大黑塔
  "https://image.peterjxl.com/blog/129916649_p0.jpg",
  // 缇宝
  "https://image.peterjxl.com/blog/131998699_p0.jpg",
  // 缇宝
  // 日常
  "https://image.peterjxl.com/blog/backgruond-city.jpg",
  // re: zero
  "https://image.peterjxl.com/blog/re-background.jpg",
  "https://image.peterjxl.com/blog/Emilia.jpg",
  "https://image.peterjxl.com/blog/Emilia-2.jpg",
  // Miku
  "https://image.peterjxl.com/blog/120586024_p0.png",
  "https://image.peterjxl.com/blog/114179851_p0.jpg",
  "https://image.peterjxl.com/blog/120814179_p0.jpg",
  // 孤独摇滚
  "https://image.peterjxl.com/blog/112280380_p0.png",
  "https://image.peterjxl.com/blog/103907445_p0.png",
  "https://image.peterjxl.com/blog/109565821_p0.png",
  // 二次元
  "https://image.peterjxl.com/blog/180.jpg",
  // 下拉裙摆
  "https://image.peterjxl.com/blog/4.2b.png",
  // 尼尔·机械纪元
  "https://image.peterjxl.com/blog/116406855_p0.png",
  // 莉可莉丝
  "https://image.peterjxl.com/blog/2020-04-03_16-23-36.png",
  // 鬼灭之刃
  "https://image.peterjxl.com/blog/114613535_p0.png",
  // 葬送的芙莉莲
  "https://image.peterjxl.com/blog/76601747_p1.jpg",
  // 国家队
  "https://image.peterjxl.com/blog/62494753_p0.jpg",
  // 埃罗芒
  "https://image.peterjxl.com/blog/Mikasa.jpg",
  // 三笠
  "https://image.peterjxl.com/blog/saber.jpg",
  // fate
  "https://image.peterjxl.com/blog/123800363_p0.jpg",
  // 夏日重现
  "https://image.peterjxl.com/blog/gojo-eyes-jujutsu-kaisen-hd-wallpaper-uhdpaper.com-208@2@a.jpg",
  // 五条悟
  "https://image.peterjxl.com/blog/135718569_p0.jpg",
  // 蕾塞
  // 冰菓
  "https://image.peterjxl.com/blog/690112.jpg",
  "https://image.peterjxl.com/blog/bingguo.jpg",
  "https://image.peterjxl.com/blog/walk-in-space.png",
  // 太空
  "https://image.peterjxl.com/blog/miaomiao.jpg",
  // 妙妙！
  "https://image.peterjxl.com/blog/MEME-Kaofish.jpg"
  // 烤鱼
];

// docs/.vitepress/teekConfig.ts
import { vitepressPluginLegend } from "file:///D:/Projects/VitepressBlog/node_modules/vitepress-plugin-legend/dist/index.js";
var teekConfig = defineTeekConfig({
  teekTheme: true,
  // 启用 teek 主题
  loading: "\u535A\u5BA2\u52A0\u8F7D\u4E2D...",
  // Loading 动画，可直接配置 Loading 文案.为 false 则关闭
  pageStyle: "segment-nav",
  // 文章页的样式风格 default, card, segment, card-nav, segment-nav
  homeCardListPosition: "left",
  // 首页卡片栏列表位置
  articleAnalyze: {
    imageViewer: {
      enabled: false
      // 禁用图片查看器
    }
  },
  // 首页 Banner 配置
  banner: {
    enabled: true,
    // 是否启用 Banner
    name: "\u6653\u6797\u7684\u535A\u5BA2",
    // Banner 标题，默认读取 vitepress 的 title 属性
    textColor: "#ffffff",
    // Banner 字体颜色，bgStyle 为 pure 时为 '#000000'，其他为 '#ffffff'
    titleFontSize: "3.2rem",
    // 标题字体大小
    descFontSize: "1.4rem",
    // 描述字体大小
    descStyle: "switch",
    // 描述信息风格：default 为纯文字渲染风格（如果 description 为数组，则取第一个），types 为文字打印风格，switch 为文字切换风格
    description: [
      "\u6B22\u8FCE\u5149\u4E34\uFF01",
      "\u8DF3\u51FA\u4E09\u8D37\u4E4B\u5916\uFF0C\u4E0D\u5728\u4E94\u9669\u4E4B\u4E2D",
      "\u771F\u7406\u6108\u8FA9\u6108\u660E\uFF0C\u8C0E\u8A00\u5374\u603B\u9760\u6C89\u9ED8\u7EF4\u6301",
      "\u4F60\u77E5\u9053\u5417\uFF0C\u6253\u7FFB\u5496\u5561\u6BD4\u559D\u4E0B\u5496\u5561\u8BA9\u4EBA\u66F4\u6709\u7CBE\u795E",
      "\u90A3\u4E9B\u8BF4\u661F\u661F\u597D\u770B\u7684\u4EBA\u4E00\u5B9A\u6CA1\u6709\u770B\u8FC7\u4F60\u7684\u773C\u775B",
      "\u54EA\u6709\u4EC0\u4E48\u7A81\u7136\u60F3\u8D77\uFF0C\u53EA\u662F\u4E00\u76F4\u653E\u5728\u5FC3\u91CC",
      "\u5BF9\u672A\u6765\u7684\u771F\u6B63\u6177\u6168\uFF0C\u662F\u628A\u4E00\u5207\u732E\u7ED9\u73B0\u5728",
      "\u505A\u4E86\u548C\u5927\u591A\u6570\u4EBA\u4E00\u6837\u7684\u9009\u62E9\uFF0C\u4F1A\u5F97\u5230\u548C\u5927\u591A\u6570\u4EBA\u4E00\u6837\u7684\u7ED3\u679C",
      "\u4EBA\u4E00\u65E6\u5728\u4ED8\u51FA\u52AA\u529B\u672A\u80FD\u5B9E\u65F6\u83B7\u5F97\u53CD\u9988\u65F6\uFF0C\u5C31\u4F1A\u53D8\u5F97\u6781\u5176\u61D2\u60F0",
      "\u5E74\u8F7B\u4EBA\u7684\u65F6\u85AA\u5DF2\u7ECF\u6BD4\u505C\u8F66\u4F4D\u8FD8\u4F4E\u4E86\u3002\u505C\u8F66\u8D39\u6709 8 \u5C0F\u65F6\u4E0A\u9650\uFF0C\u5E74\u8F7B\u4EBA\u6CA1\u6709"
    ],
    // 描述信息
    switchTime: 6e3,
    // 描述信息切换间隔时间，单位：毫秒。descStyle 为 switch 时生效
    switchShuffle: false
    // 描述信息是否随机切换，为 false 时按顺序切换。descStyle 为 switch 时生效
  },
  // 文章列表配置 https://vp.teek.top/reference/post-config.html#post
  post: {
    postStyle: "list",
    // 文章列表风格
    excerptPosition: "top",
    // 文章摘要位置
    showMore: true,
    // 是否显示更多按钮
    moreLabel: "\u9605\u8BFB\u5168\u6587 >",
    // 更多按钮文字
    emptyLabel: "\u6682\u65E0\u6587\u7AE0",
    // 文章列表为空时的标签
    coverImgMode: "full",
    // 文章封面图模式
    showCapture: false,
    // 是否在摘要位置显示文章部分文字，当为 true 且不使用 frontmatter.describe 和 <!-- more --> 时，会自动截取前 300 个字符作为摘要
    splitSeparator: false,
    // 文章信息（作者、创建时间、分类、标签等信息）是否添加 | 分隔符
    transition: true,
    // 是否开启过渡动画
    transitionName: "tk-slide-fade",
    // 自定义过渡动画名称
    listStyleTitleTagPosition: "right",
    // 列表模式下的标题标签位置（postStyle 为 list）
    cardStyleTitleTagPosition: "left",
    // 卡片模式下的标题标签位置（postStyle 为 card）
    defaultCoverImg: Imgs
    // 默认封面图地址，如果不设置封面图则使用默认封面图地址
  },
  // 页脚配置
  footerInfo: {
    // 页脚信息，支持 HTML 格式（位于主题版权上方）
    // topMessage: ["下面的内容和图标都可以修改（本条内容也可以隐藏的）"],
    // 页脚信息，支持 HTML 格式（位于主题版权下方）
    bottomMessage: `<a href="https://www.foreverblog.cn/" class="d-inline-block text-muted" target="_blank" rel="external nofollow">
    <img src="https://image.peterjxl.com/blog/foreverblog.webp" alt="\u70B9\u51FB\u67E5\u770B\u5341\u5E74\u4E4B\u7EA6" style="width:auto;height:11px;"> `,
    // 主题版权配置
    theme: {
      show: true,
      // 是否显示主题版权，建议显示
      name: "Theme By Teek",
      // 自定义名称
      link: "https://vp.teek.top"
      // 自定义链接
    },
    // 博客版权配置
    copyright: {
      show: true,
      // 是否显示博客版权
      createYear: 2022,
      // 创建年份
      suffix: "\u6653\u6797\u7684\u535A\u5BA2"
      // 后缀
    },
    // ICP 备案信息配置
    icpRecord: {
      name: "\u7CA4 ICP \u5907 2022067627 \u53F7 -1",
      link: "https://beian.miit.gov.cn"
    },
    // 网络安全备案信息配置
    securityRecord: {
      name: "\u7CA4\u516C\u7F51\u5B89\u5907 44011302003646 \u53F7",
      link: "http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44011302003646"
    }
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
    name: "\u6653\u6797",
    // 博主昵称
    slogan: "\u7A0B\u5E8F\u733F\uFF0C\u81EA\u7531\u804C\u4E1A\u8005\uFF0C\u535A\u4E3B\uFF0C\u82F1\u8BED\u7231\u597D\u8005\uFF0C\u5065\u8EAB\u8FBE\u4EBA",
    // 博主签名
    avatar: "https://image.peterjxl.com/blog/re0.jpg",
    // 博主头像
    shape: "circle",
    // 头像风格：square 为方形头像，circle 为圆形头像，circle-rotate 可支持鼠标悬停旋转，circle-rotate-last 将会持续旋转 59s
    circleBgImg: "https://image.peterjxl.com/blog/sky-time-lapse.jpg",
    // 背景图片
    circleBgMask: true,
    // 遮罩层是否显示，仅当 shape 为 circle 且 circleBgImg 配置时有效
    circleSize: 100,
    // 头像大小
    color: "#ffffff",
    // 字体颜色
    // 状态，仅当 shape 为 circle 相关值时有效
    status: {
      icon: "\u{1F62A}",
      // 状态图标
      size: 24,
      // 图标大小
      title: "\u56F0"
      // 鼠标悬停图标的提示语
    }
  },
  social: SocialLinks,
  // 社交图标，显示于博主信息栏和页脚栏。参考 https://vp.teek.top/guide/icon-use.html#社交图标-iconfont
  // 背景图配置，将整个网站的背景色改为图片
  bodyBgImg: {
    imgSrc: Imgs,
    // 背景图地址，支持单张或多张（数组形式）
    imgOpacity: 1,
    // 背景图透明度，选值 0.1 ~ 1.0
    imgInterval: 3e4,
    //  当有多张背景图时（imgSrc 为数组），设置切换时间，单位：毫秒
    imgShuffle: false,
    // 是否随机切换
    mask: false
    // 背景图遮罩
  },
  // 精选文章卡片配置
  topArticle: {
    enabled: true,
    // 是否启用精选文章卡片
    limit: 5,
    // 一页显示的数量
    autoPage: false,
    // 是否自动翻页
    dateFormat: "yyyy-MM-dd hh:mm:ss"
    // 精选文章的日期格式
  },
  // 友情链接卡片配置
  friendLink: {
    enabled: true,
    // 是否启用友情链接卡片
    limit: 5,
    // 一页显示的数量
    autoScroll: false,
    // 是否自动滚动
    list: [
      {
        name: "Teeker",
        desc: "\u671D\u5723\u7684\u4F7F\u5F92\uFF0C\u6B63\u5728\u8D70\u5411\u7F16\u7A0B\u7684\u81F3\u9AD8\u6BBF\u5802\uFF01",
        avatar: "https://testingcf.jsdelivr.net/gh/Kele-Bingtang/static/user/avatar2.png",
        link: "http://notes.teek.top/"
      },
      {
        name: "Evan's blog",
        desc: " Web \u524D\u7AEF\u6280\u672F\u535A\u5BA2\uFF0C\u79EF\u8DEC\u6B65\u4EE5\u81F3\u5343\u91CC",
        avatar: "https://image.peterjxl.com/blog/xugaoyi.jpg",
        link: "https://xugaoyi.com"
      },
      {
        name: "One Blog",
        desc: "\u660E\u5FC3\u9759\u6027\uFF0C\u7231\u81EA\u5DF1",
        avatar: "https://img.xxdevops.cn/blog/avatar/yuwen_avatar.avif",
        link: "https://onedayxyy.cn/"
      },
      {
        name: "\u4E8C\u4E2B\u8BB2\u68B5 ",
        desc: "\u{1F4BB}\u5B66\u4E60\u{1F4DD}\u8BB0\u5F55\u{1F517}\u5206\u4EAB ",
        avatar: "https://wiki.eryajf.net/img/logo.png",
        link: "https://wiki.eryajf.net"
      },
      {
        name: "iMaeGoo\u2019s Blog",
        desc: "\u8679\u58A8\u7A7A\u95F4\u7AD9",
        avatar: "https://cravatar.cn/avatar/05bb2aa29c9da6ef65fabd321135e7b6?s=200",
        link: "https://www.imaegoo.com"
      },
      {
        name: "\u6020\u60F0\u306E\u30B3\u30A8 - imba\u4E45\u671F BLOG",
        desc: "\u3042\u306A\u305F\u3001\u6020\u60F0\u3067\u3059\u306D\u30FC",
        avatar: "https://imba97.cn/uploads/2019/08/imba97-1024-300x300.png",
        link: "https://imba97.cn"
      },
      {
        name: "\u7EF4\u57FA\u840C",
        desc: "\u840C\u5373\u662F\u6B63\u4E49\uFF01\u65F6\u4E0D\u65F6\u5206\u4EAB\u4E00\u4E9B ACG \u6D3B\u52A8\u8BB0\u5F55\u4E0E\u6709\u8DA3\u4EE3\u7801\u7684\u5C0F\u7AD9\uFF01",
        avatar: "https://www.wikimoe.com/upload/siteImg/siteFavicon.png",
        link: "https://www.wikimoe.com"
      },
      {
        name: "\u9676\u5C0F\u6843 Blog",
        desc: "\u70ED\u8877\u4E8E\u5206\u4EAB\u6280\u672F\u7684\u673A\u68B0\u4E13\u4E1A\u5C0F\u54E5\u54E5~",
        avatar: "https://image.peterjxl.com/blog/pSuDn6H.png",
        link: "https://www.52txr.cn"
      },
      {
        name: "\u5F20\u6D2A Heo",
        desc: "\u5206\u4EAB\u8BBE\u8BA1\u4E0E\u79D1\u6280\u751F\u6D3B",
        avatar: "https://img.zhheo.com/i/67d8fa75943e4.webp",
        link: "https://blog.zhheo.com"
      },
      {
        name: "\u8471\u82D3 sama",
        desc: "Don't worry, Be happy.",
        avatar: "https://cdn.jsdelivr.net/gh/ciraos/ciraos-static@main/img/avatar1.avif",
        link: "https://blog.ciraos.top"
      }
    ]
  },
  // 右下角回到顶部配置
  backTop: {
    enabled: true,
    // 是否启动回到顶部功能
    content: "icon",
    // 回到顶部按钮的显示内容，可选配置 progress | icon
    done: (TkMessage) => TkMessage.success("\u8FD4\u56DE\u9876\u90E8\u6210\u529F")
    // 回到顶部后的回调
  },
  // 滚动到评论区配置
  toComment: {
    enabled: true,
    // 是否启动滚动到评论区功能
    done: (TkMessage) => TkMessage.success("\u6EDA\u52A8\u5230\u8BC4\u8BBA\u533A\u6210\u529F")
    // 滚动到评论区后的回调
  },
  // 代码块配置
  codeBlock: {
    enabled: true,
    // 是否启用新版代码块
    collapseHeight: 700,
    // 超出高度后自动折叠，设置 true 则默认折叠，false 则默认不折叠
    overlay: true,
    // 代码块底部是否显示展开/折叠遮罩层
    overlayHeight: 400,
    // 当出现遮罩层时，指定代码块显示高度，当 overlay 为 true 时生效
    langTextTransform: "uppercase",
    // 语言文本显示样式，为 text-transform 的值:none, capitalize, lowercase, uppercase
    copiedDone: (TkMessage) => TkMessage.success("\u590D\u5236\u6210\u529F\uFF01")
    // 复制代码完成后的回调
  },
  // 文章默认的作者信息
  author: {
    name: "\u6653\u6797"
  },
  // 站点信息卡片配置
  docAnalysis: {
    enabled: true,
    // 是否启用站点信息卡片
    createTime: "2020-04-01",
    // 站点创建时间
    wordCount: true,
    // 是否开启文章页的字数统计
    readingTime: true,
    // 是否开启文章页的阅读时长统计
    // 访问量、访客数统计配置
    statistics: {
      provider: "busuanzi",
      // 网站流量统计提供商
      siteView: true,
      // 是否开启首页的访问量和排名统计
      pageView: true,
      // 是否开启文章页的浏览量统计
      tryRequest: false,
      // 如果请求网站流量统计接口失败，是否重试
      tryCount: 5,
      // 重试次数，仅当 tryRequest 为 true 时有效
      tryIterationTime: 2e3,
      // 重试间隔时间，单位：毫秒，仅当 tryRequest 为 true 时有效
      permalink: true
      // 是否只统计永久链接的浏览量，如果为 false，则统计 VitePress 默认的文档目录链接
    },
    // 自定义现有信息
    overrideInfo: [
      {
        key: "lastActiveTime",
        label: "\u6D3B\u8DC3\u65F6\u95F4",
        value: (_, currentValue) => (currentValue + "").replace("\u524D", ""),
        show: true
      }
    ]
  },
  // 赞赏功能配置 https://vp.teek.top/reference/article-config.html#appreciation
  appreciation: {
    position: "doc-after",
    // 赞赏位置 doc-after 评论区上方；doc-after-popper 以弹框形式出现；aside-bottom 大纲栏下方
    // 赞赏配置
    options: {
      icon: "weChatPay",
      // 赞赏图标，内置 weChatPay 和 alipay
      expandTitle: "\u6253\u8D4F\u652F\u6301",
      // 展开标题，支持 HTML
      collapseTitle: "\u4E0B\u6B21\u4E00\u5B9A",
      // 折叠标题，支持 HTML
      content: `<img src='https://image.peterjxl.com/blog/reward.png'>`,
      // 赞赏内容，支持 HTML
      expand: false
      // 是否默认展开，默认 false
    }
  },
  // 文章分享配置
  articleShare: {
    enabled: true,
    // 是否开启文章链接分享功能
    text: "\u5206\u4EAB\u6B64\u9875\u9762",
    // 分享按钮文本
    copiedText: "\u94FE\u63A5\u5DF2\u590D\u5236",
    // 复制成功文本
    query: false,
    // 是否包含查询参数
    hash: false
    // 是否包含哈希值
  },
  // 评论配置，内置 Giscus、Twikoo、Waline、Artalk 四种评论插件
  comment: {
    provider: "twikoo",
    // 评论区提供者
    // 评论区配置项，根据 provider 不同而不同，具体看对应官网的使用介绍
    options: {
      // twikoo 配置，官网：https://twikoo.js.org/
      envId: "https://twikoo.peterjxl.com/"
    }
  },
  // 内置 Vite 插件配置
  vitePlugins: {
    sidebarOption: {
      resolveRule: "rewrites",
      // 可选 rewrites, filePath 详见 https://vp.teek.top/guide/permalink.html
      collapsed: true
      // 开启侧边栏折叠功能。true 默认折叠，false 默认不折叠
    }
  },
  // markdown.plugins, 加载第三方 Markdown-it 插件
  markdown: {
    config: (md) => {
      vitepressPluginLegend(md);
    }
  }
});

// docs/.vitepress/config/Head.ts
var HeadData = [
  // 图标
  ["link", { rel: "icon", href: "https://image.peterjxl.com/blog/re0.jpg" }],
  // Algolia 站点验证
  ["meta", { name: "algolia-site-verification", content: "58960DE7BCAEC562" }],
  // 浏览器控制台输出
  [
    "script",
    {},
    `
        console.info('%c\u54CE\u5440\uFF0C\u88AB\u4F60\u53D1\u73B0\u4E86\u{1F61C}\uFF01\u5E0C\u671B\u4F60\u80FD\u559C\u6B22\u8FD9\u4E2A\u535A\u5BA2\uFF01', 'color: #007acc; font-size: 24px; font-weight: bold;');
        console.info('_______________#########_______________________ ');
        console.info('______________############_____________________ ');
        console.info('______________#############____________________ ');
        console.info('_____________##__###########___________________ ');
        console.info('____________###__######_#####__________________ ');
        console.info('____________###_#######___####_________________ ');
        console.info('___________###__##########_####________________ ');
        console.info('__________####__###########_####_______________ ');
        console.info('________#####___###########__#####_____________ ');
        console.info('_______######___###_########___#####___________ ');
        console.info('_______#####___###___########___######_________ ');
        console.info('______######___###__###########___######_______ ');
        console.info('_____######___####_##############__######______ ');
        console.info('____#######__#####################_#######_____ ');
        console.info('____#######__##############################____ ');
        console.info('___#######__######_#################_#######___ ');
        console.info('___#######__######_######_#########___######___ ');
        console.info('___#######____##__######___######_____######___ ');
        console.info('___#######________######____#####_____#####____ ');
        console.info('____######________#####_____#####_____####_____ ');
        console.info('_____#####________####______#####_____###______ ');
        console.info('______#####______;###________###______#________ ');
        console.info('________##_______####________####______________ ');
      `
  ]
];

// docs/.vitepress/config.mts
import { chineseSearchOptimize, pagefindPlugin } from "file:///D:/Projects/VitepressBlog/node_modules/vitepress-plugin-pagefind/dist/index.mjs";
import { createRewrites } from "file:///D:/Projects/VitepressBlog/node_modules/vitepress-theme-teek/es/config/index.mjs";
var config_default = defineConfig({
  title: "\u6653\u6797\u7684\u535A\u5BA2",
  description: "\u4E2A\u4EBA\u535A\u5BA2, \u7F16\u7A0B\u57FA\u7840, Java, \u6548\u7387\u8F6F\u4EF6, \u8BFB\u4E66, \u82F1\u8BED, \u5065\u8EAB, \u751F\u6D3B",
  head: HeadData,
  extends: teekConfig,
  cleanUrls: true,
  // 不显示 .html 后缀
  lang: "zh-CN",
  lastUpdated: true,
  rewrites: createRewrites({ srcDir: "docs" }),
  // https://vitepress.dev/zh/guide/sitemap-generation
  sitemap: {
    hostname: "https://www.peterjxl.com"
  },
  markdown: {
    math: true,
    // 启用数学公式支持
    lineNumbers: true,
    // 开启行号
    image: {
      lazyLoading: true
      // 图片懒加载，默认禁用
    },
    // 更改容器默认值标题
    container: {
      tipLabel: "\u63D0\u793A",
      warningLabel: "\u8B66\u544A",
      dangerLabel: "\u5371\u9669",
      infoLabel: "\u4FE1\u606F",
      detailsLabel: "\u8BE6\u7EC6\u4FE1\u606F"
    }
  },
  vite: {
    plugins: [
      // 本地搜索
      pagefindPlugin({
        btnPlaceholder: "\u641C\u7D22",
        placeholder: "\u641C\u7D22\u6587\u6863",
        emptyText: "\u7A7A\u7A7A\u5982\u4E5F",
        heading: "\u5171: {{searchResult}} \u6761\u7ED3\u679C",
        customSearchQuery: chineseSearchOptimize
      })
    ]
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "\u9996\u9875", link: "/" },
      {
        text: "\u{1F4BB} \u7F16\u7A0B",
        items: [
          {
            text: "\u{1F4DA} \u8BA1\u7B97\u673A\u57FA\u7840",
            items: [
              { text: "\u8BA1\u7B97\u673A\u7B80\u53F2", link: "/Computer/History/" },
              { text: "\u6570\u5B57\u7535\u8DEF", link: "/Computer/Digital-Circuit/" },
              { text: "\u8BA1\u7B97\u673A\u7EC4\u6210\u539F\u7406", link: "/Computer/Principles-of-Computer-Organization/" },
              { text: "\u64CD\u4F5C\u7CFB\u7EDF", link: "/Computer/Operating-System/" },
              { text: "Linux", link: "/Computer/Linux/" },
              { text: "\u8BA1\u7B97\u673A\u7F51\u7EDC", link: "/Computer/Network/" },
              { text: "\u6570\u636E\u5E93", link: "/Computer/MySQL/" },
              { text: "\u7F16\u7A0B\u5DE5\u5177", link: "/Computer/Programming-Tool/" },
              { text: "\u88C5\u673A", link: "/Computer/Assembling/" }
            ]
          },
          {
            text: "\u{1F3A8} \u524D\u7AEF",
            items: [
              { text: "Node", link: "/Front-End/Node/" }
            ]
          }
        ]
      },
      {
        text: "\u2615 Java",
        items: [
          { text: "JavaSE", link: "/JavaSE/" },
          { text: "Java \u9AD8\u7EA7", link: "/JavaSenior/" },
          {
            text: "JavaEE",
            items: [
              { text: "\u6784\u5EFA\u3001\u4F9D\u8D56\u7BA1\u7406", link: "/JavaEE/1-Build/" },
              { text: "Ant", link: "/JavaEE/Ant/" },
              { text: "Maven", link: "/JavaEE/Maven/" },
              { text: "\u65E5\u5FD7\u6846\u67B6", link: "/JavaEE/Log4j/" },
              { text: "Junit", link: "/JavaEE/Junit/" },
              { text: "JDBC", link: "/JavaEE/JDBC/" },
              { text: "XML-JSON", link: "/JavaEE/XML-JSON/" }
            ]
          },
          {
            text: "JavaWeb",
            items: [
              { text: "\u670D\u52A1\u5668\u8F6F\u4EF6", link: "/JavaWeb/Web-Container/" },
              { text: "\u73AF\u5883\u7BA1\u7406\u548C\u914D\u7F6E\u7BA1\u7406-\u79D1\u666E\u7BC7", link: "/JavaWeb/environment-and-code-version-manage/" },
              { text: "Servlet", link: "/JavaWeb/Servlet/" }
            ]
          },
          {
            text: "Spring",
            items: [
              { text: "Spring\u57FA\u7840", link: "/Spring-Basic/" }
            ]
          },
          {
            text: "\u4E3B\u6D41\u6846\u67B6",
            items: [
              { text: "Redis", link: "/Java-Framework/Redis/" },
              { text: "Mybatis", link: "/Java-Framework/Mybatis/" },
              { text: "Lucene", link: "/Java-Framework/Lucene/" },
              { text: "Elasticsearch", link: "/Java-Framework/Elasticsearch/" },
              { text: "RabbitMQ", link: "/Java-Framework/RabbitMQ/" },
              { text: "MyCat", link: "/Java-Framework/MyCat/" },
              { text: "Lombok", link: "/Java-Framework/Lombok/" }
            ]
          },
          {
            text: "SpringMVC",
            items: [
              { text: "SpringMVC \u57FA\u7840", link: "/SpringMVC-Basic/" }
            ]
          },
          {
            text: "SpringBoot",
            items: [
              { text: "SpringBoot \u57FA\u7840", link: "/SpringBoot-Basic/" }
            ]
          }
        ]
      },
      {
        text: "\u{1F6E0}\uFE0F\u8F6F\u4EF6",
        items: [
          { text: "Windows \u4F7F\u7528\u6280\u5DE7", link: "/Windows/" },
          { text: "\u6700\u5168\u9762\u7684\u6D4F\u89C8\u5668\u6559\u7A0B", link: "/Browser/" },
          { text: "\u6700\u5168\u9762\u7684\u8F93\u5165\u6CD5\u6559\u7A0B", link: "/TypeWriting/" },
          { text: "\u6700\u5168\u9762\u7684 RSS \u6559\u7A0B", link: "/RSS/" },
          { text: "\u624B\u673A\u76F8\u5173\u6280\u5DE7", link: "/Phone/" },
          { text: "Office", link: "/Office/" },
          { text: "\u56FE\u7247\u7C7B\u5DE5\u5177", link: "/Picture/" },
          { text: "\u6548\u7387\u7C7B\u5DE5\u5177", link: "/Productive-Tool/" },
          { text: "\u7801\u5B57\u5DE5\u5177", link: "/Word-Processing-Tool/" },
          { text: "\u5404\u5927\u5E73\u53F0", link: "/Internet-Giant/" }
        ]
      },
      {
        text: "\u{1F454} \u804C\u573A",
        items: [
          { text: "\u6821\u62DB", link: "/Job/on-campus-recruitment/" },
          { text: "\u4E94\u9669\u4E00\u91D1", link: "/Job/Social-welfare/" },
          { text: "\u804C\u573A\u89C4\u5212", link: "/Job/career-planning/" },
          { text: "\u5173\u4E8E\u79BB\u804C", link: "/Job/dimission/" },
          { text: "\u6742\u8C08", link: "/Job/other/" },
          { text: "\u81EA\u5A92\u4F53", link: "/WeMedia/" }
        ]
      },
      {
        text: "\u{1F4DA} \u5B66\u4E60",
        items: [
          {
            text: "\u{1F4D6} \u8BFB\u4E66",
            items: [
              { text: "\u8BFB\u4E66\u5DE5\u5177", link: "/Reading/tool/" },
              { text: "\u8D70\u8FDB\u79D1\u5B66", link: "/Reading/notes/science/" }
            ]
          },
          {
            text: "\u{1F30D} \u82F1\u8BED",
            items: [
              { text: "\u4ECE\u96F6\u5F00\u59CB\u5B66\u82F1\u8BED", link: "/English/Learning-English-from-the-beginning/" },
              { text: "\u82F1\u8BED\u5154\u7684\u76F8\u5173\u89C6\u9891", link: "/English/Yingyutu/" },
              { text: "Larry \u60F3\u505A\u6280\u672F\u5927\u4F6C\u7684\u76F8\u5173\u89C6\u9891", link: "/English/Larry/" }
            ]
          },
          {
            text: "\u{1F3DB}\uFE0F \u653F\u6CBB",
            items: [
              { text: "\u65B0\u95FB\u5408\u8BA2\u672C", link: "/News/" },
              { text: "\u53CD\u8150", link: "/Anti-Corruption/" },
              { text: "GFW", link: "/GFW/" },
              { text: "404 \u5185\u5BB9", link: "/404-content/" },
              { text: "\u5BA1\u67E5\u4E0E\u81EA\u6211\u5BA1\u67E5", link: "/Censorship/" },
              { text: "\u4E92\u8054\u7F51", link: "/Internet/" },
              { text: "\u6218\u4E89", link: "/War/" },
              { text: "\u8BFB\u4E66\u7B14\u8BB0", link: "/Reading/notes/" }
            ]
          },
          {
            text: "\u{1F4B0} \u7ECF\u6D4E",
            items: [
              { text: "\u5173\u4E8E\u7A0E", link: "/Economy/revenue/" },
              { text: "\u7406\u8D22", link: "/Economy/management/" }
            ]
          },
          {
            text: "\u{1F4AA} \u5065\u8EAB",
            items: [
              { text: "\u7761\u7720", link: "/Fitness/Sleep/" },
              { text: "\u76AE\u80A4", link: "/Fitness/Skin/" },
              { text: "\u53E3\u8154\u5065\u5EB7", link: "/Fitness/Oral-Health/" },
              { text: "\u5B66\u4F1A\u547C\u5438", link: "/Fitness/Breathe/" },
              { text: "\u5065\u8EAB\u65E5\u5FD7", link: "/Fitness/Log/" }
            ]
          },
          {
            text: "\u{1F3E0} \u5176\u4ED6",
            items: [
              { text: "\u9A7E\u9A76\u6280\u80FD", link: "/driving-skill/" },
              { text: "\u79DF\u623F\u4E0E\u4E70\u623F", link: "/property/" },
              { text: "\u53A8\u827A", link: "/cooking/" }
            ]
          }
        ]
      },
      {
        text: "\u{1F3AE} \u5A31\u4E50",
        items: [
          {
            text: "\u7535\u5F71",
            items: [
              // { text: '电影软件', link: '/movie-software/' },  
              { text: "\u7535\u5F71\u63A8\u8350", link: "/Movie-Recommend/" }
            ]
          },
          {
            text: "\u7535\u89C6\u5267",
            link: "/teleplay/"
          },
          {
            text: "\u6F2B\u753B",
            items: [
              { text: "\u6F2B\u753B\u8F6F\u4EF6", link: "/comic-software/" },
              { text: "\u6F2B\u753B\u63A8\u8350", link: "/comic-recommend/" }
            ]
          },
          {
            text: "\u6E38\u620F",
            items: [
              { text: "Steam", link: "/Steam/" },
              { text: "\u4E09\u56FD\u6740", link: "/Sanguosha/" },
              { text: "\u6C42\u751F\u4E4B\u8DEF", link: "/L4D2/" }
            ]
          },
          {
            text: "\u5C0F\u8BF4",
            link: "/Fiction/"
          }
        ]
      },
      {
        text: "\u{1F468}\u200D\u{1F4BB} \u5173\u4E8E",
        items: [
          { text: "\u5173\u4E8E\u672C\u7AD9", link: "/About/Web/" },
          { text: "\u5173\u4E8E\u535A\u4E3B", link: "/About/me/" },
          { text: "\u6B22\u8FCE\u6253\u8D4F", link: "/About/reward/" },
          { text: "\u7F51\u7AD9\u52A8\u6001", link: "/About/WebLog/" },
          { text: "\u6587\u7AE0\u5F52\u6863", link: "/archives/" },
          { text: "\u53CB\u4EBA\u5E10", link: "/About/friend-link/" },
          { text: "\u4ECE\u96F6\u5F00\u59CB\u642D\u5EFA\u535A\u5BA2", link: "/Blog/" },
          { text: "\u642D\u5EFA\u90AE\u4EF6\u670D\u52A1\u5668", link: "/About/BuildMail/" },
          { text: "\u672C\u7AD9\u5206\u4EAB", link: "/About/share/" },
          {
            text: "\u{1F308} \u751F\u6D3B",
            items: [
              { text: "2022", link: "/2022/" },
              { text: "2023", link: "/2023/" },
              { text: "2024", link: "/2024/" },
              { text: "2025", link: "/2025/" },
              { text: "2026", link: "/2026/" }
            ]
          }
        ]
      }
    ],
    // 文章大纲配置
    outline: {
      level: [2, 4],
      // 显示 2~4 级标题
      label: "\u672C\u6587\u5BFC\u822A"
      // 文章大纲上方的标签
    },
    lastUpdatedText: "\u4E0A\u6B21\u66F4\u65B0\u65F6\u95F4",
    // 前后文章跳转按钮的文字
    docFooter: {
      prev: "\u4E0A\u4E00\u9875",
      next: "\u4E0B\u4E00\u9875"
    }
    // search: {
    //   provider: "algolia",
    //   options: {
    //     appId: '...', // 你的 Application ID
    //     apiKey: '...', // 你的Search API Key
    //     indexName: 'chunge16vitepress' // 你的indexName
    //   }
    // },
  }
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udml0ZXByZXNzL2NvbmZpZy5tdHMiLCAiZG9jcy8udml0ZXByZXNzL3RlZWtDb25maWcudHMiLCAiZG9jcy8udml0ZXByZXNzL3RoZW1lL2ljb24vaWNvbnMudHMiLCAiZG9jcy8udml0ZXByZXNzL2NvbmZpZy9Tb2NpYWxMaW5rcy50cyIsICJkb2NzLy52aXRlcHJlc3MvY29uZmlnL0JhY2tncm91bmRJbWcudHMiLCAiZG9jcy8udml0ZXByZXNzL2NvbmZpZy9IZWFkLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxcUHJvamVjdHNcXFxcVml0ZXByZXNzQmxvZ1xcXFxkb2NzXFxcXC52aXRlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXFByb2plY3RzXFxcXFZpdGVwcmVzc0Jsb2dcXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXGNvbmZpZy5tdHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L1Byb2plY3RzL1ZpdGVwcmVzc0Jsb2cvZG9jcy8udml0ZXByZXNzL2NvbmZpZy5tdHNcIjsvLyBcdTRFM0JcdTkxNERcdTdGNkVcdTY1ODdcdTRFRjZcclxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZXByZXNzJ1xyXG5pbXBvcnQgeyB0ZWVrQ29uZmlnIH0gZnJvbSBcIi4vdGVla0NvbmZpZ1wiXHJcbmltcG9ydCB7IEhlYWREYXRhIH0gZnJvbSBcIi4vY29uZmlnL0hlYWRcIlxyXG5pbXBvcnQgdHlwZSB7IEhlYWRDb25maWcgfSBmcm9tIFwidml0ZXByZXNzXCI7IC8vIFx1NTcyOFx1NjU4N1x1NEVGNlx1OTg3Nlx1OTBFOFx1NkRGQlx1NTJBMFx1N0M3Qlx1NTc4Qlx1NUJGQ1x1NTE2NVxyXG5pbXBvcnQgeyBjaGluZXNlU2VhcmNoT3B0aW1pemUsIHBhZ2VmaW5kUGx1Z2luIH0gZnJvbSAndml0ZXByZXNzLXBsdWdpbi1wYWdlZmluZCdcclxuaW1wb3J0IHsgY3JlYXRlUmV3cml0ZXMgfSBmcm9tIFwidml0ZXByZXNzLXRoZW1lLXRlZWsvY29uZmlnXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG5cclxuICB0aXRsZTogXCJcdTY2NTNcdTY3OTdcdTc2ODRcdTUzNUFcdTVCQTJcIixcclxuICBkZXNjcmlwdGlvbjogXCJcdTRFMkFcdTRFQkFcdTUzNUFcdTVCQTIsIFx1N0YxNlx1N0EwQlx1NTdGQVx1Nzg0MCwgSmF2YSwgXHU2NTQ4XHU3Mzg3XHU4RjZGXHU0RUY2LCBcdThCRkJcdTRFNjYsIFx1ODJGMVx1OEJFRCwgXHU1MDY1XHU4RUFCLCBcdTc1MUZcdTZEM0JcIixcclxuICBoZWFkOiBIZWFkRGF0YSBhcyBIZWFkQ29uZmlnW10sXHJcbiAgZXh0ZW5kczogdGVla0NvbmZpZyxcclxuICBjbGVhblVybHM6IHRydWUsICAvLyBcdTRFMERcdTY2M0VcdTc5M0EgLmh0bWwgXHU1NDBFXHU3RjAwXHJcbiAgbGFuZzogXCJ6aC1DTlwiLFxyXG4gIGxhc3RVcGRhdGVkOiB0cnVlLFxyXG4gIHJld3JpdGVzOiBjcmVhdGVSZXdyaXRlcyh7IHNyY0RpcjogXCJkb2NzXCIgfSksXHJcblxyXG4gIC8vIGh0dHBzOi8vdml0ZXByZXNzLmRldi96aC9ndWlkZS9zaXRlbWFwLWdlbmVyYXRpb25cclxuICBzaXRlbWFwOiB7XHJcbiAgICBob3N0bmFtZTogJ2h0dHBzOi8vd3d3LnBldGVyanhsLmNvbScsXHJcbiAgfSxcclxuXHJcblxyXG4gIG1hcmtkb3duOiB7XHJcbiAgICBtYXRoOiB0cnVlLCAgICAgICAgIC8vIFx1NTQyRlx1NzUyOFx1NjU3MFx1NUI2Nlx1NTE2Q1x1NUYwRlx1NjUyRlx1NjMwMVxyXG4gICAgbGluZU51bWJlcnM6IHRydWUsICAvLyBcdTVGMDBcdTU0MkZcdTg4NENcdTUzRjdcclxuICAgIGltYWdlOiB7XHJcbiAgICAgIGxhenlMb2FkaW5nOiB0cnVlICAvLyBcdTU2RkVcdTcyNDdcdTYxRDJcdTUyQTBcdThGN0RcdUZGMENcdTlFRDhcdThCQTRcdTc5ODFcdTc1MjhcclxuICAgIH0sXHJcbiAgICAvLyBcdTY2RjRcdTY1MzlcdTVCQjlcdTU2NjhcdTlFRDhcdThCQTRcdTUwM0NcdTY4MDdcdTk4OThcclxuICAgIGNvbnRhaW5lcjoge1xyXG4gICAgICB0aXBMYWJlbDogXCJcdTYzRDBcdTc5M0FcIixcclxuICAgICAgd2FybmluZ0xhYmVsOiBcIlx1OEI2Nlx1NTQ0QVwiLFxyXG4gICAgICBkYW5nZXJMYWJlbDogXCJcdTUzNzFcdTk2NjlcIixcclxuICAgICAgaW5mb0xhYmVsOiBcIlx1NEZFMVx1NjA2RlwiLFxyXG4gICAgICBkZXRhaWxzTGFiZWw6IFwiXHU4QkU2XHU3RUM2XHU0RkUxXHU2MDZGXCJcclxuICAgIH1cclxuICB9LFxyXG5cclxuICB2aXRlOiB7XHJcbiAgICBwbHVnaW5zOiBbXHJcbiAgICAgIC8vIFx1NjcyQ1x1NTczMFx1NjQxQ1x1N0QyMlxyXG4gICAgICBwYWdlZmluZFBsdWdpbih7XHJcbiAgICAgICAgYnRuUGxhY2Vob2xkZXI6ICdcdTY0MUNcdTdEMjInLFxyXG4gICAgICAgIHBsYWNlaG9sZGVyOiAnXHU2NDFDXHU3RDIyXHU2NTg3XHU2ODYzJyxcclxuICAgICAgICBlbXB0eVRleHQ6ICdcdTdBN0FcdTdBN0FcdTU5ODJcdTRFNUYnLFxyXG4gICAgICAgIGhlYWRpbmc6ICdcdTUxNzE6IHt7c2VhcmNoUmVzdWx0fX0gXHU2NzYxXHU3RUQzXHU2NzlDJyxcclxuICAgICAgICBjdXN0b21TZWFyY2hRdWVyeTogY2hpbmVzZVNlYXJjaE9wdGltaXplXHJcbiAgICAgIH0pXHJcbiAgICBdXHJcbiAgfSxcclxuXHJcbiAgdGhlbWVDb25maWc6IHtcclxuXHJcbiAgICAvLyBodHRwczovL3ZpdGVwcmVzcy5kZXYvcmVmZXJlbmNlL2RlZmF1bHQtdGhlbWUtY29uZmlnXHJcbiAgICBuYXY6IFtcclxuICAgICAgeyB0ZXh0OiAnXHU5OTk2XHU5ODc1JywgbGluazogJy8nIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0ZXh0OiAnXHVEODNEXHVEQ0JCIFx1N0YxNlx1N0EwQicsXHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dDogJ1x1RDgzRFx1RENEQSBcdThCQTFcdTdCOTdcdTY3M0FcdTU3RkFcdTc4NDAnLFxyXG4gICAgICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICAgIHsgdGV4dDogJ1x1OEJBMVx1N0I5N1x1NjczQVx1N0I4MFx1NTNGMicsIGxpbms6ICcvQ29tcHV0ZXIvSGlzdG9yeS8nIH0sXHJcbiAgICAgICAgICAgICAgeyB0ZXh0OiAnXHU2NTcwXHU1QjU3XHU3NTM1XHU4REVGJywgbGluazogJy9Db21wdXRlci9EaWdpdGFsLUNpcmN1aXQvJyB9LFxyXG4gICAgICAgICAgICAgIHsgdGV4dDogJ1x1OEJBMVx1N0I5N1x1NjczQVx1N0VDNFx1NjIxMFx1NTM5Rlx1NzQwNicsIGxpbms6ICcvQ29tcHV0ZXIvUHJpbmNpcGxlcy1vZi1Db21wdXRlci1Pcmdhbml6YXRpb24vJyB9LFxyXG4gICAgICAgICAgICAgIHsgdGV4dDogJ1x1NjRDRFx1NEY1Q1x1N0NGQlx1N0VERicsIGxpbms6ICcvQ29tcHV0ZXIvT3BlcmF0aW5nLVN5c3RlbS8nIH0sXHJcbiAgICAgICAgICAgICAgeyB0ZXh0OiAnTGludXgnLCBsaW5rOiAnL0NvbXB1dGVyL0xpbnV4LycgfSxcclxuICAgICAgICAgICAgICB7IHRleHQ6ICdcdThCQTFcdTdCOTdcdTY3M0FcdTdGNTFcdTdFREMnLCBsaW5rOiAnL0NvbXB1dGVyL05ldHdvcmsvJyB9LFxyXG4gICAgICAgICAgICAgIHsgdGV4dDogJ1x1NjU3MFx1NjM2RVx1NUU5MycsIGxpbms6ICcvQ29tcHV0ZXIvTXlTUUwvJyB9LFxyXG4gICAgICAgICAgICAgIHsgdGV4dDogJ1x1N0YxNlx1N0EwQlx1NURFNVx1NTE3NycsIGxpbms6ICcvQ29tcHV0ZXIvUHJvZ3JhbW1pbmctVG9vbC8nIH0sXHJcbiAgICAgICAgICAgICAgeyB0ZXh0OiAnXHU4OEM1XHU2NzNBJywgbGluazogJy9Db21wdXRlci9Bc3NlbWJsaW5nLycgfSxcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dDogJ1x1RDgzQ1x1REZBOCBcdTUyNERcdTdBRUYnLFxyXG4gICAgICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICAgIHsgdGV4dDogJ05vZGUnLCBsaW5rOiAnL0Zyb250LUVuZC9Ob2RlLycgfSxcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0ZXh0OiAnXHUyNjE1IEphdmEnLFxyXG4gICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICB7IHRleHQ6ICdKYXZhU0UnLCBsaW5rOiAnL0phdmFTRS8nIH0sXHJcbiAgICAgICAgICB7IHRleHQ6ICdKYXZhIFx1OUFEOFx1N0VBNycsIGxpbms6ICcvSmF2YVNlbmlvci8nIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHQ6ICdKYXZhRUUnLCBpdGVtczogW1xyXG4gICAgICAgICAgICAgIHsgdGV4dDogJ1x1Njc4NFx1NUVGQVx1MzAwMVx1NEY5RFx1OEQ1Nlx1N0JBMVx1NzQwNicsIGxpbms6ICcvSmF2YUVFLzEtQnVpbGQvJyB9LFxyXG4gICAgICAgICAgICAgIHsgdGV4dDogJ0FudCcsIGxpbms6ICcvSmF2YUVFL0FudC8nIH0sXHJcbiAgICAgICAgICAgICAgeyB0ZXh0OiAnTWF2ZW4nLCBsaW5rOiAnL0phdmFFRS9NYXZlbi8nIH0sXHJcbiAgICAgICAgICAgICAgeyB0ZXh0OiAnXHU2NUU1XHU1RkQ3XHU2ODQ2XHU2N0I2JywgbGluazogJy9KYXZhRUUvTG9nNGovJyB9LFxyXG4gICAgICAgICAgICAgIHsgdGV4dDogJ0p1bml0JywgbGluazogJy9KYXZhRUUvSnVuaXQvJyB9LFxyXG4gICAgICAgICAgICAgIHsgdGV4dDogJ0pEQkMnLCBsaW5rOiAnL0phdmFFRS9KREJDLycgfSxcclxuICAgICAgICAgICAgICB7IHRleHQ6ICdYTUwtSlNPTicsIGxpbms6ICcvSmF2YUVFL1hNTC1KU09OLycgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0OiAnSmF2YVdlYicsIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgICAgeyB0ZXh0OiAnXHU2NzBEXHU1MkExXHU1NjY4XHU4RjZGXHU0RUY2JywgbGluazogJy9KYXZhV2ViL1dlYi1Db250YWluZXIvJyB9LFxyXG4gICAgICAgICAgICAgIHsgdGV4dDogJ1x1NzNBRlx1NTg4M1x1N0JBMVx1NzQwNlx1NTQ4Q1x1OTE0RFx1N0Y2RVx1N0JBMVx1NzQwNi1cdTc5RDFcdTY2NkVcdTdCQzcnLCBsaW5rOiAnL0phdmFXZWIvZW52aXJvbm1lbnQtYW5kLWNvZGUtdmVyc2lvbi1tYW5hZ2UvJyB9LFxyXG4gICAgICAgICAgICAgIHsgdGV4dDogJ1NlcnZsZXQnLCBsaW5rOiAnL0phdmFXZWIvU2VydmxldC8nIH0sXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHQ6ICdTcHJpbmcnLCBpdGVtczogW1xyXG4gICAgICAgICAgICAgIHsgdGV4dDogJ1NwcmluZ1x1NTdGQVx1Nzg0MCcsIGxpbms6ICcvU3ByaW5nLUJhc2ljLycgfSxcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dDogJ1x1NEUzQlx1NkQ0MVx1Njg0Nlx1NjdCNicsIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgICAgeyB0ZXh0OiAnUmVkaXMnLCBsaW5rOiAnL0phdmEtRnJhbWV3b3JrL1JlZGlzLycgfSxcclxuICAgICAgICAgICAgICB7IHRleHQ6ICdNeWJhdGlzJywgbGluazogJy9KYXZhLUZyYW1ld29yay9NeWJhdGlzLycgfSxcclxuICAgICAgICAgICAgICB7IHRleHQ6ICdMdWNlbmUnLCBsaW5rOiAnL0phdmEtRnJhbWV3b3JrL0x1Y2VuZS8nIH0sXHJcbiAgICAgICAgICAgICAgeyB0ZXh0OiAnRWxhc3RpY3NlYXJjaCcsIGxpbms6ICcvSmF2YS1GcmFtZXdvcmsvRWxhc3RpY3NlYXJjaC8nIH0sXHJcbiAgICAgICAgICAgICAgeyB0ZXh0OiAnUmFiYml0TVEnLCBsaW5rOiAnL0phdmEtRnJhbWV3b3JrL1JhYmJpdE1RLycgfSxcclxuICAgICAgICAgICAgICB7IHRleHQ6ICdNeUNhdCcsIGxpbms6ICcvSmF2YS1GcmFtZXdvcmsvTXlDYXQvJyB9LFxyXG4gICAgICAgICAgICAgIHsgdGV4dDogJ0xvbWJvaycsIGxpbms6ICcvSmF2YS1GcmFtZXdvcmsvTG9tYm9rLycgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0OiAnU3ByaW5nTVZDJywgaXRlbXM6IFtcclxuICAgICAgICAgICAgICB7IHRleHQ6ICdTcHJpbmdNVkMgXHU1N0ZBXHU3ODQwJywgbGluazogJy9TcHJpbmdNVkMtQmFzaWMvJyB9LFxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0OiAnU3ByaW5nQm9vdCcsIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgICAgeyB0ZXh0OiAnU3ByaW5nQm9vdCBcdTU3RkFcdTc4NDAnLCBsaW5rOiAnL1NwcmluZ0Jvb3QtQmFzaWMvJyB9LFxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF1cclxuICAgICAgfSxcclxuXHJcbiAgICAgIHtcclxuICAgICAgICB0ZXh0OiAnXHVEODNEXHVERUUwXHVGRTBGXHU4RjZGXHU0RUY2JyxcclxuICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgeyB0ZXh0OiAnV2luZG93cyBcdTRGN0ZcdTc1MjhcdTYyODBcdTVERTcnLCBsaW5rOiAnL1dpbmRvd3MvJyB9LFxyXG4gICAgICAgICAgeyB0ZXh0OiAnXHU2NzAwXHU1MTY4XHU5NzYyXHU3Njg0XHU2RDRGXHU4OUM4XHU1NjY4XHU2NTU5XHU3QTBCJywgbGluazogJy9Ccm93c2VyLycgfSxcclxuICAgICAgICAgIHsgdGV4dDogJ1x1NjcwMFx1NTE2OFx1OTc2Mlx1NzY4NFx1OEY5M1x1NTE2NVx1NkNENVx1NjU1OVx1N0EwQicsIGxpbms6ICcvVHlwZVdyaXRpbmcvJyB9LFxyXG4gICAgICAgICAgeyB0ZXh0OiAnXHU2NzAwXHU1MTY4XHU5NzYyXHU3Njg0IFJTUyBcdTY1NTlcdTdBMEInLCBsaW5rOiAnL1JTUy8nIH0sXHJcbiAgICAgICAgICB7IHRleHQ6ICdcdTYyNEJcdTY3M0FcdTc2RjhcdTUxNzNcdTYyODBcdTVERTcnLCBsaW5rOiAnL1Bob25lLycgfSxcclxuICAgICAgICAgIHsgdGV4dDogJ09mZmljZScsIGxpbms6ICcvT2ZmaWNlLycgfSxcclxuICAgICAgICAgIHsgdGV4dDogJ1x1NTZGRVx1NzI0N1x1N0M3Qlx1NURFNVx1NTE3NycsIGxpbms6ICcvUGljdHVyZS8nIH0sXHJcbiAgICAgICAgICB7IHRleHQ6ICdcdTY1NDhcdTczODdcdTdDN0JcdTVERTVcdTUxNzcnLCBsaW5rOiAnL1Byb2R1Y3RpdmUtVG9vbC8nIH0sXHJcbiAgICAgICAgICB7IHRleHQ6ICdcdTc4MDFcdTVCNTdcdTVERTVcdTUxNzcnLCBsaW5rOiAnL1dvcmQtUHJvY2Vzc2luZy1Ub29sLycgfSxcclxuICAgICAgICAgIHsgdGV4dDogJ1x1NTQwNFx1NTkyN1x1NUU3M1x1NTNGMCcsIGxpbms6ICcvSW50ZXJuZXQtR2lhbnQvJyB9LFxyXG4gICAgICAgIF1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRleHQ6ICdcdUQ4M0RcdURDNTQgXHU4MDRDXHU1NzNBJyxcclxuICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgeyB0ZXh0OiAnXHU2ODIxXHU2MkRCJywgbGluazogJy9Kb2Ivb24tY2FtcHVzLXJlY3J1aXRtZW50LycgfSxcclxuICAgICAgICAgIHsgdGV4dDogJ1x1NEU5NFx1OTY2OVx1NEUwMFx1OTFEMScsIGxpbms6ICcvSm9iL1NvY2lhbC13ZWxmYXJlLycgfSxcclxuICAgICAgICAgIHsgdGV4dDogJ1x1ODA0Q1x1NTczQVx1ODlDNFx1NTIxMicsIGxpbms6ICcvSm9iL2NhcmVlci1wbGFubmluZy8nIH0sXHJcbiAgICAgICAgICB7IHRleHQ6ICdcdTUxNzNcdTRFOEVcdTc5QkJcdTgwNEMnLCBsaW5rOiAnL0pvYi9kaW1pc3Npb24vJyB9LFxyXG4gICAgICAgICAgeyB0ZXh0OiAnXHU2NzQyXHU4QzA4JywgbGluazogJy9Kb2Ivb3RoZXIvJyB9LFxyXG4gICAgICAgICAgeyB0ZXh0OiAnXHU4MUVBXHU1QTkyXHU0RjUzJywgbGluazogJy9XZU1lZGlhLycgfSxcclxuICAgICAgICBdXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICB7XHJcbiAgICAgICAgdGV4dDogJ1x1RDgzRFx1RENEQSBcdTVCNjZcdTRFNjAnLFxyXG4gICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHQ6ICdcdUQ4M0RcdURDRDYgXHU4QkZCXHU0RTY2JyxcclxuICAgICAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgICAgICB7IHRleHQ6ICdcdThCRkJcdTRFNjZcdTVERTVcdTUxNzcnLCBsaW5rOiAnL1JlYWRpbmcvdG9vbC8nIH0sXHJcbiAgICAgICAgICAgICAgeyB0ZXh0OiAnXHU4RDcwXHU4RkRCXHU3OUQxXHU1QjY2JywgbGluazogJy9SZWFkaW5nL25vdGVzL3NjaWVuY2UvJyB9LFxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0OiAnXHVEODNDXHVERjBEIFx1ODJGMVx1OEJFRCcsXHJcbiAgICAgICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgICAgeyB0ZXh0OiAnXHU0RUNFXHU5NkY2XHU1RjAwXHU1OUNCXHU1QjY2XHU4MkYxXHU4QkVEJywgbGluazogJy9FbmdsaXNoL0xlYXJuaW5nLUVuZ2xpc2gtZnJvbS10aGUtYmVnaW5uaW5nLycgfSxcclxuICAgICAgICAgICAgICB7IHRleHQ6ICdcdTgyRjFcdThCRURcdTUxNTRcdTc2ODRcdTc2RjhcdTUxNzNcdTg5QzZcdTk4OTEnLCBsaW5rOiAnL0VuZ2xpc2gvWWluZ3l1dHUvJyB9LFxyXG4gICAgICAgICAgICAgIHsgdGV4dDogJ0xhcnJ5IFx1NjBGM1x1NTA1QVx1NjI4MFx1NjcyRlx1NTkyN1x1NEY2Q1x1NzY4NFx1NzZGOFx1NTE3M1x1ODlDNlx1OTg5MScsIGxpbms6ICcvRW5nbGlzaC9MYXJyeS8nIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dDogJ1x1RDgzQ1x1REZEQlx1RkUwRiBcdTY1M0ZcdTZDQkInLFxyXG4gICAgICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICAgIHsgdGV4dDogJ1x1NjVCMFx1OTVGQlx1NTQwOFx1OEJBMlx1NjcyQycsIGxpbms6ICcvTmV3cy8nIH0sXHJcbiAgICAgICAgICAgICAgeyB0ZXh0OiAnXHU1M0NEXHU4MTUwJywgbGluazogJy9BbnRpLUNvcnJ1cHRpb24vJyB9LFxyXG4gICAgICAgICAgICAgIHsgdGV4dDogJ0dGVycsIGxpbms6ICcvR0ZXLycgfSxcclxuICAgICAgICAgICAgICB7IHRleHQ6ICc0MDQgXHU1MTg1XHU1QkI5JywgbGluazogJy80MDQtY29udGVudC8nIH0sXHJcbiAgICAgICAgICAgICAgeyB0ZXh0OiAnXHU1QkExXHU2N0U1XHU0RTBFXHU4MUVBXHU2MjExXHU1QkExXHU2N0U1JywgbGluazogJy9DZW5zb3JzaGlwLycgfSxcclxuICAgICAgICAgICAgICB7IHRleHQ6ICdcdTRFOTJcdTgwNTRcdTdGNTEnLCBsaW5rOiAnL0ludGVybmV0LycgfSxcclxuICAgICAgICAgICAgICB7IHRleHQ6ICdcdTYyMThcdTRFODknLCBsaW5rOiAnL1dhci8nIH0sXHJcbiAgICAgICAgICAgICAgeyB0ZXh0OiAnXHU4QkZCXHU0RTY2XHU3QjE0XHU4QkIwJywgbGluazogJy9SZWFkaW5nL25vdGVzLycgfSxcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dDogJ1x1RDgzRFx1RENCMCBcdTdFQ0ZcdTZENEUnLFxyXG4gICAgICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICAgIHsgdGV4dDogJ1x1NTE3M1x1NEU4RVx1N0EwRScsIGxpbms6ICcvRWNvbm9teS9yZXZlbnVlLycgfSxcclxuICAgICAgICAgICAgICB7IHRleHQ6ICdcdTc0MDZcdThEMjInLCBsaW5rOiAnL0Vjb25vbXkvbWFuYWdlbWVudC8nIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dDogJ1x1RDgzRFx1RENBQSBcdTUwNjVcdThFQUInLFxyXG4gICAgICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICAgIHsgdGV4dDogJ1x1Nzc2MVx1NzcyMCcsIGxpbms6ICcvRml0bmVzcy9TbGVlcC8nIH0sXHJcbiAgICAgICAgICAgICAgeyB0ZXh0OiAnXHU3NkFFXHU4MEE0JywgbGluazogJy9GaXRuZXNzL1NraW4vJyB9LFxyXG4gICAgICAgICAgICAgIHsgdGV4dDogJ1x1NTNFM1x1ODE1NFx1NTA2NVx1NUVCNycsIGxpbms6ICcvRml0bmVzcy9PcmFsLUhlYWx0aC8nIH0sXHJcbiAgICAgICAgICAgICAgeyB0ZXh0OiAnXHU1QjY2XHU0RjFBXHU1NDdDXHU1NDM4JywgbGluazogJy9GaXRuZXNzL0JyZWF0aGUvJyB9LFxyXG4gICAgICAgICAgICAgIHsgdGV4dDogJ1x1NTA2NVx1OEVBQlx1NjVFNVx1NUZENycsIGxpbms6ICcvRml0bmVzcy9Mb2cvJyB9LFxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0OiAnXHVEODNDXHVERkUwIFx1NTE3Nlx1NEVENicsXHJcbiAgICAgICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgICAgeyB0ZXh0OiAnXHU5QTdFXHU5QTc2XHU2MjgwXHU4MEZEJywgbGluazogJy9kcml2aW5nLXNraWxsLycgfSxcclxuICAgICAgICAgICAgICB7IHRleHQ6ICdcdTc5REZcdTYyM0ZcdTRFMEVcdTRFNzBcdTYyM0YnLCBsaW5rOiAnL3Byb3BlcnR5LycgfSxcclxuICAgICAgICAgICAgICB7IHRleHQ6ICdcdTUzQThcdTgyN0EnLCBsaW5rOiAnL2Nvb2tpbmcvJyB9LFxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGV4dDogJ1x1RDgzQ1x1REZBRSBcdTVBMzFcdTRFNTAnLFxyXG4gICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHQ6ICdcdTc1MzVcdTVGNzEnLCBpdGVtczogW1xyXG4gICAgICAgICAgICAgIC8vIHsgdGV4dDogJ1x1NzUzNVx1NUY3MVx1OEY2Rlx1NEVGNicsIGxpbms6ICcvbW92aWUtc29mdHdhcmUvJyB9LCAgXHJcbiAgICAgICAgICAgICAgeyB0ZXh0OiAnXHU3NTM1XHU1RjcxXHU2M0E4XHU4MzUwJywgbGluazogJy9Nb3ZpZS1SZWNvbW1lbmQvJyB9LFxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0OiAnXHU3NTM1XHU4OUM2XHU1MjY3JywgbGluazogJy90ZWxlcGxheS8nXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0OiAnXHU2RjJCXHU3NTNCJywgaXRlbXM6IFtcclxuICAgICAgICAgICAgICB7IHRleHQ6ICdcdTZGMkJcdTc1M0JcdThGNkZcdTRFRjYnLCBsaW5rOiAnL2NvbWljLXNvZnR3YXJlLycgfSxcclxuICAgICAgICAgICAgICB7IHRleHQ6ICdcdTZGMkJcdTc1M0JcdTYzQThcdTgzNTAnLCBsaW5rOiAnL2NvbWljLXJlY29tbWVuZC8nIH0sXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHQ6ICdcdTZFMzhcdTYyMEYnLCBpdGVtczogW1xyXG4gICAgICAgICAgICAgIHsgdGV4dDogJ1N0ZWFtJywgbGluazogJy9TdGVhbS8nIH0sXHJcbiAgICAgICAgICAgICAgeyB0ZXh0OiAnXHU0RTA5XHU1NkZEXHU2NzQwJywgbGluazogJy9TYW5ndW9zaGEvJyB9LFxyXG4gICAgICAgICAgICAgIHsgdGV4dDogJ1x1NkM0Mlx1NzUxRlx1NEU0Qlx1OERFRicsIGxpbms6ICcvTDREMi8nIH0sXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHQ6ICdcdTVDMEZcdThCRjQnLCBsaW5rOiAnL0ZpY3Rpb24vJ1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICB7XHJcbiAgICAgICAgdGV4dDogJ1x1RDgzRFx1REM2OFx1MjAwRFx1RDgzRFx1RENCQiBcdTUxNzNcdTRFOEUnLFxyXG4gICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICB7IHRleHQ6ICdcdTUxNzNcdTRFOEVcdTY3MkNcdTdBRDknLCBsaW5rOiAnL0Fib3V0L1dlYi8nIH0sXHJcbiAgICAgICAgICB7IHRleHQ6ICdcdTUxNzNcdTRFOEVcdTUzNUFcdTRFM0InLCBsaW5rOiAnL0Fib3V0L21lLycgfSxcclxuICAgICAgICAgIHsgdGV4dDogJ1x1NkIyMlx1OEZDRVx1NjI1M1x1OEQ0RicsIGxpbms6ICcvQWJvdXQvcmV3YXJkLycgfSxcclxuICAgICAgICAgIHsgdGV4dDogJ1x1N0Y1MVx1N0FEOVx1NTJBOFx1NjAwMScsIGxpbms6ICcvQWJvdXQvV2ViTG9nLycgfSxcclxuICAgICAgICAgIHsgdGV4dDogJ1x1NjU4N1x1N0FFMFx1NUY1Mlx1Njg2MycsIGxpbms6ICcvYXJjaGl2ZXMvJyB9LFxyXG4gICAgICAgICAgeyB0ZXh0OiAnXHU1M0NCXHU0RUJBXHU1RTEwJywgbGluazogJy9BYm91dC9mcmllbmQtbGluay8nIH0sXHJcbiAgICAgICAgICB7IHRleHQ6ICdcdTRFQ0VcdTk2RjZcdTVGMDBcdTU5Q0JcdTY0MkRcdTVFRkFcdTUzNUFcdTVCQTInLCBsaW5rOiAnL0Jsb2cvJyB9LFxyXG4gICAgICAgICAgeyB0ZXh0OiAnXHU2NDJEXHU1RUZBXHU5MEFFXHU0RUY2XHU2NzBEXHU1MkExXHU1NjY4JywgbGluazogJy9BYm91dC9CdWlsZE1haWwvJyB9LFxyXG4gICAgICAgICAgeyB0ZXh0OiAnXHU2NzJDXHU3QUQ5XHU1MjA2XHU0RUFCJywgbGluazogJy9BYm91dC9zaGFyZS8nIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHQ6ICdcdUQ4M0NcdURGMDggXHU3NTFGXHU2RDNCJyxcclxuICAgICAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgICAgICB7IHRleHQ6ICcyMDIyJywgbGluazogJy8yMDIyLycgfSxcclxuICAgICAgICAgICAgICB7IHRleHQ6ICcyMDIzJywgbGluazogJy8yMDIzLycgfSxcclxuICAgICAgICAgICAgICB7IHRleHQ6ICcyMDI0JywgbGluazogJy8yMDI0LycgfSxcclxuICAgICAgICAgICAgICB7IHRleHQ6ICcyMDI1JywgbGluazogJy8yMDI1LycgfSxcclxuICAgICAgICAgICAgICB7IHRleHQ6ICcyMDI2JywgbGluazogJy8yMDI2LycgfSxcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdXHJcbiAgICAgIH1cclxuICAgIF0sXHJcblxyXG4gICAgLy8gXHU2NTg3XHU3QUUwXHU1OTI3XHU3RUIyXHU5MTREXHU3RjZFXHJcbiAgICBvdXRsaW5lOiB7XHJcbiAgICAgIGxldmVsOiBbMiwgNF0sICAvLyBcdTY2M0VcdTc5M0EgMn40IFx1N0VBN1x1NjgwN1x1OTg5OFxyXG4gICAgICBsYWJlbDogXCJcdTY3MkNcdTY1ODdcdTVCRkNcdTgyMkFcIiwgIC8vIFx1NjU4N1x1N0FFMFx1NTkyN1x1N0VCMlx1NEUwQVx1NjVCOVx1NzY4NFx1NjgwN1x1N0I3RVxyXG4gICAgfSxcclxuXHJcbiAgICBsYXN0VXBkYXRlZFRleHQ6IFwiXHU0RTBBXHU2QjIxXHU2NkY0XHU2NUIwXHU2NUY2XHU5NUY0XCIsXHJcblxyXG4gICAgLy8gXHU1MjREXHU1NDBFXHU2NTg3XHU3QUUwXHU4REYzXHU4RjZDXHU2MzA5XHU5NEFFXHU3Njg0XHU2NTg3XHU1QjU3XHJcbiAgICBkb2NGb290ZXI6IHtcclxuICAgICAgcHJldjogXCJcdTRFMEFcdTRFMDBcdTk4NzVcIixcclxuICAgICAgbmV4dDogXCJcdTRFMEJcdTRFMDBcdTk4NzVcIixcclxuICAgIH0sXHJcblxyXG4gICAgLy8gc2VhcmNoOiB7XHJcbiAgICAvLyAgIHByb3ZpZGVyOiBcImFsZ29saWFcIixcclxuICAgIC8vICAgb3B0aW9uczoge1xyXG4gICAgLy8gICAgIGFwcElkOiAnLi4uJywgLy8gXHU0RjYwXHU3Njg0IEFwcGxpY2F0aW9uIElEXHJcbiAgICAvLyAgICAgYXBpS2V5OiAnLi4uJywgLy8gXHU0RjYwXHU3Njg0U2VhcmNoIEFQSSBLZXlcclxuICAgIC8vICAgICBpbmRleE5hbWU6ICdjaHVuZ2UxNnZpdGVwcmVzcycgLy8gXHU0RjYwXHU3Njg0aW5kZXhOYW1lXHJcbiAgICAvLyAgIH1cclxuICAgIC8vIH0sXHJcbiAgfVxyXG59KVxyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6XFxcXFByb2plY3RzXFxcXFZpdGVwcmVzc0Jsb2dcXFxcZG9jc1xcXFwudml0ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxQcm9qZWN0c1xcXFxWaXRlcHJlc3NCbG9nXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFx0ZWVrQ29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9Qcm9qZWN0cy9WaXRlcHJlc3NCbG9nL2RvY3MvLnZpdGVwcmVzcy90ZWVrQ29uZmlnLnRzXCI7Ly8gXHU0RTNCXHU5ODk4XHU5MTREXHU3RjZFXHU2NTg3XHU0RUY2XHVGRjBDXHU0RjFBXHU4OEFCIC4vY29uZmlnLm10cyBcdTVGMTVcdTc1MjhcclxuaW1wb3J0IHsgZGVmaW5lVGVla0NvbmZpZyB9IGZyb20gXCJ2aXRlcHJlc3MtdGhlbWUtdGVlay9jb25maWdcIjtcclxuaW1wb3J0IHsgU29jaWFsTGlua3MgfSBmcm9tIFwiLi9jb25maWcvU29jaWFsTGlua3NcIjsgLy9cdTVCRkNcdTUxNjVcdTc5M0VcdTRFQTRcdTk0RkVcdTYzQTVcdTkxNERcdTdGNkVcclxuaW1wb3J0IHsgSW1ncyB9IGZyb20gXCIuL2NvbmZpZy9CYWNrZ3JvdW5kSW1nXCI7XHJcbmltcG9ydCB7IHZpdGVwcmVzc1BsdWdpbkxlZ2VuZCB9IGZyb20gJ3ZpdGVwcmVzcy1wbHVnaW4tbGVnZW5kJztcclxuXHJcbmV4cG9ydCBjb25zdCB0ZWVrQ29uZmlnID0gZGVmaW5lVGVla0NvbmZpZyh7XHJcblxyXG4gIHRlZWtUaGVtZTogdHJ1ZSwgICAgICAgICAgLy8gXHU1NDJGXHU3NTI4IHRlZWsgXHU0RTNCXHU5ODk4XHJcbiAgbG9hZGluZzogXCJcdTUzNUFcdTVCQTJcdTUyQTBcdThGN0RcdTRFMkQuLi5cIiwgLy8gTG9hZGluZyBcdTUyQThcdTc1M0JcdUZGMENcdTUzRUZcdTc2RjRcdTYzQTVcdTkxNERcdTdGNkUgTG9hZGluZyBcdTY1ODdcdTY4NDguXHU0RTNBIGZhbHNlIFx1NTIxOVx1NTE3M1x1OTVFRFxyXG4gIHBhZ2VTdHlsZTogXCJzZWdtZW50LW5hdlwiLCAgICAgICAgICAvLyBcdTY1ODdcdTdBRTBcdTk4NzVcdTc2ODRcdTY4MzdcdTVGMEZcdTk4Q0VcdTY4M0MgZGVmYXVsdCwgY2FyZCwgc2VnbWVudCwgY2FyZC1uYXYsIHNlZ21lbnQtbmF2XHJcbiAgaG9tZUNhcmRMaXN0UG9zaXRpb246IFwibGVmdFwiLCAvLyBcdTk5OTZcdTk4NzVcdTUzNjFcdTcyNDdcdTY4MEZcdTUyMTdcdTg4NjhcdTRGNERcdTdGNkVcclxuXHJcbiAgXHJcbiAgYXJ0aWNsZUFuYWx5emU6IHtcclxuICAgIGltYWdlVmlld2VyOiB7XHJcbiAgICAgIGVuYWJsZWQ6IGZhbHNlLCAvLyBcdTc5ODFcdTc1MjhcdTU2RkVcdTcyNDdcdTY3RTVcdTc3MEJcdTU2NjhcclxuICAgIH0sXHJcbiAgfSxcclxuICBcclxuICAvLyBcdTk5OTZcdTk4NzUgQmFubmVyIFx1OTE0RFx1N0Y2RVxyXG4gIGJhbm5lcjoge1xyXG4gICAgZW5hYmxlZDogdHJ1ZSwgLy8gXHU2NjJGXHU1NDI2XHU1NDJGXHU3NTI4IEJhbm5lclxyXG4gICAgbmFtZTogXCJcdTY2NTNcdTY3OTdcdTc2ODRcdTUzNUFcdTVCQTJcIiwgLy8gQmFubmVyIFx1NjgwN1x1OTg5OFx1RkYwQ1x1OUVEOFx1OEJBNFx1OEJGQlx1NTNENiB2aXRlcHJlc3MgXHU3Njg0IHRpdGxlIFx1NUM1RVx1NjAyN1xyXG4gICAgdGV4dENvbG9yOiBcIiNmZmZmZmZcIiwgLy8gQmFubmVyIFx1NUI1N1x1NEY1M1x1OTg5Q1x1ODI3Mlx1RkYwQ2JnU3R5bGUgXHU0RTNBIHB1cmUgXHU2NUY2XHU0RTNBICcjMDAwMDAwJ1x1RkYwQ1x1NTE3Nlx1NEVENlx1NEUzQSAnI2ZmZmZmZidcclxuICAgIHRpdGxlRm9udFNpemU6IFwiMy4ycmVtXCIsIC8vIFx1NjgwN1x1OTg5OFx1NUI1N1x1NEY1M1x1NTkyN1x1NUMwRlxyXG4gICAgZGVzY0ZvbnRTaXplOiBcIjEuNHJlbVwiLCAvLyBcdTYzQ0ZcdThGRjBcdTVCNTdcdTRGNTNcdTU5MjdcdTVDMEZcclxuICAgIGRlc2NTdHlsZTogXCJzd2l0Y2hcIiwgLy8gXHU2M0NGXHU4RkYwXHU0RkUxXHU2MDZGXHU5OENFXHU2ODNDXHVGRjFBZGVmYXVsdCBcdTRFM0FcdTdFQUZcdTY1ODdcdTVCNTdcdTZFMzJcdTY3RDNcdTk4Q0VcdTY4M0NcdUZGMDhcdTU5ODJcdTY3OUMgZGVzY3JpcHRpb24gXHU0RTNBXHU2NTcwXHU3RUM0XHVGRjBDXHU1MjE5XHU1M0Q2XHU3QjJDXHU0RTAwXHU0RTJBXHVGRjA5XHVGRjBDdHlwZXMgXHU0RTNBXHU2NTg3XHU1QjU3XHU2MjUzXHU1MzcwXHU5OENFXHU2ODNDXHVGRjBDc3dpdGNoIFx1NEUzQVx1NjU4N1x1NUI1N1x1NTIwN1x1NjM2Mlx1OThDRVx1NjgzQ1xyXG4gICAgZGVzY3JpcHRpb246IFtcclxuICAgICAgXCJcdTZCMjJcdThGQ0VcdTUxNDlcdTRFMzRcdUZGMDFcIixcclxuICAgICAgJ1x1OERGM1x1NTFGQVx1NEUwOVx1OEQzN1x1NEU0Qlx1NTkxNlx1RkYwQ1x1NEUwRFx1NTcyOFx1NEU5NFx1OTY2OVx1NEU0Qlx1NEUyRCcsXHJcbiAgICAgICdcdTc3MUZcdTc0MDZcdTYxMDhcdThGQTlcdTYxMDhcdTY2MEVcdUZGMENcdThDMEVcdThBMDBcdTUzNzRcdTYwM0JcdTk3NjBcdTZDODlcdTlFRDhcdTdFRjRcdTYzMDEnLFxyXG4gICAgICAnXHU0RjYwXHU3N0U1XHU5MDUzXHU1NDE3XHVGRjBDXHU2MjUzXHU3RkZCXHU1NDk2XHU1NTYxXHU2QkQ0XHU1NTlEXHU0RTBCXHU1NDk2XHU1NTYxXHU4QkE5XHU0RUJBXHU2NkY0XHU2NzA5XHU3Q0JFXHU3OTVFJyxcclxuICAgICAgJ1x1OTBBM1x1NEU5Qlx1OEJGNFx1NjYxRlx1NjYxRlx1NTk3RFx1NzcwQlx1NzY4NFx1NEVCQVx1NEUwMFx1NUI5QVx1NkNBMVx1NjcwOVx1NzcwQlx1OEZDN1x1NEY2MFx1NzY4NFx1NzczQ1x1Nzc1QicsXHJcbiAgICAgICdcdTU0RUFcdTY3MDlcdTRFQzBcdTRFNDhcdTdBODFcdTcxMzZcdTYwRjNcdThENzdcdUZGMENcdTUzRUFcdTY2MkZcdTRFMDBcdTc2RjRcdTY1M0VcdTU3MjhcdTVGQzNcdTkxQ0MnLFxyXG4gICAgICAnXHU1QkY5XHU2NzJBXHU2NzY1XHU3Njg0XHU3NzFGXHU2QjYzXHU2MTc3XHU2MTY4XHVGRjBDXHU2NjJGXHU2MjhBXHU0RTAwXHU1MjA3XHU3MzJFXHU3RUQ5XHU3M0IwXHU1NzI4JyxcclxuICAgICAgJ1x1NTA1QVx1NEU4Nlx1NTQ4Q1x1NTkyN1x1NTkxQVx1NjU3MFx1NEVCQVx1NEUwMFx1NjgzN1x1NzY4NFx1OTAwOVx1NjJFOVx1RkYwQ1x1NEYxQVx1NUY5N1x1NTIzMFx1NTQ4Q1x1NTkyN1x1NTkxQVx1NjU3MFx1NEVCQVx1NEUwMFx1NjgzN1x1NzY4NFx1N0VEM1x1Njc5QycsXHJcbiAgICAgICdcdTRFQkFcdTRFMDBcdTY1RTZcdTU3MjhcdTRFRDhcdTUxRkFcdTUyQUFcdTUyOUJcdTY3MkFcdTgwRkRcdTVCOUVcdTY1RjZcdTgzQjdcdTVGOTdcdTUzQ0RcdTk5ODhcdTY1RjZcdUZGMENcdTVDMzFcdTRGMUFcdTUzRDhcdTVGOTdcdTY3ODFcdTUxNzZcdTYxRDJcdTYwRjAnLFxyXG4gICAgICAnXHU1RTc0XHU4RjdCXHU0RUJBXHU3Njg0XHU2NUY2XHU4NUFBXHU1REYyXHU3RUNGXHU2QkQ0XHU1MDVDXHU4RjY2XHU0RjREXHU4RkQ4XHU0RjRFXHU0RTg2XHUzMDAyXHU1MDVDXHU4RjY2XHU4RDM5XHU2NzA5IDggXHU1QzBGXHU2NUY2XHU0RTBBXHU5NjUwXHVGRjBDXHU1RTc0XHU4RjdCXHU0RUJBXHU2Q0ExXHU2NzA5J1xyXG4gICAgXSwgLy8gXHU2M0NGXHU4RkYwXHU0RkUxXHU2MDZGXHJcbiAgICBzd2l0Y2hUaW1lOiA2MDAwLCAvLyBcdTYzQ0ZcdThGRjBcdTRGRTFcdTYwNkZcdTUyMDdcdTYzNjJcdTk1RjRcdTk2OTRcdTY1RjZcdTk1RjRcdUZGMENcdTUzNTVcdTRGNERcdUZGMUFcdTZCRUJcdTc5RDJcdTMwMDJkZXNjU3R5bGUgXHU0RTNBIHN3aXRjaCBcdTY1RjZcdTc1MUZcdTY1NDhcclxuICAgIHN3aXRjaFNodWZmbGU6IGZhbHNlLCAvLyBcdTYzQ0ZcdThGRjBcdTRGRTFcdTYwNkZcdTY2MkZcdTU0MjZcdTk2OEZcdTY3M0FcdTUyMDdcdTYzNjJcdUZGMENcdTRFM0EgZmFsc2UgXHU2NUY2XHU2MzA5XHU5ODdBXHU1RThGXHU1MjA3XHU2MzYyXHUzMDAyZGVzY1N0eWxlIFx1NEUzQSBzd2l0Y2ggXHU2NUY2XHU3NTFGXHU2NTQ4XHJcbiAgfSxcclxuXHJcbiAgLy8gXHU2NTg3XHU3QUUwXHU1MjE3XHU4ODY4XHU5MTREXHU3RjZFIGh0dHBzOi8vdnAudGVlay50b3AvcmVmZXJlbmNlL3Bvc3QtY29uZmlnLmh0bWwjcG9zdFxyXG4gIHBvc3Q6IHtcclxuICAgIHBvc3RTdHlsZTogXCJsaXN0XCIsIC8vIFx1NjU4N1x1N0FFMFx1NTIxN1x1ODg2OFx1OThDRVx1NjgzQ1xyXG4gICAgZXhjZXJwdFBvc2l0aW9uOiBcInRvcFwiLCAvLyBcdTY1ODdcdTdBRTBcdTY0NThcdTg5ODFcdTRGNERcdTdGNkVcclxuICAgIHNob3dNb3JlOiB0cnVlLCAvLyBcdTY2MkZcdTU0MjZcdTY2M0VcdTc5M0FcdTY2RjRcdTU5MUFcdTYzMDlcdTk0QUVcclxuICAgIG1vcmVMYWJlbDogXCJcdTk2MDVcdThCRkJcdTUxNjhcdTY1ODcgPlwiLCAvLyBcdTY2RjRcdTU5MUFcdTYzMDlcdTk0QUVcdTY1ODdcdTVCNTdcclxuICAgIGVtcHR5TGFiZWw6IFwiXHU2NjgyXHU2NUUwXHU2NTg3XHU3QUUwXCIsIC8vIFx1NjU4N1x1N0FFMFx1NTIxN1x1ODg2OFx1NEUzQVx1N0E3QVx1NjVGNlx1NzY4NFx1NjgwN1x1N0I3RVxyXG4gICAgY292ZXJJbWdNb2RlOiBcImZ1bGxcIiwgLy8gXHU2NTg3XHU3QUUwXHU1QzAxXHU5NzYyXHU1NkZFXHU2QTIxXHU1RjBGXHJcbiAgICBzaG93Q2FwdHVyZTogZmFsc2UsIC8vIFx1NjYyRlx1NTQyNlx1NTcyOFx1NjQ1OFx1ODk4MVx1NEY0RFx1N0Y2RVx1NjYzRVx1NzkzQVx1NjU4N1x1N0FFMFx1OTBFOFx1NTIwNlx1NjU4N1x1NUI1N1x1RkYwQ1x1NUY1M1x1NEUzQSB0cnVlIFx1NEUxNFx1NEUwRFx1NEY3Rlx1NzUyOCBmcm9udG1hdHRlci5kZXNjcmliZSBcdTU0OEMgPCEtLSBtb3JlIC0tPiBcdTY1RjZcdUZGMENcdTRGMUFcdTgxRUFcdTUyQThcdTYyMkFcdTUzRDZcdTUyNEQgMzAwIFx1NEUyQVx1NUI1N1x1N0IyNlx1NEY1Q1x1NEUzQVx1NjQ1OFx1ODk4MVxyXG4gICAgc3BsaXRTZXBhcmF0b3I6IGZhbHNlLCAvLyBcdTY1ODdcdTdBRTBcdTRGRTFcdTYwNkZcdUZGMDhcdTRGNUNcdTgwMDVcdTMwMDFcdTUyMUJcdTVFRkFcdTY1RjZcdTk1RjRcdTMwMDFcdTUyMDZcdTdDN0JcdTMwMDFcdTY4MDdcdTdCN0VcdTdCNDlcdTRGRTFcdTYwNkZcdUZGMDlcdTY2MkZcdTU0MjZcdTZERkJcdTUyQTAgfCBcdTUyMDZcdTk2OTRcdTdCMjZcclxuICAgIHRyYW5zaXRpb246IHRydWUsIC8vIFx1NjYyRlx1NTQyNlx1NUYwMFx1NTQyRlx1OEZDN1x1NkUyMVx1NTJBOFx1NzUzQlxyXG4gICAgdHJhbnNpdGlvbk5hbWU6IFwidGstc2xpZGUtZmFkZVwiLCAvLyBcdTgxRUFcdTVCOUFcdTRFNDlcdThGQzdcdTZFMjFcdTUyQThcdTc1M0JcdTU0MERcdTc5RjBcclxuICAgIGxpc3RTdHlsZVRpdGxlVGFnUG9zaXRpb246IFwicmlnaHRcIiwgLy8gXHU1MjE3XHU4ODY4XHU2QTIxXHU1RjBGXHU0RTBCXHU3Njg0XHU2ODA3XHU5ODk4XHU2ODA3XHU3QjdFXHU0RjREXHU3RjZFXHVGRjA4cG9zdFN0eWxlIFx1NEUzQSBsaXN0XHVGRjA5XHJcbiAgICBjYXJkU3R5bGVUaXRsZVRhZ1Bvc2l0aW9uOiBcImxlZnRcIiwgLy8gXHU1MzYxXHU3MjQ3XHU2QTIxXHU1RjBGXHU0RTBCXHU3Njg0XHU2ODA3XHU5ODk4XHU2ODA3XHU3QjdFXHU0RjREXHU3RjZFXHVGRjA4cG9zdFN0eWxlIFx1NEUzQSBjYXJkXHVGRjA5XHJcbiAgICBkZWZhdWx0Q292ZXJJbWc6IEltZ3MsIC8vIFx1OUVEOFx1OEJBNFx1NUMwMVx1OTc2Mlx1NTZGRVx1NTczMFx1NTc0MFx1RkYwQ1x1NTk4Mlx1Njc5Q1x1NEUwRFx1OEJCRVx1N0Y2RVx1NUMwMVx1OTc2Mlx1NTZGRVx1NTIxOVx1NEY3Rlx1NzUyOFx1OUVEOFx1OEJBNFx1NUMwMVx1OTc2Mlx1NTZGRVx1NTczMFx1NTc0MFxyXG4gIH0sXHJcblxyXG4gIC8vIFx1OTg3NVx1ODExQVx1OTE0RFx1N0Y2RVxyXG4gIGZvb3RlckluZm86IHtcclxuICAgIC8vIFx1OTg3NVx1ODExQVx1NEZFMVx1NjA2Rlx1RkYwQ1x1NjUyRlx1NjMwMSBIVE1MIFx1NjgzQ1x1NUYwRlx1RkYwOFx1NEY0RFx1NEU4RVx1NEUzQlx1OTg5OFx1NzI0OFx1Njc0M1x1NEUwQVx1NjVCOVx1RkYwOVxyXG4gICAgLy8gdG9wTWVzc2FnZTogW1wiXHU0RTBCXHU5NzYyXHU3Njg0XHU1MTg1XHU1QkI5XHU1NDhDXHU1NkZFXHU2ODA3XHU5MEZEXHU1M0VGXHU0RUU1XHU0RkVFXHU2NTM5XHVGRjA4XHU2NzJDXHU2NzYxXHU1MTg1XHU1QkI5XHU0RTVGXHU1M0VGXHU0RUU1XHU5NjkwXHU4NUNGXHU3Njg0XHVGRjA5XCJdLFxyXG4gICAgLy8gXHU5ODc1XHU4MTFBXHU0RkUxXHU2MDZGXHVGRjBDXHU2NTJGXHU2MzAxIEhUTUwgXHU2ODNDXHU1RjBGXHVGRjA4XHU0RjREXHU0RThFXHU0RTNCXHU5ODk4XHU3MjQ4XHU2NzQzXHU0RTBCXHU2NUI5XHVGRjA5XHJcbiAgICBib3R0b21NZXNzYWdlOiBgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmZvcmV2ZXJibG9nLmNuL1wiIGNsYXNzPVwiZC1pbmxpbmUtYmxvY2sgdGV4dC1tdXRlZFwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cImV4dGVybmFsIG5vZm9sbG93XCI+XHJcbiAgICA8aW1nIHNyYz1cImh0dHBzOi8vaW1hZ2UucGV0ZXJqeGwuY29tL2Jsb2cvZm9yZXZlcmJsb2cud2VicFwiIGFsdD1cIlx1NzBCOVx1NTFGQlx1NjdFNVx1NzcwQlx1NTM0MVx1NUU3NFx1NEU0Qlx1N0VBNlwiIHN0eWxlPVwid2lkdGg6YXV0bztoZWlnaHQ6MTFweDtcIj4gYCxcclxuICAgIC8vIFx1NEUzQlx1OTg5OFx1NzI0OFx1Njc0M1x1OTE0RFx1N0Y2RVxyXG4gICAgdGhlbWU6IHtcclxuICAgICAgc2hvdzogdHJ1ZSwgLy8gXHU2NjJGXHU1NDI2XHU2NjNFXHU3OTNBXHU0RTNCXHU5ODk4XHU3MjQ4XHU2NzQzXHVGRjBDXHU1RUZBXHU4QkFFXHU2NjNFXHU3OTNBXHJcbiAgICAgIG5hbWU6IFwiVGhlbWUgQnkgVGVla1wiLCAvLyBcdTgxRUFcdTVCOUFcdTRFNDlcdTU0MERcdTc5RjBcclxuICAgICAgbGluazogXCJodHRwczovL3ZwLnRlZWsudG9wXCIsIC8vIFx1ODFFQVx1NUI5QVx1NEU0OVx1OTRGRVx1NjNBNVxyXG4gICAgfSxcclxuICAgIC8vIFx1NTM1QVx1NUJBMlx1NzI0OFx1Njc0M1x1OTE0RFx1N0Y2RVxyXG4gICAgY29weXJpZ2h0OiB7XHJcbiAgICAgIHNob3c6IHRydWUsIC8vIFx1NjYyRlx1NTQyNlx1NjYzRVx1NzkzQVx1NTM1QVx1NUJBMlx1NzI0OFx1Njc0M1xyXG4gICAgICBjcmVhdGVZZWFyOiAyMDIyLCAvLyBcdTUyMUJcdTVFRkFcdTVFNzRcdTRFRkRcclxuICAgICAgc3VmZml4OiBcIlx1NjY1M1x1Njc5N1x1NzY4NFx1NTM1QVx1NUJBMlwiLCAvLyBcdTU0MEVcdTdGMDBcclxuICAgIH0sXHJcbiAgICAvLyBJQ1AgXHU1OTA3XHU2ODQ4XHU0RkUxXHU2MDZGXHU5MTREXHU3RjZFXHJcbiAgICBpY3BSZWNvcmQ6IHtcclxuICAgICAgbmFtZTogXCJcdTdDQTQgSUNQIFx1NTkwNyAyMDIyMDY3NjI3IFx1NTNGNyAtMVwiLFxyXG4gICAgICBsaW5rOiBcImh0dHBzOi8vYmVpYW4ubWlpdC5nb3YuY25cIixcclxuICAgIH0sXHJcbiAgICAvLyBcdTdGNTFcdTdFRENcdTVCODlcdTUxNjhcdTU5MDdcdTY4NDhcdTRGRTFcdTYwNkZcdTkxNERcdTdGNkVcclxuICAgIHNlY3VyaXR5UmVjb3JkOiB7XHJcbiAgICAgIG5hbWU6IFwiXHU3Q0E0XHU1MTZDXHU3RjUxXHU1Qjg5XHU1OTA3IDQ0MDExMzAyMDAzNjQ2IFx1NTNGN1wiLFxyXG4gICAgICBsaW5rOiBcImh0dHA6Ly93d3cuYmVpYW4uZ292LmNuL3BvcnRhbC9yZWdpc3RlclN5c3RlbUluZm8/cmVjb3JkY29kZT00NDAxMTMwMjAwMzY0NlwiLFxyXG4gICAgfSxcclxuICB9LFxyXG5cclxuICAvLyBcdTY4MDdcdTdCN0VcdTUzNjFcdTcyNDdcdTkxNERcdTdGNkVcclxuICB0YWc6IHtcclxuICAgIGVuYWJsZWQ6IGZhbHNlXHJcbiAgfSxcclxuXHJcbiAgLy8gXHU1MjA2XHU3QzdCXHU1MzYxXHU3MjQ3XHU5MTREXHU3RjZFXHJcbiAgY2F0ZWdvcnk6IHtcclxuICAgIGVuYWJsZWQ6IGZhbHNlXHJcbiAgfSxcclxuXHJcbiAgLy8gXHU1MzVBXHU0RTNCXHU0RkUxXHU2MDZGXHVGRjBDXHU2NjNFXHU3OTNBXHU1NzI4XHU5OTk2XHU5ODc1XHU1REU2XHU4RkI5XHU3QjJDXHU0RTAwXHU0RTJBXHU1MzYxXHU3MjQ3XHJcbiAgYmxvZ2dlcjoge1xyXG4gICAgbmFtZTogXCJcdTY2NTNcdTY3OTdcIiwgLy8gXHU1MzVBXHU0RTNCXHU2NjM1XHU3OUYwXHJcbiAgICBzbG9nYW46IFwiXHU3QTBCXHU1RThGXHU3MzNGXHVGRjBDXHU4MUVBXHU3NTMxXHU4MDRDXHU0RTFBXHU4MDA1XHVGRjBDXHU1MzVBXHU0RTNCXHVGRjBDXHU4MkYxXHU4QkVEXHU3MjMxXHU1OTdEXHU4MDA1XHVGRjBDXHU1MDY1XHU4RUFCXHU4RkJFXHU0RUJBXCIsIC8vIFx1NTM1QVx1NEUzQlx1N0I3RVx1NTQwRFxyXG4gICAgYXZhdGFyOiBcImh0dHBzOi8vaW1hZ2UucGV0ZXJqeGwuY29tL2Jsb2cvcmUwLmpwZ1wiLCAvLyBcdTUzNUFcdTRFM0JcdTU5MzRcdTUwQ0ZcclxuICAgIHNoYXBlOiBcImNpcmNsZVwiLCAvLyBcdTU5MzRcdTUwQ0ZcdTk4Q0VcdTY4M0NcdUZGMUFzcXVhcmUgXHU0RTNBXHU2NUI5XHU1RjYyXHU1OTM0XHU1MENGXHVGRjBDY2lyY2xlIFx1NEUzQVx1NTcwNlx1NUY2Mlx1NTkzNFx1NTBDRlx1RkYwQ2NpcmNsZS1yb3RhdGUgXHU1M0VGXHU2NTJGXHU2MzAxXHU5RjIwXHU2ODA3XHU2MEFDXHU1MDVDXHU2NUNCXHU4RjZDXHVGRjBDY2lyY2xlLXJvdGF0ZS1sYXN0IFx1NUMwNlx1NEYxQVx1NjMwMVx1N0VFRFx1NjVDQlx1OEY2QyA1OXNcclxuICAgIGNpcmNsZUJnSW1nOiBcImh0dHBzOi8vaW1hZ2UucGV0ZXJqeGwuY29tL2Jsb2cvc2t5LXRpbWUtbGFwc2UuanBnXCIsIC8vIFx1ODBDQ1x1NjY2Rlx1NTZGRVx1NzI0N1xyXG4gICAgY2lyY2xlQmdNYXNrOiB0cnVlLCAvLyBcdTkwNkVcdTdGNjlcdTVDNDJcdTY2MkZcdTU0MjZcdTY2M0VcdTc5M0FcdUZGMENcdTRFQzVcdTVGNTMgc2hhcGUgXHU0RTNBIGNpcmNsZSBcdTRFMTQgY2lyY2xlQmdJbWcgXHU5MTREXHU3RjZFXHU2NUY2XHU2NzA5XHU2NTQ4XHJcbiAgICBjaXJjbGVTaXplOiAxMDAsIC8vIFx1NTkzNFx1NTBDRlx1NTkyN1x1NUMwRlxyXG4gICAgY29sb3I6IFwiI2ZmZmZmZlwiLCAvLyBcdTVCNTdcdTRGNTNcdTk4OUNcdTgyNzJcclxuICAgIC8vIFx1NzJCNlx1NjAwMVx1RkYwQ1x1NEVDNVx1NUY1MyBzaGFwZSBcdTRFM0EgY2lyY2xlIFx1NzZGOFx1NTE3M1x1NTAzQ1x1NjVGNlx1NjcwOVx1NjU0OFxyXG4gICAgc3RhdHVzOiB7XHJcbiAgICAgIGljb246IFwiXHVEODNEXHVERTJBXCIsIC8vIFx1NzJCNlx1NjAwMVx1NTZGRVx1NjgwN1xyXG4gICAgICBzaXplOiAyNCwgLy8gXHU1NkZFXHU2ODA3XHU1OTI3XHU1QzBGXHJcbiAgICAgIHRpdGxlOiBcIlx1NTZGMFwiLCAvLyBcdTlGMjBcdTY4MDdcdTYwQUNcdTUwNUNcdTU2RkVcdTY4MDdcdTc2ODRcdTYzRDBcdTc5M0FcdThCRURcclxuICAgIH0sXHJcbiAgfSxcclxuXHJcbiAgc29jaWFsOiBTb2NpYWxMaW5rcywgICAvLyBcdTc5M0VcdTRFQTRcdTU2RkVcdTY4MDdcdUZGMENcdTY2M0VcdTc5M0FcdTRFOEVcdTUzNUFcdTRFM0JcdTRGRTFcdTYwNkZcdTY4MEZcdTU0OENcdTk4NzVcdTgxMUFcdTY4MEZcdTMwMDJcdTUzQzJcdTgwMDMgaHR0cHM6Ly92cC50ZWVrLnRvcC9ndWlkZS9pY29uLXVzZS5odG1sI1x1NzkzRVx1NEVBNFx1NTZGRVx1NjgwNy1pY29uZm9udFxyXG4gIFxyXG4gIC8vIFx1ODBDQ1x1NjY2Rlx1NTZGRVx1OTE0RFx1N0Y2RVx1RkYwQ1x1NUMwNlx1NjU3NFx1NEUyQVx1N0Y1MVx1N0FEOVx1NzY4NFx1ODBDQ1x1NjY2Rlx1ODI3Mlx1NjUzOVx1NEUzQVx1NTZGRVx1NzI0N1xyXG4gIGJvZHlCZ0ltZzoge1xyXG4gICAgaW1nU3JjOiBJbWdzLCAvLyBcdTgwQ0NcdTY2NkZcdTU2RkVcdTU3MzBcdTU3NDBcdUZGMENcdTY1MkZcdTYzMDFcdTUzNTVcdTVGMjBcdTYyMTZcdTU5MUFcdTVGMjBcdUZGMDhcdTY1NzBcdTdFQzRcdTVGNjJcdTVGMEZcdUZGMDlcclxuICAgIGltZ09wYWNpdHk6IDEsIC8vIFx1ODBDQ1x1NjY2Rlx1NTZGRVx1OTAwRlx1NjYwRVx1NUVBNlx1RkYwQ1x1OTAwOVx1NTAzQyAwLjEgfiAxLjBcclxuICAgIGltZ0ludGVydmFsOiAzMDAwMCwgLy8gIFx1NUY1M1x1NjcwOVx1NTkxQVx1NUYyMFx1ODBDQ1x1NjY2Rlx1NTZGRVx1NjVGNlx1RkYwOGltZ1NyYyBcdTRFM0FcdTY1NzBcdTdFQzRcdUZGMDlcdUZGMENcdThCQkVcdTdGNkVcdTUyMDdcdTYzNjJcdTY1RjZcdTk1RjRcdUZGMENcdTUzNTVcdTRGNERcdUZGMUFcdTZCRUJcdTc5RDJcclxuICAgIGltZ1NodWZmbGU6IGZhbHNlLCAvLyBcdTY2MkZcdTU0MjZcdTk2OEZcdTY3M0FcdTUyMDdcdTYzNjJcclxuICAgIG1hc2s6IGZhbHNlIC8vIFx1ODBDQ1x1NjY2Rlx1NTZGRVx1OTA2RVx1N0Y2OVxyXG4gIH0sICAgXHJcblxyXG4gIC8vIFx1N0NCRVx1OTAwOVx1NjU4N1x1N0FFMFx1NTM2MVx1NzI0N1x1OTE0RFx1N0Y2RVxyXG4gIHRvcEFydGljbGU6IHtcclxuICAgIGVuYWJsZWQ6IHRydWUsIC8vIFx1NjYyRlx1NTQyNlx1NTQyRlx1NzUyOFx1N0NCRVx1OTAwOVx1NjU4N1x1N0FFMFx1NTM2MVx1NzI0N1xyXG4gICAgbGltaXQ6IDUsIC8vIFx1NEUwMFx1OTg3NVx1NjYzRVx1NzkzQVx1NzY4NFx1NjU3MFx1OTFDRlxyXG4gICAgYXV0b1BhZ2U6IGZhbHNlLCAvLyBcdTY2MkZcdTU0MjZcdTgxRUFcdTUyQThcdTdGRkJcdTk4NzVcclxuICAgIGRhdGVGb3JtYXQ6IFwieXl5eS1NTS1kZCBoaDptbTpzc1wiLCAvLyBcdTdDQkVcdTkwMDlcdTY1ODdcdTdBRTBcdTc2ODRcdTY1RTVcdTY3MUZcdTY4M0NcdTVGMEZcclxuICB9LFxyXG5cclxuICAvLyBcdTUzQ0JcdTYwQzVcdTk0RkVcdTYzQTVcdTUzNjFcdTcyNDdcdTkxNERcdTdGNkVcclxuICBmcmllbmRMaW5rOiB7XHJcbiAgICBlbmFibGVkOiB0cnVlLCAvLyBcdTY2MkZcdTU0MjZcdTU0MkZcdTc1MjhcdTUzQ0JcdTYwQzVcdTk0RkVcdTYzQTVcdTUzNjFcdTcyNDdcclxuICAgIGxpbWl0OiA1LCAvLyBcdTRFMDBcdTk4NzVcdTY2M0VcdTc5M0FcdTc2ODRcdTY1NzBcdTkxQ0ZcclxuICAgIGF1dG9TY3JvbGw6IGZhbHNlLCAvLyBcdTY2MkZcdTU0MjZcdTgxRUFcdTUyQThcdTZFREFcdTUyQThcclxuICAgIGxpc3Q6IFtcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwiVGVla2VyXCIsXHJcbiAgICAgICAgZGVzYzogXCJcdTY3MURcdTU3MjNcdTc2ODRcdTRGN0ZcdTVGOTJcdUZGMENcdTZCNjNcdTU3MjhcdThENzBcdTU0MTFcdTdGMTZcdTdBMEJcdTc2ODRcdTgxRjNcdTlBRDhcdTZCQkZcdTU4MDJcdUZGMDFcIixcclxuICAgICAgICBhdmF0YXI6IFwiaHR0cHM6Ly90ZXN0aW5nY2YuanNkZWxpdnIubmV0L2doL0tlbGUtQmluZ3Rhbmcvc3RhdGljL3VzZXIvYXZhdGFyMi5wbmdcIixcclxuICAgICAgICBsaW5rOiBcImh0dHA6Ly9ub3Rlcy50ZWVrLnRvcC9cIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwiRXZhbidzIGJsb2dcIixcclxuICAgICAgICBkZXNjOiBcIiBXZWIgXHU1MjREXHU3QUVGXHU2MjgwXHU2NzJGXHU1MzVBXHU1QkEyXHVGRjBDXHU3OUVGXHU4REVDXHU2QjY1XHU0RUU1XHU4MUYzXHU1MzQzXHU5MUNDXCIsXHJcbiAgICAgICAgYXZhdGFyOiBcImh0dHBzOi8vaW1hZ2UucGV0ZXJqeGwuY29tL2Jsb2cveHVnYW95aS5qcGdcIixcclxuICAgICAgICBsaW5rOiBcImh0dHBzOi8veHVnYW95aS5jb21cIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwiT25lIEJsb2dcIixcclxuICAgICAgICBkZXNjOiBcIlx1NjYwRVx1NUZDM1x1OTc1OVx1NjAyN1x1RkYwQ1x1NzIzMVx1ODFFQVx1NURGMVwiLFxyXG4gICAgICAgIGF2YXRhcjogXCJodHRwczovL2ltZy54eGRldm9wcy5jbi9ibG9nL2F2YXRhci95dXdlbl9hdmF0YXIuYXZpZlwiLFxyXG4gICAgICAgIGxpbms6IFwiaHR0cHM6Ly9vbmVkYXl4eXkuY24vXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBcIlx1NEU4Q1x1NEUyQlx1OEJCMlx1NjhCNSBcIixcclxuICAgICAgICBkZXNjOiBcIlx1RDgzRFx1RENCQlx1NUI2Nlx1NEU2MFx1RDgzRFx1RENERFx1OEJCMFx1NUY1NVx1RDgzRFx1REQxN1x1NTIwNlx1NEVBQiBcIixcclxuICAgICAgICBhdmF0YXI6IFwiaHR0cHM6Ly93aWtpLmVyeWFqZi5uZXQvaW1nL2xvZ28ucG5nXCIsXHJcbiAgICAgICAgbGluazogXCJodHRwczovL3dpa2kuZXJ5YWpmLm5ldFwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogXCJpTWFlR29vXHUyMDE5cyBCbG9nXCIsXHJcbiAgICAgICAgZGVzYzogXCJcdTg2NzlcdTU4QThcdTdBN0FcdTk1RjRcdTdBRDlcIixcclxuICAgICAgICBhdmF0YXI6IFwiaHR0cHM6Ly9jcmF2YXRhci5jbi9hdmF0YXIvMDViYjJhYTI5YzlkYTZlZjY1ZmFiZDMyMTEzNWU3YjY/cz0yMDBcIixcclxuICAgICAgICBsaW5rOiBcImh0dHBzOi8vd3d3LmltYWVnb28uY29tXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBcIlx1NjAyMFx1NjBGMFx1MzA2RVx1MzBCM1x1MzBBOCAtIGltYmFcdTRFNDVcdTY3MUYgQkxPR1wiLFxyXG4gICAgICAgIGRlc2M6IFwiXHUzMDQyXHUzMDZBXHUzMDVGXHUzMDAxXHU2MDIwXHU2MEYwXHUzMDY3XHUzMDU5XHUzMDZEXHUzMEZDXCIsXHJcbiAgICAgICAgYXZhdGFyOiBcImh0dHBzOi8vaW1iYTk3LmNuL3VwbG9hZHMvMjAxOS8wOC9pbWJhOTctMTAyNC0zMDB4MzAwLnBuZ1wiLFxyXG4gICAgICAgIGxpbms6IFwiaHR0cHM6Ly9pbWJhOTcuY25cIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwiXHU3RUY0XHU1N0ZBXHU4NDBDXCIsXHJcbiAgICAgICAgZGVzYzogXCJcdTg0MENcdTUzNzNcdTY2MkZcdTZCNjNcdTRFNDlcdUZGMDFcdTY1RjZcdTRFMERcdTY1RjZcdTUyMDZcdTRFQUJcdTRFMDBcdTRFOUIgQUNHIFx1NkQzQlx1NTJBOFx1OEJCMFx1NUY1NVx1NEUwRVx1NjcwOVx1OERBM1x1NEVFM1x1NzgwMVx1NzY4NFx1NUMwRlx1N0FEOVx1RkYwMVwiLFxyXG4gICAgICAgIGF2YXRhcjogXCJodHRwczovL3d3dy53aWtpbW9lLmNvbS91cGxvYWQvc2l0ZUltZy9zaXRlRmF2aWNvbi5wbmdcIixcclxuICAgICAgICBsaW5rOiBcImh0dHBzOi8vd3d3Lndpa2ltb2UuY29tXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBcIlx1OTY3Nlx1NUMwRlx1Njg0MyBCbG9nXCIsXHJcbiAgICAgICAgZGVzYzogXCJcdTcwRURcdTg4NzdcdTRFOEVcdTUyMDZcdTRFQUJcdTYyODBcdTY3MkZcdTc2ODRcdTY3M0FcdTY4QjBcdTRFMTNcdTRFMUFcdTVDMEZcdTU0RTVcdTU0RTV+XCIsXHJcbiAgICAgICAgYXZhdGFyOiBcImh0dHBzOi8vaW1hZ2UucGV0ZXJqeGwuY29tL2Jsb2cvcFN1RG42SC5wbmdcIixcclxuICAgICAgICBsaW5rOiBcImh0dHBzOi8vd3d3LjUydHhyLmNuXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBcIlx1NUYyMFx1NkQyQSBIZW9cIixcclxuICAgICAgICBkZXNjOiBcIlx1NTIwNlx1NEVBQlx1OEJCRVx1OEJBMVx1NEUwRVx1NzlEMVx1NjI4MFx1NzUxRlx1NkQzQlwiLFxyXG4gICAgICAgIGF2YXRhcjogXCJodHRwczovL2ltZy56aGhlby5jb20vaS82N2Q4ZmE3NTk0M2U0LndlYnBcIixcclxuICAgICAgICBsaW5rOiBcImh0dHBzOi8vYmxvZy56aGhlby5jb21cIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwiXHU4NDcxXHU4MkQzIHNhbWFcIixcclxuICAgICAgICBkZXNjOiBcIkRvbid0IHdvcnJ5LCBCZSBoYXBweS5cIixcclxuICAgICAgICBhdmF0YXI6IFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2NpcmFvcy9jaXJhb3Mtc3RhdGljQG1haW4vaW1nL2F2YXRhcjEuYXZpZlwiLFxyXG4gICAgICAgIGxpbms6IFwiaHR0cHM6Ly9ibG9nLmNpcmFvcy50b3BcIixcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuXHJcbiAgLy8gXHU1M0YzXHU0RTBCXHU4OUQyXHU1NkRFXHU1MjMwXHU5ODc2XHU5MEU4XHU5MTREXHU3RjZFXHJcbiAgYmFja1RvcDoge1xyXG4gICAgZW5hYmxlZDogdHJ1ZSwgLy8gXHU2NjJGXHU1NDI2XHU1NDJGXHU1MkE4XHU1NkRFXHU1MjMwXHU5ODc2XHU5MEU4XHU1MjlGXHU4MEZEXHJcbiAgICBjb250ZW50OiBcImljb25cIiwgLy8gXHU1NkRFXHU1MjMwXHU5ODc2XHU5MEU4XHU2MzA5XHU5NEFFXHU3Njg0XHU2NjNFXHU3OTNBXHU1MTg1XHU1QkI5XHVGRjBDXHU1M0VGXHU5MDA5XHU5MTREXHU3RjZFIHByb2dyZXNzIHwgaWNvblxyXG4gICAgZG9uZTogVGtNZXNzYWdlID0+IFRrTWVzc2FnZS5zdWNjZXNzKFwiXHU4RkQ0XHU1NkRFXHU5ODc2XHU5MEU4XHU2MjEwXHU1MjlGXCIpLCAvLyBcdTU2REVcdTUyMzBcdTk4NzZcdTkwRThcdTU0MEVcdTc2ODRcdTU2REVcdThDMDNcclxuICB9LFxyXG5cclxuICAvLyBcdTZFREFcdTUyQThcdTUyMzBcdThCQzRcdThCQkFcdTUzM0FcdTkxNERcdTdGNkVcclxuICB0b0NvbW1lbnQ6IHtcclxuICAgIGVuYWJsZWQ6IHRydWUsIC8vIFx1NjYyRlx1NTQyNlx1NTQyRlx1NTJBOFx1NkVEQVx1NTJBOFx1NTIzMFx1OEJDNFx1OEJCQVx1NTMzQVx1NTI5Rlx1ODBGRFxyXG4gICAgZG9uZTogVGtNZXNzYWdlID0+IFRrTWVzc2FnZS5zdWNjZXNzKFwiXHU2RURBXHU1MkE4XHU1MjMwXHU4QkM0XHU4QkJBXHU1MzNBXHU2MjEwXHU1MjlGXCIpLCAvLyBcdTZFREFcdTUyQThcdTUyMzBcdThCQzRcdThCQkFcdTUzM0FcdTU0MEVcdTc2ODRcdTU2REVcdThDMDNcclxuICB9LFxyXG5cclxuICAvLyBcdTRFRTNcdTc4MDFcdTU3NTdcdTkxNERcdTdGNkVcclxuICBjb2RlQmxvY2s6IHtcclxuICAgIGVuYWJsZWQ6IHRydWUsIC8vIFx1NjYyRlx1NTQyNlx1NTQyRlx1NzUyOFx1NjVCMFx1NzI0OFx1NEVFM1x1NzgwMVx1NTc1N1xyXG4gICAgY29sbGFwc2VIZWlnaHQ6IDcwMCwgLy8gXHU4RDg1XHU1MUZBXHU5QUQ4XHU1RUE2XHU1NDBFXHU4MUVBXHU1MkE4XHU2Mjk4XHU1M0UwXHVGRjBDXHU4QkJFXHU3RjZFIHRydWUgXHU1MjE5XHU5RUQ4XHU4QkE0XHU2Mjk4XHU1M0UwXHVGRjBDZmFsc2UgXHU1MjE5XHU5RUQ4XHU4QkE0XHU0RTBEXHU2Mjk4XHU1M0UwXHJcbiAgICBvdmVybGF5OiB0cnVlLCAvLyBcdTRFRTNcdTc4MDFcdTU3NTdcdTVFOTVcdTkwRThcdTY2MkZcdTU0MjZcdTY2M0VcdTc5M0FcdTVDNTVcdTVGMDAvXHU2Mjk4XHU1M0UwXHU5MDZFXHU3RjY5XHU1QzQyXHJcbiAgICBvdmVybGF5SGVpZ2h0OiA0MDAsIC8vIFx1NUY1M1x1NTFGQVx1NzNCMFx1OTA2RVx1N0Y2OVx1NUM0Mlx1NjVGNlx1RkYwQ1x1NjMwN1x1NUI5QVx1NEVFM1x1NzgwMVx1NTc1N1x1NjYzRVx1NzkzQVx1OUFEOFx1NUVBNlx1RkYwQ1x1NUY1MyBvdmVybGF5IFx1NEUzQSB0cnVlIFx1NjVGNlx1NzUxRlx1NjU0OFxyXG4gICAgbGFuZ1RleHRUcmFuc2Zvcm06IFwidXBwZXJjYXNlXCIsIC8vIFx1OEJFRFx1OEEwMFx1NjU4N1x1NjcyQ1x1NjYzRVx1NzkzQVx1NjgzN1x1NUYwRlx1RkYwQ1x1NEUzQSB0ZXh0LXRyYW5zZm9ybSBcdTc2ODRcdTUwM0M6bm9uZSwgY2FwaXRhbGl6ZSwgbG93ZXJjYXNlLCB1cHBlcmNhc2VcclxuICAgIGNvcGllZERvbmU6IFRrTWVzc2FnZSA9PiBUa01lc3NhZ2Uuc3VjY2VzcyhcIlx1NTkwRFx1NTIzNlx1NjIxMFx1NTI5Rlx1RkYwMVwiKSwgLy8gXHU1OTBEXHU1MjM2XHU0RUUzXHU3ODAxXHU1QjhDXHU2MjEwXHU1NDBFXHU3Njg0XHU1NkRFXHU4QzAzXHJcbiAgfSxcclxuXHJcbiAgLy8gXHU2NTg3XHU3QUUwXHU5RUQ4XHU4QkE0XHU3Njg0XHU0RjVDXHU4MDA1XHU0RkUxXHU2MDZGXHJcbiAgYXV0aG9yOiB7XHJcbiAgICBuYW1lOiBcIlx1NjY1M1x1Njc5N1wiLFxyXG4gIH0sXHJcblxyXG4gIC8vIFx1N0FEOVx1NzBCOVx1NEZFMVx1NjA2Rlx1NTM2MVx1NzI0N1x1OTE0RFx1N0Y2RVxyXG4gIGRvY0FuYWx5c2lzOiB7XHJcbiAgICBlbmFibGVkOiB0cnVlLCAvLyBcdTY2MkZcdTU0MjZcdTU0MkZcdTc1MjhcdTdBRDlcdTcwQjlcdTRGRTFcdTYwNkZcdTUzNjFcdTcyNDdcclxuICAgIGNyZWF0ZVRpbWU6IFwiMjAyMC0wNC0wMVwiLCAvLyBcdTdBRDlcdTcwQjlcdTUyMUJcdTVFRkFcdTY1RjZcdTk1RjRcclxuICAgIHdvcmRDb3VudDogdHJ1ZSwgLy8gXHU2NjJGXHU1NDI2XHU1RjAwXHU1NDJGXHU2NTg3XHU3QUUwXHU5ODc1XHU3Njg0XHU1QjU3XHU2NTcwXHU3RURGXHU4QkExXHJcbiAgICByZWFkaW5nVGltZTogdHJ1ZSwgLy8gXHU2NjJGXHU1NDI2XHU1RjAwXHU1NDJGXHU2NTg3XHU3QUUwXHU5ODc1XHU3Njg0XHU5NjA1XHU4QkZCXHU2NUY2XHU5NTdGXHU3RURGXHU4QkExXHJcbiAgICAvLyBcdThCQkZcdTk1RUVcdTkxQ0ZcdTMwMDFcdThCQkZcdTVCQTJcdTY1NzBcdTdFREZcdThCQTFcdTkxNERcdTdGNkVcclxuICAgIHN0YXRpc3RpY3M6IHtcclxuICAgICAgcHJvdmlkZXI6IFwiYnVzdWFuemlcIiwgLy8gXHU3RjUxXHU3QUQ5XHU2RDQxXHU5MUNGXHU3RURGXHU4QkExXHU2M0QwXHU0RjlCXHU1NTQ2XHJcbiAgICAgIHNpdGVWaWV3OiB0cnVlLCAvLyBcdTY2MkZcdTU0MjZcdTVGMDBcdTU0MkZcdTk5OTZcdTk4NzVcdTc2ODRcdThCQkZcdTk1RUVcdTkxQ0ZcdTU0OENcdTYzOTJcdTU0MERcdTdFREZcdThCQTFcclxuICAgICAgcGFnZVZpZXc6IHRydWUsIC8vIFx1NjYyRlx1NTQyNlx1NUYwMFx1NTQyRlx1NjU4N1x1N0FFMFx1OTg3NVx1NzY4NFx1NkQ0Rlx1ODlDOFx1OTFDRlx1N0VERlx1OEJBMVxyXG4gICAgICB0cnlSZXF1ZXN0OiBmYWxzZSwgLy8gXHU1OTgyXHU2NzlDXHU4QkY3XHU2QzQyXHU3RjUxXHU3QUQ5XHU2RDQxXHU5MUNGXHU3RURGXHU4QkExXHU2M0E1XHU1M0UzXHU1OTMxXHU4RDI1XHVGRjBDXHU2NjJGXHU1NDI2XHU5MUNEXHU4QkQ1XHJcbiAgICAgIHRyeUNvdW50OiA1LCAvLyBcdTkxQ0RcdThCRDVcdTZCMjFcdTY1NzBcdUZGMENcdTRFQzVcdTVGNTMgdHJ5UmVxdWVzdCBcdTRFM0EgdHJ1ZSBcdTY1RjZcdTY3MDlcdTY1NDhcclxuICAgICAgdHJ5SXRlcmF0aW9uVGltZTogMjAwMCwgLy8gXHU5MUNEXHU4QkQ1XHU5NUY0XHU5Njk0XHU2NUY2XHU5NUY0XHVGRjBDXHU1MzU1XHU0RjREXHVGRjFBXHU2QkVCXHU3OUQyXHVGRjBDXHU0RUM1XHU1RjUzIHRyeVJlcXVlc3QgXHU0RTNBIHRydWUgXHU2NUY2XHU2NzA5XHU2NTQ4XHJcbiAgICAgIHBlcm1hbGluazogdHJ1ZSwgLy8gXHU2NjJGXHU1NDI2XHU1M0VBXHU3RURGXHU4QkExXHU2QzM4XHU0RTQ1XHU5NEZFXHU2M0E1XHU3Njg0XHU2RDRGXHU4OUM4XHU5MUNGXHVGRjBDXHU1OTgyXHU2NzlDXHU0RTNBIGZhbHNlXHVGRjBDXHU1MjE5XHU3RURGXHU4QkExIFZpdGVQcmVzcyBcdTlFRDhcdThCQTRcdTc2ODRcdTY1ODdcdTY4NjNcdTc2RUVcdTVGNTVcdTk0RkVcdTYzQTVcclxuICAgIH0sXHJcbiAgICAvLyBcdTgxRUFcdTVCOUFcdTRFNDlcdTczQjBcdTY3MDlcdTRGRTFcdTYwNkZcclxuICAgIG92ZXJyaWRlSW5mbzogW1xyXG4gICAgICB7XHJcbiAgICAgICAga2V5OiBcImxhc3RBY3RpdmVUaW1lXCIsXHJcbiAgICAgICAgbGFiZWw6IFwiXHU2RDNCXHU4REMzXHU2NUY2XHU5NUY0XCIsXHJcbiAgICAgICAgdmFsdWU6IChfLCBjdXJyZW50VmFsdWUpID0+IChjdXJyZW50VmFsdWUgKyBcIlwiKS5yZXBsYWNlKFwiXHU1MjREXCIsIFwiXCIpLFxyXG4gICAgICAgIHNob3c6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcblxyXG4gIC8vIFx1OEQ1RVx1OEQ0Rlx1NTI5Rlx1ODBGRFx1OTE0RFx1N0Y2RSBodHRwczovL3ZwLnRlZWsudG9wL3JlZmVyZW5jZS9hcnRpY2xlLWNvbmZpZy5odG1sI2FwcHJlY2lhdGlvblxyXG4gIGFwcHJlY2lhdGlvbjoge1xyXG4gICAgcG9zaXRpb246IFwiZG9jLWFmdGVyXCIsIC8vIFx1OEQ1RVx1OEQ0Rlx1NEY0RFx1N0Y2RSBkb2MtYWZ0ZXIgXHU4QkM0XHU4QkJBXHU1MzNBXHU0RTBBXHU2NUI5XHVGRjFCZG9jLWFmdGVyLXBvcHBlciBcdTRFRTVcdTVGMzlcdTY4NDZcdTVGNjJcdTVGMEZcdTUxRkFcdTczQjBcdUZGMUJhc2lkZS1ib3R0b20gXHU1OTI3XHU3RUIyXHU2ODBGXHU0RTBCXHU2NUI5XHJcbiAgICAvLyBcdThENUVcdThENEZcdTkxNERcdTdGNkVcclxuICAgIG9wdGlvbnM6IHtcclxuICAgICAgaWNvbjogXCJ3ZUNoYXRQYXlcIiwgLy8gXHU4RDVFXHU4RDRGXHU1NkZFXHU2ODA3XHVGRjBDXHU1MTg1XHU3RjZFIHdlQ2hhdFBheSBcdTU0OEMgYWxpcGF5XHJcbiAgICAgIGV4cGFuZFRpdGxlOiBcIlx1NjI1M1x1OEQ0Rlx1NjUyRlx1NjMwMVwiLCAvLyBcdTVDNTVcdTVGMDBcdTY4MDdcdTk4OThcdUZGMENcdTY1MkZcdTYzMDEgSFRNTFxyXG4gICAgICBjb2xsYXBzZVRpdGxlOiBcIlx1NEUwQlx1NkIyMVx1NEUwMFx1NUI5QVwiLCAvLyBcdTYyOThcdTUzRTBcdTY4MDdcdTk4OThcdUZGMENcdTY1MkZcdTYzMDEgSFRNTFxyXG4gICAgICBjb250ZW50OiBgPGltZyBzcmM9J2h0dHBzOi8vaW1hZ2UucGV0ZXJqeGwuY29tL2Jsb2cvcmV3YXJkLnBuZyc+YCwgLy8gXHU4RDVFXHU4RDRGXHU1MTg1XHU1QkI5XHVGRjBDXHU2NTJGXHU2MzAxIEhUTUxcclxuICAgICAgZXhwYW5kOiBmYWxzZSwgLy8gXHU2NjJGXHU1NDI2XHU5RUQ4XHU4QkE0XHU1QzU1XHU1RjAwXHVGRjBDXHU5RUQ4XHU4QkE0IGZhbHNlXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgLy8gXHU2NTg3XHU3QUUwXHU1MjA2XHU0RUFCXHU5MTREXHU3RjZFXHJcbiAgYXJ0aWNsZVNoYXJlOiB7XHJcbiAgICBlbmFibGVkOiB0cnVlLCAvLyBcdTY2MkZcdTU0MjZcdTVGMDBcdTU0MkZcdTY1ODdcdTdBRTBcdTk0RkVcdTYzQTVcdTUyMDZcdTRFQUJcdTUyOUZcdTgwRkRcclxuICAgIHRleHQ6IFwiXHU1MjA2XHU0RUFCXHU2QjY0XHU5ODc1XHU5NzYyXCIsIC8vIFx1NTIwNlx1NEVBQlx1NjMwOVx1OTRBRVx1NjU4N1x1NjcyQ1xyXG4gICAgY29waWVkVGV4dDogXCJcdTk0RkVcdTYzQTVcdTVERjJcdTU5MERcdTUyMzZcIiwgLy8gXHU1OTBEXHU1MjM2XHU2MjEwXHU1MjlGXHU2NTg3XHU2NzJDXHJcbiAgICBxdWVyeTogZmFsc2UsIC8vIFx1NjYyRlx1NTQyNlx1NTMwNVx1NTQyQlx1NjdFNVx1OEJFMlx1NTNDMlx1NjU3MFxyXG4gICAgaGFzaDogZmFsc2UsIC8vIFx1NjYyRlx1NTQyNlx1NTMwNVx1NTQyQlx1NTRDOFx1NUUwQ1x1NTAzQ1xyXG4gIH0sXHJcblxyXG4gIC8vIFx1OEJDNFx1OEJCQVx1OTE0RFx1N0Y2RVx1RkYwQ1x1NTE4NVx1N0Y2RSBHaXNjdXNcdTMwMDFUd2lrb29cdTMwMDFXYWxpbmVcdTMwMDFBcnRhbGsgXHU1NkRCXHU3OUNEXHU4QkM0XHU4QkJBXHU2M0QyXHU0RUY2XHJcbiAgY29tbWVudDoge1xyXG4gICAgcHJvdmlkZXI6IFwidHdpa29vXCIsIC8vIFx1OEJDNFx1OEJCQVx1NTMzQVx1NjNEMFx1NEY5Qlx1ODAwNVxyXG4gICAgLy8gXHU4QkM0XHU4QkJBXHU1MzNBXHU5MTREXHU3RjZFXHU5ODc5XHVGRjBDXHU2ODM5XHU2MzZFIHByb3ZpZGVyIFx1NEUwRFx1NTQwQ1x1ODAwQ1x1NEUwRFx1NTQwQ1x1RkYwQ1x1NTE3N1x1NEY1M1x1NzcwQlx1NUJGOVx1NUU5NFx1NUI5OFx1N0Y1MVx1NzY4NFx1NEY3Rlx1NzUyOFx1NEVDQlx1N0VDRFxyXG4gICAgb3B0aW9uczoge1xyXG4gICAgICAvLyB0d2lrb28gXHU5MTREXHU3RjZFXHVGRjBDXHU1Qjk4XHU3RjUxXHVGRjFBaHR0cHM6Ly90d2lrb28uanMub3JnL1xyXG4gICAgICBlbnZJZDogXCJodHRwczovL3R3aWtvby5wZXRlcmp4bC5jb20vXCJcclxuICAgIH0sXHJcbiAgfSxcclxuXHJcbiAgLy8gXHU1MTg1XHU3RjZFIFZpdGUgXHU2M0QyXHU0RUY2XHU5MTREXHU3RjZFXHJcbiAgdml0ZVBsdWdpbnM6IHtcclxuICAgIHNpZGViYXJPcHRpb246IHtcclxuICAgICAgcmVzb2x2ZVJ1bGU6IFwicmV3cml0ZXNcIiwgLy8gXHU1M0VGXHU5MDA5IHJld3JpdGVzLCBmaWxlUGF0aCBcdThCRTZcdTg5QzEgaHR0cHM6Ly92cC50ZWVrLnRvcC9ndWlkZS9wZXJtYWxpbmsuaHRtbFxyXG4gICAgICBjb2xsYXBzZWQ6IHRydWUsIC8vIFx1NUYwMFx1NTQyRlx1NEZBN1x1OEZCOVx1NjgwRlx1NjI5OFx1NTNFMFx1NTI5Rlx1ODBGRFx1MzAwMnRydWUgXHU5RUQ4XHU4QkE0XHU2Mjk4XHU1M0UwXHVGRjBDZmFsc2UgXHU5RUQ4XHU4QkE0XHU0RTBEXHU2Mjk4XHU1M0UwXHJcbiAgICB9LFxyXG4gIH0sXHJcblxyXG4gIC8vIG1hcmtkb3duLnBsdWdpbnMsIFx1NTJBMFx1OEY3RFx1N0IyQ1x1NEUwOVx1NjVCOSBNYXJrZG93bi1pdCBcdTYzRDJcdTRFRjZcclxuICBtYXJrZG93bjoge1xyXG4gICAgY29uZmlnOiBtZCA9PiB7XHJcbiAgICAgIHZpdGVwcmVzc1BsdWdpbkxlZ2VuZChtZCk7ICAvLyBcdTZFMzJcdTY3RDMgbWVybWFpZFxyXG4gICAgfSxcclxuICB9XHJcblxyXG59KTtcclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxQcm9qZWN0c1xcXFxWaXRlcHJlc3NCbG9nXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFx0aGVtZVxcXFxpY29uXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxQcm9qZWN0c1xcXFxWaXRlcHJlc3NCbG9nXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFx0aGVtZVxcXFxpY29uXFxcXGljb25zLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9Qcm9qZWN0cy9WaXRlcHJlc3NCbG9nL2RvY3MvLnZpdGVwcmVzcy90aGVtZS9pY29uL2ljb25zLnRzXCI7Y29uc3QgZ2l0aHViID0gYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHg9XCIwcHhcIiB5PVwiMHB4XCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiB2aWV3Qm94PVwiMCAwIDUwIDUwXCI+PHBhdGggZD1cIk0xNy43OTEsNDYuODM2QzE4LjUwMiw0Ni41MywxOSw0NS44MjMsMTksNDV2LTUuNGMwLTAuMTk3LDAuMDE2LTAuNDAyLDAuMDQxLTAuNjFDMTkuMDI3LDM4Ljk5NCwxOS4wMTQsMzguOTk3LDE5LDM5IGMwLDAtMywwLTMuNiwwYy0xLjUsMC0yLjgtMC42LTMuNC0xLjhjLTAuNy0xLjMtMS0zLjUtMi44LTQuN0M4LjksMzIuMyw5LjEsMzIsOS43LDMyYzAuNiwwLjEsMS45LDAuOSwyLjcsMmMwLjksMS4xLDEuOCwyLDMuNCwyIGMyLjQ4NywwLDMuODItMC4xMjUsNC42MjItMC41NTVDMjEuMzU2LDM0LjA1NiwyMi42NDksMzMsMjQsMzN2LTAuMDI1Yy01LjY2OC0wLjE4Mi05LjI4OS0yLjA2Ni0xMC45NzUtNC45NzUgYy0zLjY2NSwwLjA0Mi02Ljg1NiwwLjQwNS04LjY3NywwLjcwN2MtMC4wNTgtMC4zMjctMC4xMDgtMC42NTYtMC4xNTEtMC45ODdjMS43OTctMC4yOTYsNC44NDMtMC42NDcsOC4zNDUtMC43MTQgYy0wLjExMi0wLjI3Ni0wLjIwOS0wLjU1OS0wLjI5MS0wLjg0OWMtMy41MTEtMC4xNzgtNi41NDEtMC4wMzktOC4xODcsMC4wOTdjLTAuMDItMC4zMzItMC4wNDctMC42NjMtMC4wNTEtMC45OTkgYzEuNjQ5LTAuMTM1LDQuNTk3LTAuMjcsOC4wMTgtMC4xMTFjLTAuMDc5LTAuNS0wLjEzLTEuMDExLTAuMTMtMS41NDNjMC0xLjcsMC42LTMuNSwxLjctNWMtMC41LTEuNy0xLjItNS4zLDAuMi02LjYgYzIuNywwLDQuNiwxLjMsNS41LDIuMUMyMSwxMy40LDIyLjksMTMsMjUsMTNzNCwwLjQsNS42LDEuMWMwLjktMC44LDIuOC0yLjEsNS41LTIuMWMxLjUsMS40LDAuNyw1LDAuMiw2LjZjMS4xLDEuNSwxLjcsMy4yLDEuNiw1IGMwLDAuNDg0LTAuMDQ1LDAuOTUxLTAuMTEsMS40MDljMy40OTktMC4xNzIsNi41MjctMC4wMzQsOC4yMDQsMC4xMDJjLTAuMDAyLDAuMzM3LTAuMDMzLDAuNjY2LTAuMDUxLDAuOTk5IGMtMS42NzEtMC4xMzgtNC43NzUtMC4yOC04LjM1OS0wLjA4OWMtMC4wODksMC4zMzYtMC4xOTcsMC42NjMtMC4zMjUsMC45OGMzLjU0NiwwLjA0Niw2LjY2NSwwLjM4OSw4LjU0OCwwLjY4OSBjLTAuMDQzLDAuMzMyLTAuMDkzLDAuNjYxLTAuMTUxLDAuOTg3Yy0xLjkxMi0wLjMwNi01LjE3MS0wLjY2NC04Ljg3OS0wLjY4MkMzNS4xMTIsMzAuODczLDMxLjU1NywzMi43NSwyNiwzMi45NjlWMzMgYzIuNiwwLDUsMy45LDUsNi42VjQ1YzAsMC44MjMsMC40OTgsMS41MywxLjIwOSwxLjgzNkM0MS4zNyw0My44MDQsNDgsMzUuMTY0LDQ4LDI1QzQ4LDEyLjMxOCwzNy42ODMsMiwyNSwyUzIsMTIuMzE4LDIsMjUgQzIsMzUuMTY0LDguNjMsNDMuODA0LDE3Ljc5MSw0Ni44MzZ6XCI+PC9wYXRoPjwvc3ZnPmBcclxuXHJcbmNvbnN0IGdpdGVlID0gYDxzdmcgdD1cIjE3NDM4NzUyOTgyOThcIiBjbGFzcz1cImljb25cIiB2aWV3Qm94PVwiMCAwIDEwMjQgMTAyNFwiIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgcC1pZD1cIjIzODhcIiB3aWR0aD1cIjIwMFwiIGhlaWdodD1cIjIwMFwiPjxwYXRoIGQ9XCJNNTEyIDEwMjRDMjI5LjIyMjQgMTAyNCAwIDc5NC43Nzc2IDAgNTEyUzIyOS4yMjI0IDAgNTEyIDBzNTEyIDIyOS4yMjI0IDUxMiA1MTItMjI5LjIyMjQgNTEyLTUxMiA1MTJ6IG0yNTkuMTQ4OC01NjguODgzMkg0ODAuNDA5NmEyNS4yOTI4IDI1LjI5MjggMCAwIDAtMjUuMjkyOCAyNS4yOTI4bC0wLjAyNTYgNjMuMjA2NGMwIDEzLjk1MiAxMS4zMTUyIDI1LjI5MjggMjUuMjY3MiAyNS4yOTI4aDE3Ny4wMjRjMTMuOTc3NiAwIDI1LjI5MjggMTEuMzE1MiAyNS4yOTI4IDI1LjI2NzJ2MTIuNjQ2NGE3NS44NTI4IDc1Ljg1MjggMCAwIDEtNzUuODUyOCA3NS44NTI4SDM2Ni41OTJhMjUuMjkyOCAyNS4yOTI4IDAgMCAxLTI1LjI2NzItMjUuMjkyOHYtMjQwLjE3OTJhNzUuODUyOCA3NS44NTI4IDAgMCAxIDc1LjgyNzItNzUuODUyOGgzNTMuOTQ1NmEyNS4yOTI4IDI1LjI5MjggMCAwIDAgMjUuMjY3Mi0yNS4yOTI4bDAuMDc2OC02My4yMDY0YTI1LjI5MjggMjUuMjkyOCAwIDAgMC0yNS4yNjcyLTI1LjI5MjhINDE3LjE1MmExODkuNjE5MiAxODkuNjE5MiAwIDAgMC0xODkuNjE5MiAxODkuNjQ0OHYzNTMuOTQ1NmMwIDEzLjk3NzYgMTEuMzE1MiAyNS4yOTI4IDI1LjI5MjggMjUuMjkyOGgzNzIuOTQwOGExNzAuNjQ5NiAxNzAuNjQ5NiAwIDAgMCAxNzAuNjQ5Ni0xNzAuNjQ5NnYtMTQ1LjQwOGEyNS4yOTI4IDI1LjI5MjggMCAwIDAtMjUuMjkyOC0yNS4yNjcyelwiIGZpbGw9XCIjQzcxRDIzXCIgcC1pZD1cIjIzODlcIj48L3BhdGg+PC9zdmc+YDtcclxuXHJcblxyXG5jb25zdCBlbWFpbCA9IGA8c3ZnIHQ9XCIxNzQzODc1NjIwMTg3XCIgY2xhc3M9XCJpY29uXCIgdmlld0JveD1cIjAgMCAxMDI0IDEwMjRcIiB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHAtaWQ9XCIxNjY5N1wiIHdpZHRoPVwiMjAwXCIgaGVpZ2h0PVwiMjAwXCI+PHBhdGggZD1cIk01MTIgMEE1MTIgNTEyIDAgMSAxIDAgNTEyIDUxMiA1MTIgMCAwIDEgNTEyIDB6XCIgZmlsbD1cIiNmZjQ4NWZcIiBwLWlkPVwiMTY2OThcIiBkYXRhLXNwbS1hbmNob3ItaWQ9XCJhMzEzeC5zZWFyY2hfaW5kZXguMC5pMTMuNzAxODNhODF5VHlsZklcIiBjbGFzcz1cInNlbGVjdGVkXCI+PC9wYXRoPjxwYXRoIGQ9XCJNNzI2Ljk4MDkyMyAyOTUuMzg0NjE1SDI4MC4xMjMwNzdBNjMuNjA2MTU0IDYzLjYwNjE1NCAwIDAgMCAyMTYuNjE1Mzg1IDM1OC44OTIzMDh2Mjk1LjE4NzY5MmE2My42MDYxNTQgNjMuNjA2MTU0IDAgMCAwIDYzLjUwNzY5MiA2My41MDc2OTJoNDQ2Ljg1Nzg0NmE2My42MDYxNTQgNjMuNjA2MTU0IDAgMCAwIDYzLjUwNzY5Mi02My41MDc2OTJ2LTI5NS4xODc2OTJBNjMuNjA2MTU0IDYzLjYwNjE1NCAwIDAgMCA3MjYuOTgwOTIzIDI5NS4zODQ2MTV6IG0yNS40MDMwNzcgMzU4LjcxNTA3N2EyNS40ODE4NDYgMjUuNDgxODQ2IDAgMCAxLTI1LjQwMzA3NyAyNS40MDMwNzdIMjgwLjEyMzA3N2EyNS40ODE4NDYgMjUuNDgxODQ2IDAgMCAxLTI1LjQwMzA3Ny0yNS40MDMwNzd2LTI5NS4xODc2OTJhMjUuNDgxODQ2IDI1LjQ4MTg0NiAwIDAgMSAyNS40MDMwNzctMjUuNDAzMDc3aDQ0Ni44NTc4NDZhMjUuNDgxODQ2IDI1LjQ4MTg0NiAwIDAgMSAyNS40MDMwNzcgMjUuNDAzMDc3elwiIGZpbGw9XCIjRkZGRkZGXCIgcC1pZD1cIjE2Njk5XCI+PC9wYXRoPjxwYXRoIGQ9XCJNNjkzLjcyMDYxNSAzOTYuMzA3NjkybC0xOTAuMTQ4OTIzIDExOS45NjU1MzktMTkwLjE0ODkyMy0xMTkuOTY1NTM5YTE5LjA2MjE1NCAxOS4wNjIxNTQgMCAwIDAtMjAuMzIyNDYxIDMyLjIzNjMwOGwyMDAuMDczODQ2IDEyNi4yNDczODVhMTkuMDYyMTU0IDE5LjA2MjE1NCAwIDAgMCAxMC4xNjEyMzEgMi45MzQxNTNoMC42MzAxNTNhMTkuMDYyMTU0IDE5LjA2MjE1NCAwIDAgMCAxMC4xNjEyMzEtMi45MzQxNTNsMjAwLjA3Mzg0Ni0xMjYuMjQ3Mzg1YTE5LjEwMTUzOCAxOS4xMDE1MzggMCAxIDAtMjAuNDgtMzIuMjM2MzA4elwiIGZpbGw9XCIjRkZGRkZGXCIgcC1pZD1cIjE2NzAwXCI+PC9wYXRoPjwvc3ZnPmA7XHJcblxyXG5cclxuY29uc3QgemhpaHUgPSBgPHN2ZyB3aWR0aD1cIjQ2XCIgaGVpZ2h0PVwiNDZcIiB2aWV3Qm94PVwiMCAwIDQ2IDQ2XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbjxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0xNC41IDYuNUMxMyA2LjUgMTAuOCA3LjQgMTAgOUM5LjUxIDkuOTgwMDEgOC41NTcyOSAxMi40NDgyIDcuNjI0NDQgMTQuODY0OUM3LjAzNDI5IDE2LjM5MzggNi40NTIwOCAxNy45MDIxIDYgMTlDNi4xMDg3MiAxOSA2LjIyNTMxIDE5LjAwMjYgNi4zNDg2NSAxOS4wMDU0QzcuOTI2OTkgMTkuMDQxIDEwLjYwODcgMTkuMTAxNCAxMiAxNEgxNVYyM0g5QzcuMzQzMTUgMjMgNiAyNC4zNDMxIDYgMjZIMTQuNUMxNCAzMSAxMi41IDM1IDYgNDFDMTQuNTI1NSA0My4zNjgyIDE3LjIxODMgMzIuMjc2MyAxNy45MDM2IDI2SDI1VjI0QzI1IDIzLjQ0NzcgMjQuNTUyMyAyMyAyNCAyM0gxOC4wODQ4QzE4LjEwNjIgMjEuNTk1NyAxOC4wNzc3IDE5LjkyODMgMTguMDQ4MiAxOC4xOTU0QzE4LjAyNDQgMTYuODA1MSAxOCAxNS4zNzI2IDE4IDE0SDI0LjVWMTIuNUMyNC41IDExLjUgMjQgMTEgMjMuMzEyNSAxMUwxMyAxMUwxNC41IDYuNVpcIiBmaWxsPVwiIzE1NzBFMVwiLz5cclxuPHBhdGggZD1cIk0yMy41IDQxTDE3IDMyTDIwIDMwQzIwIDMwIDIyIDMzIDIzLjUgMzVDMjUgMzcgMjMuNSA0MSAyMy41IDQxWlwiIGZpbGw9XCIjMTU3MEUxXCIvPlxyXG48cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMzkgMTQuNUMzOSAxNC4yMjM5IDM4Ljc3NjEgMTQgMzguNSAxNEgzMC41QzMwLjIyMzkgMTQgMzAgMTQuMjIzOSAzMCAxNC41VjMzLjVDMzAgMzMuNzc2MSAzMC4yMjM5IDM0IDMwLjUgMzRIMzIuMTM5NkMzMi4zNTQ4IDM0IDMyLjU0NTkgMzQuMTM3NyAzMi42MTQgMzQuMzQxOUwzMi45MjcxIDM1LjI4MTJDMzIuOTY1NiAzNS4zOTY3IDMzLjA5NzQgMzUuNDUxMyAzMy4yMDYzIDM1LjM5NjlMMzUuNjgzMyAzNC4xNTg0QzM1Ljg5MTYgMzQuMDU0MiAzNi4xMjEyIDM0IDM2LjM1NDEgMzRIMzguNUMzOC43NzYxIDM0IDM5IDMzLjc3NjEgMzkgMzMuNVYxNC41Wk0yNy41IDExQzI3LjIyMzkgMTEgMjcgMTEuMjIzOSAyNyAxMS41VjM2LjVDMjcgMzYuNzc2MSAyNy4yMjM5IDM3IDI3LjUgMzdIMzAuNjYxNUMzMC44NjU5IDM3IDMxLjA0OTggMzcuMTI0NSAzMS4xMjU3IDM3LjMxNDNMMzEuOTE5MyAzOS4yOTgyQzMxLjk2MjcgMzkuNDA2OCAzMi4wODk4IDM5LjQ1NTEgMzIuMTk0NCAzOS40MDI4TDM2Ljg5NDQgMzcuMDUyOEMzNi45NjM5IDM3LjAxODEgMzcuMDQwNCAzNyAzNy4xMTggMzdINDEuNUM0MS43NzYxIDM3IDQyIDM2Ljc3NjEgNDIgMzYuNVYxMS41QzQyIDExLjIyMzkgNDEuNzc2MSAxMSA0MS41IDExSDI3LjVaXCIgZmlsbD1cIiMxNTcwRTFcIi8+PC9zdmc+YFxyXG5cclxuXHJcbmV4cG9ydCB7IGdpdGh1YixnaXRlZSwgZW1haWwsIHpoaWh1IH07XHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxcUHJvamVjdHNcXFxcVml0ZXByZXNzQmxvZ1xcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcY29uZmlnXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxQcm9qZWN0c1xcXFxWaXRlcHJlc3NCbG9nXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxjb25maWdcXFxcU29jaWFsTGlua3MudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L1Byb2plY3RzL1ZpdGVwcmVzc0Jsb2cvZG9jcy8udml0ZXByZXNzL2NvbmZpZy9Tb2NpYWxMaW5rcy50c1wiOy8vICBcdTc5M0VcdTRFQTRcdTU2RkVcdTY4MDdcdUZGMENcdTY2M0VcdTc5M0FcdTRFOEVcdTUzNUFcdTRFM0JcdTRGRTFcdTYwNkZcdTY4MEZcdTU0OENcdTk4NzVcdTgxMUFcdTY4MEYgIFx1NTNDMlx1ODAwMyBodHRwczovL3ZwLnRlZWsudG9wL2d1aWRlL2ljb24tdXNlLmh0bWwjXHU3OTNFXHU0RUE0XHU1NkZFXHU2ODA3LWljb25mb250XHJcbmltcG9ydCB7IGdpdGh1YiwgZ2l0ZWUsIGVtYWlsLCB6aGlodSwgfSBmcm9tIFwiLi4vdGhlbWUvaWNvbi9pY29uc1wiO1xyXG5pbXBvcnQgdHlwZSB7IFNvY2lhbCB9IGZyb20gXCJ2aXRlcHJlc3MtdGhlbWUtdGVlay9jb25maWdcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBTb2NpYWxMaW5rczogU29jaWFsW10gPSBbXHJcbiAge1xyXG4gICAgbmFtZTogXCJcdTkwQUVcdTRFRjZcIixcclxuICAgIGljb246IGVtYWlsLFxyXG4gICAgaWNvblR5cGU6IFwiY29tcG9uZW50XCIsXHJcbiAgICBsaW5rOiBcIm1haWx0bzpwZXRlcmp4bEBxcS5jb21cIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiR2l0SHViXCIsXHJcbiAgICBpY29uOiBnaXRodWIsXHJcbiAgICBpY29uVHlwZTogXCJjb21wb25lbnRcIiwgLy8gXHU2MzA3XHU1QjlBXHU0RTNBXHU3RUM0XHU0RUY2XHU3QzdCXHU1NzhCXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9QZXRlci1KWExcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiR2l0ZWVcIixcclxuICAgIGljb246IGdpdGVlLFxyXG4gICAgaWNvblR5cGU6IFwiY29tcG9uZW50XCIsIC8vIFx1NjMwN1x1NUI5QVx1NEUzQVx1N0VDNFx1NEVGNlx1N0M3Qlx1NTc4QlxyXG4gICAgbGluazogXCJodHRwczovL2dpdGh1Yi5jb20vUGV0ZXItSlhMXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIlx1NzdFNVx1NEU0RVwiLFxyXG4gICAgaWNvbjogemhpaHUsXHJcbiAgICBpY29uVHlwZTogXCJjb21wb25lbnRcIixcclxuICAgIGxpbms6IFwiaHR0cHM6Ly93d3cuemhpaHUuY29tL3Blb3BsZS9QZXRlckpYTFwiLFxyXG4gIH1cclxuXTtcclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxQcm9qZWN0c1xcXFxWaXRlcHJlc3NCbG9nXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxjb25maWdcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXFByb2plY3RzXFxcXFZpdGVwcmVzc0Jsb2dcXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXGNvbmZpZ1xcXFxCYWNrZ3JvdW5kSW1nLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9Qcm9qZWN0cy9WaXRlcHJlc3NCbG9nL2RvY3MvLnZpdGVwcmVzcy9jb25maWcvQmFja2dyb3VuZEltZy50c1wiOy8vIFx1NTM1QVx1NUJBMlx1ODBDQ1x1NjY2Rlx1NTZGRVx1NTczMFx1NTc0MFx1NTIxN1x1ODg2OFx1RkYwQ1x1NEU1Rlx1NjYyRlx1OUVEOFx1OEJBNFx1NUMwMVx1OTc2Mlx1NTZGRVx1NTczMFx1NTc0MFx1NTIxN1x1ODg2OFx1RkYwQ1x1NUJGQ1x1NTFGQVx1N0VEOSB0ZWVrQ29uZmlnLnRzIFx1NEY3Rlx1NzUyOFxyXG5cclxuZXhwb3J0IGNvbnN0IEltZ3M6IEFycmF5PHN0cmluZz4gPSBbXHJcbiAgJ2h0dHBzOi8vaW1hZ2UucGV0ZXJqeGwuY29tL2Jsb2cvMTMzNDY0OTc1X3AwLmpwZycsIC8vIFx1NTkyN1x1NjYxNFx1NkQ5RlxyXG4gICdodHRwczovL2ltYWdlLnBldGVyanhsLmNvbS9ibG9nL1hAMjI2MDgzMjYwQnViYWktMjAyNjA1MTMuanBnJywgLy8gXHU4MzY3XHU1OUI5XHJcbiAgJ2h0dHBzOi8vaW1hZ2UucGV0ZXJqeGwuY29tL2Jsb2cvMTQ0ODUyNTY1LmpwZycsIC8vIFx1N0VFRlx1ODJGMVxyXG4gICdodHRwczovL2ltYWdlLnBldGVyanhsLmNvbS9ibG9nL1hAWlpaWlpNamlhbmd6ei0yMDI2MDUxMy5qcGcnLCAvLyBcdTdFRUZcdTgyRjFcclxuICAnaHR0cHM6Ly9pbWFnZS5wZXRlcmp4bC5jb20vYmxvZy9YQEZNYWtyWkhubDQ2SVA4RC0yMDI2MDUxMy5qcGcnLCAvLyBcdTdFRUZcdTgyRjFcclxuICAnaHR0cHM6Ly9pbWFnZS5wZXRlcmp4bC5jb20vYmxvZy9YQHl1dHR0YW5nLTIwMjYwNTEzLmpwZycsIC8vIFx1N0VFRlx1ODJGMVxyXG4gICdodHRwczovL2ltYWdlLnBldGVyanhsLmNvbS9ibG9nL1hAQlVNX0hJQ09fMjAyNjA0MjMuanBnJywgIC8vIFx1OTRGNlx1NzJGQ1xyXG4gICdodHRwczovL2ltYWdlLnBldGVyanhsLmNvbS9ibG9nLzE0NDEzMDg1M19wMC5qcGcnLCAgLy8gXHU5NEY2XHU3MkZDXHJcbiAgJ2h0dHBzOi8vaW1hZ2UucGV0ZXJqeGwuY29tL2Jsb2cvMTQzOTMzODc5X3AwLmpwZycsIC8vIFx1OTRGNlx1NzJGQ1xyXG4gICdodHRwczovL2ltYWdlLnBldGVyanhsLmNvbS9ibG9nLzE0NDM3MDQzMl9wMC5qcGcnLCAvL1x1NzIzMVx1NUYyNVx1NjVBRiBcdTZGMDJcdTZDQ0FcdTgwMDUgXHU1NDA4XHU3MTY3XHJcbiAgJ2h0dHBzOi8vaW1hZ2UucGV0ZXJqeGwuY29tL2Jsb2cvWEBkZGVuZ2FydC0yMDE5ODE4MzcwODY3Mjk0NTQzLmpwZycsICAgLy8gXHU3MjMxXHU1RjI1XHU2NUFGXHJcbiAgJ2h0dHBzOi8vaW1hZ2UucGV0ZXJqeGwuY29tL2Jsb2cvWEB2dnNpbXllb2wtMTg3NDc0NTAxMDQzNDA2ODY4MC5qcGcnLCAgLy8gXHU3M0MyXHU4M0IxXHU1ODU0XHJcbiAgJ2h0dHBzOi8vaW1hZ2UucGV0ZXJqeGwuY29tL2Jsb2cvMTQyNjUzMjk1X3AwLmpwZycsIC8vIFx1N0VERFx1NTMzQVx1OTZGNiBcdTU5ODRcdTYwRjNcdTU5MjlcdTRGN0ZcclxuICAnaHR0cHM6Ly9pbWFnZS5wZXRlcmp4bC5jb20vYmxvZy8xNDIwOTc0NTZfcDAuanBnJywgLy8gXHU3RUREXHU1MzNBXHU5NkY2IFx1NTk4NFx1NjBGM1x1NTkyOVx1NEY3RlxyXG4gICdodHRwczovL2ltYWdlLnBldGVyanhsLmNvbS9ibG9nLzE0MDkzNzUyNF9wMC5qcGcnLCAvLyBcdTlFMjNcdTZGNkUgXHU3MjMxXHU1RjI1XHU2NUFGXHJcbiAgJ2h0dHBzOi8vaW1hZ2UucGV0ZXJqeGwuY29tL2Jsb2cvMTIwMTg5NjIxX3AwLmpwZycsIC8vIFx1OUUyM1x1NkY2RSBcdTk1N0ZcdTc5QkJcclxuICAnaHR0cHM6Ly9pbWFnZS5wZXRlcmp4bC5jb20vYmxvZy8xNDI1OTg4ODJfcDAuanBnJywgLy8gXHU5RTIzXHU2RjZFIFx1ODk3Rlx1NjgzQ1x1ODM4OVx1NTM2MVxyXG4gICdodHRwczovL2ltYWdlLnBldGVyanhsLmNvbS9ibG9nLzEyMDcxNzk0M19wMC5qcGcnLCAvLyBcdTdFRERcdTUzM0FcdTk2RjYgXHU5Q0E4XHU5QzdDXHJcbiAgJ2h0dHBzOi8vaW1hZ2UucGV0ZXJqeGwuY29tL2Jsb2cvMTQyNzg4NDk1X3AwLmpwZycsIC8vIFx1NUI4N1x1NUI5OVxyXG4gICdodHRwczovL2ltYWdlLnBldGVyanhsLmNvbS9ibG9nLzE0MDM4MTI1NF9wMC5qcGcnLCAvLyBcdTU0RTVcdTRGMjZcdTZCRDRcdTVBMDVcclxuICAnaHR0cHM6Ly9pbWFnZS5wZXRlcmp4bC5jb20vYmxvZy8xMjkwMTA1NTNfcDAuanBnJywgLy8gXHU5MDUwXHU4Nzc2XHJcbiAgJ2h0dHBzOi8vaW1hZ2UucGV0ZXJqeGwuY29tL2Jsb2cvMTM3MjA1MDUwX3AwLmpwZycsIC8vIFx1NjYxNFx1NkQ5RlxyXG4gICdodHRwczovL2ltYWdlLnBldGVyanhsLmNvbS9ibG9nLzEzNzA5NDc4NF9wMC5qcGcnLCAvLyBcdTRFMDlcdTY3MDhcdTRFMDNcdTdFQzRcdTU0MDhcclxuICAnaHR0cHM6Ly9pbWFnZS5wZXRlcmp4bC5jb20vYmxvZy8xNDIyMDcyNzRfcDAuanBnJywgLy8gXHU3MDZCXHU4MkIxXHJcbiAgJ2h0dHBzOi8vaW1hZ2UucGV0ZXJqeGwuY29tL2Jsb2cvMTQxOTEzMzY5X3AwLmpwZycsIC8vIFx1ODJCMVx1NzA2Qlx1NzA2Qlx1ODJCMVxyXG4gICdodHRwczovL2ltYWdlLnBldGVyanhsLmNvbS9ibG9nLzEzNDQyMDgyMF9wMC5qcGcnLCAvLyBcdTZENDFcdTg0MjRcclxuICAnaHR0cHM6Ly9pbWFnZS5wZXRlcmp4bC5jb20vYmxvZy8xNDIwOTQyNjNfcDAuanBnJywgLy8gRmF0ZVxyXG4gICdodHRwczovL2ltYWdlLnBldGVyanhsLmNvbS9ibG9nLzIwMjYtMy0xMi0yMC5qcGcnLCAvLyBcdTdFRERcdTUzM0FcdTk2RjYgXHU1OTg0XHU2MEYzXHU1OTI5XHU0RjdGXHJcbiAgJ2h0dHBzOi8vaW1hZ2UucGV0ZXJqeGwuY29tL2Jsb2cvMjAyNi0zLTEyLTcuanBnJywgIC8vIFx1N0VERFx1NTMzQVx1OTZGNiBcdTU5ODRcdTYwRjNcdTU5MjlcdTRGN0ZcclxuICAnaHR0cHM6Ly9pbWFnZS5wZXRlcmp4bC5jb20vYmxvZy8yMDI2LTAyLTIzLmpwZycsICAgLy8gXHU3RUREXHU1MzNBXHU5NkY2IFx1NTk4NFx1NjBGM1x1NTkyOVx1NEY3RlxyXG4gICdodHRwczovL2ltYWdlLnBldGVyanhsLmNvbS9ibG9nLzE0MDgzMDEyM19wMC5qcGcnLCAvLyBcdTdFRERcdTUzM0FcdTk2RjYgXHU1OTg0XHU2MEYzXHU1OTI5XHU0RjdGXHJcbiAgJ2h0dHBzOi8vaW1hZ2UucGV0ZXJqeGwuY29tL2Jsb2cvMTQyMjIzNjA3X3AxLmpwZycsIC8vIFx1NTIxRFx1OTdGM1xyXG4gICdodHRwczovL2ltYWdlLnBldGVyanhsLmNvbS9ibG9nLzE0MjIyMzYwN19wMy5qcGcnLCAvLyBcdTUyMURcdTk3RjNcclxuICAnaHR0cHM6Ly9pbWFnZS5wZXRlcmp4bC5jb20vYmxvZy8xNDE3NDMxODBfcDAuanBnJywgLy8gXHU1MjFEXHU5N0YzXHJcbiAgJ2h0dHBzOi8vaW1hZ2UucGV0ZXJqeGwuY29tL2Jsb2cvOTYxODk5NTdfcDAuanBnJywgIC8vIFx1Nzk1RVx1NUI1MFxyXG4gICdodHRwczovL2ltYWdlLnBldGVyanhsLmNvbS9ibG9nLzEyNzE2Njc4Nl9wMC5qcGcnLCAvLyBcdTc5NUVcdTVCNTAgXHU3NDVFXHU1RTBDXHJcbiAgJ2h0dHBzOi8vaW1hZ2UucGV0ZXJqeGwuY29tL2Jsb2cvMTI4MDE5Mzc2X3AwLmpwZycsIC8vIFx1OUUyM1x1Nzk1RSBcdTUxNkJcdTY3NjFcclxuICAnaHR0cHM6Ly9pbWFnZS5wZXRlcmp4bC5jb20vYmxvZy8xMzQ3MzIwMDFfcDAuanBnJywgLy8gXHU2QjdCXHU0RTRCXHU2MjY3XHU2NTNGXHJcblxyXG5cclxuICAnaHR0cHM6Ly9pbWFnZS5wZXRlcmp4bC5jb20vYmxvZy8xNDIwNTIwNzZfcDAuanBnJywgLy8gXHU3MjMxXHU1RjI1XHU2NUFGXHJcbiAgJ2h0dHBzOi8vaW1hZ2UucGV0ZXJqeGwuY29tL2Jsb2cvMTQyMjEwMDY5X3AwLmpwZycsIC8vIFx1NzIzMVx1NUYyNVx1NjVBRlxyXG4gICdodHRwczovL2ltYWdlLnBldGVyanhsLmNvbS9ibG9nLzE0MDgzMTgxMl9wMC5qcGcnLCAvLyBcdTlFMjNcdTZGNkUgXHU3MjMxXHU1RjI1XHU2NUFGXHJcbiAgJ2h0dHBzOi8vaW1hZ2UucGV0ZXJqeGwuY29tL2Jsb2cvMTQwMTYxMzcyX3AwLmpwZycsIC8vIFx1NTM5Rlx1Nzk1RVx1N0ZBNFx1NjYxRiBcdTU0RTVcdTRGMjZcdTZCRDRcdTVBMDVcclxuICAnaHR0cHM6Ly9pbWFnZS5wZXRlcmp4bC5jb20vYmxvZy8xNDEyNzQyOTBfcDAuanBnJywgLy8gXHU1NEU1XHU0RjI2XHU2QkQ0XHU1QTA1ICYgXHU2ODUxXHU1OTFBXHU2RDg1XHJcbiAgJ2h0dHBzOi8vaW1hZ2UucGV0ZXJqeGwuY29tL2Jsb2cvMTQxMDUwNjY5X3AwLmpwZycsIC8vIFx1NTRFNVx1NEYyNlx1NkJENFx1NUEwNVxyXG4gICdodHRwczovL2ltYWdlLnBldGVyanhsLmNvbS9ibG9nLzE0MDAwMjU0OV9wMS5qcGcnLCAvLyBcdTU0RTVcdTRGMjZcdTZCRDRcdTVBMDVcclxuICAnaHR0cHM6Ly9pbWFnZS5wZXRlcmp4bC5jb20vYmxvZy8xMzk4MTExNzNfcDAuanBnJywgLy8gXHU1NEU1XHU0RjI2XHU2QkQ0XHU1QTA1XHJcbiAgJ2h0dHBzOi8vaW1hZ2UucGV0ZXJqeGwuY29tL2Jsb2cvMTM4NjEzNjkyX3AwLmpwZycsIC8vIFx1NTRFNVx1NEYyNlx1NkJENFx1NUEwNVxyXG4gICdodHRwczovL2ltYWdlLnBldGVyanhsLmNvbS9ibG9nLzE0MDAxNDQ1MV9wMC5qcGcnLCAvLyBcdTU0RTVcdTRGMjZcdTZCRDRcdTVBMDVcclxuICAnaHR0cHM6Ly9pbWFnZS5wZXRlcmp4bC5jb20vYmxvZy8xMzk5ODA1MTJfcDAuanBnJywgLy8gXHU1NEU1XHU0RjI2XHU2QkQ0XHU1QTA1IFx1OTZDNVx1NzNDMlx1OEZCRSBcdTZEM0VcdTg0OTlcclxuXHJcbiAgLy8gXHU1MzlGXHU3OTVFXHJcbiAgJ2h0dHBzOi8vaW1hZ2UucGV0ZXJqeGwuY29tL2Jsb2cvMTM0LmpwZycsICAgICAgICAgIC8vIFx1ODBFMVx1Njg0M1xyXG4gICdodHRwczovL2ltYWdlLnBldGVyanhsLmNvbS9ibG9nLzEyNTA3NzIwNF9wMC5qcGcnLCAvLyBcdTgwRTFcdTY4NDNcclxuICAnaHR0cHM6Ly9pbWFnZS5wZXRlcmp4bC5jb20vYmxvZy8xMjI2NTgyNjRfcDAuanBnJywgLy8gXHU4MEUxXHU2ODQzICYgXHU4Mjk5XHU4Mjk5IFxyXG4gICdodHRwczovL2ltYWdlLnBldGVyanhsLmNvbS9ibG9nLzEzODQzOTQ3N19wMC5qcGcnLCAvLyBcdTgyOTlcdTgyOTkgXHJcbiAgJ2h0dHBzOi8vaW1hZ2UucGV0ZXJqeGwuY29tL2Jsb2cvMTM2NjU2NjI1X3AwLmpwZycsIC8vIFx1ODI5OVx1ODI5OVxyXG4gICdodHRwczovL2ltYWdlLnBldGVyanhsLmNvbS9ibG9nLzEwMjg5MDE4MF9wMS5wbmcnLCAvLyBcdTgzQjFcdTRGOURcdTYyQzlcclxuICAnaHR0cHM6Ly9pbWFnZS5wZXRlcmp4bC5jb20vYmxvZy8xMzg0MjI2MjVfcDAuanBnJywgLy8gXHU1OTQ4XHU4Mjk5XHU1QzE0IFx1NTM5Rlx1Nzk1RSBcdTk2QzVcdTczQzJcdThGQkUgXHJcbiAgJ2h0dHBzOi8vaW1hZ2UucGV0ZXJqeGwuY29tL2Jsb2cvMTA0NDg2NDA3X3AwLmpwZycsIC8vIFx1OTZGN1x1NzUzNVx1NUMwNlx1NTE5QlxyXG4gICdodHRwczovL2ltYWdlLnBldGVyanhsLmNvbS9ibG9nLzEzMTc1NDE4Ml9wMC5qcGcnLCAvLyBcdTRFMURcdTY3RUZcdTUxNEJcclxuICAnaHR0cHM6Ly9pbWFnZS5wZXRlcmp4bC5jb20vYmxvZy8yMDI2LTAyLTA0LmpwZycsICAgLy8gXHU1MTc5XHU3NjdEXHJcblxyXG4gIC8vIFx1NUQyOVx1NTc0RiAzXHJcbiAgJ2h0dHBzOi8vaW1hZ2UucGV0ZXJqeGwuY29tL2Jsb2cvRWx5c2lhLmpwZycsICAgICAgIC8vIFx1NzIzMVx1ODM4OVxyXG4gICdodHRwczovL2ltYWdlLnBldGVyanhsLmNvbS9ibG9nLzEwMDY0OTY2MF9wMS5wbmcnLCAvLyBcdTcyMzFcdTgzODlcclxuICAnaHR0cHM6Ly9pbWFnZS5wZXRlcmp4bC5jb20vYmxvZy8xMjQyMDU0NzBfcDAuanBnJywgLy8gXHU3MjMxXHU4Mzg5XHJcbiAgJ2h0dHBzOi8vaW1hZ2UucGV0ZXJqeGwuY29tL2Jsb2cvMTAxNjkzNzc3X3AwLmpwZycsIC8vIFx1NzIzMVx1ODM4OVxyXG4gICdodHRwczovL2ltYWdlLnBldGVyanhsLmNvbS9ibG9nLzEzNDE1NjM4M19wMC5qcGcnLCAvLyBcdTcyMzFcdTgzODlcclxuICAnaHR0cHM6Ly9pbWFnZS5wZXRlcmp4bC5jb20vYmxvZy8xNDA2NTkzMzJfcDAuanBnJywgLy8gXHU3MjMxXHU4Mzg5XHU1RTBDXHU5NkM1XHJcbiAgJ2h0dHBzOi8vaW1hZ2UucGV0ZXJqeGwuY29tL2Jsb2cvMTM3NDQ1NjM5X3AwLmpwZycsIC8vIFx1NzIzMVx1NEUzRFx1NUUwQ1x1OTZDNSBcdTVEMjlcdTk0QzFcclxuICAnaHR0cHM6Ly9pbWFnZS5wZXRlcmp4bC5jb20vYmxvZy8yMDI0LTYtMi05LnBuZycsICAgLy8gXHU2NzdFXHU5NkMwXHJcbiAgJ2h0dHBzOi8vaW1hZ2UucGV0ZXJqeGwuY29tL2Jsb2cvMjAyNC0xMS0xMC0xMi5wbmcnLC8vIFx1Njc3RVx1OTZDMFxyXG4gICdodHRwczovL2ltYWdlLnBldGVyanhsLmNvbS9ibG9nLzIwMjQtNC04LTIucG5nJywgICAvLyBcdTY3N0VcdTk2QzBcdTU0OENcdTc0NUZcdTgzODlcdTU5QzZcclxuICAnaHR0cHM6Ly9pbWFnZS5wZXRlcmp4bC5jb20vYmxvZy8yMDI0LTEwLTEyLnBuZycsICAgLy8gXHU4NTg3XHU1ODU0XHJcbiAgJ2h0dHBzOi8vaW1hZ2UucGV0ZXJqeGwuY29tL2Jsb2cvMjAyNC0wOS0yNi0zLnBuZycsIC8vIFx1ODU4N1x1NTg1NFx1NTQ4Q1x1ODJCMVx1NzA2QlxyXG4gICdodHRwczovL2ltYWdlLnBldGVyanhsLmNvbS9ibG9nLzIwMjQtMTEtMTAtNC5wbmcnLCAvLyBcdTg1ODdcdTU4NTRcdTU0OENcdTgyQjFcdTcwNkJcclxuICAnaHR0cHM6Ly9pbWFnZS5wZXRlcmp4bC5jb20vYmxvZy8yMDI0LTExLTEwLTYucG5nJywgLy8gXHU4NTg3XHU1ODU0XHU1NDhDXHU4MkIxXHU3MDZCXHJcbiAgJ2h0dHBzOi8vaW1hZ2UucGV0ZXJqeGwuY29tL2Jsb2cvMjAyNC0xMC0xMi00LmpwZycsIC8vIFx1NjgzQ1x1ODU3RVx1NEZFRVxyXG5cclxuICAvLyBcdTdFRERcdTUzM0FcdTk2RjZcclxuICAnaHR0cHM6Ly9pbWFnZS5wZXRlcmp4bC5jb20vYmxvZy8xMjI3MTA0NzdfcDAuanBnJywgIC8vIFx1NTlBRVx1NTNFRiAmIFx1OUNBOFx1OUM3Q1x1NTlCOVxyXG4gICdodHRwczovL2ltYWdlLnBldGVyanhsLmNvbS9ibG9nL1hAcmluYV8wQS0yMDI0LTctNi5qcGcnLCAvLyBcdTU5QUVcdTUzRUYgXHU4RDg1XHU1RTAyXHJcbiAgJ2h0dHBzOi8vaW1hZ2UucGV0ZXJqeGwuY29tL2Jsb2cvMTIxMjY5MzIzX3AwLmpwZycsICAvLyBcdTlDQThcdTlDN0NcdTU5QjlcclxuICAnaHR0cHM6Ly9pbWFnZS5wZXRlcmp4bC5jb20vYmxvZy8xMjMzNTM1NjNfcDAucG5nJywgIC8vIFx1NjdDRlx1NTlBRVx1NjAxRFxyXG5cclxuXHJcbiAgLy8gXHU5RTIzXHU2RjZFXHJcbiAgJ2h0dHBzOi8vaW1hZ2UucGV0ZXJqeGwuY29tL2Jsb2cvMjAyNS02LTEyLmpwZycsICAgIC8vIFx1NTM2MVx1NjNEMFx1NUUwQ1x1NUEwNSBcdTk4RDhcdTcxMzZcdThGRENcdTUzQkJcdTc2ODRcdTk1N0ZcdTY4QTYtXHU3NTNCXHU1RTA4XHVGRjFBXHU2NEI4XHU1MzVDXHJcbiAgJ2h0dHBzOi8vaW1hZ2UucGV0ZXJqeGwuY29tL2Jsb2cvMTMxNDczMjAxX3AwLmpwZycsIC8vIFx1NTM2MVx1NjNEMFx1NUUwQ1x1NUEwNVxyXG4gICdodHRwczovL2ltYWdlLnBldGVyanhsLmNvbS9ibG9nLzIwMjUtMDgtMjkuanBnJywgICAvLyBcdTRFQ0FcdTZDNTBcclxuICAnaHR0cHM6Ly9pbWFnZS5wZXRlcmp4bC5jb20vYmxvZy8xMjEyMDY2MjBfcDEucG5nJywgLy8gXHU5NTdGXHU3OUJCXHJcbiAgJ2h0dHBzOi8vaW1hZ2UucGV0ZXJqeGwuY29tL2Jsb2cvMTIwNzY3MjM5X3AwLnBuZycsIC8vIFx1OTU3Rlx1NzlCQlxyXG4gICdodHRwczovL2ltYWdlLnBldGVyanhsLmNvbS9ibG9nLzExOTg3OTAwMV9wMC5wbmcnLCAvLyBcdTU0MUZcdTk3MTZcclxuICAnaHR0cHM6Ly9pbWFnZS5wZXRlcmp4bC5jb20vYmxvZy8xMjUxMTc4MjhfcDAuanBnJywgLy8gXHU1NDFGXHU5NzE2XHJcbiAgJ2h0dHBzOi8vaW1hZ2UucGV0ZXJqeGwuY29tL2Jsb2cvMTI1NjcwMTY4X3AwLmpwZycsIC8vIFx1NTQxRlx1OTcxNlxyXG4gICdodHRwczovL2ltYWdlLnBldGVyanhsLmNvbS9ibG9nLzEzNDQxNzg5Ml9wMC5qcGcnLCAvLyBcdTU5NjVcdTUzRTRcdTY1QUZcdTU4NTRcclxuICAnaHR0cHM6Ly9pbWFnZS5wZXRlcmp4bC5jb20vYmxvZy8xMzQ0NDAwNDNfcDAuanBnJywgLy8gXHU1OTY1XHU1M0U0XHU2NUFGXHU1ODU0XHJcbiAgJ2h0dHBzOi8vaW1hZ2UucGV0ZXJqeGwuY29tL2Jsb2cvMTM0NDUyODQ2X3AwLmpwZycsIC8vIFx1NTk2NVx1NTNFNFx1NjVBRlx1NTg1NFxyXG4gICdodHRwczovL2ltYWdlLnBldGVyanhsLmNvbS9ibG9nLzIwMjUtMDktMDIuanBnJywgICAvLyBcdTU5NjVcdTUzRTRcdTY1QUZcdTU4NTRcclxuICAnaHR0cHM6Ly9pbWFnZS5wZXRlcmp4bC5jb20vYmxvZy8xMzk5NTUzODJfcDAuanBnJywgLy8gXHU1OTY1XHU1M0U0XHU2NUFGXHU1ODU0XHJcbiAgJ2h0dHBzOi8vaW1hZ2UucGV0ZXJqeGwuY29tL2Jsb2cvMTM5OTU1NDYxX3AwLmpwZycsIC8vIFx1NTk2NVx1NTNFNFx1NjVBRlx1NTg1NFxyXG4gICdodHRwczovL2ltYWdlLnBldGVyanhsLmNvbS9ibG9nLzIwMjUtMDQtMDcuanBnJywgICAvLyBcdTU3NEVcdTcyNzlcdTg1N0VcdTYyQzlcclxuICAnaHR0cHM6Ly9pbWFnZS5wZXRlcmp4bC5jb20vYmxvZy8yMDI1LTMtMjMuanBnJywgICAgLy8gXHU1NzRFXHU3Mjc5XHU4NTdFXHU2MkM5XHJcbiAgJ2h0dHBzOi8vaW1hZ2UucGV0ZXJqeGwuY29tL2Jsb2cvMTM3NDk5NzI0X3AwLmpwZycsIC8vIFx1OEQ1RVx1NTlBRVxyXG4gICdodHRwczovL2ltYWdlLnBldGVyanhsLmNvbS9ibG9nLzEzOTc1NDUzMV9wMC5qcGcnLCAvLyBcdTc0MzNcdTU5NDhcclxuICAnaHR0cHM6Ly9pbWFnZS5wZXRlcmp4bC5jb20vYmxvZy8yMDI1LTEyLTI1LTIuanBnJywgLy8gXHU3NDMzXHU1OTQ4XHJcbiAgJ2h0dHBzOi8vaW1hZ2UucGV0ZXJqeGwuY29tL2Jsb2cvMjAyNS0xMi0yNS0xLmpwZycsIC8vIFx1NzQzM1x1NTk0OFxyXG5cclxuICAvLyBcdTY2MUZcdTdBNzlcdTk0QzFcdTkwNTMgICAgXHJcbiAgJ2h0dHBzOi8vaW1hZ2UucGV0ZXJqeGwuY29tL2Jsb2cvMjAyNS0wNS0wNC5qcGcnLCAgIC8vIFx1OTA1MFx1ODc3NlxyXG4gICdodHRwczovL2ltYWdlLnBldGVyanhsLmNvbS9ibG9nLzIwMjUtMDItMDcuanBnJywgICAvLyBcdTkwNTBcdTg3NzZcclxuICAnaHR0cHM6Ly9pbWFnZS5wZXRlcmp4bC5jb20vYmxvZy8xMjgxODE1OTBfcDAuanBnJywgLy8gXHU5MDUwXHU4Nzc2XHJcbiAgJ2h0dHBzOi8vaW1hZ2UucGV0ZXJqeGwuY29tL2Jsb2cvMTI4MDYzNDgzX3AwLmpwZycsIC8vIFx1OTA1MFx1ODc3NlxyXG4gICdodHRwczovL2ltYWdlLnBldGVyanhsLmNvbS9ibG9nLzEzMDcyNDYzMl9wMi5qcGcnLCAvLyBcdTk4Q0VcdTU4MDdcclxuICAnaHR0cHM6Ly9pbWFnZS5wZXRlcmp4bC5jb20vYmxvZy8xMjE2NDI3MTBfcDEucG5nJywgLy8gXHU0RTkxXHU3NDgzXHJcbiAgJ2h0dHBzOi8vaW1hZ2UucGV0ZXJqeGwuY29tL2Jsb2cvMjAyNS0xMi0zMS5qcGcnLCAgIC8vIFx1NkQ0MVx1ODQyNFxyXG4gICdodHRwczovL2ltYWdlLnBldGVyanhsLmNvbS9ibG9nLzExOTc5MTUxNF9wMC5qcGcnLCAvLyBcdTZENDFcdTg0MjRcclxuICAnaHR0cHM6Ly9pbWFnZS5wZXRlcmp4bC5jb20vYmxvZy8xMTY2Mjk5MTBfcDAuanBnJywgLy8gXHU2RDQxXHU4NDI0XHJcbiAgJ2h0dHBzOi8vaW1hZ2UucGV0ZXJqeGwuY29tL2Jsb2cvMjAyNS0wOS0wNS5qcGcnLCAgIC8vIFx1NkQ3N1x1NzQ1Rlx1OTdGM1xyXG4gICdodHRwczovL2ltYWdlLnBldGVyanhsLmNvbS9ibG9nLzEyMTE1NDQ3NF9wMTEuanBnJywvLyBLYWZrYVxyXG4gICdodHRwczovL2ltYWdlLnBldGVyanhsLmNvbS9ibG9nLzExMTA3MjYyOF9wMC5wbmcnLCAvLyBLYWZrYVxyXG4gICdodHRwczovL2ltYWdlLnBldGVyanhsLmNvbS9ibG9nLzEwOTM0OTc5OV9wMC5qcGcnLCAvLyBLYWZrYSAgICAgIFxyXG4gICdodHRwczovL2ltYWdlLnBldGVyanhsLmNvbS9ibG9nLzExNjUyNjI3Ml9wMC5qcGcnLCAvLyBcdTgyQjFcdTcwNkJcclxuICAnaHR0cHM6Ly9pbWFnZS5wZXRlcmp4bC5jb20vYmxvZy8xMTc0NjY2MDFfcDAucG5nJywgLy8gXHU5RUM0XHU2Q0M5XHUzMDAxXHU4MkIxXHU3MDZCXHJcbiAgJ2h0dHBzOi8vaW1hZ2UucGV0ZXJqeGwuY29tL2Jsb2cvMTM5NDM2ODU4X3AwLmpwZycsIC8vIFx1ODJCMVx1NzA2QlxyXG4gICdodHRwczovL2ltYWdlLnBldGVyanhsLmNvbS9ibG9nLzEyNDUyOTQyMl9wMC5wbmcnLCAvLyBcdTRFMDlcdTY3MDhcdTRFMDNcdUZGMENcdTY2MUZcclxuICAnaHR0cHM6Ly9pbWFnZS5wZXRlcmp4bC5jb20vYmxvZy8yMDI1LTEwLTE3LmpwZycsICAgLy8gXHU0RTA5XHU2NzA4XHU0RTAzXHJcbiAgJ2h0dHBzOi8vaW1hZ2UucGV0ZXJqeGwuY29tL2Jsb2cvMjAyNS0wOS0zMC5qcGcnLCAgIC8vIFx1OTU3Rlx1NTkxQ1x1NjcwOFxyXG4gICdodHRwczovL2ltYWdlLnBldGVyanhsLmNvbS9ibG9nLzIwMjQtMTItMjYtNC5qcGcnLCAvLyBcdTc3RTVcdTY2RjRcdTlFMUZcclxuICAnaHR0cHM6Ly9pbWFnZS5wZXRlcmp4bC5jb20vYmxvZy8xMjU2NDMxODNfcDAucG5nJywgLy8gXHU1MDVDXHU0RTkxXHJcbiAgJ2h0dHBzOi8vaW1hZ2UucGV0ZXJqeGwuY29tL2Jsb2cvMTI2NTA4NzgxX3AwLmpwZycsIC8vIFx1NTkyN1x1OUVEMVx1NTg1NFxyXG4gICdodHRwczovL2ltYWdlLnBldGVyanhsLmNvbS9ibG9nLzIwMjUtMDItMDctNi5qcGcnLCAvLyBcdTU5MjdcdTlFRDFcdTU4NTRcclxuICAnaHR0cHM6Ly9pbWFnZS5wZXRlcmp4bC5jb20vYmxvZy8xMjY0MjQ4NDZfcDAuanBnJywgLy8gXHU1OTI3XHU5RUQxXHU1ODU0XHJcbiAgJ2h0dHBzOi8vaW1hZ2UucGV0ZXJqeGwuY29tL2Jsb2cvMTI5OTE2NjQ5X3AwLmpwZycsIC8vIFx1N0YwN1x1NUI5RFxyXG4gICdodHRwczovL2ltYWdlLnBldGVyanhsLmNvbS9ibG9nLzEzMTk5ODY5OV9wMC5qcGcnLCAvLyBcdTdGMDdcdTVCOURcclxuXHJcbiAgLy8gXHU2NUU1XHU1RTM4XHJcbiAgJ2h0dHBzOi8vaW1hZ2UucGV0ZXJqeGwuY29tL2Jsb2cvYmFja2dydW9uZC1jaXR5LmpwZycsXHJcblxyXG4gIC8vIHJlOiB6ZXJvXHJcbiAgJ2h0dHBzOi8vaW1hZ2UucGV0ZXJqeGwuY29tL2Jsb2cvcmUtYmFja2dyb3VuZC5qcGcnLFxyXG4gICdodHRwczovL2ltYWdlLnBldGVyanhsLmNvbS9ibG9nL0VtaWxpYS5qcGcnLFxyXG4gICdodHRwczovL2ltYWdlLnBldGVyanhsLmNvbS9ibG9nL0VtaWxpYS0yLmpwZycsXHJcblxyXG4gIC8vIE1pa3VcclxuICAnaHR0cHM6Ly9pbWFnZS5wZXRlcmp4bC5jb20vYmxvZy8xMjA1ODYwMjRfcDAucG5nJyxcclxuICAnaHR0cHM6Ly9pbWFnZS5wZXRlcmp4bC5jb20vYmxvZy8xMTQxNzk4NTFfcDAuanBnJyxcclxuICAnaHR0cHM6Ly9pbWFnZS5wZXRlcmp4bC5jb20vYmxvZy8xMjA4MTQxNzlfcDAuanBnJyxcclxuXHJcbiAgLy8gXHU1QjY0XHU3MkVDXHU2NDQ3XHU2RURBXHJcbiAgJ2h0dHBzOi8vaW1hZ2UucGV0ZXJqeGwuY29tL2Jsb2cvMTEyMjgwMzgwX3AwLnBuZycsXHJcbiAgJ2h0dHBzOi8vaW1hZ2UucGV0ZXJqeGwuY29tL2Jsb2cvMTAzOTA3NDQ1X3AwLnBuZycsXHJcbiAgJ2h0dHBzOi8vaW1hZ2UucGV0ZXJqeGwuY29tL2Jsb2cvMTA5NTY1ODIxX3AwLnBuZycsXHJcblxyXG4gIC8vIFx1NEU4Q1x1NkIyMVx1NTE0M1xyXG4gICdodHRwczovL2ltYWdlLnBldGVyanhsLmNvbS9ibG9nLzE4MC5qcGcnLCAgICAgICAgICAvLyBcdTRFMEJcdTYyQzlcdTg4RDlcdTY0NDZcclxuICAnaHR0cHM6Ly9pbWFnZS5wZXRlcmp4bC5jb20vYmxvZy80LjJiLnBuZycsICAgICAgICAgLy8gXHU1QzNDXHU1QzE0XHUwMEI3XHU2NzNBXHU2OEIwXHU3RUFBXHU1MTQzXHJcbiAgJ2h0dHBzOi8vaW1hZ2UucGV0ZXJqeGwuY29tL2Jsb2cvMTE2NDA2ODU1X3AwLnBuZycsIC8vIFx1ODM4OVx1NTNFRlx1ODM4OVx1NEUxRFxyXG4gICdodHRwczovL2ltYWdlLnBldGVyanhsLmNvbS9ibG9nLzIwMjAtMDQtMDNfMTYtMjMtMzYucG5nJywgLy8gXHU5QjNDXHU3MDZEXHU0RTRCXHU1MjAzXHJcbiAgJ2h0dHBzOi8vaW1hZ2UucGV0ZXJqeGwuY29tL2Jsb2cvMTE0NjEzNTM1X3AwLnBuZycsIC8vIFx1ODQ2Q1x1OTAwMVx1NzY4NFx1ODI5OVx1ODM4OVx1ODNCMlxyXG4gICdodHRwczovL2ltYWdlLnBldGVyanhsLmNvbS9ibG9nLzc2NjAxNzQ3X3AxLmpwZycsICAvLyBcdTU2RkRcdTVCQjZcdTk2MUZcclxuICAnaHR0cHM6Ly9pbWFnZS5wZXRlcmp4bC5jb20vYmxvZy82MjQ5NDc1M19wMC5qcGcnLCAgLy8gXHU1N0MzXHU3RjU3XHU4MjkyXHJcbiAgJ2h0dHBzOi8vaW1hZ2UucGV0ZXJqeGwuY29tL2Jsb2cvTWlrYXNhLmpwZycsICAgICAgIC8vIFx1NEUwOVx1N0IyMFxyXG4gICdodHRwczovL2ltYWdlLnBldGVyanhsLmNvbS9ibG9nL3NhYmVyLmpwZycsICAgICAgICAvLyBmYXRlXHJcbiAgJ2h0dHBzOi8vaW1hZ2UucGV0ZXJqeGwuY29tL2Jsb2cvMTIzODAwMzYzX3AwLmpwZycsIC8vIFx1NTkwRlx1NjVFNVx1OTFDRFx1NzNCMFxyXG4gICdodHRwczovL2ltYWdlLnBldGVyanhsLmNvbS9ibG9nL2dvam8tZXllcy1qdWp1dHN1LWthaXNlbi1oZC13YWxscGFwZXItdWhkcGFwZXIuY29tLTIwOEAyQGEuanBnJywgLy8gXHU0RTk0XHU2NzYxXHU2MDlGXHJcbiAgJ2h0dHBzOi8vaW1hZ2UucGV0ZXJqeGwuY29tL2Jsb2cvMTM1NzE4NTY5X3AwLmpwZycsIC8vIFx1ODU3RVx1NTg1RVxyXG5cclxuICAvLyBcdTUxQjBcdTgzRDNcclxuICAnaHR0cHM6Ly9pbWFnZS5wZXRlcmp4bC5jb20vYmxvZy82OTAxMTIuanBnJyxcclxuICAnaHR0cHM6Ly9pbWFnZS5wZXRlcmp4bC5jb20vYmxvZy9iaW5nZ3VvLmpwZycsXHJcblxyXG4gICdodHRwczovL2ltYWdlLnBldGVyanhsLmNvbS9ibG9nL3dhbGstaW4tc3BhY2UucG5nJywgLy8gXHU1OTJBXHU3QTdBXHJcbiAgJ2h0dHBzOi8vaW1hZ2UucGV0ZXJqeGwuY29tL2Jsb2cvbWlhb21pYW8uanBnJywgLy8gXHU1OTk5XHU1OTk5XHVGRjAxXHJcbiAgJ2h0dHBzOi8vaW1hZ2UucGV0ZXJqeGwuY29tL2Jsb2cvTUVNRS1LYW9maXNoLmpwZycsIC8vIFx1NzBFNFx1OUM3Q1xyXG5dXHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxcUHJvamVjdHNcXFxcVml0ZXByZXNzQmxvZ1xcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcY29uZmlnXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxQcm9qZWN0c1xcXFxWaXRlcHJlc3NCbG9nXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxjb25maWdcXFxcSGVhZC50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovUHJvamVjdHMvVml0ZXByZXNzQmxvZy9kb2NzLy52aXRlcHJlc3MvY29uZmlnL0hlYWQudHNcIjsvLyBIVE1MIGhlYWQgXHU2ODA3XHU3QjdFXHU0RkUxXHU2MDZGXHJcbmV4cG9ydCBjb25zdCBIZWFkRGF0YSA9IFtcclxuXHJcbiAgLy8gXHU1NkZFXHU2ODA3XHJcbiAgWydsaW5rJywgeyByZWw6ICdpY29uJywgaHJlZjogJ2h0dHBzOi8vaW1hZ2UucGV0ZXJqeGwuY29tL2Jsb2cvcmUwLmpwZycgfV0sXHJcblxyXG4gIC8vIEFsZ29saWEgXHU3QUQ5XHU3MEI5XHU5QThDXHU4QkMxXHJcbiAgW1wibWV0YVwiLCB7IG5hbWU6IFwiYWxnb2xpYS1zaXRlLXZlcmlmaWNhdGlvblwiLCBjb250ZW50OiBcIjU4OTYwREU3QkNBRUM1NjJcIiB9XSxcclxuXHJcbiAgLy8gXHU2RDRGXHU4OUM4XHU1NjY4XHU2M0E3XHU1MjM2XHU1M0YwXHU4RjkzXHU1MUZBXHJcbiAgW1xyXG4gICAgJ3NjcmlwdCcsIHt9LCBgXHJcbiAgICAgICAgY29uc29sZS5pbmZvKCclY1x1NTRDRVx1NTQ0MFx1RkYwQ1x1ODhBQlx1NEY2MFx1NTNEMVx1NzNCMFx1NEU4Nlx1RDgzRFx1REUxQ1x1RkYwMVx1NUUwQ1x1NjcxQlx1NEY2MFx1ODBGRFx1NTU5Q1x1NkIyMlx1OEZEOVx1NEUyQVx1NTM1QVx1NUJBMlx1RkYwMScsICdjb2xvcjogIzAwN2FjYzsgZm9udC1zaXplOiAyNHB4OyBmb250LXdlaWdodDogYm9sZDsnKTtcclxuICAgICAgICBjb25zb2xlLmluZm8oJ19fX19fX19fX19fX19fXyMjIyMjIyMjI19fX19fX19fX19fX19fX19fX19fX19fICcpO1xyXG4gICAgICAgIGNvbnNvbGUuaW5mbygnX19fX19fX19fX19fX18jIyMjIyMjIyMjIyNfX19fX19fX19fX19fX19fX19fX18gJyk7XHJcbiAgICAgICAgY29uc29sZS5pbmZvKCdfX19fX19fX19fX19fXyMjIyMjIyMjIyMjIyNfX19fX19fX19fX19fX19fX19fXyAnKTtcclxuICAgICAgICBjb25zb2xlLmluZm8oJ19fX19fX19fX19fX18jI19fIyMjIyMjIyMjIyNfX19fX19fX19fX19fX19fX19fICcpO1xyXG4gICAgICAgIGNvbnNvbGUuaW5mbygnX19fX19fX19fX19fIyMjX18jIyMjIyNfIyMjIyNfX19fX19fX19fX19fX19fX18gJyk7XHJcbiAgICAgICAgY29uc29sZS5pbmZvKCdfX19fX19fX19fX18jIyNfIyMjIyMjI19fXyMjIyNfX19fX19fX19fX19fX19fXyAnKTtcclxuICAgICAgICBjb25zb2xlLmluZm8oJ19fX19fX19fX19fIyMjX18jIyMjIyMjIyMjXyMjIyNfX19fX19fX19fX19fX19fICcpO1xyXG4gICAgICAgIGNvbnNvbGUuaW5mbygnX19fX19fX19fXyMjIyNfXyMjIyMjIyMjIyMjXyMjIyNfX19fX19fX19fX19fX18gJyk7XHJcbiAgICAgICAgY29uc29sZS5pbmZvKCdfX19fX19fXyMjIyMjX19fIyMjIyMjIyMjIyNfXyMjIyMjX19fX19fX19fX19fXyAnKTtcclxuICAgICAgICBjb25zb2xlLmluZm8oJ19fX19fX18jIyMjIyNfX18jIyNfIyMjIyMjIyNfX18jIyMjI19fX19fX19fX19fICcpO1xyXG4gICAgICAgIGNvbnNvbGUuaW5mbygnX19fX19fXyMjIyMjX19fIyMjX19fIyMjIyMjIyNfX18jIyMjIyNfX19fX19fX18gJyk7XHJcbiAgICAgICAgY29uc29sZS5pbmZvKCdfX19fX18jIyMjIyNfX18jIyNfXyMjIyMjIyMjIyMjX19fIyMjIyMjX19fX19fXyAnKTtcclxuICAgICAgICBjb25zb2xlLmluZm8oJ19fX19fIyMjIyMjX19fIyMjI18jIyMjIyMjIyMjIyMjI19fIyMjIyMjX19fX19fICcpO1xyXG4gICAgICAgIGNvbnNvbGUuaW5mbygnX19fXyMjIyMjIyNfXyMjIyMjIyMjIyMjIyMjIyMjIyMjI18jIyMjIyMjX19fX18gJyk7XHJcbiAgICAgICAgY29uc29sZS5pbmZvKCdfX19fIyMjIyMjI19fIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjX19fXyAnKTtcclxuICAgICAgICBjb25zb2xlLmluZm8oJ19fXyMjIyMjIyNfXyMjIyMjI18jIyMjIyMjIyMjIyMjIyMjI18jIyMjIyMjX19fICcpO1xyXG4gICAgICAgIGNvbnNvbGUuaW5mbygnX19fIyMjIyMjI19fIyMjIyMjXyMjIyMjI18jIyMjIyMjIyNfX18jIyMjIyNfX18gJyk7XHJcbiAgICAgICAgY29uc29sZS5pbmZvKCdfX18jIyMjIyMjX19fXyMjX18jIyMjIyNfX18jIyMjIyNfX19fXyMjIyMjI19fXyAnKTtcclxuICAgICAgICBjb25zb2xlLmluZm8oJ19fXyMjIyMjIyNfX19fX19fXyMjIyMjI19fX18jIyMjI19fX19fIyMjIyNfX19fICcpO1xyXG4gICAgICAgIGNvbnNvbGUuaW5mbygnX19fXyMjIyMjI19fX19fX19fIyMjIyNfX19fXyMjIyMjX19fX18jIyMjX19fX18gJyk7XHJcbiAgICAgICAgY29uc29sZS5pbmZvKCdfX19fXyMjIyMjX19fX19fX18jIyMjX19fX19fIyMjIyNfX19fXyMjI19fX19fXyAnKTtcclxuICAgICAgICBjb25zb2xlLmluZm8oJ19fX19fXyMjIyMjX19fX19fOyMjI19fX19fX19fIyMjX19fX19fI19fX19fX19fICcpO1xyXG4gICAgICAgIGNvbnNvbGUuaW5mbygnX19fX19fX18jI19fX19fX18jIyMjX19fX19fX18jIyMjX19fX19fX19fX19fX18gJyk7XHJcbiAgICAgIGBcclxuICBdLFxyXG5dO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQ0EsU0FBUyxvQkFBb0I7OztBQ0E3QixTQUFTLHdCQUF3Qjs7O0FDRCtTLElBQU0sU0FBUztBQUUvVixJQUFNLFFBQVE7QUFHZCxJQUFNLFFBQVE7QUFHZCxJQUFNLFFBQVE7QUFBQTtBQUFBO0FBQUE7OztBQ0pQLElBQU0sY0FBd0I7QUFBQSxFQUNuQztBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixVQUFVO0FBQUE7QUFBQSxJQUNWLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sVUFBVTtBQUFBO0FBQUEsSUFDVixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0E7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxFQUNSO0FBQ0Y7OztBQzNCTyxJQUFNLE9BQXNCO0FBQUEsRUFDakM7QUFBQTtBQUFBLEVBQ0E7QUFBQTtBQUFBLEVBQ0E7QUFBQTtBQUFBLEVBQ0E7QUFBQTtBQUFBLEVBQ0E7QUFBQTtBQUFBLEVBQ0E7QUFBQTtBQUFBLEVBQ0E7QUFBQTtBQUFBLEVBQ0E7QUFBQTtBQUFBLEVBQ0E7QUFBQTtBQUFBLEVBQ0E7QUFBQTtBQUFBLEVBQ0E7QUFBQTtBQUFBLEVBQ0E7QUFBQTtBQUFBLEVBQ0E7QUFBQTtBQUFBLEVBQ0E7QUFBQTtBQUFBLEVBQ0E7QUFBQTtBQUFBLEVBQ0E7QUFBQTtBQUFBLEVBQ0E7QUFBQTtBQUFBLEVBQ0E7QUFBQTtBQUFBLEVBQ0E7QUFBQTtBQUFBLEVBQ0E7QUFBQTtBQUFBLEVBQ0E7QUFBQTtBQUFBLEVBQ0E7QUFBQTtBQUFBLEVBQ0E7QUFBQTtBQUFBLEVBQ0E7QUFBQTtBQUFBLEVBQ0E7QUFBQTtBQUFBLEVBQ0E7QUFBQTtBQUFBLEVBQ0E7QUFBQTtBQUFBLEVBQ0E7QUFBQTtBQUFBLEVBQ0E7QUFBQTtBQUFBLEVBQ0E7QUFBQTtBQUFBLEVBQ0E7QUFBQTtBQUFBLEVBQ0E7QUFBQTtBQUFBLEVBQ0E7QUFBQTtBQUFBLEVBQ0E7QUFBQTtBQUFBLEVBQ0E7QUFBQTtBQUFBLEVBQ0E7QUFBQTtBQUFBLEVBQ0E7QUFBQTtBQUFBLEVBQ0E7QUFBQTtBQUFBLEVBR0E7QUFBQTtBQUFBLEVBQ0E7QUFBQTtBQUFBLEVBQ0E7QUFBQTtBQUFBLEVBQ0E7QUFBQTtBQUFBLEVBQ0E7QUFBQTtBQUFBLEVBQ0E7QUFBQTtBQUFBLEVBQ0E7QUFBQTtBQUFBLEVBQ0E7QUFBQTtBQUFBLEVBQ0E7QUFBQTtBQUFBLEVBQ0E7QUFBQTtBQUFBLEVBQ0E7QUFBQTtBQUFBO0FBQUEsRUFHQTtBQUFBO0FBQUEsRUFDQTtBQUFBO0FBQUEsRUFDQTtBQUFBO0FBQUEsRUFDQTtBQUFBO0FBQUEsRUFDQTtBQUFBO0FBQUEsRUFDQTtBQUFBO0FBQUEsRUFDQTtBQUFBO0FBQUEsRUFDQTtBQUFBO0FBQUEsRUFDQTtBQUFBO0FBQUEsRUFDQTtBQUFBO0FBQUE7QUFBQSxFQUdBO0FBQUE7QUFBQSxFQUNBO0FBQUE7QUFBQSxFQUNBO0FBQUE7QUFBQSxFQUNBO0FBQUE7QUFBQSxFQUNBO0FBQUE7QUFBQSxFQUNBO0FBQUE7QUFBQSxFQUNBO0FBQUE7QUFBQSxFQUNBO0FBQUE7QUFBQSxFQUNBO0FBQUE7QUFBQSxFQUNBO0FBQUE7QUFBQSxFQUNBO0FBQUE7QUFBQSxFQUNBO0FBQUE7QUFBQSxFQUNBO0FBQUE7QUFBQSxFQUNBO0FBQUE7QUFBQSxFQUNBO0FBQUE7QUFBQTtBQUFBLEVBR0E7QUFBQTtBQUFBLEVBQ0E7QUFBQTtBQUFBLEVBQ0E7QUFBQTtBQUFBLEVBQ0E7QUFBQTtBQUFBO0FBQUEsRUFJQTtBQUFBO0FBQUEsRUFDQTtBQUFBO0FBQUEsRUFDQTtBQUFBO0FBQUEsRUFDQTtBQUFBO0FBQUEsRUFDQTtBQUFBO0FBQUEsRUFDQTtBQUFBO0FBQUEsRUFDQTtBQUFBO0FBQUEsRUFDQTtBQUFBO0FBQUEsRUFDQTtBQUFBO0FBQUEsRUFDQTtBQUFBO0FBQUEsRUFDQTtBQUFBO0FBQUEsRUFDQTtBQUFBO0FBQUEsRUFDQTtBQUFBO0FBQUEsRUFDQTtBQUFBO0FBQUEsRUFDQTtBQUFBO0FBQUEsRUFDQTtBQUFBO0FBQUEsRUFDQTtBQUFBO0FBQUEsRUFDQTtBQUFBO0FBQUEsRUFDQTtBQUFBO0FBQUEsRUFDQTtBQUFBO0FBQUE7QUFBQSxFQUdBO0FBQUE7QUFBQSxFQUNBO0FBQUE7QUFBQSxFQUNBO0FBQUE7QUFBQSxFQUNBO0FBQUE7QUFBQSxFQUNBO0FBQUE7QUFBQSxFQUNBO0FBQUE7QUFBQSxFQUNBO0FBQUE7QUFBQSxFQUNBO0FBQUE7QUFBQSxFQUNBO0FBQUE7QUFBQSxFQUNBO0FBQUE7QUFBQSxFQUNBO0FBQUE7QUFBQSxFQUNBO0FBQUE7QUFBQSxFQUNBO0FBQUE7QUFBQSxFQUNBO0FBQUE7QUFBQSxFQUNBO0FBQUE7QUFBQSxFQUNBO0FBQUE7QUFBQSxFQUNBO0FBQUE7QUFBQSxFQUNBO0FBQUE7QUFBQSxFQUNBO0FBQUE7QUFBQSxFQUNBO0FBQUE7QUFBQSxFQUNBO0FBQUE7QUFBQSxFQUNBO0FBQUE7QUFBQSxFQUNBO0FBQUE7QUFBQSxFQUNBO0FBQUE7QUFBQSxFQUNBO0FBQUE7QUFBQSxFQUNBO0FBQUE7QUFBQTtBQUFBLEVBR0E7QUFBQTtBQUFBLEVBR0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBO0FBQUEsRUFHQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUE7QUFBQSxFQUdBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQTtBQUFBLEVBR0E7QUFBQTtBQUFBLEVBQ0E7QUFBQTtBQUFBLEVBQ0E7QUFBQTtBQUFBLEVBQ0E7QUFBQTtBQUFBLEVBQ0E7QUFBQTtBQUFBLEVBQ0E7QUFBQTtBQUFBLEVBQ0E7QUFBQTtBQUFBLEVBQ0E7QUFBQTtBQUFBLEVBQ0E7QUFBQTtBQUFBLEVBQ0E7QUFBQTtBQUFBLEVBQ0E7QUFBQTtBQUFBLEVBQ0E7QUFBQTtBQUFBO0FBQUEsRUFHQTtBQUFBLEVBQ0E7QUFBQSxFQUVBO0FBQUE7QUFBQSxFQUNBO0FBQUE7QUFBQSxFQUNBO0FB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QUE7QUFBQSxJQUNWLFlBQVk7QUFBQTtBQUFBLEVBQ2Q7QUFBQTtBQUFBLEVBR0EsWUFBWTtBQUFBLElBQ1YsU0FBUztBQUFBO0FBQUEsSUFDVCxPQUFPO0FBQUE7QUFBQSxJQUNQLFlBQVk7QUFBQTtBQUFBLElBQ1osTUFBTTtBQUFBLE1BQ0o7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLFFBQVE7QUFBQSxRQUNSLE1BQU07QUFBQSxNQUNSO0FBQUEsTUFDQTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLFFBQ04sUUFBUTtBQUFBLFFBQ1IsTUFBTTtBQUFBLE1BQ1I7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsUUFDTixRQUFRO0FBQUEsUUFDUixNQUFNO0FBQUEsTUFDUjtBQUFBLE1BQ0E7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLFFBQVE7QUFBQSxRQUNSLE1BQU07QUFBQSxNQUNSO0FBQUEsTUFDQTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLFFBQ04sUUFBUTtBQUFBLFFBQ1IsTUFBTTtBQUFBLE1BQ1I7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsUUFDTixRQUFRO0FBQUEsUUFDUixNQUFNO0FBQUEsTUFDUjtBQUFBLE1BQ0E7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLFFBQVE7QUFBQSxRQUNSLE1BQU07QUFBQSxNQUNSO0FBQUEsTUFDQTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLFFBQ04sUUFBUTtBQUFBLFFBQ1IsTUFBTTtBQUFBLE1BQ1I7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsUUFDTixRQUFRO0FBQUEsUUFDUixNQUFNO0FBQUEsTUFDUjtBQUFBLE1BQ0E7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLFFB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
