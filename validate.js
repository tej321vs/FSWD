document.getElementById("studentForm").addEventListener("submit", function(e) {
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value;
  let age = document.getElementById("age").value;

  // Name check
  if (name.length < 3) {
    alert("Name must be at least 3 characters long");
    e.preventDefault();
    return;
  }

  // Email check
  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    alert("Invalid email format");
    e.preventDefault();
    return;
  }

  // Password check
  if (password.length < 6) {
    alert("Password must be at least 6 characters long");
    e.preventDefault();
    return;
  }

  // Age check
  if (age && (age < 10 || age > 100)) {
    alert("Age must be between 10 and 100");
    e.preventDefault();
  }
});
