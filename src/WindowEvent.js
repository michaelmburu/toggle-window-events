import { useEffect } from 'react'

export default function WindowEvent () {
  useEffect(() => {
    // create function
    const doubleClick = () => {
      alert('mouse pressed')
    }

    // listen for window event
    window.addEventListener('dblclick', doubleClick)

    //cleanup when WindowEvent component is unmounted
    return () => window.removeEventListener('dblclick', doubleClick)
  }, [])

  return <h2>Window event is active</h2>
}