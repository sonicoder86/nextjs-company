import { db } from '@/db'
import { notFound } from 'next/navigation'
import SnippetEditForm from '@/components/snippet-edit-form'

interface SnippetEditPageProps {
  params: {
    id: string
  }
}

export default async function SnippetEditPage(props: SnippetEditPageProps) {
  const id = Number(props.params.id )
  const snippet = await db.snippet.findFirst({
    where: { id }
  })

  if (!snippet) {
    return notFound()
  }

  return (
    <div className="container mx-auto px-12 pt-48">
      <h1>Editing {snippet.title}</h1>
      <SnippetEditForm snippet={snippet} />
    </div>
  )
}