"use server"

import prisma from "@/utils/db"
import { revalidatePath } from "next/cache"

export default async function updateLikeScore(postId: number) {
    {
        const post = await prisma.post.update({
            where: { id: postId },
            data: {
                like: {
                    increment: 1
                }
            }
        })
        revalidatePath("/blog")
    }
}