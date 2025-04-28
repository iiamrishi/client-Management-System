// Dummy client data
const clients = [
  {
    name: "John Doe",
    email: "john@example.com",
    company: "Example Inc.",
    status: "Active",
  },
  {
    name: "Jane Smith",
    email: "jane@example.com",
    company: "Test Corp",
    status: "Pending",
  },
  {
    name: "Alice Brown",
    email: "alice@example.com",
    company: "Tech Solutions",
    status: "Active",
  },
];

let editingIndex = null; // Track whether we're editing or adding

// Function to populate table
function loadClients() {
  const tableBody = document.getElementById("client-table-body");
  tableBody.innerHTML = ""; // Clear before loading

  clients.forEach((client, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${client.name}</td>
      <td>${client.email}</td>
      <td>${client.company}</td>
      <td>${client.status}</td>
      <td>
        <button onclick="viewClient(${index})">View</button>
        <button onclick="editClient(${index})">Edit</button>
        <button onclick="deleteClient(${index})">Delete</button>
      </td>
    `;

    tableBody.appendChild(row);
  });
}

// View client (still simple)
function viewClient(index) {
  alert(`Viewing client: ${clients[index].name}`);
}

// Edit client
function editClient(index) {
  clientModal.style.display = "block";

  document.getElementById("clientName").value = clients[index].name;
  document.getElementById("clientEmail").value = clients[index].email;
  document.getElementById("clientCompany").value = clients[index].company;
  document.getElementById("clientStatus").value = clients[index].status;

  editingIndex = index;
}

// Delete client
function deleteClient(index) {
  if (confirm(`Are you sure you want to delete ${clients[index].name}?`)) {
    clients.splice(index, 1);
    loadClients();
  }
}

// Open/close modal handlers
const addClientBtn = document.getElementById("addClientBtn");
const clientModal = document.getElementById("clientModal");
const closeModalBtn = document.getElementById("closeModalBtn");

addClientBtn.addEventListener("click", () => {
  clientModal.style.display = "block";
  editingIndex = null; // If clicked "Add New", make sure it's fresh
  clientForm.reset();
});

closeModalBtn.addEventListener("click", () => {
  clientModal.style.display = "none";
  editingIndex = null;
  clientForm.reset();
});

// Form submit handler
const clientForm = document.getElementById("clientForm");
clientForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("clientName").value;
  const email = document.getElementById("clientEmail").value;
  const company = document.getElementById("clientCompany").value;
  const status = document.getElementById("clientStatus").value;

  if (editingIndex === null) {
    clients.push({ name, email, company, status });
  } else {
    clients[editingIndex] = { name, email, company, status };
    editingIndex = null;
  }

  loadClients();
  clientModal.style.display = "none";
  clientForm.reset();
});

// Load initial clients
document.addEventListener("DOMContentLoaded", loadClients);
