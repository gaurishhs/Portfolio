export interface SpotifyNowPlayingData {
    isPlaying: boolean
    songUrl?: string
    title?: string
    artist?: string
    album?: string
    albumImageUrl?: string
}

export interface SEOProps {
    title: string
    description?: string
}

export interface BlogPost {
    title: string;
    description: string;
    cover_image: string;
    readable_publish_date: string;
    public_reactions_count: number;
    url: string;
}

export interface Project {
    title: string;
    description: string;
    githubURL?: string;
    url?: string;
    technologies?: string[];
}

export interface Skill {
    name: string;
    progress: string;
    image: string;
}
