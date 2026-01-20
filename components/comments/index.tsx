export default function Comments({ comments }: { comments: Array<{ id: number; body: string; postId: number; user: { id: number; username: string; } }> }) {
    return (
        <div className="text-2xl font-bold text-blue-500">
            <h2 className="text-xl font-bold">Comments</h2>
            <ul>
                {comments.map((comment) => (
                    <li key={comment.id} className="border-b border-gray-300 p-2">
                        <p className="text-lg font-bold">{comment.user.username}</p>
                        <p className="text-sm text-gray-500">{comment.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}