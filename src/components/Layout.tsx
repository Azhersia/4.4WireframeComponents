import React from 'react'
import Header from './Header'
import Footer from './Footer'
import './Layout.css'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Header />

      {children}

      <Footer />
    </div>
  )
}
