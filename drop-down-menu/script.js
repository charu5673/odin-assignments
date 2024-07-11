function initializeDropDown(mainButton)
{
    for(var i=0;i<mainButton.nextElementSibling.children.length;i++)
    {
        mainButton.nextElementSibling.children[i].hidden=true;
        mainButton.nextElementSibling.children[i].style.zIndex="10";
        mainButton.nextElementSibling.children[i].style.positon="fixed";
    }
    mainButton.addEventListener("click",function(e){
        for(var i=0;i<mainButton.nextElementSibling.children.length;i++)
        {
            mainButton.nextElementSibling.children[i].hidden=false;
        }
        e.stopPropagation();
    });
    document.addEventListener("click",function(e){
        if(e.target!=mainButton)
        initializeDropDown(mainButton);
    });
}
initializeDropDown(document.querySelector(".drop-down-button"));