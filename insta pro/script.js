var btn = document.querySelector("button")
var h5 = document.querySelector("h5")



var flag = 0
btn.addEventListener("click",function(){
    if(flag==0){
        h5.innerHTML = "Friends"
        h5.style.color ="blue"
        console.log("clicked")
        btn.innerHTML="Remove"
        btn.style.backgroundColor ="white"
        flag = 1
    }
    else{
        h5.innerHTML = "Stranger"
        h5.style.color = "red"
        console.log("clicked again")
        btn.innerHTML = "Add Friend"
        btn.style.backgroundColor ="gray"
        flag = 0
    }
})