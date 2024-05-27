import React, { useEffect, useState } from 'react'

function DataScience({values}) {
  const [allvalues, setAllValues] = useState([]);
  
  useEffect(() => {
    setAllValues(values.filter(e => e.type === "ds"));
  }, [values])

  return (
    <div className='container my-5 p-4'>
      <h1 className="text-success">Data Science</h1>
      <div className="row">
        {allvalues.map(values => (
          <div key={values.id} className='col-lg-3 col-md-4 col-sm-6 mb-4'>
            < div className="card" >
            <div className="card-body">
                <img src={values.images} className="card-img-top" alt="..."/>
                <h5 className="card-title">{values.course}</h5>
                <p className="card-text"><i class="fa-solid fa-clock"></i>&nbsp;{values.duration}</p>
                <p className="card-text"><i class="fa-solid fa-language"></i>&nbsp;{values.languages}</p>
                <p className="card-text"><i class="fa-solid fa-user"></i>&nbsp;{values.enrollment}</p>
              </div>
            </div>
          </div>
        ))}

      </div>
    </div >
  )
}

export default DataScience
