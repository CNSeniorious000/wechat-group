import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p href='https://study.gptnb.xyz/'>
          <a href='https://study.gptnb.xyz/' style={{ padding: 0 }}>
            作为替代，你可以使用同行的部署
            <code className={styles.code}>study.gptnb.xyz</code>
          </a>
        </p>
      </div>

      <div className={styles.center}>
        <div id="logo" className={styles.avatar}></div>
        <div className={styles.logo}>本部署已停止维护</div>
        <div className={styles.afterLogo}>但你可选择此开源项目的其它免费部署</div>
      </div>

      <div className={styles.grid}>

        <a href="https://ic.muspimerol.site/" className={styles.card} target="_blank" rel="noopener noreferrer">
          <h2>Free Chat</h2>
          <p>点此跳转到 Free Chat 的索引页。这个网站原先是我们部署的</p>
        </a>

        <a href="https://github.com/binary-husky/gpt_academic" className={styles.card} target="_blank" rel="noopener noreferrer">
          <h2>GitHub</h2>
          <p>点此访问本项目的开源仓库，你可以在自己的计算机上部署</p>
        </a>

        <a href="mailto:admin@muspimerol.site" className={styles.card} target="_blank" rel="noopener noreferrer">
          <h2>Email</h2>
          <p>关于 Free Chat 的合作与赞助，欢迎发邮件与我联系</p>
        </a>
      </div>
    </main >
  )
}
