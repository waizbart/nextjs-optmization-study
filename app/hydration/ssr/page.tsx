import { getRandomUser } from "@/lib/actions/randomuser";
import HydrationUI from "./ui";
import { getComments } from "@/lib/actions/comments";

// export const revalidate = 60;

// export const dynamic = "force-dynamic"

export default async function HydrationPage() {
    const randomUser = await getRandomUser();
    const comments = await getComments();
    
    /* const randomUserPromise = getRandomUser();
    const commentsPromise = getComments();
    const [randomUser, comments] = await Promise.all([randomUserPromise, commentsPromise]); */
   
    return <HydrationUI userData={randomUser} comments={comments} />;
}