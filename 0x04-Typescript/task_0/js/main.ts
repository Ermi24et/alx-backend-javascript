interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Ermias",
    lastName: "Teklehaymanot",
    age: 24,
    location: "Addis Abeba"
};

const student2: Student = {
    firstName: "John",
    lastName: "Daniel",
    age: 30,
    location: "Dubai"
};

// Array containing the students
const studentsList: Student[] = [student1, student2];

function renderStudentsTable() {
    const table = document.createElement("table");
    const headerRow = table.insertRow();
    const header1 = document.createElement("th");
    const header2 = document.createElement("th");
    header1.textContent = "First Name";
    header2.textContent = "Location";
    headerRow.appendChild(header1);
    headerRow.appendChild(header2);

    studentsList.forEach(student => {
        const row = table.insertRow();
        const cell1 = row.insertCell();
        const cell2 = row.insertCell();
        cell1.textContent = student.firstName;
        cell2.textContent = student.location;
    });

    document.body.appendChild(table);
}

renderStudentsTable();