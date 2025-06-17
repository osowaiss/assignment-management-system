document.getElementById("postForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const type = document.getElementById("assignmentType").value;
  const title = document.getElementById("title").value;
  const desc = document.getElementById("description").value;
  const deadline = document.getElementById("deadline").value;

  if (!type || !title || !desc || !deadline) {
    alert("Please fill all the fields.");
    return;
  }

  const li = document.createElement("li");
  li.innerHTML = `<strong>${type.toUpperCase()}</strong>: ${title} - Due by ${deadline}`;
  document.getElementById("assignmentList").appendChild(li);

  alert("Assignment posted successfully!");
  this.reset();
});
const teacherNotes = [
  "✅ Assignment 1 posted successfully.",
  "📬 5 students have submitted Assignment 1.",
  "⚠️ Portal is still open — consider closing soon.",
  "🕒 Reminder: Deadline for Assignment 2 is in 2 days."
];

const noteList = document.getElementById("teacherNotifications");
teacherNotes.forEach(msg => {
  const li = document.createElement("li");
  li.textContent = msg;
  noteList.appendChild(li);
});



// Portal status toggle
let isPortalOpen = true;

const statusElement = document.getElementById("portalStatus");
const toggleButton = document.getElementById("togglePortalBtn");

toggleButton.addEventListener("click", function () {
  isPortalOpen = !isPortalOpen;

  if (isPortalOpen) {
    statusElement.innerHTML = 'Current Status: <strong style="color: green;">OPEN ✅</strong>';
    toggleButton.textContent = "Close Portal";
  } else {
    statusElement.innerHTML = 'Current Status: <strong style="color: red;">CLOSED ❌</strong>';
    toggleButton.textContent = "Open Portal";
  }
});
