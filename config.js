// 配置
window.Config = {

  // 站点名
  SiteName: 'HaoQi站点状态监控',

  // 站点链接
  SiteUrl: '/',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only 两种 Api Key
  ApiKeys: [
    'ur1690594-9b0a6c8528f69330930fb0c9'
  ],

  // 是否显示监测站点的链接
  ShowLink: false,

  // 日志天数
  // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
  // 不过时间不要设置太长，容易卡，接口请求也容易失败
  CountDays: 60,

  // 导航栏菜单
  Navi: [
    {
      text: '在线音乐',
      url: 'https://wasenk.cf'
    },
    {
      text: '在线网盘',
      url: 'https://www.wasenk.cf'
    },
    {
      text: 'GitHub',
      url: 'https://github.com/haoqi7/'
    },
    {
      text: '博客',
      url: 'https://haoqi7.github.io'
    }
  ]
};
