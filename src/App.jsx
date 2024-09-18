import { BrowserRouter } from "react-router-dom"
import AllRoutes from "./routes/AllRoutes.routes.jsx"

import AuthContextProvider from "./context/AuthContext.jsx"
function App() {

  return (
    <AuthContextProvider>
      <BrowserRouter>
        <AllRoutes/>
      </BrowserRouter>
    </AuthContextProvider>
  )
}

export default App
