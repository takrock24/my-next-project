import { News } from "@/app/_libs/microcms";
import Image from "next/image";
import Link from "next/link";
import Category from "../Category";
import Date from "../Date";
import styles from "./index.module.css";

type Props = {
    news: News[];
};

export default function NewsList({ news }: Props) {
    if (news.length == 0) {
        return <p>記事がありません。</p>
    }
    return (
        <ul>
            {news.map((article) => (
                <li key={article.id} className={styles.list}>
                    <Link href={`/news/${article.id}`} className={styles.list}>
                        <Image
                        className={styles.image}
                        src="/no-image.png"
                        alt="No image"
                        width={1200}
                        height={630}
                        />
                    <dl className={styles.content}>
                        <dt className={styles.title}>{article.title}</dt>
                        <dd className={styles.meta}>
                            <Category category={article.category} />
                            <Date date={article.publishedAt ?? article.createdAt} />
                        </dd>
                    </dl>
                    </Link>
                </li>
            ))}
        </ul>
    );
}