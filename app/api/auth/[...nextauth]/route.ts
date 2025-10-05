import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { NextResponse } from 'next/server'

export const authOptions = {
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        const demoEmail = process.env.DEMO_EMAIL || 'demo@saas.dev'
        const demoPass = process.env.DEMO_PASSWORD || 'demo1234'
        if (credentials?.email === demoEmail && credentials?.password === demoPass) {
          return { id: 'user_demo', name: 'Demo User', email: demoEmail }
        }
        return null
      }
    })
  ],
  session: { strategy: 'jwt' as const },
  pages: {
    signIn: '/auth/login'
  }
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
