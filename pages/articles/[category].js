import React from 'react'

const CategoryDetail = ({articles, category}) => {
  return (
    <div>
        <h1> Showing articles for category <strong>{category}</strong> </h1>
        {articles.map(article =>(
           <h2> {article.id} - {article.title} - {article.category} <hr /></h2>
        ))}
    </div>
  )
}


export async function getServerSideProps(context) {
    const category = context.params.category
    const res = await fetch(`http://localhost:4040/articles?category=${category}`);
    const articles = await res.json();

    return {
        props: {
            articles,
            category
        }
    }
}

export default CategoryDetail