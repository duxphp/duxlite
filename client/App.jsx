import React, { useEffect } from 'react'
import { DuxWeb } from 'duxweb'
import 'uno.css'
import './autoInit'
import './init'

export default function App() {

  useEffect(() => {
    const el = document.querySelector('#page-load')
    if (el) {
      el.classList.add('opacity-0')
      setTimeout(() => {
        el.remove()
      }, 1000)
    }
  }, [])

  return (
    <div className='App'>
      <DuxWeb />
    </div>
  )
}
