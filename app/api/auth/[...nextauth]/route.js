//set up our google auth provider
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { connectToDB } from "@utils/database";

import User from '@models/user';
import { connectToDB } from '@utils/database';
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
      try {
        //serverless route - it only run when it is called
        await connectToDB();

        //check if user exists

        //if not, create user
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    }
    })

    //this is how Next does it
    export default { handler as GET, handler as POST};

