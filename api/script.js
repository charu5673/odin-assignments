const b=document.querySelector(".fetch");
const s=document.querySelector(".search");
let img = document.querySelector('img');
fetch('https://api.giphy.com/v1/gifs/translate?api_key=ZUc6DEWWWxtiI7kr8ifvPmfOfpPFA8g7&s=cats', {mode: 'cors'})
.then(function(response) {
  return response.json();
})
.then(function(response) {
    img.src = response.data.images.original.url;
});
b.addEventListener("click",()=>{
    fetch('https://api.giphy.com/v1/gifs/translate?api_key=ZUc6DEWWWxtiI7kr8ifvPmfOfpPFA8g7&s=cats', {mode: 'cors'})
.then(function(response) {
  return response.json();
})
.then(function(response) {
    img.remove();
    img=document.createElement("img");
    img.src = response.data.images.original.url;
    document.querySelector("body").insertBefore(img,b);
});
});

s.addEventListener("click",function(){
let v=document.querySelector("input").value;
if(v!=null&&v!=undefined&&v!="")
{
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=ZUc6DEWWWxtiI7kr8ifvPmfOfpPFA8g7&s=${v}`, {mode: 'cors'})
.then(function(response) {
  return response.json();
})
.then(function(response) {
    if(response.data.length!=0)
    {
    img.remove();
    img=document.createElement("img");
    img.src = response.data.images.original.url;
    document.querySelector("body").insertBefore(img,b);
    }
});
}
});