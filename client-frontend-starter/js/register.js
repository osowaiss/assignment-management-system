document.getElementById("role").addEventListener("change", function () {
    const role = this.value;
    const extraFields = document.getElementById("extraFields");

    if (role === "student") {
        extraFields.innerHTML = `
            <label for="roll">Roll Number:</label>
            <input type="text" id="roll" required />
        `;
    } else if (role === "teacher") {
        extraFields.innerHTML = `
            <label for="subject">Subject/Class:</label>
            <input type="text" id="subject" required />
        `;
    } else {
        extraFields.innerHTML = "";
    }
});

document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const role = document.getElementById("role").value;
    alert(`Registration successful as ${role}!`);
    window.location.href = "index.html";
});
