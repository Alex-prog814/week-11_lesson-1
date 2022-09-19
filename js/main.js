// function func(){
//     console.log('CLICKED');
// };

// 2-способ
// let btn = document.querySelector('button');
// console.log(btn);
// btn.onclick = () => alert('BTN CLICKED');

// 3-способ
// addEventListener(type of event, callback func)

// btn.addEventListener('click', () => {
    //     console.log('HELLO');
    // });
    
    // btn.addEventListener('click', () => {
        //     console.log('HELLO2');
        // });

// let btn = document.querySelector('button');
// function handler() {
//     console.log('Hello, JS!');
// };
// btn.addEventListener('click', handler);
// btn.removeEventListener('click', handler);

// window.addEventListener('offline', () => {
//     console.log('Нет доступа к интернету');
// });

// window.addEventListener('online', () => {
//     console.log('Есть доступ к интернету');
// });

let btn = document.querySelector('button');
// btn.addEventListener('click', (event) => {
//     console.log(event.target.id);
// });

// document.addEventListener('mousemove', (e) => {
//     // console.log(e.clientX, e.clientY);
//     console.log(e);
// });

// document.addEventListener('mousedown', (e) => {
//     console.log(e);
// });

// document.addEventListener('mouseup', (e) => {
//     console.log(e);
// });

// document.addEventListener('dblclick', (e) => {
//     console.log(e);
// });

// document.addEventListener('contextmenu', (e) => {
//     console.log(e);
// });




// ('click', (e) => {
//     console.log('hello');
// })

// let inp = document.querySelector('input');
// console.log(inp);
// inp.addEventListener('input', (e) => {
//     console.log(e.target.value);
// });

// inp.addEventListener('focus', (e) => {
//     console.log(e.target);
// });

// inp.addEventListener('change', (e) => {
//     console.log(e.target.value);
// });

// inp.addEventListener('paste', (e) => {
//     // console.log(e.target.value);
//     console.log('Нельзя добавлять скопированное!');
// });

// inp.addEventListener('copy', (e) => {
//     // console.log(e.target.value);
//     console.log('Нельзя копировать!');
// });

