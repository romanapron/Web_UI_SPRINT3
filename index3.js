let newLine=document.createElement('br');
let button=document.getElementById('button');

button.addEventListener('click',function(){
    document.getElementById('text').innerText+='I was pressed'+'\n'
    console.log('I was pressed');
})
button.addEventListener('mouseover',function(){
    document.getElementById('text').innerText+= 'Mouse on me' + '\n'
    console.log('Mouse on me');
});
button.addEventListener('mouseout',function(){
    document.getElementById('text').innerText+='Mouse is not on me'+ '\n'
    console.log('Mouse is not on me');
});