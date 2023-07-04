import React from 'react'
import { useRouteError } from 'react-router-dom'
const Error = () => {
    const err=useRouteError();

  return (
    <div>
      <h1>This is a Error</h1>
      <h1>{err.status}</h1>
    </div>
  )
}

export default Error
