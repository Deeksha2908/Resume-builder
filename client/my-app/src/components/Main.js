import React, { useState } from 'react';
import PersionalDetails from './PersionalDetails';
import Education from './Education';
import Experience from './Experience';
import Projects from './Projects';
import FinalPage from './FinalPage'
const Main = () => {
    const details= 
    {
        step: 1,
        firstname: '',
        lastname:'',
        email: '',
        phone: '',
        linkedin: '',
        github: '',
        skills: '',
    
        exp1_org: '',
        exp1_pos: '',
        exp1_desc: '',
        exp1_from: '',
        exp1_to:'',
    
        exp2_org: '',
        exp2_pos: '',
        exp2_desc: '',
        exp2_from: '',
        exp2_to:'',
    
        proj1_title: '',
        proj1_link: '',
        proj1_desc: '',
    
        proj2_title: '',
        proj2_link: '',
        proj2_desc: '',
    
        edu1_school: '',
        edu1_year: '',
        edu1_degree: '',
        edu1_course: '',
      };
  const [state, setState] = useState(details);
  const nextStep = () => {
    const step= state.step;
    console.log("ex")
    setState({
        ...state,
      step: step+1
    })
    console.log(state.step)
};

// Go back to prev step
 const prevStep = () => {
    const step= state.step;
    setState({
        ...state,
      step: step-1
    })
};
const editPage= (value)=>{
    setState({
        ...state,
        step: value
    })
}


const handleChange = (key, value) => {
    setState({
      ...state,
      [key]: value
    });
  };
  const reset=()=>{
    setState({details})
    editPage(1)
  }
  switch (state.step) {
    case 1:
        return (
            <div className="App pt-5 mt-5">
                <div className="container col-lg-8 mx-auto text-center">

                    <PersionalDetails
                        values={state}
                        nextStep={nextStep}
                        handleChange={handleChange}
                    />
                </div>
                <br />
            </div>
        );

    case 2:

        return (
            <div className="App pt-5 mt-5">
                <div className="container col-lg-8 mx-auto text-center">

                    <Education
                        values={state}
                        prevStep={prevStep}
                        nextStep={nextStep}
                        handleChange={handleChange}
                    />
                </div>
                <br />
            </div>
        );


    case 3:

        return (
            <div className="App pt-5 mt-5">
                <div className="container col-lg-8 mx-auto text-center">

                    <Experience
                        values={state}                                                   
                        prevStep={prevStep}
                        nextStep={nextStep}
                        handleChange={handleChange}
                    />
                </div>
                <br />
            </div>
        );
        case 4:
            return(
                <div className="App pt-5 mt-5">
                    <Projects
                     values={state}
                     prevStep={prevStep}
                     nextStep={nextStep}
                     handleChange={handleChange}/>
                </div>
            )
        case 5: 
        return(
            <div className="App pt-5 mt-5">
                <FinalPage
                    values={state}
                    editPage={editPage}
                    reset={reset}/>
            </div>
        )


    

 
}
}



export default Main;