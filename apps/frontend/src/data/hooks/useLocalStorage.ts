'use client'
import { useCallback } from 'react'

export default function useLocalStorage() {
    const get = useCallback((key: string) => {
        const valueLocal = window?.localStorage?.getItem(key)
        return valueLocal ? JSON.parse(valueLocal) : null
    }, [])

    const set = useCallback((key: string, value: any) => {
        window?.localStorage?.setItem(key, JSON.stringify(value))
    }, [])

    const remove = useCallback((key: string) => {
        window?.localStorage?.removeItem(key)
    },[])

    return { get, set, remove }
}
