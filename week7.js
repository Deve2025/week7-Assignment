// Define a class for Students
class Student {
    constructor(name, id, grades) {
      this.name = name;
      this.id = id;
      this.grades = grades;
    }
  
    // Method to calculate the average grade
    getAverageGrade() {
      const total = this.grades.reduce((sum, grade) => sum + grade, 0);
      return total / this.grades.length;
    }
  }
  
  // Array to hold all students
  let students = [
    new Student("Alice", 1, [85, 90, 92]),
    new Student("Bob", 2, [78, 82, 88]),
    new Student("Charlie", 3, [95, 93, 91]),
    new Student("David", 4, [70, 75, 80])
  ];
  
  // Function to add a new student
  function addStudent(name, id, grades) {
    const newStudent = new Student(name, id, grades);
    students.push(newStudent);
  }
  
  // Function to get students with average grade above a certain threshold
  function getStudentsAboveThreshold(threshold) {
    return students.filter(student => student.getAverageGrade() > threshold);
  }
  
  // Function to sort students by average grade
  function sortStudentsByAverageGrade() {
    return students.sort((a, b) => b.getAverageGrade() - a.getAverageGrade());
  }
  
  // Function to find the student with the highest average grade
  function getTopStudent() {
    return students.reduce((topStudent, currentStudent) => {
      return currentStudent.getAverageGrade() > topStudent.getAverageGrade() ? currentStudent : topStudent;
    });
  }
  
  // Function to display all students and their average grades
  function displayStudentGrades() {
    students.forEach(student => {
      console.log(`${student.name} (ID: ${student.id}) - Average Grade: ${student.getAverageGrade()}`);
    });
  }

  addStudent("Eve", 5, [88, 92, 85]);

console.log("All Students:");
displayStudentGrades();