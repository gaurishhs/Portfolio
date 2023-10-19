import { getViews, increment } from '@/app/turso';
import { type NextRequest, NextResponse } from 'next/server'

interface Options {
    params: {
        slug: string;
    }
}

export const GET = async (req: NextRequest, { params }: Options) => {
    return NextResponse.json({
        views: await getViews(params.slug)
    })
};

export const POST = async (req: NextRequest, { params }: Options) => {
    return NextResponse.json({
        views: await increment(params.slug)
    })
};