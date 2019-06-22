window.onload=function() {
    //获取输入的字数
    let text = document.querySelector("textarea")

    let shuru =document.querySelector('#yishuru')
    let haikeyi=document.querySelector('#haikeyi')

    text.onkeyup=function () {

        let value=this.value

        shuru.innerText=value.length
       haikeyi.innerText=100-value.length

   }
//   点击头像事件
    let headimg=document.querySelectorAll('.image img')

    let previmg=0
    for (let i=0;i<headimg.length;i++){
        headimg[i].onclick=function () {
            headimg[previmg].style.opacity='0.5'
            this.style.opacity='1'
            previmg=i
        }
    }
// 提交事件
    let tijiao=document.querySelector('.input')
    let messagelist=document.querySelector('.messageList')
    let  username=document.querySelector('#name')
    let date=new Date().toISOString().substr(0,10)

    tijiao.onclick=function () {
        let imgs=headimg[previmg].src;
        let html=`
             <ul class="messageList">
                <li>
                    <div class="ask">
                        <a href=""><img  src="${imgs}" alt=""></a>
                        <p> ${username.value}</p>
                        <p>${text.value}</p>
                        <p class="date">${date}</p>
                    </div>   
                </li>
            </ul>
             `;
              messagelist.innerHTML=html+messagelist.innerHTML

            return false
      }


}
