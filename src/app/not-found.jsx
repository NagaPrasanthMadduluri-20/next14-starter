import Link from "next/link"

const NotFound = () => {
  return (
    <div>
    <h2>Page NotFound</h2>
    <p>Page your are searching does not Exist</p>
    <Link href="/"> Return to Homepage</Link>
    </div>
  )
}

export default NotFound