import prisma from "@/utils/db"

export async function GET() {
    const response = await fetch('https://api.vercel.app/blog');
    const blogs = await response.json();
    return Response.json(blogs)
    
    
}