import React from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import FullStackDevelopment from './Pages/FullStackDevelopment'
import DataScience from './Pages/DataScience'
import CyberSecurity from './Pages/CyberSecurity'
import Career from './Pages/Career'
import PageNotFound from './Pages/PageNotFound'
import Home from './Pages/Home'
import image1 from "./assets/images1.png"
import image2 from "./assets/images2.jpg"
import image3 from "./assets/images3.png"
import image4 from "./assets/images4.png"
import image5 from "./assets/images5.jpg"
import image6 from "./assets/images6.jpg"
import image7 from "./assets/images7.jpg"
import image8 from "./assets/images8.jpg"
import image9 from "./assets/images9.jpg"
import image10 from "./assets/images10.png"
import image11 from "./assets/images11.jpg"
import image12 from "./assets/images12.jpg"
import image13 from "./assets/images13.png"
import image14 from "./assets/images14.jpg"
import image15 from "./assets/images15.png"
import image16 from "./assets/images16.jpg"
import image17 from "./assets/images17.jpg"
import image18 from "./assets/images18.jpg"

function App() {
  const values = [
    {
      id: 1,
      type: "fsd",
      images: image1,
      course: "Full Stack Development",
      duration: "4 Months",
      languages: "Tamil, English, Hindi",
      enrollment:"25,078"

    },
    {
      id: 2,
      type: "cyber",
      images: image2,
      course: "Cyber Security",
      duration: "3 Months",
      languages: "Tamil, English",
      enrollment:"10,050"

    },
    {
      id: 3,
      type: "ds",
      images: image3,
      course: "Data Science",
      duration: "3 Months",
      languages: "Tamil, English",
      enrollment:"7,089"
    },
    {
      id: 4,
      type: "fsd",
      images: image4,
      course: "MERN Stack Development",
      duration: "4 Months",
      languages: "Tamil, English",
      enrollment:"24,524"
    },
    {
      id: 5,
      type: "cyber",
      images: image5,
      course: "Cyber Security",
      duration: "5 Months",
      languages: "Tamil, English",
      enrollment:"22,000"
    },
    {
      id: 6,
      type: "cyber",
      images: image6,
      course: "Cyber Security",
      duration: "3 Months",
      languages: "Tamil, English",
      enrollment:"2,000"
    },
    {
      id: 7,
      type: "fsd",
      images: image7,
      course: "MERN Stack Development",
      duration: "3 Months",
      languages: "English",
      enrollment:"21,600"
    },
    {
      id: 8,
      type: "cyber",
      images: image8,
      course: "Cyber Security",
      duration: "6 Months",
      languages: "Tamil, English, Hindi",
      enrollment:"22,000"
    },
    {
      id: 9,
      type: "ds",
      images: image9,
      course: "Data Science",
      duration: "4 Months",
      languages: "Tamil, English, Hindi",
      enrollment:"35,579"
    },
    {
      id: 10,
      type: "fsd",
      images: image10,
      course: "Full Stack Development",
      duration: "3 Months",
      languages: "English",
      enrollment:"19,876"

    },
    {
      id: 11,
      type: "fsd",
      images: image11,
      course: "MEAN Stack Development",
      duration: "3 Months",
      languages: "Tamil, English",
      enrollment:"9,864"

    },
    {
      id: 12,
      type: "ds",
      images: image12,
      course: "Data Structure",
      duration: "4 Months",
      languages: "English",
      enrollment:"24,022"
    },
    {
      id: 13,
      type: "fsd",
      images: image13,
      course: "Full Stack Development",
      duration: "4 Months",
      languages: "Tamil, English",
      enrollment:"22,070"
    },
    {
      id: 14,
      type: "cyber",
      images: image14,
      course: "Cyber Security",
      duration: "4 Months",
      languages: "English",
      enrollment:"23,300"
    },
    {
      id: 15,
      type: "fsd",
      images: image15,
      course: "Full Stack Development",
      duration: "9 Months",
      languages: "English",
      enrollment:"40,986"
    },
    {
      id: 16,
      type: "ds",
      images: image16,
      course: "Data Structure",
      duration: "6 Months",
      languages: "Tamil, English, Hindi",
      enrollment:"24,621"
    },
    {
      id: 17,
      type: "ds",
      images: image17,
      course: "Data Structure & Core",
      duration: "8 Months",
      languages: "Tamil, English, Hindi",
      enrollment:"22,000"
    },
    {
      id: 18,
      type: "cyber",
      images: image18,
      course: "Cyber Secutiry & Ethical Hacking",
      duration: "9 Months",
      languages: "Tamil, English, Hindi",
      enrollment:"48,999"
    },
    {
      id: 19,
      type: "career",
      images: image15,
      course: "Full Stack Development",
      duration: "Full - Time",
      enrollment:"17 Candidates"
    },
    {
      id: 20,
      type: "career",
      images: image18,
      course: "Cyber Security",
      duration: "2 years(Contract)",
      enrollment:"5 Candidates"
    },
    {
      id: 21,
      type: "career",
      images: image9,
      course: "Data Science",
      duration: "6 Months(InternShip)",
      enrollment:"25 Candidates"
    }

  ]
  return (
    <div>
      <Navbar />
      <div className='row'>
        <Routes>
          <Route path='/' element={<Home values={values} />}></Route>
          <Route path='/all' element={<Home values={values} />}></Route>
          <Route path='/fsd' element={<FullStackDevelopment values={values} />}></Route>
          <Route path='/ds' element={<DataScience values={values} />}></Route>
          <Route path='/cyber' element={<CyberSecurity values={values} />}></Route>
          <Route path='/career' element={<Career values={values} />}></Route>
          <Route path='/*' element={<PageNotFound values={values} />}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
