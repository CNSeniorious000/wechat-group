import styles from './page.module.css'
import QRCode from "./free-chat-wechat-group.png"
import Image from 'next/image'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          <a href='https://cdn.muspimerol.site/sponsorship' style={{ padding: 0 }}>
            为了维持运营，我们需要您的持续捐赠
            <code className={styles.code}>点此了解</code>
          </a>
        </p>
      </div>

      <div className={styles.center}>
        <Image priority className={styles.qrcode} src={QRCode} alt='qrcode'></Image>
        <div className={styles.logo}>扫码加入用户微信群</div>
        <div className={styles.afterLogo}>Free Chat 用户交流群 ⑧</div>
      </div>

      <div className={styles.grid}>

        <a href="https://ic.muspimerol.site/" className={styles.card} target="_blank" rel="noopener noreferrer">
          <h2>我们的官网</h2>
          <p>点此跳转到 Free Chat 的索引页。请收藏那个网址以防失联</p>
        </a>

        <a href="https://github.com/CNSeniorious000/free-chat" className={styles.card} target="_blank" rel="noopener noreferrer">
          <h2>GitHub 仓库</h2>
          <p>用 Vercel / Netlify 部署非常方便！可以的话欢迎给我一颗⭐</p>
        </a>

        <a href="mailto:admin@muspimerol.site" className={styles.card} target="_blank" rel="noopener noreferrer">
          <h2>Email</h2>
          <p>关于 Free Chat 的合作与赞助，欢迎发邮件与我联系</p>
        </a>

      </div>
    </main >
  )
}
