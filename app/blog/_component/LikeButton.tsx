"use client"

import { useTransition } from "react"
import updateLikeScore from "../_actions/likeScore"

export default function LikeButton({ postId, likeScore }: { postId: number, likeScore: number }) {
    const [isPending, startTransition] = useTransition()

    return (
        <button
            className="text-blue-500 hover:text-blue-700 disabled:text-gray-400"
            onClick={() => startTransition(() => updateLikeScore(postId))}
            disabled={isPending}
        >
            Like: {likeScore}
        </button>
    )
}