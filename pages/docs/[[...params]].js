import { useRouter } from "next/router"
const Docs = () => {
    const router = useRouter();
    const { params = [] } = router.query
    console.log(params);

    if(params.length === 3){
        return <h2>this is {params[2]} for  {params[1]} for  {params[0]}</h2>
    }else if(params.length === 2){
        return <h2>this is {params[1]} for  {params[0]} </h2>
    }else if(params.length === 1){
        return <h2>this is {params[0]} </h2>
    }


  return (
    <h1>this is Docs page</h1>
  )
}

export default Docs