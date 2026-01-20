'use client';

import Sidebar from '@/components/sidebar';
import Comments from '@/components/comments';

export default function HydrationUI(
    {
        userData,
        comments,
    }: {
        userData: {
            name: string;
            email: string;
            avatar: string;
        };
        comments: Array<{
            id: number;
            body: string;
            postId: number;
            user: {
                id: number;
                username: string;
            };
        }>;
    }
) {
    return (
        <main className="flex flex-row justify-center h-screen">
            <Sidebar
                name={userData.name}
                email={userData.email}
                avatar={userData.avatar}
            />

            <div className="w-3/4 p-4 justify-between h-full flex flex-col">
                <div className="flex flex-col gap-4">
                    <h1 className="text-2xl font-bold">Welcome to the Blog</h1>
                    <article>
                        <h2 className="text-xl font-bold">Main Article</h2>
                        <p>Content of the main article...</p>
                    </article>
                </div>

                <Comments comments={comments} />
            </div>
        </main>
    );
};