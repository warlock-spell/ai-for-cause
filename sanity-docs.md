To run a unsigned file use:

```
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
```

To login into sanity use google login -> codelikephoenix@gmail.com

```
cd sanityaiforcause
sanity start
```

In posts section, slug is unique url of each post, and therefore it cannot contain any space, use hyphen '-' instead.

Use `Vision` tab on sanity project page. This tab uses Grok Syntax. The below snippet means that pulling down every id that has type "post".\
Inside Query type below snippet, and then run Fetch.

```
*[_type == "post"]{
    _id,
}
```

Pulling down multiple things

```
*[_type == "post"]{
    _id,
    title,
    slug,
}
```

Pulling down referenced objects (like author)

```
*[_type == "post"]{
    _id,
    title,
    slug,
    author -> {
        name,
        image
    },
}
```

Create sanity.js in root directory. \
Install next sanity -> `npm i next-sanity` (install it in root directory of nextjs project and not inside sanityaiforcause folder) \

```
copy data from file sanityaiforcause/sanity.json and set it to your env variables
create .env.local inside your nextjs root directory
```

In post.js, add a new field -> description

Query that we will use:

```
*[_type == "post"]{
    _id,
    title,
    author -> {
        name,
        image
    },
    description,
    mainImage,
    slug,
}
```

_createImageUrlBuilder_ is no longer wrapped by next-sanity and you'll need to install the dependency yourself

```
npm install @sanity/image-url
```

Another query:

```
*[_type == "post" && slug.current == $slug][0]{
    _id,
    _createdAt,
  title,
  author -> {
  name,
  image,
  },
  'comments': *[
    _type == "comment" &&
    post._ref == ^._id &&
    approved == true],
   description,
   mainImage,
   slug,
   body,
}
```

For creating tokens, go to sanity.io -> select project -> api tab -> scroll down to token section -> add api token -> editor token -> click save and copy the token \
