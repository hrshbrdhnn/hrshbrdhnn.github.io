import { allPosts } from 'contentlayer/generated';

export default async function sitemap() {
    const blogs = allPosts.map((post) => ({
        url: `https://www.hrshbrdhnn.in${post.slug}`,
        lastModified: post.publishedAt,
    }));

    const routes = ['', '/post'].map(
        (route) => ({
            url: `https://www.hrshbrdhnn.in${route}`,
            lastModified: new Date().toISOString().split('T')[0],
        })
    );

    return [...routes, ...blogs];
}