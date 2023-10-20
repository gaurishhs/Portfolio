import { createClient } from '@libsql/client'
import posts from './blog/posts.json';
 
const connection = createClient({
	url: process.env.DATABASE_URL || '',
	authToken: process.env.DATABASE_AUTH_TOKEN,
})

const slugExists = async (slug: string) => {
    posts.some((post) => post.id === slug)
}

export const getViews = async (slug: string) => {
    // sql injection protection 😭
    if (!slugExists(slug)) return;
    const views = await connection.execute({
        sql: 'SELECT count FROM views WHERE slug = ?',
        args: [slug]
    })
    // Make sure result is int
    return Number(views.rows[0].count) || 0;
}

export const increment = async (slug: string) => {
    // sql injection protection 😭
    if (!slugExists(slug)) return;
    const views = await connection.execute({
        sql: 'UPDATE views SET count = count + 1 WHERE slug = ? RETURNING count',
        args: [slug]
    })
    return views.rows[0].count || 0;
}