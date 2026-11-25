import { useEffect, useState } from 'react'
import { Counter, CursorGlow, Reveal } from './components/ui'
import { agents, marquee, milestones, recognition, testimonials, works } from './content'

const navLinks = [
  { href: '#manifesto', label: '方法论' },
  { href: '#work', label: '作品' },
  { href: '#fleet', label: '智能体' },
  { href: '#trajectory', label: '轨迹' },
  { href: '#contact', label: '联系' },
]

const heroStats: { value: number; decimals?: number; suffix: string; label: string }[] = [
  { value: 47, suffix: '+', label: '产品从零交付' },
  { value: 3.4, decimals: 1, suffix: 'M', label: '生成并上线的代码行' },
  { value: 99.98, decimals: 2, suffix: '%', label: '生产环境可用性' },
  { value: 12, suffix: '×', label: '单人团队杠杆' },
]

const sessionLines = [
  { tag: 'PRISM', text: '品牌规范 + 12 个页面', dur: '38s' },
  { tag: 'ARCHITECT', text: '数据模型与 API 契约', dur: '51s' },
  { tag: 'FORGE', text: '214 个文件 / 18,402 行', dur: '2m14s' },
  { tag: 'SENTRY', text: '1,284 项测试全部通过', dur: '96s' },
  { tag: 'DEPLOY', text: 'production · 首屏 0.8s', dur: 'live' },
]

function Mark({ size = 30 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="0.75" y="0.75" width="30.5" height="30.5" rx="9.5" stroke="currentColor" strokeOpacity="0.3" />
      <circle cx="16" cy="12.6" r="4.4" stroke="currentColor" strokeWidth="1.4" />
      <path d="M16 17.2V23.4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="16" cy="12.6" r="1.2" fill="currentColor" />
    </svg>
  )
}

function SessionPanel() {
  return (
    <div className="session-wrap">
      <div className="session">
        <div className="session-bar">
          <span className="session-dots" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span className="session-path">~/ckeyai/sessions/forge-0412</span>
          <span className="session-live">
            <i />
            LIVE
          </span>
        </div>
        <div className="session-body">
          <p className="session-prompt">
            <span className="chev">❯</span>
            <span>做一个面向独立设计师的订阅素材库</span>
            <span className="caret" aria-hidden="true" />
          </p>
          <ul className="session-log">
            {sessionLines.map((line, i) => (
              <li
                key={line.tag}
                className={`log-line ${line.tag === 'DEPLOY' ? 'is-deploy' : ''}`}
                style={{ animationDelay: `${420 + i * 210}ms` }}
              >
                <span className="log-check">✓</span>
                <span className="log-tag">{line.tag}</span>
                <span className="log-text">{line.text}</span>
                <span className="log-dur">{line.dur}</span>
              </li>
            ))}
          </ul>
          <div className="session-foot">
            <span>idea → production</span>
            <span>6h 12m</span>
          </div>
          <div className="session-bar-progress">
            <i />
          </div>
        </div>
      </div>
      <div className="session-chip">
        <i />
        24 agents online
      </div>
    </div>
  )
}

