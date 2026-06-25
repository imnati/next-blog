import axios from "axios";
import Link from "next/link";

export default async function PostPage({ params }) {
  const { id } = await params;

  const response = await axios.get(`https://dummyjson.com/posts/${id}`);

  const post = response.data;

  return (
    <article className="mx-auto max-w-3xl space-y-6">
      <Link href="/posts" className="text-blue-600 hover:underline">
        ← Back to Posts
      </Link>

      <h1 className="text-4xl font-bold">{post.title}</h1>

      <p className="leading-8 text-zinc-700">{post.body}</p>

      <div className="flex gap-2">
        {post.tags?.map((tag) => (
          <span key={tag} className="rounded bg-zinc-200 px-3 py-1 text-sm">
            #{tag}
          </span>
        ))}
      </div>

      <p className="text-sm text-zinc-500">
        👍 {post.reactions?.likes ?? 0} Likes
      </p>
    </article>
  );
}
