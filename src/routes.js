import { createBrowserRouter, Navigate} from "react-router-dom";
import Home from './pages/home/Home'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import App from "./App";
import BookDetails from "./pages/BookDetails/BookDetails";
import ManageBooks from "./pages/ManageBooks/ManageBooks";
import AddBook from "./pages/ManageBooks/AddBook";
import UpdateBook from "./pages/ManageBooks/UpdateBook";
import Requests from "./pages/Requests/Requests";
import ManageChapters from "./pages/ManageChapters/ManageChapters";
import UpdateChapters from "./pages/ManageChapters/UpdateChapters"
import AddChapters from "./pages/ManageChapters/AddChapters"
import ManageReaders from "./pages/ManageReaders/ManageReaders"
import UpdateReaders from "./pages/ManageReaders/UpdateReaders"
import AddReaders from "./pages/ManageReaders/AddReader"

export const routes = createBrowserRouter([
   {
    path:"",
    element: <App />,
    children: [ {
      path: "/",
      element: <Home/>,
    },
    {
      path: ":id",
      element: <BookDetails/>,
    },
    {
        path: "/login",
        element: <Login/>,
    },
    {
      path: '/manage-books',
      children:[
        {
          path: '',
          element: <ManageBooks/>
        },
        {
          path: ':id',
          element: <UpdateBook/>
        },
        {
          path: 'add',
          element: <AddBook/>
        }
      ]
    },
    {
      path: "/requests",
      element: <Requests/>
    },
    {
      path: '/manage-chapters',
      children:[
        {
          path: '',
          element: <ManageChapters/>
        },
        {
          path: ':id',
          element: <UpdateChapters/>
        },
        {
          path: 'add',
          element: <AddChapters/>
        }
      ]
    },
    {
      path: '/manage-readers',
      children:[
        {
          path: '',
          element: <ManageReaders/>
        },
        {
          path: ':id',
          element: <UpdateReaders/>
        },
        {
          path: 'add',
          element: <AddReaders/>
        }
      ]
    },
    {
        path: "/register",
        element: <Register/>,
    }]
   },
   {
    path:'*',
    element: <Navigate to={"/"}/>
    
   }
  ]);