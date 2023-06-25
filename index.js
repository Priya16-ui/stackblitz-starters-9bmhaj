// Sample student data
const students = [
  { name: 'Priya', chemistryMarks: 80, biologyMarks: 90, dob: '10-05-2000' },
  { name: 'Lavanya', chemistryMarks: 70, biologyMarks: 80, dob: '15-07-2001' },
  { name: 'vel', chemistryMarks: 90, biologyMarks: 85, dob: '05-03-2000' },
  { name: 'Isai', chemistryMarks: 85, biologyMarks: 90, dob: '12-09-2000' },
];

// Sorting function
const sortStudents = (students) => {
  students.sort((a, b) => {
    // Rule 1: Sort by total marks
    if (
      a.chemistryMarks + a.biologyMarks !==
      b.chemistryMarks + b.biologyMarks
    ) {
      return (
        b.chemistryMarks + b.biologyMarks - (a.chemistryMarks + a.biologyMarks)
      );
    }

    // Rule 2: Sort by biology marks
    if (a.biologyMarks !== b.biologyMarks) {
      return b.biologyMarks - a.biologyMarks;
    }

    // Rule 3: Sort by date of birth (assuming date format is DD-MM-YYYY)
    const [aDay, aMonth, aYear] = a.dob.split('-').map(Number);
    const [bDay, bMonth, bYear] = b.dob.split('-').map(Number);

    if (aYear !== bYear) {
      return aYear - bYear;
    } else if (aMonth !== bMonth) {
      return aMonth - bMonth;
    } else {
      return aDay - bDay;
    }
  });
};

// Call the sorting function
sortStudents(students);

// Print the sorted students
console.log(students);
