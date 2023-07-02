import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailEl = document.querySelector('input');
const messageEl = document.querySelector('textarea');
const STORAGE_KEY = "feedback-form-state";
const feedback = {
  email: emailEl.value,
  message: messageEl.value,
};
populateTextarea();

form.addEventListener('submit', handleFormSubmit);
form.addEventListener('input', throttle(handleTextareaInput, 500));


function handleFormSubmit(evt) {
    evt.preventDefault();
   
    alertSubmit();
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(feedback));
    console.log('Feedback:', feedback);
    
    evt.target.reset();

    localStorage.removeItem(STORAGE_KEY);
  }
  
  function handleTextareaInput() {
      
    localStorage.setItem(STORAGE_KEY, JSON.stringify({email: emailEl.value,
      message: messageEl.value}));
  }
  
  function populateTextarea() {
    const feedback = {
      email: emailEl.value,
      message: messageEl.value,
    };
    const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
    
    if (savedMessage) {
      emailEl.value = savedMessage.email;
    messageEl.value = savedMessage.message;
   }
  }

const alertSubmit = () => {
  if (emailEl.value === '' || messageEl.value === '') {
    return alert(`Fill in all fields of the form, please`);
  }
}