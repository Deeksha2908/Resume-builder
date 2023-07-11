import React from 'react'
import {TextField} from '@mui/material';
import Button from '@mui/material/Button';
import './comp.css'
function PersionalDetails({values,nextStep,handleChange}) {
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        handleChange(name, value);
      };
  return (
    <div className='container'>
        <div >
            <div className='title'>
                Personal Details
            </div>
            <div>
            <div><TextField required type="text" name="firstname" variant='outlined' label="First Name" value={values.firstname} onChange={handleInputChange} fullWidth margin="dense" size="small" /></div>
            <div><TextField required type="text" name="lastname" variant='outlined' label="Last Name" value={values.lastname} fullWidth size="small" margin="dense" onChange={handleInputChange}/></div>
            <div><TextField required type="number" name="phone" variant='outlined' label="Phone number" value={values.phone} fullWidth size="small" margin="dense" onChange={handleInputChange}/></div>
            <div><TextField required type="email" name="email" variant='outlined' label="Email" value={values.email} fullWidth size="small" margin="dense" onChange={handleInputChange}/></div>
            <div><TextField required type="text" name="linkedin" variant='outlined' label="Linkedin" value={values.linkedin} fullWidth size="small" margin="dense" onChange={handleInputChange}/></div>
            <div><TextField  type="text" name="github" variant='outlined' label="Github"  value={values.github} fullWidth size="small" margin="dense" onChange={handleInputChange}/></div>
            </div>
        </div>
        <div className='center'>
         <Button variant="contained" onClick={()=>{
            console.log(values.step)
            nextStep()}}>Next</Button>
        </div>
    </div>
  )
}

export default PersionalDetails