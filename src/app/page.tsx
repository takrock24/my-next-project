import Image from "next/image";
import ButtonLink from "./_components/ButtonLink";
import NewsList from "./_components/NewsList";
import { TOP_NEWS_LIMIT } from "./_constants";
import { getNewsList } from "./_libs/microcms";
import styles from "./page.module.css";

export default async function Home() {
  const data = await getNewsList({
    limit: TOP_NEWS_LIMIT
  })
  const name = "世界";
  return (
    <>
      <section className={styles.top}>
        <div>
          <h1 className={styles.title}>テクノロジーの力で{name}を変える</h1>
          <p className={styles.description}>私たちは市場をリードしているテックカンパニーです。</p>
        </div>
        <Image
          className={styles.bgimg}
          src="/img-mv.jpg"
          alt=""
          width={4000}
          height={1200}
        />
    </section>
    <section className={styles.news}>
      <h2 className={styles.newsTitle}>News</h2>
      <NewsList news={data.contents} />
      <div className={styles.newsLink}>
        <ButtonLink href="/news">もっと見る</ButtonLink>
      </div>
    </section>
    </>
  );
}