let email=document.querySelector("#email_field");
let country=document.querySelector("#country_field");
let zipcode=document.querySelector("#zipcode_field");
let password=document.querySelector("#password_field");
let confirmb=document.querySelector("#confirm_field");

email.addEventListener("input",function(){
    if(email.validity.valid)
    email.setCustomValidity("");
    else if(email.validity.valueMissing)
    email.setCustomValidity("This is required!");
    else
    email.setCustomValidity("Enter a valid email!");
});

country.addEventListener("input",function(){
    if(country.validity.valid)
    country.setCustomValidity("");
    else if(country.validity.valueMissing)
    country.setCustomValidity("This is required!");
    else
    country.setCustomValidity("Enter a valid country name!");
});

zipcode.addEventListener("input",function(){
    if(zipcode.validity.valid)
    zipcode.setCustomValidity("");
    else if(zipcode.validity.valueMissing)
    zipcode.setCustomValidity("This is required!");
    else if(zipcode.validity.rangeOverflow||zipcode.validity.rangeUnderflow)
    zipcode.setCustomValidity("Zipcode must have 6 digits!");
    else
    zipcode.setCustomValidity("Enter a valid zipcode!");
});

password.addEventListener("input",function(){
    if(!(password.value.includes('!')||password.value.includes('@')||password.value.includes('#')||password.value.includes('$')||password.value.includes('%')||password.value.includes('^')||password.value.includes('&')||password.value.includes('*')||password.value.includes('(')||password.value.includes(')')||password.value.includes('+')||password.value.includes('_')||password.value.includes('=')))
    {
        password.setCustomValidity("Must contain a special character!");
    }
    else if(!(password.value.includes('1')||password.value.includes('2')||password.value.includes('3')||password.value.includes('4')||password.value.includes('5')||password.value.includes('6')||password.value.includes('7')||password.value.includes('8')||password.value.includes('9')||password.value.includes('0')))
    {
        password.setCustomValidity("Must contain a number!");
    }
    else if(password.validity.valid)
    password.setCustomValidity("");
    else if(password.validity.valueMissing)
    password.setCustomValidity("This is required!");
    else
    password.setCustomValidity("Enter a valid password!");
});

confirmb.addEventListener("input",function(){
    if(confirmb.value!=password.value)
    {
        confirmb.setCustomValidity("Passwords must match!");
    }
    else if(confirmb.validity.valueMissing)
    confirmb.setCustomValidity("This is required!");
    else
    confirmb.setCustomValidity("Enter a valid password!");
});

document.querySelector("button").addEventListener("click",function(e){
    let flag=false;
    document.querySelectorAll("input").forEach((i)=>{
        if((!i.validity.valid)||i.validationMessage!="")
        {
            flag=true;
            i.reportValidity();
        }
    });
    if(flag)
    e.preventDefault();
});