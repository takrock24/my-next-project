import NewsList from "@/app/_components/NewsList";
import SearchField from "@/app/_components/SearchField";
import { NEWS_LIST_LIMIT } from "@/app/_constants";
import { getNewsList } from "@/app/_libs/microcms";

type Props = {
    seachParams: {
        q?: string;
    };
};

export default async function Page({ seachParams}: Props) {
    const { contents: news } = await getNewsList({
        limit: NEWS_LIST_LIMIT,
        q: seachParams.q,
    });

    return (
        <>
            <SearchField />
            <NewsList news={news} />
        </>
    );
}