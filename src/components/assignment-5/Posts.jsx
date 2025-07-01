

import React from 'react';


export default async function PostsPage() {

  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
   
    next: { revalidate: 0 }, 
  });

 
  const posts = await res.json();

 
  return (
    <main style={{ padding: 20 }}>
      <ul>
       <div style={{margin:'auto',width:'800px',paddingTop:'20px'}}>
      <h1>Posts from JSONPlaceholder</h1>

        {posts.map(post => (
          <li key={post.id} style={{ marginBottom: 10 }}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
       </div>

      </ul>
    </main>
  );
}
