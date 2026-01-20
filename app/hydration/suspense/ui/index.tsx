import Spinner from '@/components/spinner';
import { Suspense } from 'react';
import ServerSidebar from '@/components/server/sidebar';
import ServerComments from '@/components/server/comments';

export default function HydrationUI() {
    return (
        <main className="flex flex-row justify-center h-screen">
            <Suspense fallback={<Spinner />}>
                <ServerSidebar />
            </Suspense>

            <div className="w-3/4 p-4 justify-between h-full flex flex-col">
                <div className="flex flex-col gap-4">
                    <h1 className="text-2xl font-bold">Welcome to the Blog</h1>
                    <article>
                        <h2 className="text-xl font-bold">Main Article</h2>
                        <p>Content of the main article...</p>
                    </article>
                </div>

                <Suspense fallback={<Spinner />}>
                    <ServerComments />
                </Suspense>
            </div>
        </main>
    );
};