import { FC } from "react"
import { RouterProvider } from "react-router-dom"
import Routes from "./routes"
import { Toaster } from "./components/ui/toaster"

const App: FC = () => {
  return (
    <>
      <RouterProvider 
      router={Routes}
      />
      <Toaster />
    </>
  )
}

export default App
