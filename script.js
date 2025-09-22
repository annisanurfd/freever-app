// --- Tab Switcher ---
const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    contents.forEach(c => c.style.display = "none");

    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).style.display = "block";
  });
});

// --- Data Handling ---
const form = document.getElementById("dataForm");
const tableBody = document.querySelector("#dataTable tbody");

let data = [];

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const nama = document.getElementById("nama").value;
  const umur = document.getElementById("umur").value;
  const alamat = document.getElementById("alamat").value;

  data.push({ nama, umur, alamat });
  renderTable();

  form.reset();
  tabs[1].click(); // otomatis pindah ke tab tabel
});

function renderTable() {
  tableBody.innerHTML = "";
  data.forEach((row, index) => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td contenteditable="true" onblur="updateData(${index}, 'nama', this.innerText)">${row.nama}</td>
      <td contenteditable="true" onblur="updateData(${index}, 'umur', this.innerText)">${row.umur}</td>
      <td contenteditable="true" onblur="updateData(${index}, 'alamat', this.innerText)">${row.alamat}</td>
      <td><button onclick="deleteRow(${index})">Hapus</button></td>
    `;

    tableBody.appendChild(tr);
  });
}

function updateData(index, field, value) {
  data[index][field] = value;
}

function deleteRow(index) {
  data.splice(index, 1);
  renderTable();
}
