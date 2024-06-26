export const sendEmail = async (formData) => {
    try {
        const response = await fetch('https://gilles-de-peretti-portfolio.onrender.com/send-email', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ formData: formData })
        });

        const responseData = await response.json();
        return responseData.message;
    } catch (error) {
        console.error('Error sending message:', error.message);
        return 'Error sending message. Please try again later.';
    }
}
