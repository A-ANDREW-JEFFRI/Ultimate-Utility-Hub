document.querySelector(".click_para").addEventListener("click",fun);
function fun()
{
    let a=document.querySelector(".click_para").innerHTML;
    let b=document.querySelector(".input_password");
    if(a=="Show")
    {
        document.querySelector(".click_para").innerHTML="Hide";
        b.type="text";
    }
    else
    {
        document.querySelector(".click_para").innerHTML="Show";
        b.type="password";
    }
}