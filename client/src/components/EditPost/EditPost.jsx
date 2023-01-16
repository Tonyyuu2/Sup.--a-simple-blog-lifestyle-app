import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { DataContext } from '../Context/Data.context'
import ErrorHandling from '../ErrorHandling/ErrorHandling'

function EditPost() {
  const [ info, setInfo ] = useState({
    id: '',
    title: '',
    description: '',
    location: '',
    date: '',
    image: '',
  })
  console.log('info :', info);

  const { data } = useContext(DataContext)
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {

    const filteredData = data.filter((post) => post.id === id)
    console.log('filteredData :', filteredData);

    setInfo({
      id: filteredData[0].id,
      title: filteredData[0].title,
      description: filteredData[0].description,
      location: filteredData[0].location,

    })
  }, [])


  return (
    <div>EditPost</div>
  )
}

export default EditPost