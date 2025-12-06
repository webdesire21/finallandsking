import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { connectDB } from "../../../../lib/mongodb";
import AdminUser from "../../../../models/AdminUser";


const handler = NextAuth({
  session: {
    strategy: "jwt",
  },

  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials: any) {
        await connectDB();

        const user = await AdminUser.findOne({ email: credentials.email });

        if (!user) return null;

        const isValid = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (!isValid) return null;

        return { id: user._id, email: user.email };
      },
    }),
  ],

  pages: {
    signIn: "/admin/login",
  },

  secret: process.env.AUTH_SECRET,
});

export { handler as GET, handler as POST };



