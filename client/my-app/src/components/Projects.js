import React from 'react'
import {TextField} from '@mui/material';
import './comp.css'
import  './final.css'
function Projects({values,prevStep,nextStep,handleChange}) {
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        handleChange(name, value);
      };
  return (
    <div className='container-final'>
        <div >
            <div className='title'>
              Personal Project
            </div>
            <div>
            <div><TextField required type="text" name="proj1_title" variant='outlined' label="Title" value={values.proj1_title} onChange={handleInputChange} fullWidth margin="dense" size="small" /></div>
            <div><TextField required type="text" name="proj1_link" variant='outlined' label="Link" value={values.proj1_link} fullWidth size="small" margin="dense" onChange={handleInputChange}/></div>

           <div> <TextField  required type="text" fullWidth name="proj1_desc" variant='outlined' label="Description" value={values.proj1_desc}  size="small" margin="dense" onChange={handleInputChange}/></div>

            <div></div>
            <br></br>
            <br></br>
            <div><TextField required type="text" name="proj2_title" variant='outlined' label="Title" value={values.proj2_title} onChange={handleInputChange} fullWidth margin="dense" size="small" /></div>
            <div><TextField required type="text" name="proj2_link" variant='outlined' label="Link" value={values.proj2_link} fullWidth size="small" margin="dense" onChange={handleInputChange}/></div>

            <div><TextField  required type="text" fullWidth name="proj2_desc" variant='outlined' label="Description" value={values.proj2_desc}  size="small" margin="dense" onChange={handleInputChange}/></div>
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


export default Projects