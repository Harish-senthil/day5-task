const resume = {
    "name": "Harish",
    "age": 21,
    "email": "harish2002senthil.com",
    "education": [
      {
        "degree": "Bachelor of Technology",
        "major": "Information Technology",
        "university": "SSN college"
      },
      
    ],
    "skills": [
        "Git",
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "Node.js",
        "MongoDB"
      ]
  };
  

console.log("for loop:");
for (let i = 0; i < resume.education.length; i++) {
    console.log(resume.education[i]);
  }
  

console.log("\nfor in loop:");
for (let key in resume) {
    console.log(key + ": " + resume[key]);
  }
  

console.log("\nfor of loop:");
for (let exp of resume.skills) {
    console.log(exp);
  }
  

console.log("\nfor Each loop:");
resume.education.forEach(edu => {
    console.log(edu);
  });
  