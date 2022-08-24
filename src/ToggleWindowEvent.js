
import { useState } from 'react'
import WindowEvent from './WindowEvent'

export default function ToggleWindowEvent () {
  const [windowEvent, setWindowEvent] = useState(false)

  return (
    <>
      <button onClick={() => setWindowEvent(windowEvent => !windowEvent)}>Toggle Window</button>
      {windowEvent && <WindowEvent />}
    </>
  )
}