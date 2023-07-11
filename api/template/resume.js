module.exports = (data) => {
  return `
  <<!DOCTYPE html>
  <html>
  <head>
    <title>Functional Resume Template</title>
    <style>
    /* Global Styles */
    body {
        font-family: Arial, sans-serif;
        color: #333;
        background-color: #f5f5f5;
      }
      
      .resume {
        max-width: 800px;
        margin: 0 auto;
        padding: 20px;
        background-color: #fff;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      }
      
      h1, h2, h3 {
        color: #333;
      }
      
      a {
        color: #007bff;
        text-decoration: none;
      }
      
      /* Header Styles */
      .header {
        text-align: center;
        margin-bottom: 30px;
      }
      
      .name {
        font-size: 30px;
        margin-bottom: 10px;
      }
      
      .contact {
        margin-bottom: 10px;
      }
      
      .phone, .email, .linkedin, .github {
        margin: 5px 0;
      }
      
      /* Section Styles */
      .section {
        margin-bottom: 30px;
      }
      
      .section-title {
        font-size: 20px;
        margin-bottom: 10px;
        color: #007bff;
      }
      
      .skills-list {
        list-style-type: none;
        padding: 0;
      }
      
      .skills-list li {
        display: inline-block;
        margin-right: 10px;
        margin-bottom: 5px;
        background-color: #007bff;
        color: #fff;
        padding: 5px 10px;
        border-radius: 5px;
      }
      
      .experience, .education, .project {
        margin-bottom: 15px;
      }
      
      .company, .degree, .course, .title {
        font-size: 18px;
        margin-bottom: 5px;
      }
      
      .date, .designation, .task, .duration, .link, .description {
        margin-bottom: 5px;
      }
      
    </style>
  </head>
  <body>
  <!DOCTYPE html>
  <html>
  <head>
    <title>Resume Template</title>
  </head>
  <body>
    <div class="resume">
      <div class="header">
        <h1 class="name">${data.firstname} ${data.lastname}</h1>
        <div class="contact">
          <p class="phone">Phone: ${data.phone}</p>
          <p class="email">Email: ${data.email}</p>
          <p class="linkedin">LinkedIn: <a href="${data.linkedin}">${data.linkedin}</a></p>
          <p class="github">GitHub: <a href="${data.github}">${data.github}</a></p>
        </div>
      </div>
      
      <div class="section">
        <h2 class="section-title">Skills</h2>
        ${data.skills}
        
      </div>
      
      <div class="section">
        <h2 class="section-title">Work Experience</h2>
        <div class="experience">
          <h3 class="company">${data.exp1_org}</h3>
          <p class="date">${data.exp1_from} - ${data.exp1_to}</p>
          <p class="designation">${data.exp1_pos}</p>
          <p class="task">${data.exp1_desc}</p>
        </div>
        <div class="experience">
          <h3 class="company">${data.exp2_org}</h3>
          <p class="date">${data.exp2_from} - ${data.exp2_to}</p>
          <p class="designation">${data.exp2_pos}</p>
          <p class="task">Task ${data.exp2_desc}</p>
        </div>
      </div>
      
      <div class="section">
        <h2 class="section-title">Education</h2>
        <div class="education">
          <h3 class="college">${data.edu1_school}</h3>
          <p class="degree">${data.edu1_degree}</p>
          <p class="course">${data.edu1_course}</p>
          <p class="duration">${data.edu1_year}</p>
        </div>
      </div>
      
      <div class="section">
        <h2 class="section-title">Projects</h2>
        <div class="project">
          <h3 class="title">${data.proj1_title}</h3>
          <p class="link">Link: <a href="https://www.example.com/">${data.proj1_link}</a></p>
          <p class="description">${data.proj1_desc}</p>
        </div>
        <div class="project">
          <h3 class="title">${data.proj2_title}</h3>
          <p class="link">Link: <a href="https://www.example.com/">${data.proj2_link}</a></p>
          <p class="description">${data.proj2_desc}</p>
        </div>
      </div>
    </div>
  </body>
  </html>
  
  </body>
  </html>
  
`;
}
