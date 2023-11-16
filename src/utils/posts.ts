import { getCollection } from "astro:content";

export const getPosts = async () => {
    return (await getCollection("blog")).sort(
        (a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
    );
}