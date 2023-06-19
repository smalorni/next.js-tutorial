//set up our google auth provider
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { signIn } from "next-auth/react";

const handler = NextAuth({
    // console.cloud.google.com
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
    ],
    async session({ session}) {
    
    },

    async signIn({ profile }) {
    }
    })

    //this is how Next does it
    // export default { handler as GET, handler as POST};
    export default function handler(req, res) {
        if (req.method === 'POST') {
          // Process a POST request
        } else {
          // Handle any other HTTP method
        }
      }