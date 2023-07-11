import React from 'react'
import {TextField} from '@mui/material';

import './comp.css'
function Education({values,prevStep,nextStep,handleChange}) {
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        handleChange(name, value);
      };
  return (
    <div className='container'>
        <div >
            <div className='title'>
              Education
            </div>
            <div>
            <div><TextField required type="text" name="edu1_school" variant='outlined' label="College" value={values.edu1_school} onChange={handleInputChange} fullWidth margin="dense" size="small" /></div>
            <div><TextField required type="text" name="edu1_year" variant='outlined' label="Year" value={values.edu1_year} fullWidth size="small" margin="dense" onChange={handleInputChange}/>

            <TextField  required type="text" name="edu1_degree" variant='outlined' label="Degree" value={values.edu1_degree}  size="small" margin="dense" onChange={handleInputChange}/>

            <TextField  required type="text" name="edu1_course" variant='outlined' label="Course" value={values.edu1_course} size="small" margin="dense" onChange={handleInputChange}/></div>
            <div><TextField  required type="text" name="skills" variant='outlined' fullWidth label="Skills" value={values.skills} size="small" margin="dense" onChange={handleInputChange}/></div>

            
            <div></div>
            <br></br>
            </div>
        </div>
        <div className='center'>
         <button className='from' onClick={()=>{
            prevStep()}}>Back</button>
        <button classname='to'  onClick={()=>{
            nextStep()}}>Next</button>
            </div>
    </div>
  )
}


export default Education