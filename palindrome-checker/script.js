const input = document.getElementById('pal');
const btn = document.getElementById('btn');

function check_palindrome(string)
{
    // reverse string
    let rev_string = string.split("").reverse().join("");
    if (rev_string === string)
        return true;
    return false;
}

btn.addEventListener('click', () => {
    const string = input.value;
    if (string === '')
    {
        alert('Enter a non-empty string');
        input.value = '';   //reset the input box
        return;
    }
    if (check_palindrome(string))
        alert('Palindrome');
    else
        alert('Not a Palindrome');
    input.value = '';   //reset the input box
})