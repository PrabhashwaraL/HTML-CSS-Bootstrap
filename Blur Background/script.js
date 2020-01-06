// let x = 0;
// function popup() {
//     if( x == 0) {
//         document.getElementById('read-more').style.display = 'block';
//         x = 1;
//         // document.getElementById('blurred-area').style.display = 'none';
//     } else {
//         document.getElementById('read-more').style.display = 'none';
//         x = 0;
//         // document.getElementById('blurred-area').style.display = 'block';
//     }
// }

function toggle() {
    let blur = document.getElementById('main-area');
    blur.classList.toggle('active');
    let removeBlur = document.getElementById('read-more');
    removeBlur.classList.toggle('active');
}