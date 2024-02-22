import React from 'react'
import Dashboard from '../component/Dashboard'
import AddBook from '../component/Addbook'
import EditBook from '../component/Editbook'
import AddAuthor from '../component/Addauthor'
import { Navigate } from 'react-router-dom'
import EditAuthor from '../component/Editauthor'

const AppRoutes=[
    {
        path:"/",
        element:<Dashboard/>
    },
    {
        path:"/add-book",
        element:<AddBook/>
    },
    {
        path:"/editbook/:id",
        element:<EditBook/>
    },
    {
        path:"/add-author",
        element:<AddAuthor/>
    },
    {
        path:"/editauthor/:id",
        element:<EditAuthor/>
    },
    {
        path:"*",
        element:<Navigate to='/'/>
    },
]

export default AppRoutes