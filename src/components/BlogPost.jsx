import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { blogdata } from "../utils/blogData";
import { useAuth } from "../utils/auth";

function BlogPost() {
  const navigate = useNavigate();
  const { slug } = useParams();

  const auth = useAuth();

  const blogpost = blogdata.find((post) => post.slug === slug);

  const canDelete =
    auth.user?.isAdmin || auth.user?.username === blogpost.author;

  const returnToBlog = () => {
    navigate("/blog");
  };

  return (
    <>
      <h2>{blogpost.title}</h2>
      <p>{blogpost.author}</p>
      <p>{blogpost.content}</p>
      <button onClick={returnToBlog}>Back to blog</button>

      {canDelete && <button>Eliminar blogpost</button>}
    </>
  );
}

export default BlogPost;
