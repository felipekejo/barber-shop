'use client'
import { UserProvider } from '@/data/contexts/ContextUser'

export default function Layout({ children }: any) {
    return <UserProvider>{children}</UserProvider>
}
