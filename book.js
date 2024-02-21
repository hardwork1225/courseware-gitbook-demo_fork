let plugins = [
  '-lunr',
  '-sharing',
  '-search',
  '-favicon',
  'code',
  'expandable-chapters',
  'theme-lou',
  'back-to-top-button',
  'search-pro',
  'flexible-alerts',
];
if (process.env.NODE_ENV == 'dev') {
  plugins.push('livereload');
}
module.exports = {
  title: 'Gitbook操作指南',
  author: '松露老师',
  lang: 'zh-cn',
  description: 'Gitbook电子书示例项目',
  plugins,
  pluginsConfig: {
    'flexible-alerts': {
      style: 'flat', // callout 或 flat
    },
    code: {
      copyButtons: true,
    },
    'theme-lou': {
      color: '#2096FF', // 主题色
      favicon: 'assets/favicon.ico',
      logo: 'assets/logo.png',
      copyrightLogo: 'assets/copyright.png',
      autoNumber: 3, // 自动给标题添加编号(如1.1.1)
      forbidCopy: false, // 页面是否禁止复制
      'search-placeholder': '众里寻他千百度', // 搜索框文本
      'hide-elements': ['.summary .gitbook-link'], // 需要隐藏的标签
      copyright: {
        author: '松露老师', // 底部版权展示的作者名
      },
    },
  },
  variables: {
    themeLou: {
      // 顶部导航栏配置
      nav: [
        {
          target: '_blank', // 跳转方式: 打开新页面
          url: 'https://space.bilibili.com/378936143', // 跳转页面
          name: 'B站', // 导航名称
        },
        {
          target: '_blank', // 跳转方式: 打开新页面
          url: 'https://ke.qq.com/course/3613637', // 跳转页面
          name: '腾讯课堂', // 导航名称
        },
        {
          target: '_blank', // 跳转方式: 打开新页面
          url: 'https://edu.csdn.net/course/detail/32032', // 跳转页面
          name: 'CSDN', // 导航名称
        },
      ],
      // 底部打赏配置
      footer: {
        donate: {
          button: '赞赏',
          avatar:
            'https://qinius.kujiajia.xyz/aaa-dobe/%E5%8D%A1%E9%80%9A%E8%90%8C%E5%A4%B4%E5%83%8F.png',
          nickname: '松露老师',
          message: '随意打赏，但不要超过一杯咖啡钱 ☕️',
          text: '『 赠人玫瑰 🌹 手有余香 』',
          wxpay:
            'https://qinius.kujiajia.xyz/aaa-dobe/%E8%B5%9E%E8%B5%8F%E7%A0%81-%E5%BE%AE%E4%BF%A1-%E6%96%B9.png',
          alipay:
            'https://qinius.kujiajia.xyz/aaa-dobe/%E8%B5%9E%E8%B5%8F%E7%A0%81-%E6%94%AF%E4%BB%98%E5%AE%9D-%E6%96%B9.png',
        },
        copyright: true, // 显示版权
      },
    },
  },
};
