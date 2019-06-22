$(function () {
    let  current=0;
    let next=0
    let flag=true;
    let flag1=true;
     let leftbtn=$('.leftbutton img');
     let rightbtn=$('.rightbutton img');
     let img=$('.left a ');
     let btnli=$('.btnlist li');
    let w=img[0].offsetWidth;
    rightbtn.on('click',function () {
        if (!flag){
            return;
        }
        flag=false
        next++;
        if (next==img.length){
            next=0
        }
        img[next].style.left=w+'px'
        $(  img[current]).animate({left:w})
        btnli.eq(current).removeClass('cold').end().eq([next]).addClass('cold')
             current++;
         $(img[next]).animate({left:0},function () {
             flag=true
             return flag
         })
        current=next
    });
     leftbtn.on('click',function () {
         if (!flag1){
             return;
         }
         flag1=false;
         next--;
         if (next<0){
             next=img.length-1
         }
         img[next].style.left=w+'px';
         $(  img[current]).animate({left:w});
         btnli.eq(current).removeClass('cold').end().eq([next]).addClass('cold')
         current++;
         $(img[next]).animate({left:0},function () {
             flag1=true;
             return flag1
         })
         current=next
     })
     let t=setInterval(function () {
         rightbtn.triggerHandler('click')
     },1000)
         let _left= $('.left')
    _left .mouseenter(function () {
          clearInterval(t)
     })
    _left.mouseleave(function () {
        setInterval(function () {
            rightbtn.triggerHandler('click')
        },1000)
    })

})