alert("Hozir siz uchta son kiritasiz va men sizga ulardan o'rtanchasini aytaman ")
var a = +prompt("Birinchi sonni kiriting")
var b = +prompt("Ikkinchi sonni kiriting")
var c = +prompt("Uchinchi sonni kiriting")
if(a<b && b<c){
    alert("o'rtancha son "+ b )
}
else if(b<a && a<c){
    alert("o'rtancha son "+a)
}
else if(b<c && c<a){
    alert("o'rtancha son "+c)
}
else if(a==b&& b>c){
    alert("Birinchi va ikkinchi sonlar bir biriga teng va ular uchinchisidan katta")
}
else if(a==b&& b<c){
    alert("Birinchi va ikkinchi sonlar bir biriga teng va ular uchinchisidan kichik")
}

else if(a===b && b===c && a===c){
    alert("hammasi teng")
}
else if(isNaN(a)&& !isNaN(b)&&!isNaN(c)){
    alert("Birinchi son raqam emas ")
}
else if(!isNaN(a)&& isNaN(b)&&!isNaN(c)){
    alert("Ikkinchi son raqam emas ")
}
else if(!isNaN(a)&& !isNaN(b)&&isNaN(c)){
    alert("uchinchi son raqam emas ")
}
else if(isNaN(a)&& isNaN(b)&&!isNaN(c)){
    alert("birinchi va ikkinchi son raqam emas ")
}
else if(!isNaN(a)&& isNaN(b)&&isNaN(c)){
    alert("ikkinchi va uchinchi son raqam emas ")
}
else if(isNaN(a)&& !isNaN(b)&&isNaN(c)){
    alert("birinchi va uchinchi son raqam emas ")
}
else(alert("nimadur hato ketdi"))
