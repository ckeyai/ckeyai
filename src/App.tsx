import { useEffect, useState } from 'react'
import { agents, milestones, recognition, testimonials, works } from './content'

const nav = [
  { href: '#manifesto', label: '方法论' },
  { href: '#work', label: '作品' },
  { href: '#fleet', label: '智能体' },
  { href: '#trajectory', label: '轨迹' },
]

const ledger = [
  { time: '14:02', agent: 'PRISM', result: '品牌规范与 12 个页面' },
  { time: '14:03', agent: 'ARCHITECT', result: '数据模型与接口契约' },
  { time: '14:05', agent: 'FORGE', result: '214 个文件，18,402 行' },
  { time: '14:07', agent: 'SENTRY', result: '1,284 项测试通过' },
  { time: '14:09', agent: '上线', result: '生产环境首屏 0.8 秒' },
]

const facts = [
  { label: '产品从零交付', value: '47' },
  { label: '已上线的代码', value: '3.4M 行' },
  { label: '生产环境可用性', value: '99.98%' },
  { label: 'P0 事故', value: '0 起' },
]

function Mark() {
  return (
    <svg width="22" height="22" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <circle cx="16" cy="12.6" r="4.4" stroke="currentColor" strokeWidth="1.6" />
      <path d="M16 17.2V23.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="16" cy="12.6" r="1.3" fill="currentColor" />
    </svg>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <>
      <header className="masthead">
        <div className="wrap masthead-inner">
          <a className="wordmark" href="#top">
            <Mark />
            <span>CKEYAI</span>
          </a>

          <nav className="nav" aria-label="主导航">
            {nav.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="masthead-actions">
            <a className="masthead-mail" href="mailto:hello@ckeyai.com">
              hello@ckeyai.com
            </a>
            <button
              className="menu-toggle"
              aria-label={menuOpen ? '关闭菜单' : '打开菜单'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? '关闭' : '菜单'}
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="menu-panel">
          <nav aria-label="移动端导航">
            {nav.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>
            ))}
          </nav>
          <a className="menu-panel-mail" href="mailto:hello@ckeyai.com">
            hello@ckeyai.com
          </a>
        </div>
      )}

      <main id="top">
        <section className="hero">
          <div className="wrap">
            <div className="hero-grid">
              <div className="hero-copy">
                <h1 className="hero-title">
                  一句话，
                  <br />
                  一整个产品。
                </h1>
                <p className="hero-lede">
                  从自然语言的第一行开始，到生产环境的第百万次请求。一个人，二十四位常驻智能体，完成设计、编码、测试与部署。
                </p>
                <p className="hero-links">
                  <a className="link" href="#contact">
                    开始一个项目
                  </a>
                  <a className="link" href="#work">
                    查看作品
                  </a>
                </p>
              </div>

              <aside className="ledger" aria-labelledby="ledger-title">
                <h2 id="ledger-title" className="ledger-title">
                  今天的委托
                </h2>
                <table className="ledger-table">
                  <thead>
                    <tr>
                      <th scope="col">时间</th>
                      <th scope="col">智能体</th>
                      <th scope="col">产出</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ledger.map((row) => (
                      <tr key={row.time}>
                        <td className="ledger-time">{row.time}</td>
                        <td className="ledger-agent">{row.agent}</td>
                        <td>{row.result}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="ledger-foot">从需求到上线，6 小时 12 分</p>
              </aside>
            </div>

            <dl className="facts">
              {facts.map((fact) => (
                <div className="fact" key={fact.label}>
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section id="manifesto" className="section">
          <div className="wrap">
            <div className="section-head">
              <h2 className="section-title">
                人类负责品味，
                <br />
                智能体负责工程量。
              </h2>
              <p className="section-note">
                传统团队用人数换速度，我们用判断力换速度。一次清晰的决策，可以被二十四位智能体在几分钟内展开成设计稿、数据模型、代码与测试。
              </p>
            </div>

            <div className="principles">
              {[
                {
                  title: '判断力优先',
                  body: '方向、品味与取舍，永远是人类的领域。我们不做更多的事，只做更对的事。',
                },
                {
                  title: '规格即产品',
                  body: '每一句需求都被编译成可执行、可验证的契约：接口、边界、失败路径与验收标准。',
                },
                {
                  title: '交付即证据',
                  body: '没有上线的作品，不算作品。所有叙事最终都要落在可访问的地址上。',
                },
              ].map((principle) => (
                <div className="principle" key={principle.title}>
                  <h3>{principle.title}</h3>
                  <p>{principle.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="section">
          <div className="wrap">
            <div className="section-head">
              <h2 className="section-title">
                少而重，
                <br />
                每一个都还在生长。
              </h2>
              <p className="section-note">
                四件作品，四个从一句话开始的项目。它们都还在线上运行，也还在被智能体继续维护。
              </p>
            </div>

            <div className="work-grid">
              {works.map((work) => (
                <a className="work-item" href="#contact" key={work.id}>
                  <span className="work-media">
                    <img src={work.image} alt={`${work.name} 界面`} loading="lazy" />
                  </span>
                  <h3>{work.name}</h3>
                  <p className="work-meta">
                    {work.kind}，{work.year}
                  </p>
                  <p className="work-desc">{work.blurb}</p>
                  <p className="work-stat">{work.metrics.join('；')}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="fleet" className="section">
          <div className="wrap">
            <div className="section-head">
              <h2 className="section-title">
                一个人，
                <br />
                二十四位工程师。
              </h2>
              <p className="section-note">
                它们共享同一套记忆、规范与权限边界。没有会议，也没有交接，只需要被清晰地要求。
              </p>
            </div>

            <div className="roster">
              {agents.map((agent) => (
                <div className="roster-row" key={agent.code}>
                  <span className="roster-name">{agent.code}</span>
                  <span className="roster-remit">
                    {agent.name}
                    <span className="roster-desc">{agent.desc}</span>
                  </span>
                  <span className="roster-stat">{agent.stat}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="trajectory" className="section">
          <div className="wrap">
            <div className="section-head">
              <h2 className="section-title">
                三十八个月，
                <br />
                没有一天停机。
              </h2>
              <p className="section-note">
                从一间朝北的房间，到为一千四百个团队交付系统。以下是一条时间线上值得记住的几个节点。
              </p>
            </div>

            <dl className="journey">
              {milestones.map((milestone) => (
                <div className="journey-row" key={milestone.year}>
                  <dt>{milestone.year}</dt>
                  <dd>
                    <h3>{milestone.title}</h3>
                    <p>{milestone.desc}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <div className="section-head">
              <h2 className="section-title">
                合作过的人，
                <br />
                通常只留下一句话。
              </h2>
              <p className="section-note">以下是其中三句。原文没有删改，只是从邮件里搬了过来。</p>
            </div>

            <div className="quotes">
              {testimonials.map((item) => (
                <figure className="quote" key={item.name}>
                  <blockquote>{item.quote}</blockquote>
                  <figcaption>
                    {item.name}，{item.role}
                  </figcaption>
                </figure>
              ))}
            </div>

            <div className="awards">
              <h3 className="awards-title">荣誉</h3>
              {recognition.map((item) => (
                <div className="award-row" key={item.title}>
                  <span>{item.title}</span>
                  <span className="award-org">{item.org}</span>
                  <span className="award-year">{item.year}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <section id="contact" className="closing">
        <div className="wrap">
          <h2 className="closing-title">
            把下一个想法，
            <br />
            交给一句话。
          </h2>
          <p className="closing-note">
            告诉我们你想做什么。四十八小时内，你会收到一份可运行的方案，而不是一份报价单。
          </p>
          <a className="closing-mail" href="mailto:hello@ckeyai.com">
            hello@ckeyai.com
          </a>

          <footer className="footer">
            <div className="footer-grid">
              <div className="footer-brand">
                <a className="wordmark wordmark-light" href="#top">
                  <Mark />
                  <span>CKEYAI</span>
                </a>
                <p>
                  AI 原生软件工作室。
                  <br />
                  上海，接受远程委托。
                </p>
              </div>

              <nav className="footer-col" aria-label="站点">
                <span>站点</span>
                {nav.map((item) => (
                  <a key={item.href} href={item.href}>
                    {item.label}
                  </a>
                ))}
              </nav>

              <nav className="footer-col" aria-label="作品">
                <span>作品</span>
                {works.map((work) => (
                  <a key={work.id} href="#work">
                    {work.name}
                  </a>
                ))}
              </nav>

              <nav className="footer-col" aria-label="联系">
                <span>联系</span>
                <a href="https://github.com/ckeyai" target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a href="mailto:hello@ckeyai.com">Email</a>
                <a href="https://ckeyai.github.io/ckeyai/" target="_blank" rel="noreferrer">
                  线上地址
                </a>
              </nav>
            </div>

            <p className="footer-bottom">
              <span>© 2026 CKEYAI</span>
              <span>页面内容为概念品牌叙事</span>
            </p>
          </footer>
        </div>
      </section>
    </>
  )
}
