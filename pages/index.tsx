import Head from "next/head"
import Header from "../components/Header"
import { sanityClient, urlFor } from "../sanity"
import { Post } from "../typings"
import Link from "next/link"

// defining custom type "Props"
interface Props {
  // Post is defined in typings.d.ts
  posts: [Post]
}

export default function Home({ posts }: Props) {
  // console.log(posts)
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>AI For Cause</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div className="flex justify-between items-center bg-ai-logo-black border-y border-black py-10 lg:py-0">
        <div className="px-10 space-y-5">
          <h1 className="text-6xl text-ai-logo-text max-w-xl font-mono">
            AI for <span className="text-ai-logo-header-yellow">cause</span> -
            Exploring Endless Possibilities With AI.
          </h1>
          <h2 className="text-ai-logo-text">
            Making a difference with Artificial Intelligence.
          </h2>
        </div>

        <img
          className="hidden md:inline-flex h-32 lg:h-full"
          src="/AI.png"
          alt="logo img"
        />
      </div>

      {/* Posts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6">
        {posts.map((post) => (
          <Link key={post._id} href={`/post/${post.slug.current}`}>
            <div className="border rounded-lg group cursor-pointer overflow-hidden">
              <img
                className="h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out"
                src={urlFor(post.mainImage).url()!}
                alt="post img"
              />
              <div className="flex justify-between p-5 bg-white">
                <div>
                  <p className="text-lg font-bold">{post.title}</p>
                  <p className="text-xs">
                    {post.description} by {post.author.name}
                  </p>
                </div>
                <img
                  className="h-12 w-12 rounded-full"
                  src={urlFor(post.author.image).url()!}
                  alt="author image"
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export const getServerSideProps = async () => {
  const query = `*[_type == "post"]{
    _id,
    title,
    author -> {
        name,
        image
    },
    description,
    mainImage,
    slug,
  }`

  const posts = await sanityClient.fetch(query)

  return {
    props: {
      posts,
    },
  }
}
