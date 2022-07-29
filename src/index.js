const header = document.getElementById('header');
const email = document.getElementById('email');
console.log('email', email);
const requiredEmail = document.getElementsByClassName('form__input_required');
console.log('requiredEmail', requiredEmail);

function headerHandler() {
  if (window.scrollY > header.offsetHeight) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
}

function requiredHandleOnBlur(e) {
  console.log('e', e.target);
  const { value } = e.target;
  if (!value) {
    requiredEmail.classList.remove('visually-hidden');
  }
}
function requiredHandlerOnFocus() {
  requiredEmail.classList.add('visually-hidden');
}
email.addEventListener('click', requiredHandleOnBlur);
email.addEventListener('blur', requiredHandleOnBlur);
email.addEventListener('focus', requiredHandlerOnFocus);

window.onscroll = function () {
  headerHandler();
};
