import prisma from "@/utils/db"
// const prisma = require("./utils/db")
import hashPassword from "./hashPassword"
// const hashPassword = require("./hashPassword")

export default async function seed() {

    const response = await fetch('https://api.vercel.app/blog');
    const blogs = await response.json();

    const password = await hashPassword('password')

    const user = await prisma.user.create({
        data: {
            email: 'warodom@prisma.io',
            name: 'admin',
            password: 'admin',
            role: 'admin',
            posts:{
                create: blogs.map((post:any) => ({
                    subject: post.title || 'Untitled', // Provide fallback for missing fields
                    detail: post.content || 'No content available',
                  })),
            }
        }
    })

    const posts = await prisma.user.create({
        data: {
            email: 'ariadne@prisma.io',
            name: 'Ariadne',
            password,
            posts: {
                create: [
                    {
                        subject: 'Subject',
                        detail: 'Lorem ipsum dol epturi! Fugit numquam, veritatis cumque nobis minima at. Deserunt, vel eum!'
                    },
                    {
                        subject: 'Subject 2',
                        detail: 'Lorem ipsum dol epturi! Fugit numquam, veritatis cumque nobis minima at. Deserunt 2',
                    },
                ],
            },
        },
    })
    console.log(user)
    console.log(posts)
}

export async function seedPost() {
    const newPost = await prisma.post.create({
        data: {
            subject: 'New Subject',
            detail: 'Lorem ipsum dol epturi! Fugit numquam, veritatis cumque nobis minima at. Deserunt, vel eum!',
            userId: 1,  // Assuming a user with ID 1 exists
        },
    }) 
 
console.log(newPost)
}

