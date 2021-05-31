import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <link href="css/hover.css" rel="stylesheet" media="all"></link>
      </Head>
      <section className={utilStyles.headingMd}>
        <h2>
          Nice to meet you!
        </h2>
        <p class="hvr-grow">
          Right now you're probably wondering, "who the heck are you"? Well, I'm a soon-to-be second year computer science student at uwo (go mustangs!) with a passion for programming, an interest in business, and a
          desire to bring these two together in a way that allows me to have my own impact on the world.
        </p>
        <p class="hvr-grow">
          Outside of that fun stuff, you can catch me listening to indie british artists on spotify, reading up a new Agatha Christie mystery, or 
          catching up on some Spanish dramas. Piqued your interest yet? <a href="https://www.linkedin.com/in/robertoarmena/" target="_blank">Connect</a> with me, or <a href="mailto:roberto.armenaa@gmail.com" target="_blank">send</a> me a message, and let's see where things go :).
        </p>
        <h2>
          Experiences
        </h2>
        <a href="https://www.wsib.ca" target="_blank"><img src="/images/WSIBlogo.jpg" class="logo hvr-grow"></img></a>
        <p>Quality Assurance Intern @ Workplace Safety Insurance Board (WSIB) - Summer 2021</p>
        <a href="https://www.indietravel.co" target="_blank"><img src="/images/indielogo.jpg" class="logo hvr-grow"></img></a>
        <p>Marketing and Biz Dev Intern @ Indie Travel - Oct 2020 to Apr 2021</p>
      </section>
    </Layout>
  )
}
