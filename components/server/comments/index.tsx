import { getComments } from "@/lib/actions/comments";
import Comments from "@/components/comments";

export default async function ServerComments() {
    const comments = await getComments();
    
    return <Comments comments={comments} />;
}