import NextAuth from 'next-auth'
import FacebookProvider from 'next-auth/providers/facebook'
import dotenv from "dotenv";

dotenv.config();

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID!,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
    }),
    // ...add more providers here
  ],
})
