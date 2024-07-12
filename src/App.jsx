// notes: 
// In React Router, the loader and action attributes are used to 
// handle data fetching and form submissions respectively, providing 
// a way to centralize data management and side effects related to 
// routing. Here’s a detailed explanation of their purposes and applications:



import React from "react"
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  redirect
} from "react-router-dom"
import Layout from "./Layout"
import Login, { action as loginAction } from "./Login"
import Protected, { loader as protectedLoader } from "./Protected"
import { requireAuth } from "./requireAuth"
import "./App.css"


const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route
      index
      element={<h1>Home page</h1>}
    />
    <Route
      path="protected"
      element={<Protected />}
      loader={protectedLoader}
    >
      <Route 
        path="nested" 
        element={<h1>Nested protected route</h1>} 
        loader={async ({request}) => {
          await requireAuth(request)
          return null
        }}
      />
    </Route>
    <Route
      path="login"
      element={<Login />}
      action={loginAction}
    />

  </Route>
))



function App() {


  return (
    <>
       <RouterProvider router={router} />
    </>
  )
}

export default App
