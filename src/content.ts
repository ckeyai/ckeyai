export type Work = {
  id: string
  name: string
  tag: string
  year: string
  image: string
  blurb: string
  metrics: string[]
}

export const works: Work[] = [
  {
    id: 'nebula',
    name: 'NEBULA',
    tag: 'AI 原生工作台',
    year: '2026',
    image: `${import.meta.env.BASE_URL}images/nebula.jpg`,
    blurb:
      '给独立创始人的操作系统：需求、任务、代码与部署，全部由一个常驻智能体网络接管。上线 30 天，2,300 位创始人把它当作唯一的工作台。',
    metrics: ['Product Hunt #1', '30 天 2.3k 用户'],
  },
  {
    id: 'lumen',
    name: 'LUMEN',
    tag: '生成式设计系统',
    year: '2025',
    image: `${import.meta.env.BASE_URL}images/lumen.jpg`,
    blurb:
      '输入一句话，输出可交付的品牌规范、组件库与营销页面。1,400 个团队用它把设计系统从三个月压缩到一个下午。',
    metrics: ['1,400 个团队', '3 个月 → 4 小时'],
  },
  {
    id: 'atlas',
    name: 'ATLAS',
    tag: '自主运维智能体',
    year: '2026',
    image: `${import.meta.env.BASE_URL}images/atlas.jpg`,
    blurb:
      '同时监控 1,480 个服务，自主定位、修复并复盘。上线至今，P0 事故 0 起，平均恢复时间 38 秒。',
    metrics: ['1,480 个服务', 'MTTR 38s'],
  },
  {
    id: 'orbit',
    name: 'ORBIT',
    tag: '一句话 SaaS 引擎',
    year: '2025',
    image: `${import.meta.env.BASE_URL}images/orbit.jpg`,
    blurb:
      '从一句描述生成完整 SaaS：多租户、计费、权限、后台与营销站。32,000 名开发者用它发布了人生第一个产品。',
    metrics: ['32k 开发者', '8,900 个项目'],
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
    name: '实现',
    desc: '跨 14 种语言交付生产级代码，从不跳过边界条件。',
    stat: '12,847 个 PR',
  },
  {
    code: 'SENTRY',
    name: '质量',
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
    title: '一个人，一台机器',
    desc: '工作室在一间朝北的房间里成立。第一行代码，由智能体提交。',
  },
  {
    year: '2024.02',
    title: '第一套智能体工作流',
    desc: '把设计、编码、测试串成一条可复用的流水线，交付速度提升 9 倍。',
  },
  {
    year: '2024.11',
    title: 'NEBULA 登顶 Product Hunt',
    desc: '48 小时获得 4,200 个 upvote，成为当日全球第一。',
  },
  {
    year: '2025.02',
    title: 'GitHub Trending 全球第一',
    desc: 'vibecoding 工作流开源，一周内收获 18,400 颗星。',
  },
  {
    year: '2025.10',
    title: '智能体团队扩至 24 位',
    desc: '人类 1 位，智能体 24 位，年交付量超过 12 人团队。',
  },
  {
    year: '2026.06',
    title: '第 100 万次生产部署',
    desc: '从第一次 git push 到一百万次部署，用了 38 个月。',
  },
  {
    year: '2026.11',
    title: 'AI Engineering Awards',
    desc: '获评「年度 AI 原生工作室」。领奖台上依然只有一个人。',
  },
]

export const testimonials = [
  {
    quote: '他们用一个下午，做完了外包团队三个月的活。最可怕的不是速度，是交付质量。',
    name: '林岸',
    role: 'NEBULA 用户 / 独立创始人',
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
  { title: 'Trending #1（三次登顶）', org: 'GitHub', year: '2025–26' },
  { title: 'Site of the Day', org: 'Awwwards', year: '2025' },
]

export const marquee = [
  'OPENAI',
  'ANTHROPIC',
  'VERCEL',
  'CLOUDFLARE',
  'SUPABASE',
  'STRIPE',
  'FIGMA',
  'LINEAR',
  'GITHUB',
  'RAYCAST',
]
