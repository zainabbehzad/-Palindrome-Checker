let input = document.querySelector(".input");
let button = document.querySelector(".button");
let p = document.querySelector(".text");

button.addEventListener("click", checkPalindrome);

function checkPalindrome(){
    let filteredInput = input.value.replace(/[^a-z0-9]/ig,
        "");
    filteredInput = filteredInput.toLowerCase();

    let reverseInput = filteredInput.split("").reverse().
    join("");
    if(input.value == ""){
        input.placeholder = "Please enter data";
        return;
    }
    p.style.display = "block";
    if(filteredInput == reverseInput){
        p.innerHTML = `<span class="palindrome">"$
        {filteredInput}"</span> is a Palindrome.`;
    }

    else {
        p.innerHTML = `<span class="palindrome">"$
        {filteredInput}"</span> in not a Palindrome.`;
    }
}