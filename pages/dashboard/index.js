import useSWR from 'swr'

const fetcher = async() => {
    const res = await fetch('http://localhost:4040/dashboards')
    const data = await res.json()
    return data
}

const Dashboard = () => {
    const { data, error } = useSWR('dashboard', fetcher)
    if(error) return <h2>error</h2>
    if(!data) return <h2>Loading...</h2>
  return (
    <div>
        <h2>Dashbaord</h2>
        <h2>posts = {data.posts}</h2>
        <h2>likes = {data.likes}</h2>
        <h2>followers = {data.followers}</h2>
        <h2>following = {data.following}</h2>
      
    </div>
  )
}



export default Dashboard