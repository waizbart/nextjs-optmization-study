import { getRandomUser } from "@/lib/actions/randomuser";
import HydrationUI from "./ui";
import { getComments } from "@/lib/actions/comments";

export default async function HydrationPage() {
    const randomUser = await getRandomUser();
    const comments = await getComments();
    
    return <HydrationUI userData={randomUser} comments={comments} />;
}