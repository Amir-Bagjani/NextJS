import style from "../styles/About.module.css";
import { getSession } from "next-auth/react";


const blog2 = () => {
  return (
    <main className={style.main}>
        <h1>This is secure blog page</h1>
    </main>
  )
}
export async function getServerSideProps(context){
    const session = await getSession(context)

    if(!session){
        return{
            redirect: {
                destination: '/api/auth/signin?callbackUrl=http://localhost:3000/blog2',
                // destination: `/api/auth/signin?callbackUrl=${process.env.NEXT_PUBLIC_BASE_URL}/blog2`,
                permanent: false
            }
        }
    }

    return {
        props: {
            session
        }
    }
}
export default blog2