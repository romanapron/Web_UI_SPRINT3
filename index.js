// Variant1
// document.getElementById("User1").append(list.lastElementChild);
// document.getElementById("User2").append(list.lastElementChild);

// Variant2
let listS=document.getElementsByTagName('ul')[0];
temp=listS.getElementsByTagName('li')[1].innerHTML;
listS.getElementsByTagName('li')[1].innerHTML=listS.getElementsByTagName('li')[4].innerHTML
listS.getElementsByTagName('li')[4].innerHTML=temp
temp_Sec=listS.getElementsByTagName('li')[2].innerHTML;
listS.getElementsByTagName('li')[2].innerHTML=listS.getElementsByTagName('li')[4].innerHTML
listS.getElementsByTagName('li')[4].innerHTML=temp_Sec

