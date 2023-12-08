import Image from 'next/image'
import styles from './page.module.css'
import Intro from './homeComponents/Intro/Intro'
import LatestBlogNews from './homeComponents/latestBlogNews/LatestBlogNews'
import Deals from './homeComponents/deals/Deals'
import About from './homeComponents/about/About'
import Service from './homeComponents/service/Service'
import Footer from './homeComponents/footer/Footer'

export default function Home() {
  return (
    <main>
      <Intro />
      <LatestBlogNews />
      <Deals />
      <About />
      <Service />
      <Footer />
    </main>
  )
}