export default function App() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <div className="page">
      <CursorGlow />

      <header className={`nav ${scrolled || menuOpen ? 'is-solid' : ''}`}>
        <div className="container-x nav-inner">
          <a href="#top" className="brand" onClick={() => setMenuOpen(false)}>
            <span className="brand-mark">
              <Mark />
            </span>
            <span className="brand-name">ckeyai</span>
            <span className="brand-tag">AI STUDIO</span>
          </a>

          <nav className="nav-links" aria-label="主导航">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>

          <div className="nav-actions">
            <a
              className="nav-github"
              href="https://github.com/ckeyai"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
            <a className="btn btn-primary btn-sm" href="#contact">
              开始合作
            </a>
            <button
              className="menu-btn"
              aria-label={menuOpen ? '关闭菜单' : '打开菜单'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              {menuOpen ? '关闭' : '菜单'}
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="mobile-menu">
          <nav aria-label="移动端导航">
            {navLinks.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                style={{ animationDelay: `${80 + i * 60}ms` }}
                onClick={() => setMenuOpen(false)}
              >
                <span className="mono">0{i + 1}</span>
                {l.label}
              </a>
            ))}
          </nav>
          <div className="mobile-menu-foot">
            <a href="mailto:hello@ckeyai.com">hello@ckeyai.com</a>
            <span className="mono">SHANGHAI / REMOTE</span>
          </div>
        </div>
      )}

      <main>
        {/* ---------------- HERO ---------------- */}
        <section id="top" className="hero">
          <div className="hero-bg" aria-hidden="true">
            <div className="hero-grid" />
            <div className="orb orb-v" />
            <div className="orb orb-c" />
          </div>

          <div className="container-x hero-inner">
            <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-10">
              <div className="lg:col-span-7">
                <Reveal>
                  <span className="badge">
                    <i className="pulse" />
                    2027 Q1 · 仅接受 2 个新项目
                  </span>
                </Reveal>

                <Reveal delay={90}>
                  <h1 className="hero-title">
                    <span className="block">一句话，</span>
                    <span className="line-2 block">一整个产品。</span>
                  </h1>
                </Reveal>

                <Reveal delay={150}>
                  <p className="hero-en">One sentence. One product.</p>
                </Reveal>

                <Reveal delay={210}>
                  <p className="hero-lead">
                    从自然语言的第一个字开始，到生产环境的第一百万次请求。CKEYAI 是一家 AI
                    原生软件工作室：人类定方向，24 位常驻智能体完成设计、编码、测试与运维。
                  </p>
                </Reveal>

                <Reveal delay={270}>
                  <div className="hero-cta">
                    <a className="btn btn-primary" href="#contact">
                      开始一个项目 <span className="arrow">↗</span>
                    </a>
                    <a className="btn btn-ghost" href="#work">
                      查看作品 <span className="arrow">→</span>
                    </a>
                  </div>
                </Reveal>

                <Reveal delay={330}>
                  <div className="hero-meta">
                    <span>
                      <i>@</i> github.com/ckeyai
                    </span>
                    <span>
                      <i>✉</i> hello@ckeyai.com
                    </span>
                    <span>
                      <i>◉</i> 上海 / 远程
                    </span>
                  </div>
                </Reveal>
              </div>

              <Reveal delay={260} className="lg:col-span-5">
                <SessionPanel />
              </Reveal>
            </div>

            <Reveal delay={120}>
              <div className="hero-stats">
                {heroStats.map((s) => (
                  <div className="hero-stat" key={s.label}>
                    <div className="num">
                      <Counter to={s.value} decimals={s.decimals ?? 0} suffix={s.suffix} />
                    </div>
                    <div className="label">{s.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ---------------- STRIP ---------------- */}
        <div className="strip">
          <div className="container-x strip-head">
            <span className="mono">STACK / 创作与交付所依赖的生态</span>
          </div>
          <div className="marquee">
            <div className="marquee-track">
              {[...marquee, ...marquee].map((item, i) => (
                <span className="marquee-item" key={`${item}-${i}`}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ---------------- MANIFESTO ---------------- */}
        <section id="manifesto" className="section">
          <div className="container-x">
            <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5">
                <Reveal>
                  <span className="eyebrow">Manifesto / 方法论</span>
                  <h2 className="h2 mt-7">
                    人类负责品味，
                    <br />
                    <span className="em">智能体负责工程量。</span>
                  </h2>
                </Reveal>
                <Reveal delay={120}>
                  <blockquote className="manifesto-quote">
                    “过去，代码是瓶颈。
                    <br />
                    现在，想象力才是。”
                  </blockquote>
                </Reveal>
              </div>

              <div className="lg:col-span-7">
                <Reveal delay={90}>
                  <p className="lead">
                    传统团队用人数换速度，我们用判断力换速度。一次清晰的决策，可以被 24
                    个智能体在几分钟内展开成设计稿、数据模型、代码与测试——于是「一个人」和「一整个产品」之间的距离，第一次变得只是一句话。
                  </p>
                </Reveal>

                <div className="principles">
                  {[
                    {
                      n: '01',
                      t: '判断力优先',
                      d: '方向、品味与取舍，永远是人类的领域。我们不做更多的事，只做更对的事。',
                    },
                    {
                      n: '02',
                      t: '规格即产品',
                      d: '每一句需求都被编译成可执行、可验证的契约：接口、边界、失败路径与验收标准。',
                    },
                    {
                      n: '03',
                      t: '交付即证据',
                      d: '没有上线的作品，不算作品。所有叙事最终都要落在可访问的 URL 上。',
                    },
                  ].map((p, i) => (
                    <Reveal key={p.n} delay={140 + i * 90}>
                      <div className="principle">
                        <span className="principle-n mono">{p.n}</span>
                        <div>
                          <h3>{p.t}</h3>
                          <p>{p.d}</p>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- ACHIEVEMENTS ---------------- */}
        <section className="section section-flush">
          <div className="container-x">
            <Reveal>
              <div className="section-head">
                <span className="eyebrow">Numbers / 一些结果</span>
                <h2 className="h2 mt-7">
                  三年，<span className="em">一百万次部署。</span>
                </h2>
              </div>
            </Reveal>

            <div className="bento">
              <Reveal className="col-span-2 md:col-span-3">
                <div className="bento-card bento-a">
                  <div className="bento-kicker mono">SHIPPED</div>
                  <div className="big">
                    <Counter to={47} />
                    <span className="unit"> 个</span>
                  </div>
                  <div className="cap">产品从零交付，覆盖 9 个行业</div>
                </div>
              </Reveal>

              <Reveal delay={70} className="col-span-2 md:col-span-3">
                <div className="bento-card bento-b">
                  <div className="bento-kicker mono">RANKED #1</div>
                  <div className="big">
                    GitHub <span className="unit">Trending</span>
                  </div>
                  <div className="cap">全球趋势榜三次登顶 · 18,400 stars</div>
                </div>
              </Reveal>

              <Reveal delay={110} className="col-span-1 md:col-span-2">
                <div className="bento-card">
                  <div className="big gold">
                    <Counter to={12} />
                    <span className="unit">×</span>
                  </div>
                  <div className="cap">单人团队的交付杠杆</div>
                </div>
              </Reveal>

              <Reveal delay={150} className="col-span-1 md:col-span-2">
                <div className="bento-card">
                  <div className="big">
                    <Counter to={99.98} decimals={2} />
                    <span className="unit">%</span>
                  </div>
                  <div className="cap">过去 12 个月可用性</div>
                </div>
              </Reveal>

              <Reveal delay={190} className="col-span-2 md:col-span-2">
                <div className="bento-card">
                  <div className="big">
                    $<Counter to={4.2} decimals={1} />
                    <span className="unit">M</span>
                  </div>
                  <div className="cap">孵化产品合计 ARR</div>
                </div>
              </Reveal>

              <Reveal delay={230} className="col-span-2 md:col-span-3">
                <div className="bento-card">
                  <div className="big">
                    <Counter to={0} />
                    <span className="unit"> 起</span>
                  </div>
                  <div className="cap">P0 事故 · 1,480 个被托管的服务</div>
                </div>
              </Reveal>

              <Reveal delay={270} className="col-span-2 md:col-span-3">
                <div className="bento-card bento-awards">
                  <div className="bento-kicker mono">RECOGNITION</div>
                  <ul>
                    {recognition.slice(0, 3).map((r) => (
                      <li key={r.title}>
                        <span>{r.title}</span>
                        <span className="mono">{r.year}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ---------------- WORK ---------------- */}
        <section id="work" className="section border-t border-white/[0.06]">
          <div className="container-x">
            <Reveal>
              <div className="section-head">
                <span className="eyebrow">Selected work / 作品</span>
                <h2 className="h2 mt-7">
                  少而重。
                  <br />
                  <span className="em">每一个都还在生长。</span>
                </h2>
                <p className="lead">
                  四件作品，四个从一句话开始的项目。全部由智能体执行，全部在线上运行。
                </p>
              </div>
            </Reveal>

            <div className="work-grid">
              {works.map((w, i) => (
                <Reveal key={w.id} delay={i * 80}>
                  <a className="work-card" href="#contact">
                    <div className="work-media">
                      <img src={w.image} alt={`${w.name} 项目视觉`} loading="lazy" />
                      <span className="work-index mono">0{i + 1}</span>
                    </div>
                    <div className="work-body">
                      <div className="work-top">
                        <span className="work-name">{w.name}</span>
                        <span className="work-meta mono">
                          {w.tag} · {w.year}
                        </span>
                      </div>
                      <p className="work-blurb">{w.blurb}</p>
                      <div className="work-metrics">
                        {w.metrics.map((m) => (
                          <span key={m}>{m}</span>
                        ))}
                        <span className="work-arrow" aria-hidden="true">
                          ↗
                        </span>
                      </div>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- FLEET ---------------- */}
        <section id="fleet" className="section border-t border-white/[0.06]">
          <div className="container-x">
            <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-4">
                <Reveal>
                  <div className="lg:sticky lg:top-28">
                    <span className="eyebrow">The fleet / 智能体</span>
                    <h2 className="h2 mt-7">
                      一个人，
                      <br />
                      <span className="em">二十四位工程师。</span>
                    </h2>
                    <p className="lead">
                      它们共享同一套记忆、规范与权限边界。没有会议，没有交接，也不需要被管理——只需要被清晰地要求。
                    </p>
                    <div className="fleet-note">
                      <span className="mono">12,847</span> 个合并的 PR
                      <i />
                      <span className="mono">4,109</span> 个被拦截的缺陷
                    </div>
                  </div>
                </Reveal>
              </div>

              <div className="lg:col-span-8">
                <Reveal delay={100}>
                  <div className="agent-list">
                    {agents.map((a, i) => (
                      <div className="agent-row" key={a.code}>
                        <span className="agent-code">{a.code}</span>
                        <div>
                          <div className="agent-name">{a.name}</div>
                          <div className="agent-desc">{a.desc}</div>
                        </div>
                        <span className="agent-stat">{a.stat}</span>
                        <span className="agent-idx mono">0{i + 1}</span>
                      </div>
                    ))}
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- TRAJECTORY ---------------- */}
        <section id="trajectory" className="section border-t border-white/[0.06]">
          <div className="container-x">
            <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-4">
                <Reveal>
                  <span className="eyebrow">Trajectory / 轨迹</span>
                  <h2 className="h2 mt-7">
                    三十八个月，
                    <br />
                    <span className="em">没有一天停机。</span>
                  </h2>
                  <p className="lead">
                    从一间朝北的房间，到为一千四百个团队交付系统。以下是这条时间线上，值得被记住的几个点。
                  </p>
                </Reveal>
              </div>

              <div className="lg:col-span-8">
                <div className="timeline">
                  {milestones.map((m, i) => (
                    <Reveal key={m.year} delay={i * 55}>
                      <div className="timeline-item">
                        <div className="tl-year mono">{m.year}</div>
                        <h3>{m.title}</h3>
                        <p>{m.desc}</p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- TESTIMONIALS ---------------- */}
        <section className="section border-t border-white/[0.06]">
          <div className="container-x">
            <Reveal>
              <div className="section-head">
                <span className="eyebrow">Words / 他们怎么说</span>
                <h2 className="h2 mt-7">
                  合作过的人，
                  <br />
                  <span className="em">通常只留下一句话。</span>
                </h2>
              </div>
            </Reveal>

            <div className="quotes-grid">
              {testimonials.map((t, i) => (
                <Reveal key={t.name} delay={i * 90}>
                  <figure className="quote-card">
                    <span className="quote-mark serif">“</span>
                    <blockquote>{t.quote}</blockquote>
                    <figcaption>
                      <span className="quote-name">{t.name}</span>
                      <span className="quote-role">{t.role}</span>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>

            <Reveal delay={140}>
              <div className="recognition">
                {recognition.map((r) => (
                  <div className="recog-row" key={r.title}>
                    <span className="recog-title">{r.title}</span>
                    <span className="recog-org">{r.org}</span>
                    <span className="recog-year mono">{r.year}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ---------------- CTA ---------------- */}
        <section id="contact" className="section pt-0">
          <div className="container-x">
            <Reveal>
              <div className="cta">
                <div className="cta-bg" aria-hidden="true">
                  <div className="cta-orb" />
                  <div className="cta-grid" />
                </div>
                <div className="cta-inner">
                  <span className="eyebrow center">Next / 下一件事</span>
                  <h2 className="cta-title">
                    把下一个想法，
                    <br />
                    <span className="em">交给一句话。</span>
                  </h2>
                  <p className="cta-lead">
                    告诉我们你想做什么。48 小时内，你会收到一份可运行的方案，而不是一份报价单。
                  </p>
                  <div className="cta-actions">
                    <a className="btn btn-primary btn-lg" href="mailto:hello@ckeyai.com">
                      hello@ckeyai.com <span className="arrow">↗</span>
                    </a>
                    <a
                      className="btn btn-ghost btn-lg"
                      href="https://github.com/ckeyai"
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub <span className="arrow">↗</span>
                    </a>
                  </div>
                  <div className="cta-foot mono">
                    <span>RESPONSE &lt; 24H</span>
                    <span>SHANGHAI / REMOTE · UTC+8</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container-x">
          <div className="footer-grid">
            <div className="footer-brand">
              <a href="#top" className="brand">
                <span className="brand-mark">
                  <Mark size={28} />
                </span>
                <span className="brand-name">ckeyai</span>
              </a>
              <p>
                AI 原生软件工作室。
                <br />
                人类负责品味，智能体负责工程量。
              </p>
              <a className="footer-mail" href="mailto:hello@ckeyai.com">
                hello@ckeyai.com
              </a>
            </div>

            <div className="footer-col">
              <span className="mono">站点</span>
              {navLinks.map((l) => (
                <a key={l.href} href={l.href}>
                  {l.label}
                </a>
              ))}
            </div>

            <div className="footer-col">
              <span className="mono">作品</span>
              {works.map((w) => (
                <a key={w.id} href="#work">
                  {w.name}
                </a>
              ))}
            </div>

            <div className="footer-col">
              <span className="mono">其余</span>
              <a href="https://github.com/ckeyai" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href="https://github.com/ckeyai" target="_blank" rel="noreferrer">
                X / Twitter
              </a>
              <a href="https://github.com/ckeyai" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href="#top">回到顶部 ↑</a>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© 2026 CKEYAI STUDIO · 保留所有权利</span>
            <span className="footer-note">概念品牌展示，数据与评价均为虚构 narrative。</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
