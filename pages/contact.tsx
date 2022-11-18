import Head from "next/head"
import Header from "../components/Header"

const contact = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>Contact - AI For Cause</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
    </div>
  )
}

export default contact
