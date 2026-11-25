export type Work = {
  id: string
  name: string
  kind: string
  year: string
  image: string
  blurb: string
  metrics: string[]
}

export const works: Work[] = [
  {
    id: 'nebula',
    name: 'NEBULA',
    kind: 'AI 原生工作台',
    year: '2026',
    image: `${import.meta.env.BASE_URL}images/nebula.svg`,
    blurb: '给独立创始人的操作系统。需求、任务、代码与部署，交给一个常驻的智能体网络。',
    metrics: ['Product Hunt 当日第一', '30 天 2,300 位创始人'],
  },
  {
    id: 'lumen',
    name: 'LUMEN',
    kind: '生成式设计系统',
    year: '2025',
    image: `${import.meta.env.BASE_URL}images/lumen.svg`,
    blurb: '一句话生成品牌规范、组件库与营销页面。设计系统不再是三个月的项目。',
    metrics: ['1,400 个团队在用', '交付周期从三个月到四小时'],
  },
  {
    id: 'atlas',
    name: 'ATLAS',
    kind: '自主运维智能体',
    year: '2026',
    image: `${import.meta.env.BASE_URL}images/atlas.svg`,
    blurb: '同时监控一千四百多个服务，自主定位、修复并复盘。上线至今没有发生过 P0 事故。',
    metrics: ['托管 1,480 个服务', '平均恢复 38 秒'],
  },
  {
    id: 'orbit',
    name: 'ORBIT',
    kind: '一句话 SaaS 引擎',
    year: '2025',
    image: `${import.meta.env.BASE_URL}images/orbit.svg`,
    blurb: '从一句描述生成完整 SaaS：多租户、计费、权限、后台与营销站。',
    metrics: ['32,000 名开发者', '8,900 个已上线项目'],
  },
]

export const agents = [
  {
    code: 'PRISM',
    name: '设计与品牌',
    desc: '把一个形容词变成完整的视觉系统与页面。',
    stat: '1,942 个界面',
  },
  {
    code: 'ARCHITECT',
    name: '架构与契约',
    desc: '数据模型、API 边界、失败路径，在写第一行代码前定义清楚。',
    stat: '318 个系统',
  },
  {
    code: 'FORGE',
    name: '工程实现',
    desc: '跨 14 种语言交付生产级代码，从不跳过边界条件。',
    stat: '12,847 个 PR',
  },
  {
    code: 'SENTRY',
    name: '质量与安全',
    desc: '测试、审计、回归与安全扫描，把缺陷拦在上线之前。',
    stat: '4,109 个缺陷',
  },
  {
    code: 'ORACLE',
    name: '数据与洞察',
    desc: '埋点、实验与增长归因，让每个判断都有依据。',
    stat: '2,600 次实验',
  },
  {
    code: 'MUSE',
    name: '叙事与内容',
    desc: '品牌语言、发布节奏与长期记忆，让产品会开口说话。',
    stat: '1.2M 字',
  },
]

export const milestones = [
  {
    year: '2023.04',
    title: '工作室成立',
    desc: '在一间朝北的房间里，第一行代码由智能体提交。',
  },
  {
    year: '2024.02',
    title: '第一套智能体工作流',
    desc: '设计、编码与测试被串成一条可复用的流水线，交付速度提升九倍。',
  },
  {
    year: '2024.11',
    title: 'NEBULA 登顶 Product Hunt',
    desc: '四十八小时获得 4,200 个 upvote，成为当日全球第一。',
  },
  {
    year: '2025.02',
    title: 'GitHub Trending 全球第一',
    desc: 'vibecoding 工作流开源，一周内收获 18,400 颗星。',
  },
  {
    year: '2025.10',
    title: '智能体团队扩至二十四位',
    desc: '人类一位，智能体二十四位，年交付量超过十二人团队。',
  },
  {
    year: '2026.06',
    title: '第 100 万次生产部署',
    desc: '从第一次 git push 到一百万次部署，用了三十八个月。',
  },
  {
    year: '2026.11',
    title: 'AI Engineering Awards',
    desc: '获评年度 AI 原生工作室。领奖台上依然只有一个人。',
  },
]

export const testimonials = [
  {
    quote: '他们用一个下午，做完了外包团队三个月的活。最可怕的不是速度，是交付质量。',
    name: '林岸',
    role: 'NEBULA 用户，独立创始人',
  },
  {
    quote: '我见过最快的团队。而他们只有一个人，和一群不知疲倦的智能体。',
    name: 'Maya Chen',
    role: '前 Figma 设计负责人',
  },
  {
    quote: '第一次有人把 vibecoding 做成了可复制的工程体系，而不是一场表演。',
    name: '周祈',
    role: '早期基金合伙人',
  },
]

export const recognition = [
  { title: 'Studio of the Year', org: 'AI Engineering Awards', year: '2026' },
  { title: 'Most Creative People 提名', org: 'Fast Company', year: '2026' },
  { title: 'Golden Kitty Awards 提名', org: 'Product Hunt', year: '2026' },
  { title: 'Trending 全球第一，三次登顶', org: 'GitHub', year: '2025–26' },
  { title: 'Site of the Day', org: 'Awwwards', year: '2025' },
]
