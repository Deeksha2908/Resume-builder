  import React from 'react'
  import Button from '@mui/material/Button'
  import axios from 'axios'
  import { saveAs } from 'file-saver';
  import './comp.css'
  import './final.css'
  import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
  function FinalPage({values, editPage, reset}) {

    const Submit=()=>{
      axios.post('create-pdf', values)
      .then(() => axios.get('fetch-pdf', { responseType: 'blob' }))
      .then((res) => {
          const pdfBlob = new Blob([res.data], { type: 'application/pdf' });

          saveAs(pdfBlob, 'My-resume.pdf');
            <Stack sx={{ width: '100%' }} spacing={2}>
        
              <Alert variant="outlined" severity="success">
                Resume Downloaded!
              </Alert>
            </Stack>
          reset();
      });

    }
    return (
      <div className='container-final '>
          <div className='title'>
              Review
          </div>
          <div  className='main-final-box'>
            <div>
              <div className= 'title-final'>Personal details</div>
              <b>Name</b> : {values.firstname} {values.secondname}
              <br></br>
              Phone number: {values.phone}
              <br></br>
              Email: {values.email}
              <br></br>
              Linkedin : {values.linkedin}
              <br></br>
              Github: {values.github}
              <br></br>
            </div>
            <div className='center'>
            <Button variant="contained" onClick={()=>{
              editPage(1);
              }}>Edit</Button>
            </div>
          </div>
          <div>
            <div className='main-final-box'>
              <div className= 'title-final'>Education</div>
              College : {values.edu1_school} 
              <br></br>
              Year: {values.edu1_year}
              <br></br>
              Degree: {values.edu1_degree}
              <br></br>
              Course : {values.edu1_course}
              <br></br>
              Skills: {values.skills}
              <br></br>
              <div className='center'>
            <Button variant="contained" onClick={()=>{
              editPage(2);
              }}>edit</Button>
            </div>
            </div>
           
          </div> 
          <div>
            <div className='main-final-box'>
              <div className= 'title-final' >Experience</div>
              Company : {values.exp1_org} 
              <br></br>
              Designation: {values.exp1_pos}
              <br></br>
              Task: {values.exp1_desc}
              <br></br>
              Start date : {values.exp1_from}
              <br></br>
              End Date: {values.exp1_to}
              <br></br>
              <br></br>
              Company : {values.exp2_org} 
              <br></br>
              Designation: {values.exp2_pos}
              <br></br>
              Task: {values.exp2_desc}
              <br></br>
              Start date : {values.exp2_from}
              <br></br>
              End Date: {values.exp2_to}
              <br></br>
              <div className='center'>
            <Button variant="contained" onClick={()=>{
              editPage(3);
              }}>edit</Button>
            </div>
            </div>
            
          </div>
          <div>
            <div className='main-final-box'>
              <div  className= 'title-final' >Project</div>
              Title : {values.proj1_title}
              <br></br> 
              Link: {values.proj1_link}
              <br></br>
              Description: {values.proj1_desc}
              <br></br>
              <br></br>
              Title : {values.proj2_title} 
              <br></br>
              Link: {values.proj2_link}
              <br></br>
              Description: {values.proj2_desc}
              <br></br>
              <div class='center'>
            <Button variant="contained" onClick={()=>{
              editPage(4);
              }}>edit</Button>
            </div>
            </div>
           
          </div>
          <br></br>
          <div className='center'>
          <Button variant="contained" onClick={Submit}>Generate Resume</Button>
        </div>
       <br></br>
      </div>
    
    )
  }

  export default FinalPage