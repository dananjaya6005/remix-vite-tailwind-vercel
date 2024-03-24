import type { LoaderFunction } from "@remix-run/node";
import {getPosts} from '~/models/post.server';


export const loader: LoaderFunction = async () => {
  const posts = await getPosts();


  const postList = posts.map(
    (post) => `<url>
  <loc>https://localhost:5173/blog/${post.id}</loc>
  <lastmod>${""}</lastmod>
  </url>`
  );




  const content = ` 
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
      <loc>https://localhost:5173/</loc>
      <lastmod>2022-11-12T16:43:34.833Z</lastmod>
      </url>
      <url>
      <loc>https://localhost:5173/myroute</loc>
      <lastmod>${""}</lastmod>
      </url>
      ${postList.join("")}
    

      <url>
      <loc>https://localhost:5173/cv</loc>
      <lastmod>2023-10-23T16:43:34.833Z</lastmod>
      </url>
      </urlset>
      `;

  return new Response(content, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
      "xml-version": "1.0",
      encoding: "UTF-8",
    },
  });
};
