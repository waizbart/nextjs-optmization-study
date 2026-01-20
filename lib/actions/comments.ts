export async function getComments(): Promise<{
    id: number;
    body: string;
    postId: number;
    user: {
        id: number;
        username: string;
    };
}[]
> {
    const data = await fetch('https://dummyjson.com/comments').then(res => res.json());
    return data.comments
        .sort(() => Math.random() - 0.5)
        .slice(0, 5);
}