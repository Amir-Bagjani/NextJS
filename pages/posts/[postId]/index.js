import { useRouter } from "next/router"
const PostDetail = () => {
    const router = useRouter()
    const { postId } = router.query
  return (
    <h1>this is PostDetail {postId}</h1>
  )
}

export default PostDetail