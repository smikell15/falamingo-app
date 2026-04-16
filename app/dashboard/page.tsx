import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

export default async function Dashboard() {
  const session = await getServerSession()

  if (!session) {
    redirect("/")
  }

  return (
    <main className="p-8">
      <h1 className="text-2xl font-semibold">Welcome, {session.user?.name}</h1>
      <p className="text-gray-500 mt-2">You're in. More features coming soon.</p>
    </main>
  )
}