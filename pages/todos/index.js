import Link from "next/link";


const Todos = ({todos}) => {
  return (
    <div>
        <h1>Todos list</h1>
        {todos?.map((todo) =>(
            <div key={todo.id}>
                <Link href={`todos/${todo.id}`}>
                    <a>{todo.title}</a>
                </Link> - 
                {todo.price}
                <hr />
            </div>
        ))}
    </div>
  )
}

export async function getStaticProps() {
    const res = await fetch("http://localhost:4040/todos");
    const todos = await res.json();

    return {
        props: {
            todos
        },
        revalidate: 5,
    }
}

export default Todos