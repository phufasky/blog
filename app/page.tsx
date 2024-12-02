import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-200 text-gray-800">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-indigo-600">Sky Article</h1>
        <p className="text-lg mt-2 text-gray-600">
          Lastest Article and News!
        </p>
      </header>

      <main className="space-y-6">
        <Link
          href="/blog-ui/login"
          className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition"
        >
          Login
        </Link>
        <Link
          href="/blog-ui/register"
          className="px-6 py-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition"
        >
          Register
        </Link>
      </main>

    </div>
  );
}
