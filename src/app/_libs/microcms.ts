import {
    createClient,
    MicroCMSQueries,
    type MicroCMSImage,
    type MicroCMSListContent
} from "microcms-js-sdk";

export type Member = {
    name: string;
    position: string;
    profile: string;
    image: MicroCMSImage;
} & MicroCMSListContent;

export type News = {
    id: string;
    title: string;
    category: {
        name: string;
    };
    publishedAt: string;
    createdAt: string;
};

export type Category = {
    name: string;
}

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
    throw new Error("MICRO_SERVICE_DOMAIN is required");
}

if (!process.env.MICROCMS_API_KEY) {
    throw new Error("MICROCMS_API_KEY is required");
}

const client = createClient({
    serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
    apiKey: process.env.MICROCMS_API_KEY,
});

export const getMembersList = async (queries?: MicroCMSQueries) => {
    const listData = await client
    .getList<Member>({
        endpoint: "members",
        queries,
    });
    return listData;
}