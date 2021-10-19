// LAB 4.1

// const button = document.querySelector('button');
// console.log(button);
// button.addEventListener('click', () => alert('1'));  // (1)
// button.removeEventListener('click', () => alert('1')); // (2)
// button.onclick = () => alert(2); // (3)

// LAB 4.2

// const submit = document.querySelector('button');
// console.log(submit);

// submit.onclick = function () {
//     alert('Form is submitted');
// }

// function a() {
//     alert('Form is submitted');
// }
// submit.addEventListener('click', a);

// submit.removeEventListener('click', a);
// submit.onclick = null;

// LAB 4.3

// const submit = document.querySelector('form button');

// console.log(submit);

// function a() {
//     alert('Form is submitted');
// }

// submit.addEventListener('click', a);


// submit.addEventListener('click', event => {
//     event.preventDefault();
//     alert('Redirect to google is disabled');
// });

// LAB 4.4

// const a = document.querySelector('a');

// a.addEventListener('click', event => {
//     if (!confirm('Leave for https://google.com?')) event.preventDefault();
// })

// LAB 4.5

// const nickname = document.querySelector('form input:first-child');
// const job = document.querySelector('form input:last-child');
// // const aaa = document.querySelector('input:last-child');
// console.log(nickname);
// console.log(job);
// // console.log(aaa);

// function alertName() {
//     console.log(event.target.name);
// }

// function myFunction() {
//     var x = document.getElementById("myInput").value;
//     document.getElementById("demo").innerHTML = "You wrote: " + x;
// }
// nickname.addEventListener('click', alertName);

// console.log(nickname.innerHTML);



