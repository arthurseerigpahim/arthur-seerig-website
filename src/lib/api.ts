interface ContactForm {
  firstName: string;
  lastName: string;
  email: string;
  purpose: string;
  message: string;
}

export async function submitContactForm(data: ContactForm) {
  // This is a placeholder for the actual API call
  // Replace with your actual API endpoint
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Failed to submit form');
  }

  return response.json();
}

export async function sendChatMessage(message: string) {
  // This is a placeholder for the chatbot API call
  // Replace with your actual chatbot API endpoint
  const response = await fetch('/api/chat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ message }),
  });

  if (!response.ok) {
    throw new Error('Failed to send message');
  }

  return response.json();
}