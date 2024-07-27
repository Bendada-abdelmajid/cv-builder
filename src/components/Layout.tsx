"use client";
import { ClerkProvider } from '@clerk/nextjs'
import React from 'react'

type Props = {
    children: React.ReactNode
}

function Layout({children}: Props) {
  return (
    <ClerkProvider>
        {children}
    </ClerkProvider>
  )
}

export default Layout