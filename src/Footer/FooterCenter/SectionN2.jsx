import React from 'react'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import './SectionN2.scss'
import { aboutPath, backPath, contactPath, regisPath } from '../../routes'
import { About, Contact, Feedback, Registr, } from '../../components'
import Layouts from '../../components/Layouts/Layouts'


export default function SectionN2() {
      const router = createBrowserRouter(createRoutesFromElements(
        <Route path='/' element={<Layouts />}>
          <Route path={regisPath} element={<Registr/>}/>
          <Route path={aboutPath} element={<About/>}/>
          <Route path={contactPath} element={<Contact/>}/>
          <Route path={backPath} element={<Feedback/>}/>
      </Route>
    )
  )

  return (
      <div className='Footer_centr'>
         <RouterProvider router={router} />
      </div>
   )

}
