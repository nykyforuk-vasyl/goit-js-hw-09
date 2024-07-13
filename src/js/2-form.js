let formData = { email: "", message: "" };

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageTextarea = form.querySelector('textarea[name="message"]');

// Завантаження даних з локального сховища при завантаженні сторінки
document.addEventListener('DOMContentLoaded', () => {
  const savedData = localStorage.getItem('feedback-form-state');
  if (savedData) {
    formData = JSON.parse(savedData);
    emailInput.value = formData.email;
    messageTextarea.value = formData.message;
  }
});

form.addEventListener('submit', handleFormSubmit);
form.addEventListener('input', handleFormInput);

function handleFormSubmit(event) {
  event.preventDefault();

  // Перевірка заповнення всіх полів
  if (formData.email === "" || formData.message === "") {
    alert('Заповніть, будь ласка, всі поля!');
    return;
  }

  // Виведення даних у консоль
  console.log('Form Data:', formData);

  // Очищення локального сховища, об’єкта formData і полів форми
  localStorage.removeItem('feedback-form-state');
  formData = { email: "", message: "" };
  event.currentTarget.reset();
}

function handleFormInput(event) {
  const { name, value } = event.target;
  formData[name] = value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}
