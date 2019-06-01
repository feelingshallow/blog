// window.onload=function() {
//     let right = document.querySelector('.rightbutton img')
//     let left = document.querySelector('.leftbutton img')
//     let img = document.querySelectorAll('.left li a ')
//     let btnli = document.querySelectorAll('.left .btnlist li')
//     let w = img[0].offsetWidth;
//     let index = 0;
//     let current = 0, next = 0
//
//     right.onclick = function () {
//         next++
//         if (next == img.length) {
//             next = 0
//         }
//         img[next].style.left = w + 'px'
//         animate(img[current], {left: -w})
//         animate(img[next], {left: 0})
//         current = next
//     }
//     left.onclick = function () {
//         next--
//         if (next < 0) {
//             next = img.length - 1
//         }
//         img[next].style.left = -w + 'px'
//         animate(img[current], {left: w})
//         animate(img[next], {left: 0})
//         current = next
//     }
// }