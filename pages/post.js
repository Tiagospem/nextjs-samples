function Post({ query }) {
  console.log(query.id)
  return (
    <div>post massa</div>
  )
}

Post.getInitialProps  = async function({query}) {
  return { query }
}

export default Post;