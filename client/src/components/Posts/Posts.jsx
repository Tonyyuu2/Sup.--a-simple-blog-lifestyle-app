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
    <div className='absolute flex flex-col justify-center items center p-8 gap-20 lg:left-[22.5%] md:left-[12.5%]'>
      {postListItems}
    </div>
  )
}

export default Posts