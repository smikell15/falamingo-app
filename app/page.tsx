"use client"
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function Home() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (session) router.push("/dashboard")
  }, [session, router])

  if (status === "loading") return <p className="p-8">Loading...</p>

  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-3xl font-semibold">🎵 FaLaMingo Group</h1>
      <p className="text-gray-500">Members only. Sign in with your Google account.</p>
      <button
        onClick={() => signIn("google")}
        className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
      >
        Sign in with Google
      </button>
    </main>
  )
}