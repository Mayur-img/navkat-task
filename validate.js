const form = document.getElementById('form');
const name = document.getElementById('name');
const addr = document.getElementById('address');
const gender = document.getElementById('gender');
const contact = document.getElementById('contact');
const email = document.getElementById('email');
const dob = document.getElementById('dob');

form.addEventListener('submit', e =>{
    e.preventDefault();

    validateInputs();
});

const seterror = (element,message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}
const validateInputs = () => {
    const namevalue = name.value.trim();
    const addrvalue = addr.value.trim();
    const gendervalue = gender.value.trim();
    const contactvalue = contact.value.trim();
    const emailvalue = email.value.trim();
    const dobvalue = dob.value.trim();
    // const usernamevalue = name.value.trim();
    
    if(namevalue === ''){
        seterror(name,'Username is Required');
    }
    else{
        setSuccess(name);
    }

    // if(addrvalue === ''){
    //     seterror(addr,'At Least one Area Should be Selected');
    // }

    // else{
    //     setSuccess(addr);
    // }

    // if(contactvalue == ''){
    //     seterror(contact,'Contact is Required');
    // }
    // else{
    //     setSuccess(contact);
    // }
};