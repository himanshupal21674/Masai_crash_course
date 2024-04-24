
Output = {
  name: 'XYZ School',
  establishYear: 1990,
  departments: {
    math: { teachers: 5, students: 150 },
    science: { teachers: 4, students: 120 },
    history: { teachers: 3, students: 100 },
    english: { teachers: 4, students: 130 },
    art: { teachers: 2, students: 50 }
  },
  courses: [ 'math', 'science', 'history', 'english' ],
  students: [
    { name: 'Alice', className: 'Grade 5', scores: [Object] },
    { name: 'Bob', className: 'Grade 4', scores: [Object] },
    { name: 'Charlie', className: 'Grade 5', scores: [Object] },
    { name: 'Diana', className: 'Grade 4', scores: [Object] }
  ]
}



// Problem 10: countCalculation
function countCalculation(school) {
    const { departments: { math: { teachers: mathTeachersCount, students: mathStudentsCount }, history: { teachers: historyTeachersCount, students: historyStudentsCount } } } = school;
    return { mathTeachersCount, historyTeachersCount, mathStudentsCount, historyStudentsCount };
  }
  
  // Problem 11: findTopStudent
  function findTopStudent(school, courseName) {
    let topStudent = { score: 0 };
    school.students.forEach(student => {
      if (student.scores[courseName] > topStudent.score) {
        topStudent = { ...student, score: student.scores[courseName] };
      }
    });
    delete topStudent.score; // Remove the temporary score property
    return topStudent;
  }
  
  // Problem 12: addNewDept
  function addNewDept(school, newDepartment) {
    return {
      ...school,
      departments: {
        ...school.departments,
        ...newDepartment
      }
    };
  }
  
  // Problem 13: highestStudentCountDepartment
  function highestStudentCountDepartment(school) {
    let highestCount = 0;
    let highestDept = '';
    Object.entries(school.departments).forEach(([dept, { students }]) => {
      if (students > highestCount) {
        highestCount = students;
        highestDept = dept;
      }
    });
    return highestDept;
  }
  
  // Problem 14: Greeting Message
  function generateGreeting(name, language = 'English') {
    const greetings = {
      English: 'Hello',
      Spanish: '¡Hola',
      French: 'Bonjour'
    };
    return `${greetings[language]}, ${name}!`;
  }
  
  // Example usage:
  console.log(countCalculation(school));
  // Output: { mathTeachersCount: 5, historyTeachersCount: 3, mathStudentsCount: 150, historyStudentsCount: 100 }
  
  console.log(findTopStudent(school, 'math'));
  // Output: { name: 'Alice', className: 'Grade 5', scores: { math: 95, science: 88, history: 85, english: 92 } }
  
  const newDepartment = { art: { teachers: 2, students: 50 } };
  console.log(addNewDept(school, newDepartment));
  // Output: Updated school object with 'art' department
  
  console.log(highestStudentCountDepartment(school));
  // Output: 'math'
  
  console.log(generateGreeting("Alice"));
  // Output: "Hello, Alice!"
  console.log(generateGreeting("Bob", "Spanish"));
  // Output: "¡Hola, Bob!"
  console.log(generateGreeting("Charlie", "French"));
  // Output: "Bonjour, Charlie!"