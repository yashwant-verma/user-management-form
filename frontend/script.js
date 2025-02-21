const API_URL ="http://localhost:3000/users"
document.getElementById("userForm").addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent page refresh

    const name = document.getElementById("name").value;
    const dob = document.getElementById("dob").value;
    const contact = document.getElementById("contact").value;
    const fatherName = document.getElementById("fatherName").value;
    const motherName = document.getElementById("motherName").value;
    const address = document.getElementById("address").value;
    const email = document.getElementById("email").value;
    const college = document.getElementById("college").value;
    const messageBox = document.getElementById("message"); // Message display area

    messageBox.textContent = ""; // Clear previous message
    messageBox.style.color = "black"; 

    if (!name || !dob || !contact || !fatherName || !motherName || !address || !email || !college) {
        messageBox.textContent = "⚠ Please fill all fields!";
        messageBox.style.color = "red";
        return;
    }

    const userData = { name, dob, contact, fatherName, motherName, address, email, college };

    try {
        const response = await fetch("http://localhost:3000/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData)
        });

        const data = await response.json();
        
        if (response.ok) {
            messageBox.textContent = data.message; // Show success message
            messageBox.style.color = "green";
            document.getElementById("userForm").reset(); // Clear form fields
        } else {
            messageBox.textContent = "❌ Failed to submit the form. Try again.";
            messageBox.style.color = "red";
        }
    } catch (error) {
        console.error("Error:", error);
        messageBox.textContent = "❌ Error submitting the form.";
        messageBox.style.color = "red";
    }
});
