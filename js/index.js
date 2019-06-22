window.onload=function () {
    
    let ys=document.getElementById("geren")
     ys.onmouseenter=function () {
         ys.style.color='red'
     }
     ys.onmouseleave=function () {
         ys.style.color='#ffffff'
     }



   let tablist=document.querySelectorAll('.tabtext li')

             tablist.forEach(function (elem,index) {
                 elem.onmouseenter=function () {
                  for (let i=0;i<tablist.length;i++) {
                      tablist[i].classList.remove('hot')
                  }
                   this.classList.add('hot')
               }

             })  
 let  underline=document.querySelectorAll('.diarylist li')

     underline.forEach(function (elem,index) {
         elem.onclick=function () {
             for (let i=0;i<tablist.length;i++) {
                underline[i].classList.remove('yi')
             }
             this.classList.add('yi')
         }
     })
  let right=document.querySelector('.rightbutton img')
  let left=document.querySelector('.leftbutton img')
    let img=document.querySelectorAll('.left li a ')
    let btnli=document.querySelectorAll('.left .btnlist li')
    let w=img[0].offsetWidth;

    let index=0;
    let  current=0;
    let next=0
    let flag=true
    let flag1=true
    right.onclick=function () {
        if (!flag){
            return;
        }
        flag=false
      next++;
        if (next==img.length){
            next=0
        }
        img[next].style.left=w+'px'
        animate(img[current],{left:-w})
        btnli[current].classList.remove('cold')
        btnli[next].classList.add('cold')
        animate(img[next],{left:0},function () {
           flag=true
            return flag
        })
        current=next

    }
    left.onclick=function () {
        if (!flag1){
            return;
        }
        flag1=false;
        next--;
        if (next<0){
            next=img.length-1
        }
        img[next].style.left=-w+'px';
        animate(img[current],{left:w});
        btnli[current].classList.remove('cold');
        btnli[next].classList.add('cold');
        animate(img[next],{left:0},function () {
            flag1=true;
            return flag1;
        });
        current=next

    }


    // right.onclick=function () {
    //     index++;
    //      if (index==img.length){
    //          index=0;
    //      }
    //     img.forEach(function (ele) {
    //         ele.style.zIndex='2'
    //     })
    //     btnli.forEach(function (elem) {
    //         elem.classList.remove('cold')
    //     })
    //         btnli[index].classList.add('cold')
    //     img[index].style.zIndex='888'
    //
    // }
    //
    // left.onclick=function () {
    //
    //     img.forEach(function (ele) {
    //         ele.style.zIndex='2'
    //     })
    //     btnli.forEach(function (elem) {
    //         elem.classList.remove('cold')
    //     })
    //     btnli[index].classList.add('cold')
    //
    //     img[index].style.zIndex='888'
    //
    //
    // }

    //
    // for (let i=0;i<btnli.length;i++){
    //     btnli[i].onclick=function () {
    //         btnli.forEach(function (elem) {
    //             elem.classList.remove('cold')
    //         })
    //         img.forEach(function (ele) {
    //             ele.style.zIndex='2'
    //         })
    //         this.classList.add('cold')
    //         img[i].style.zIndex='999'
    //         console.log(img[i]);
    //     }
    // }
    let cotrol=document.querySelector('.left')
    let ti=setInterval(right.onclick,3000)
    cotrol.onmouseenter=function () {
        clearInterval(ti)
    }
    cotrol.onmouseleave=function () {
        ti=setInterval(right.onclick,3000)
    }

   let flag2=true
    for (let i=0;i<btnli.length;i++){

        btnli[i].onclick=function () {
            if (!flag2){
                return;
            }
            flag2=false
            if (next==i) {
                return
            }
             next=i
            if (next>current){
                img[next].style.left=w+'px'
                animate(img[current],{left:-w})
                animate(img[next],{left:0},function () {
                    flag2=true
                    return flag2
                })
            }else {
                img[next].style.left=-w+'px'
                animate(img[current],{left:w})
                animate(img[next],{left:0},function () {
                    flag2=true
                    return flag2
                })
            }

            btnli[current].classList.remove('cold')
            btnli[next].classList.add('cold')
            current=next
        }

    }
    let viewH=window.innerHeight;
    let imgs=document.querySelectorAll('.delay')
    let positionArr=[]
    imgs.forEach(function (ele) {
        let parent=ele.offsetParent;
        positionArr.push(parent.offsetTop+ele.offsetTop)
    });

    window.onscroll=function () {

        let scrolltop=document.documentElement.scrollTop
        console.log(scrolltop);
        for (let i=0;i<positionArr.length;i++){
            if (scrolltop+viewH>=positionArr[i]+100){

                      imgs[i].src=imgs[i].getAttribute('aa')

         }
    }

     }

}
