interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 22,
  location: 'Dallas'
};

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Smith',
  age: 24,
  location: 'Houston'
};

const studentsList: Student[] = [student1, student2];

function renderTable(): void {
  const table = document.createElement("table");
  const tbody = document.createElement("tbody");

  studentsList.forEach((student) => {
    const row = tbody.insertRow();
    const firstNameCell = row.insertCell();
    const lastNameCell = row.insertCell();
    const ageCell = row.insertCell();
    const locationCell = row.insertCell();

    firstNameCell.textContent = student.firstName;
    lastNameCell.textContent = student.lastName;
    ageCell.textContent = student.age.toString();
    locationCell.textContent = student.location;
  });

  table.appendChild(tbody);
  document.body.appendChild(table);
}

renderTable();
