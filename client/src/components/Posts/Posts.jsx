import React, { useState } from 'react'

import { mockData } from '../../mockData'
import PostListItems from './PostListItems';

function Posts() {

  const [data, setData] = useState(mockData);

  const postListItems = data.map((post) => {
    return (
      <PostListItems {...post}/>
    )
  })

  
  return (
    <div>
      {postListItems}
    </div>
  )
}

export default Posts