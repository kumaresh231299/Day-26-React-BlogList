import React, { useEffect, useState } from 'react'
import '../Components/NavStyle.css'

function Career({values}) {
    const [allvalues, setAllValues] = useState([]);

    useEffect(() => {
      setAllValues(values.filter(e => e.type === "career"));
    }, [values]);
  
    return (
      <div className='container my-5 p-4'>
        <h1 className="text-success">Career</h1>
        <div className="row">
          {allvalues.map(values => (
            <div key={values.id} className='col-lg-3 col-md-4 col-sm-6 mb-4'>
              < div className="card" >
              <div className="card-body">
                  <img src={values.images} className="card-img-top" alt="..."/>
                  <h5 className="card-title">{values.course}</h5>
                  <p className="card-text"><i class="fa-solid fa-clock"></i>&nbsp;{values.duration}</p>
                  <p className="card-text text-success"><b>{values.enrollment}</b></p>
                </div>
              </div>
            </div>
          ))}
          <h4 className="footer text-success text-shadow">The Candidates are need for above vacany, those who are interest please be apply.</h4>
        </div>
      </div >
    )
}

export default Career
