import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input');
const message = document.querySelector('textarea');
const STORAGE_KEY = "feedback-form-state";
const feedback = {
  email: email.value,
  message: message.value,
};

form.addEventListener('submit', handleFormSubmit);
form.addEventListener('input', throttle(handleTextareaInput, 500));

populateTextarea();

function handleFormSubmit(ev) {
    ev.preventDefault();
   
    localStorage.setItem(STORAGE_KEY, JSON.stringify(feedback));

    ev.target.reset();

    localStorage.removeItem(STORAGE_KEY);
    email.value = '';
    message.value = '';

    console.log('Feedback:', feedback);
  }
  
  function handleTextareaInput(ev) {
    feedback[ev.target.name] = ev.target.value;
  
    localStorage.setItem(STORAGE_KEY, JSON.stringify(feedback));
  }
  
  function populateTextarea() {
    const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
    
    if (savedMessage) { 
    email.value = savedMessage.email || '';
    message.value = savedMessage.message || '';
  }
}