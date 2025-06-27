document.getElementById("contactForm").addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent form from submitting

      // Clear all previous errors
      document.getElementById("nameError").textContent = "";
      document.getElementById("emailError").textContent = "";
      document.getElementById("messageError").textContent = "";

      let valid = true;

      // Name Validation
      const name = document.getElementById("name").value.trim();
      if (name === "") {
        document.getElementById("nameError").textContent = "Name is required.";
        valid = false;
      }

      // Email Validation
      const email = document.getElementById("email").value.trim();
      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (email === "") {
        document.getElementById("emailError").textContent = "Email is required.";
        valid = false;
      } else if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent = "Enter a valid email address.";
        valid = false;
      }

      // Message Validation
      const message = document.getElementById("message").value.trim();
      if (message === "") {
        document.getElementById("messageError").textContent = "Message is required.";
        valid = false;
      }

      if (valid) {
        alert("Form submitted successfully!");
        // You can replace this alert with actual form submission logic (e.g. AJAX)
        document.getElementById("contactForm").reset();
      }
    });