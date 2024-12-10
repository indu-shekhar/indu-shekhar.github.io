function sendEmail(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Basic validation
    if (!name || !email || !subject || !message) {
        alert('Please fill in all fields');
        return false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return false;
    }

    // Construct email body
    const emailBody = `
Name: ${name}
Email: ${email}

Message:
${message}`;

    // Create mailto URL
    const mailtoLink = `mailto:your-email@domain.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;

    // Open default email client
    window.location.href = mailtoLink;

    // Reset form
    document.getElementById('contactForm').reset();
    return false;
}