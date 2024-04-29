let act=["Send an email update to the team: 9 a.m."]
let cot=["Call the design agency to finalize mockups: 11 a.m."]
let at = []
for(var i=0;i<act.length;i++){
    at.push(act[i])
}
for(var i=0;i<cot.length;i++){
    at.push(cot[i])
}
function addTask(){
        var ta=document.getElementById("Tasks")
        var u=ta.value
        if(u!=""){  
            at.push(u)
            act.push(u)
        }
}
function dispAlltask(){
    var e= document.getElementById("content")
    e.innerHTML=""
    for(var i=0;i<at.length;i++){
        e.innerHTML+=(i+1)+':'+' '+at[i]+'<br>'
    }
}
function dispActivetask(){
    var e= document.getElementById("content")
    e.innerHTML=""
    for(var i=0;i<act.length;i++){
        e.innerHTML+=(i+1)+':'+' '+act[i]+'<br>'
    }
}
function dispCompletedtask(){
    var e= document.getElementById("content")
    e.innerHTML=""
    for(var i=0;i<cot.length;i++){
        e.innerHTML+=(i+1)+':'+' '+cot[i]+'<br>'
    }
}
function dispTaskcount(){
    var e= document.getElementById("content")
    e.innerHTML=""
    e.innerHTML=at.length
}