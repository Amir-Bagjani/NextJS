import { useRouter } from "next/router"
const ReviewDetail = () => {
    const router = useRouter()
    const { postId, reviewId } = router.query
  return (
    <h2>this is ReviewDetail page ={'>'} id = {postId} & reviewId={reviewId}</h2>
  )
}

export default ReviewDetail