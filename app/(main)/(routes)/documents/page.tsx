'use client'

import { Button } from '@/components/ui/button'
import { api } from '@/convex/_generated/api'
import { useUser } from '@clerk/clerk-react'
import { PlusCircle } from 'lucide-react'
import { useMutation } from 'convex/react'
import Image from 'next/image'
import React from 'react'
import { toast } from 'sonner'

const DocumentsPage = () => {
  const { user } = useUser()
  const create = useMutation(api.documents.create)

  const onCreate = () => {
    const promise = create({ title: '' })

    toast.promise(promise, {
      loading: 'Creating a new note...',
      success: 'New note created!',
      error: 'Could not create a new note.',
    })
  }

  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <Image
        className="dark:hidden"
        src="/empty.png"
        width={300}
        height={300}
        alt="empty"
      />
      <Image
        className="hidden dark:blok"
        src="/empty-dark.png"
        width={300}
        height={300}
        alt="empty"
      />
      <h2 className="text-lg font-medium">
        Welcome to {user?.firstName}&apos;s Notion
      </h2>
      <Button onClick={onCreate}>
        <PlusCircle className="h-4 w-4 mr-2" />
        Create a note
      </Button>
    </div>
  )
}

export default DocumentsPage
