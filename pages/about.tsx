import Head from "next/head"
import Header from "../components/Header"
const about = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>About - AI For Cause</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
    </div>
  )
}

export default about
