import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      // Allowlist: only these emails can log in
      const allowedEmails = [
        "stephon.mikell@gmail.com",
        "pinball1106@gmx.com",
        // add all ~10 members here
      ]
      return allowedEmails.includes(user.email ?? "")
    },
  },
})

export { handler as GET, handler as POST }