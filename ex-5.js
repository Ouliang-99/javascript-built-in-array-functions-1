const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(students) {
  console.log(students.map(student => student.score).reduce((acc,cur) => acc+cur,0)/students.length)
}

getAverageStudentScore(students); // Output: 87.5
