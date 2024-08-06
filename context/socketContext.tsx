import React,{createContext, useContext, useEffect} from 'react'
import { getTokenLocalStorage, setTokenLocalStorage } from '@/Provider/localStorage'
import { useRouter } from 'next/router'
import { IUser } from '@/model/user'
import { Socket,io } from 'socket.io-client'
import { useAuth } from './authContext'

type SocketContextType = Socket | undefined

const SocketContext = createContext<SocketContextType>(undefined)

interface SocketProviderProps {
    children: React.ReactNode
}

export const useSocket = (): SocketContextType => {
    return useContext(SocketContext)
}

export const SocketProvider: React.FC<SocketProviderProps> = ({ children }) => {
    const { user } = useAuth()
    const socket = io('http://localhost:5001')
    // useEffect (() => {
    //     user?._id && socket.emit('addUser', user)
    //     return () => {
    //         socket.disconnect()
    //     }
    // }, [socket, user])
    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    )
}

