import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import AppLayout from './layouts/app-layout'
import Home from './pages/home'
import Categories from './pages/Category'
import Search from './pages/search'
// import GifPage from './pages/Single-gif'
import Favourites from './pages/favourites'
import GifProvider from './context/gif-context'

const router = createBrowserRouter([
  {
    element:<AppLayout />,
    children:[
      {
        path: '/',
        element:<Home />
      },
      {
        path: '/:category',
        element: <Categories />
      },
      {
        path: '/search/:query',
        element: <Search />
      },
      // {
      //   path: '/:type/:slug',
      //   element: <GifPage />
      // },
      {
        path: '/favourites',
        element: <Favourites />
      }
    ]
  }
])
function App() {

  return (
    <GifProvider>
      <RouterProvider router={router} />
    </GifProvider>

  )
}

export default App
