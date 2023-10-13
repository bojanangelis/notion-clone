'use client'
import { SignInButton, SignUpButton, UserButton } from '@clerk/clerk-react'
import { ModeToggle } from '@/components/mode-toggle'
import { useScrollTop } from '@/hooks/use-scroll-top'
import { useConvexAuth } from 'convex/react'
import { Button } from '@/components/ui/button'
import { Spinner } from '@/components/spinner'
import { cn } from '@/lib/utils'
import React from 'react'
import Logo from './logo'
import Link from 'next/link'

const Navbar = () => {
  const { isAuthenticated, isLoading } = useConvexAuth()

  const scroll = useScrollTop()

  return (
    <div
      className={cn(
        'z-50 bg-background dark:bg-[#1F1F1F] fixed top-0 flex items-center w-full p-6',
        scroll && 'border-b shadow-sm',
      )}
    >
      <Logo />
      <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
        {isLoading && <Spinner />}
        {!isAuthenticated && !isLoading && (
          <>
            <SignInButton mode="modal">
              <Button variant={'ghost'} size={'sm'}>
                Log in
              </Button>
            </SignInButton>
            <SignUpButton mode="modal">
              <Button size={'sm'}>Get Notion free</Button>
            </SignUpButton>
          </>
        )}
        {isAuthenticated && !isLoading && (
          <>
            <Button variant={'ghost'} size={'sm'}>
              <Link href="/documents">Enter Notion</Link>
            </Button>
            <UserButton afterSignOutUrl="/" />
          </>
        )}
        <ModeToggle />
      </div>
    </div>
  )
}

export default Navbar
