# campus-online
[![online][www-badge]][www-url] [![online][admin-badge]][admin-url]

> website for fac-unb news lab


#### Why take another approach?

> If this branch is merged, delete this section

- `Server Side Rendering`
    - [greater perceived performance](https://medium.com/walmartlabs/the-benefits-of-server-side-rendering-over-client-side-rendering-5d07ff2cefe8) + [SEO](https://adkgroup.com/blog/single-page-applications-spa-and-seo-problem/)

    - `SPA` (or `CSR`) are not made for content sites

    - it's a public "app", no need to obfuscate any route


- `Markdown` + `front-matter` + `react-components` for content

    - no database, no backend server (host on FAC is a huge mess)

    - all the content will be stored in simple, plain text, so future-proof (this is a real demand, since every other approach got loss of data)

    - the content will also live inside this repo (open-source + history of changes + backup)

    - we can create react-components to enhance and make editor's life and capabilities.

    - don't worry, we will definately have a `CMS`, and it's a game-changing and open source one!


---


### Development

*easy as 1, 2, 3*

1. `yarn`
1. `yarn dev`
1. running on [localhost:3000](http://localhost:3000)

### Export the static version

*don't bother with that, it's all on netlify's hands*

- Run `yarn export`
- contents will be on `/www`

---

## Roadmap

- [x] :pencil: [netlify-cms](https://www.netlifycms.org/)
- [x] :bookmark_tabs: post pagination
- [x] :camera: post header image
- [x] :mag_right: fuzzy search (performance concerns: maybe other approach or remove it on future)
- [ ] :bookmark: tag filter (maybe via [formik](https://github.com/jaredpalmer/formik))
- [ ] :lipstick: decent styling (let's do a [figma](https://http://figma.com/))
- [ ] :notebook_with_decorative_cover: [`storybook`](https://github.com/storybooks/storybook)


---

## Tech stack

- [`next.js`](https://github.com/zeit/next.js): `SSR` + `Routing` for React projects
- [`nextein`](https://github.com/elmasse/nextein): `next.js` + `markdown` with `front-matter` & React components
- [`styled-components`](https://github.com/styled-components): for styling more easily and directly on component
- [`netlify-cms`](https://www.netlifycms.org/): open-source *serverless* git-integrated user-friendly CMS (and it's a react app too)

---

##### Support

[Vitor Dino](https://github.com/vitordino/)

[kunst](https://kunst.com.br)



[www-badge]: https://img.shields.io/badge/netlify-online-brightgreen.svg
[www-url]: https://campus.netlify.com
[admin-badge]: https://img.shields.io/badge/❖-cms-00C7B7.svg?colorA=00C7B7
[admin-url]: https://campus.netlify.com/static/admin
