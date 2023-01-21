import Head from "next/head"
import Header from "../components/Header"
import Link from "next/link"

const contact = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>Contact - AI For Cause</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="flex flex-col md:flex-row justify-between items-center py-10 h-screen mx-auto">
        <div className="px-10 space-y-5 text-center">
          <h1 className="sm:text-2xl text-4xl font-medium">How can I help?</h1>
          <p className="text-lg leading-relaxed">
            AI for <span className="text-ai-logo-header-yellow">cause </span> is
            a forward-thinking initiative that aims to harness the power of
            Artificial Intelligence to bring about positive change in various
            causes and case studies. If you are passionate about making a
            difference and wish to contribute in any way, be it by featuring a
            cause or case-study, providing feedback, or simply having a
            conversation, please do not hesitate to reach out.
          </p>
          <p className="text-lg leading-relaxed">
            I am always eager to connect and collaborate with like-minded
            individuals. With the help of AI, the possibilities are endless, and
            together we can make a meaningful impact.
          </p>
          <p className="text-lg leading-relaxed">
            Feel free to drop me an email at{" "}
            <Link href="mailto: aiforcause@gmail.com">
              <span className="text-ai-logo-header-yellow">
                aiforcause@gmail.com
              </span>
            </Link>
          </p>
          <a
            href="mailto: aiforcause@gmail.com"
            className="bg-primary text-white text-lg px-4 py-2 rounded-lg hover:bg-primary-dark"
          >
            Contact Us
          </a>
        </div>
        <img className="lg:ml-5 md:ml-0" src="/Ai-min.png" alt="logo img" />
      </div>
    </div>
  )
}

export default contact
