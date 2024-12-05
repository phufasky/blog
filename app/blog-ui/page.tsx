import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import prisma from "@/utils/db";
import Link from "next/link";
import Nav from "./_component/Nav";
import { getSession } from "@/utils/loginUser";
import DeleteButton from "./_component/DeleteButton";
import deletePost from "../blog/_actions/deletePost"; 
import LikeButton from "../blog/_component/LikeButton";

export default async function BlogUI() {
    const posts = await prisma.post.findMany({
        include: {
            user: true,
        },
    });

    const user = await getSession();
    console.log(user ? user.role : "No user logged in");

    return (
        <>
            <Nav />

            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mt-8 mb-4 text-center">Blog UI</h1>
                
                {/* Posts container */}
                <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
                    {posts.map((post) => (
                        <Card
                            key={post.id}
                            className="w-full sm:w-[300px] md:w-[400px] bg-white shadow-md border border-gray-200 rounded-lg p-4"
                        >
                            <CardHeader>
                                <CardTitle className="flex justify-between items-center text-lg font-semibold">
                                    <span>{post.subject}</span>
                                    {user && user.role === "admin" && (
                                        <div className="text-sm text-blue-600">
                                            <Link
                                                href={{
                                                    pathname: "/blog/edit",
                                                    query: { id: post.id, subject: post.subject, detail: post.detail },
                                                }}
                                                className="mr-2 hover:underline"
                                            >
                                                Edit
                                            </Link>
                                            <DeleteButton id={post.id} deletePost={deletePost} />
                                        </div>
                                    )}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="mt-2 text-sm text-gray-700">
                                <p>{post.detail}</p>
                            </CardContent>
                            <CardFooter className="mt-4 flex justify-between items-center text-sm">
                                <span className="text-gray-600">By: {post.user.name}</span>
                                <LikeButton postId={post.id} likeScore={post.like} />
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </>
    );
}
