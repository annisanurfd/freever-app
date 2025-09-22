const formSection = document.getElementById("formSection");
const tableSection = document.getElementById("tableSection");
const patientForm = document.getElementById("patientForm");
const tableBody = document.querySelector("#patientTable tbody");

let patients = [];

// Toggle View
function showForm() {
  formSection.style.display = "block";
  tableSection.style.display = "none";
}
function showTable() {
  formSection.style.display = "none";
  tableSection.style.display = "block";
}

// Save Patient Data
patientForm.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const dob = document.getElementById("dob").value;
  const age = document.getElementById("age").value;
  const gender = document.querySelector("input[name='gender']:checked").value;

  patients.push({ name, dob, age, gender });
  renderTable();

  patientForm.reset();
  showTable();
});

// Render Table
function renderTable() {
  tableBody.innerHTML = "";
  patients.forEach((p, index) => {
    const row = `
      <tr>
        <td>${p.name}</td>
        <td>${p.dob}</td>
        <td>${p.age}</td>
        <td>${p.gender}</td>
        <td><button onclick="deletePatient(${index})">Delete</button></td>
      </tr>
    `;
    tableBody.innerHTML += row;
  });
}

// Delete Patient
function deletePatient(index) {
  patients.splice(index, 1);
  renderTable();
}
