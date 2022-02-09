import React from 'react'
import { useCount } from '../context'

export default function Mirror() {
  return (
    <div>
      <h1>Mirror: {useCount().count}</h1>
    </div>
  )
}
