// document.getElementById("loginForm").addEventListener("submit", function (e) {
//   e.preventDefault();

//   const email = document.getElementById("loginEmail").value;
//   const password = document.getElementById("loginPassword").value;
//   const role = document.getElementById("loginRole").value;

//   if (email && password && role) {
//     // Simulated login
//     if (role === "student") {
//       window.location.href = "student-dashboard.html";
//     } else if (role === "teacher") {
//       window.location.href = "teacher-dashboard.html";
//     }
//   } else {
//     alert("Please fill all fields");
//   }
// });
document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const role = document.getElementById("role").value;

    // This is where you'll integrate real authentication later.
    if (email && password && role) {
        alert(`Logging in as ${role}...`);
        if (role === "student") {
            window.location.href = "student-dashboard.html";
        } else if (role === "teacher") {
            window.location.href = "teacher-dashboard.html";
        }
    } else {
        alert("Please fill in all fields.");
    }
});