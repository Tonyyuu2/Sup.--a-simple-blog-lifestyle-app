import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { DataContext } from '../Context/Data.context'
import ErrorHandling from '../ErrorHandling/ErrorHandling'

function EditPost() {

  const { data } = useContext(DataContext)
  const navigate = useNavigate();

  const { id } = useParams();


  return (
    <div>EditPost</div>
  )
}

export default EditPost