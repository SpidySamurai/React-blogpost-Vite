import React from "react";
import { Link, Outlet } from "react-router-dom";
import { blogdata } from "../utils/blogData";

const BlogPage = () => {
  return (
    <>
      <h1>Blog</h1>

      <Outlet />

      <ul>
        {blogdata.map((post) => (
          <BlogLink key={post.slug} post={post} />
        ))}
      </ul>
    </>
  );
};

function BlogLink({ post }) {
  return (
    <li>
      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
    </li>
  );
}

export default BlogPage;
