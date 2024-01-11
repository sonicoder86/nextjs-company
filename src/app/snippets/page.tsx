import Link from 'next/link'
import { db } from '@/db'

export default async function SnippetsPage() {
  const snippets = await db.snippet.findMany()

  const renderedSnippets = snippets.map((snippet) => {
    return (
      <Link href={`/snippets/${snippet.id}`} key={snippet.id} className="flex justify-between items-center p-2 border rounded">
        <div>{snippet.title }</div>
        <div>View</div>
      </Link>
    )
  })

  return (
    <div className="container mx-auto px-12 pt-48">
      <div className="flex m-2 justify-between items-center ">
        <h1 className="text-xl font-bold">Snippets</h1>
        <Link href="/snippets/new" className="border p-2 rounded">New</Link>
      </div>
      <div className="flex flex-col gap-2">
        {renderedSnippets}
      </div>

    </div>
  )
}