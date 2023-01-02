import { useState } from 'react'
import { ButtonRedo } from './components/ButtonRedo'
import { ButtonUndo } from './components/ButtonUndo'

interface Circle {
  x: number
  y: number
  sequence: number
}

export function App() {
  const [unDoneCircles, setUnDoneCircles] = useState<Circle[]>([])
  const [circles, setCircles] = useState<Circle[]>([])

  function onCreateCircle(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const circle: Circle = {
      x: e.nativeEvent.offsetX,
      y: e.nativeEvent.offsetY,
      sequence: Math.random() * 100
    }
    setCircles([...circles, circle])
  }

  function onRedo() {
    setCircles([...circles, unDoneCircles.at(-1)!])
    setUnDoneCircles(unDoneCircles.slice(0, -1))
  }

  function onUndo() {
    setUnDoneCircles([...unDoneCircles, circles.at(-1)!])
    setCircles(circles.slice(0, -1))
  }

  return (
    <div className="flex justify-center items-center w-screen mx-auto">
      <div className="py-8 w-full h-full">
        <div className="mx-8 h-full bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden">
          <div className="flex items-center justify-between bg-gray-100 dark:bg-gray-900 p-4 border-b border-gray-200 dark:border-gray-500">
            <div>
              <h4 className="font-bold dark:text-gray-50">
                Circle Challenge (Made using ReactJS)
              </h4>
              <p className="mt-2 font-normal text-sm dark:text-gray-50">
                Click on below empty area for adding a new circle
              </p>
            </div>
            <div className="flex items-center">
              <ButtonUndo disabled={!circles.length} onClick={onUndo} />
              <ButtonRedo disabled={!unDoneCircles.length} onClick={onRedo} />
            </div>
          </div>

          <div
            onClick={onCreateCircle}
            className="h-[calc(100vh-15rem)] dark:text-gray-50">
            {circles.map((circle) => (
              <div className="relative" key={circle.sequence}>
                <div
                  style={{ left: circle.x, top: circle.y }}
                  className="absolute w-2 h-2 bg-orange-500 rounded-full"></div>
              </div>
            ))}
          </div>

          <div className="dark:text-gray-50 bg-gray-50 dark:bg-gray-900 p-3 border-t border-gray-100 dark:border-gray-500">
            <div className="flex justify-end items-center gap-7">
              <a
                href="https://www.linkedin.com/in/matheus-adami/"
                target="_blank">
                <i className="devicon-linkedin-plain colored text-2xl"></i>
              </a>
              <a href="https://github.com/matheusadami" target="_blank">
                <i className="devicon-github-original colored text-2xl"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
