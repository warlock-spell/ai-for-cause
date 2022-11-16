import {
  createImageUrlBuilder,
  createCurrentUserHook,
  createClient,
} from "next-sanity"

export const config = {
  // refer sanityaiforcause/sanity.json
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  // run sanity start -> vision -> api version
  apiVersion: "2021-10-21",

  /* Authenticated request (like preview) will always bypass the CDN
    set useCdn to 'false' if your application require the freshest data always, 
    potentially slightly slower and a bit expensive */
  useCdn: process.env.NODE_ENV === "production",
}

// in .env file # Next_public allows information to be retrived both on client and api side
// restart your server if you modify .env file
