import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import clientPromise from "../../../lib/mongodb"

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
  // database: process.env.MONGODB_URI,
  session: {
    jwt: true
  },
  jwt: {
    secret: 'dfswerxcvaassa'
  },
  callbacks: {
    async jwt(token, user) {
      if(user) token.id = user.id
      return token
    },
    async session(session, token) {
      session.user.id = token.id
      return session
    },
  }
})