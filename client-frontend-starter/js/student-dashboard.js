// Simulated local storage (temporary)
const submissions = {
  assignment1: null,
  assignment2: null
};

document.getElementById("uploadForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const type = document.getElementById("assignmentType").value;
  const fileInput = document.getElementById("assignmentFile");
  const file = fileInput.files[0];

  if (!type || !file) {
    alert("Please select assignment type and upload a file.");
    return;
  }

  // ✅ Check for duplicate submission
  if (submissions[type]) {
    alert(`You've already submitted ${type}. Duplicate not allowed.`);
    return;
  }

  // ✅ Simulate deadline check (assume deadline for both is tomorrow)
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const now = new Date();

  if (now > tomorrow) {
    alert("Deadline has passed. Submission not allowed.");
    return;
  }

  // ✅ Store submission (simulate)
  submissions[type] = file.name;

  // ✅ Update UI
  const statusList = document.getElementById("statusList");
  const li = document.createElement("li");
  li.textContent = `${file.name} submitted for ${type} ✅`;
  statusList.appendChild(li);

  alert("Assignment uploaded and validated!");
  fileInput.value = "";
});
const notifications = [
  "📢 Assignment 1 has been posted. Check your dashboard.",
  "⏰ Reminder: Assignment 1 deadline is tomorrow!",
  "❌ Duplicate upload detected earlier. Only one submission allowed.",
  "🛑 Portal will close at 11:59 PM today."
];

const notificationList = document.getElementById("studentNotifications");
notifications.forEach(note => {
  const li = document.createElement("li");
  li.className = "notification-item";
  li.innerHTML = `
    <span>${note}</span>
    <button class="close-btn" onclick="this.parentElement.remove()">✖</button>
  `;
  notificationList.appendChild(li);
});


function logout() {
  window.location.href = "index.html";
}
