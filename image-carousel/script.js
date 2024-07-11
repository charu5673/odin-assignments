let imageAdd1='./images/image',imageAdd2='.jpg',images=[];
let prevIndex=0;
let currentIndex=0;
for(var i=0;i<8;i++)
{
    images.push(imageAdd1+i+imageAdd2);
}
document.querySelector(".left").addEventListener("click",function(e){
    prevIndex=currentIndex;
    if(currentIndex==0)
    {
        currentIndex=7;
    }
    else
    currentIndex--;
    let d=document.querySelector(".image-display").firstElementChild;
    d.src=images[currentIndex];
    updateStatus();
});
document.querySelector(".right").addEventListener("click",function(e){
    prevIndex=currentIndex;
    if(currentIndex==7)
    {
        currentIndex=0;
    }
    else
    currentIndex++;
    let d=document.querySelector(".image-display").firstElementChild;
    d.src=images[currentIndex];
    updateStatus();
});

function updateStatus()
{
    document.querySelector(".carousel-status").children[prevIndex].classList.remove("current");
    document.querySelector(".carousel-status").children[currentIndex].classList.add("current");
}

let c=document.querySelector(".carousel-status").children;
for(var i=0;i<c.length;i++)
{
    c[i].addEventListener("click",function(e){
        prevIndex=currentIndex;
        currentIndex=parseInt(e.target.id);
        let d=document.querySelector(".image-display").firstElementChild;
        d.src=images[currentIndex];
        updateStatus();
    });
}