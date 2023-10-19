'use client'
 
import { useEffect, useRef } from 'react'
import useSWR from 'swr'
import { PostView } from './types'

export const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function ViewCounter({ slug }: { slug?: string }) {
	const { data } = useSWR<PostView>(`/api/views/${slug}`, fetcher, {
        refreshInterval: 5000,
    })
	const views = new Number(data?.views || 0);
    const viewLogged = useRef(false);
 
	useEffect(() => {
        if (!slug || viewLogged.current) return;
		fetch(`/api/views/${slug}`, {
            method: 'POST',
        }).catch(console.error)
        viewLogged.current = true;
	}, [slug])
 
	return (
		<span className="font-mono text-sm tracking-tighter">
			{views.toLocaleString()} {views === 1 ? 'view' : 'views'}
		</span>
	)
}
