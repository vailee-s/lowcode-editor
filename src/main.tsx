import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import App from './App.tsx'
import './index.css'
createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
  <DndProvider backend={HTML5Backend}>
    <App />
  </DndProvider>
)
