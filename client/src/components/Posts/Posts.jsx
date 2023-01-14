import React, { useState } from 'react'

import { mockData } from '../../mockData'
import PostListItems from './PostListItems';

function Posts() {

  const [data, setData] = useState(mockData);

  const postListItems = data.map((post) => {
    return (
      <PostListItems key={post.id} {...post}/>
    )
  })

  return (
    <div className='flex justify-center p-8'>
      {postListItems}
    </div>
  )
}

export default Posts