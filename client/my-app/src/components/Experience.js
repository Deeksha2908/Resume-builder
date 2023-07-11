import React from 'react'
import {TextField} from '@mui/material';
import './comp.css'
function Experience({values,prevStep,nextStep,handleChange}) {
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        handleChange(name, value);
      };
  return (
    <div className='container'>
        <div >
            <div className='title'>
              Work Experience
            </div>
            <div>
            <div><TextField required type="text" name="exp1_org" variant='outlined' label="Company" value={values.exp1_org} onChange={handleInputChange} fullWidth margin="dense" size="small" /></div>
            <div><TextField required type="text" name="exp1_pos" variant='outlined' label="Designation" value={values.exp1_pos} fullWidth size="small" margin="dense" onChange={handleInputChange}/></div>

            <div><TextField  required type="date" name="exp1_from" variant='outlined' label="From" value={values.exp1_from}  size="small" margin="dense" onChange={handleInputChange}/>

            <TextField  required type="date" name="exp1_to" variant='outlined' label="To" value={values.exp1_to} size="small" margin="dense" onChange={handleInputChange}/></div>
            <div> <TextField required type="text" name="exp1_desc" variant='outlined' label="Task" value={values.exp1_desc} fullWidth size="normal" margin="dense" onChange={handleInputChange}/></div>
            
            <div></div>
            <br></br>
            <div><TextField required type="text" name="exp2_org" variant='outlined' label="Company" value={values.exp2_org} onChange={handleInputChange} fullWidth margin="dense" size="small" /></div>
            <div><TextField required type="text" name="exp2_pos" variant='outlined' label="Designation" value={values.exp2_pos} fullWidth size="small" margin="dense" onChange={handleInputChange}/></div>

            <div><TextField  required type="date" name="exp2_from" variant='outlined' label="From" value={values.exp2_from}  size="small" margin="dense" onChange={handleInputChange}/>

            <TextField  required type="date" name="exp2_to" variant='outlined' label="To" value={values.exp2_to} size="small" margin="dense" onChange={handleInputChange}/></div>
            <div> <TextField required type="text" name="exp2_desc" variant='outlined' label="Task" value={values.exp2_desc} fullWidth size="normal" margin="dense" onChange={handleInputChange}/></div>
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


export default Experience