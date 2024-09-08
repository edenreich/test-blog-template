import Link from 'next/link'
import { slug } from 'github-slugger'

interface TagProps {
  text: string
}

const Tag = ({ text }: TagProps) => {
  return (
    <Link
      href={`/tags/${slug(text)}`}
      className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300"
    >
      #{text}
    </Link>
  )
}

export default Tag
