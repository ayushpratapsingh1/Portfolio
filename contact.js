// Description: Contact form submission using Web3Forms API.
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const statusMessage = document.getElementById('statusMessage');
    const submitButton = document.getElementById('submitButton');

    form.addEventListener('submit', async function(e) {
        e.preventDefault(); // Prevent page reload

        // Loading state
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';
        statusMessage.classList.add('hidden');

        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();
            if (response.ok) {
                statusMessage.textContent = 'Your message was sent successfully!';
                statusMessage.classList.remove('hidden', 'text-red-500');
                statusMessage.classList.add('text-green-500');
                form.reset();
            } else {
                throw new Error(result.message || 'Form submission failed.');
            }
        } catch (error) {
            console.error('Error:', error);
            statusMessage.textContent = 'Something went wrong. Please try again later.';
            statusMessage.classList.remove('hidden', 'text-green-500');
            statusMessage.classList.add('text-red-500');
        } finally {
            submitButton.disabled = false;
            submitButton.textContent = 'Send Message';
            statusMessage.classList.remove('hidden');
        }
    });
});

