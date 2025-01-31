'use client'
import { User } from '@barber/core'
import { useRouter } from 'next/navigation'
import { createContext, useCallback, useEffect, useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

export interface ContextUserProps {
    loading: boolean
    user: User | null
    login: (user: User) => Promise<void>
    logout: () => void
}

const ContextUser = createContext<ContextUserProps>({} as any)

export function UserProvider({ children }: any) {
    const { get, set } = useLocalStorage()
    const router = useRouter()
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState<User | null>(null)

    const carregarUser = useCallback(
        function () {
            try {
                const userLocal = get('user')
                if (userLocal) {
                    setUser(userLocal)
                }
            } finally {
                setLoading(false)
            }
        },
        [get]
    )

    async function login(user: User) {
        setUser(user)
        set('user', user)
    }

    function logout() {
        router.push('/')
        setUser(null)
        set('user', null)
    }

    useEffect(() => carregarUser(), [carregarUser])

    return (
        <ContextUser.Provider
            value={{
                loading,
                user,
                login,
                logout,
            }}
        >
            {children}
        </ContextUser.Provider>
    )
}

export default ContextUser
