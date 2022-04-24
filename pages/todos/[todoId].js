import React from 'react'

const TodoDetail = ({todo}) => {
  return (
    <h1>
        {todo.id} - {todo.title} - {todo.completed ? "completed" : "not-completed"}
        <br />
        {todo.price}
    </h1>
  )
}

export async function getStaticPaths() {
    const res = await fetch("http://localhost:4040/todos" );
    const todos = await res.json();

    const paths = todos.map(todo => {
        return {
            params: {todoId: `${todo.id}`}
        }
    })

    return {
        paths,
        fallback: "blocking"
    }
}
export async function getStaticProps(context) {
    const { params } = context
    const res = await fetch("http://localhost:4040/todos/" + params.todoId);
    const todo = await res.json();

    if(!todo.id){
        return{
            notFound: true
        }
    }

    return {
        props: { todo },
        revalidate: 5,
    }
}

export default TodoDetail