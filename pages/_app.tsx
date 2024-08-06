
import { AuthProvider } from '@/context/authContext'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from "react-redux"
import { store } from '@/redux/store'
import { SocketProvider } from '@/context/socketContext'
import { useEffect } from 'react'
import React from "react";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <SocketProvider>
        <AuthProvider>
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </AuthProvider>
      </SocketProvider>
  )
}
