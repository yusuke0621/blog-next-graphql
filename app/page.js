import Image from "next/image";
import { GraphQLClient, gql } from "graphql-request";
import styles from "../styles/Home.modules.css"; // 必要に応じてスタイルファイルを追加
import BlogCard from "../components/BlogCard";

const graphcms = new GraphQLClient(
  "https://us-west-2.cdn.hygraph.com/content/cm4u94wj700jz07vy8v216bmc/master"
);

const QUERY = gql`
  {
    posts {
      id
      title
      datePublish
      slug
      content
    }
    author(where: { id: "cm4vcamznrjh907n4eymqykvd" }) {
      name
      avater {
        url
      }
    }
  }
`;
// class="grid grid-cols-2 gap-[90px]" graphpaperのスタイル
export default async function Home() {
  // データを取得
  const data = await graphcms.request(QUERY);
  const { posts, author } = data;

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div class="text-[1.8rem]">
          <h2>Next.jsとGraphQLブログ</h2>
        </div>
        {/* 投稿リストのレンダリング */}
        <div>
          {posts.map((post) => (
            //
            <BlogCard />
          ))}
        </div>
        {/* 著者情報のレンダリング */}
        {/* <div className="author">
          <h4>Author: {author.name}</h4>
          {author.avater?.url && (
            <Image
              src={author.avater.url}
              alt={author.name}
              width={100}
              height={100}
            />
          )}
        </div> */}
      </main>
    </div>
  );
}
