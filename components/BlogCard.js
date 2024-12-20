import React from "react";
import Link from "next/link";
import styles from "../styles/BlogCard.module.css";

const BlogCard = (post, author) => {
  console.log(post);
  return (
    <div>
      <Link href={`/posts/${post.slug}`}>
        <div className={styles.imgContainer}>
          <img src={post.photo.url} alt="" />
          aa
        </div>
      </Link>
      <div className={styles.text}>
        <h2>{post.title}</h2>
        <div className={styles.detail}>
          <div className={styles.author}>
            {/* <img src={author.avator.url} alt="" />
            <h3>{author.name}</h3> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
