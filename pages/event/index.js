import { useRouter } from "next/router";
import { useState } from "react";

const Events = ({ events }) => {
    const [data, setData] = useState(events)
    const router = useRouter()

    const handleClick = async(category) => {
        const res = await fetch(`http://localhost:4040/events?category=${category}`)
        const events = await res.json();
        setData(events)
        router.push(`/event?category=${category}`, undefined, {shallow: true})
    }

  return (
    <div>
        <h1>Events list</h1>
        <button onClick={() => handleClick("sports")}>filter sports</button>
        <button onClick={() => handleClick("foods")}>filter foods</button>
        {
            data.map(event =>(
                <div key={event.id}>
                    <h2>{event.id} - {event.title} - {event.data} | {event.category}</h2>
                    <p> {event.description}</p><hr />
                </div>
            ))
        }
    </div>
  )
}

export async function getServerSideProps(context) {
    const { query } = context
    const { category } = query
    const categoryString = category ? `category=${category}` : ""

    const res = await fetch(`http://localhost:4040/events?${categoryString}`)
    const events = await res.json();

    return {
        props:{
            events
        }
    }
}

export default Events