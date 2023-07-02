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

function handleFormSubmit(evt) {
    evt.preventDefault();
   
    alertSubmit();
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(feedback));
    console.log('Feedback:', feedback);
    
    evt.target.reset();

    localStorage.removeItem(STORAGE_KEY);
  }
  
  function handleTextareaInput() {
      
    localStorage.setItem(STORAGE_KEY, JSON.stringify({email: email.value,
      message: message.value}));
  }
  
  function populateTextarea() {
    const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
    
    if (savedMessage) {
    email.value = savedMessage.email;
    message.value = savedMessage.message;
   }
  }

const alertSubmit = () => {
  if (email.value === '' || message.value === '') {
    return alert(`Fill in all fields of the form, please`);
  }
}