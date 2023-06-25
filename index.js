// Sample student data
let testCase1 = [
  {
    name: 'Leo Messi',
    dob: '31-12-1995',
    biology: 95,
    chemistry: 91,
  },
  {
    name: 'Cristiano Ronaldo',
    dob: '31-05-1992',
    biology: 90,
    chemistry: 81,
  },
  {
    name: 'Virat Kohli',
    dob: '31-12-1995',
    biology: 95,
    chemistry: 96,
  },
  {
    name: 'Rohit Sharma',
    dob: '31-12-1995',
    biology: 85,
    chemistry: 86,
  },
  {
    name: 'Viswanathan Anand',
    dob: '12-12-1994',
    biology: 99,
    chemistry: 10,
  },
];

// Sorting function
const sortStudents = (testCase1) => {
  testCase1.sort((a, b) => {
    if (a.chemistry + a.biology !== b.chemistry + b.biology) {
      return b.chemistry + b.biology - (a.chemistry + a.biology);
    }

    if (a.biology !== b.biology) {
      return b.biology - a.biology;
    }

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

sortStudents(testCase1);
console.log(testCase1);
