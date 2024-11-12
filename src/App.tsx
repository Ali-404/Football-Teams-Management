import { FC } from "react"
import { RouterProvider } from "react-router-dom"
import Routes from "./routes"

const App: FC = () => {
  return (
    <RouterProvider router={Routes} fallbackElement={<>Loading ...</>} />
  )
}

export default App
