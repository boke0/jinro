const jobs={
    normal:{
        text:"村人",
        action:"normal",
        group:"citizen"
    },
    wolf:{
        text:"狼",
        action:"wolf",
        group:"wolfman",
        number:2
    },
    bishop:{
        text:"占い師",
        action:"bishop",
        group:"citizen",
        number:1
    },
    hanter:{
        text:"狩人",
        action:"hanter",
        group:"citizen",
        number:1
    },
    foolman:{
        text:"狂人",
        action:"normal",
        group:"wolfman",
        number:1
    },
    fanatic:{
        text:"狂信者",
        action:"fanatic",
        group:"wolfman",
        number:2
    },
    firefox:{
        text:"妖狐",
        action:"firefox",
        group:"firefox",
        number:1
    },
    immoral:{
        text:"背徳者",
        action:"immoral",
        group:"firefox",
        number:1
    },
    freemaison:{
        text:"フリーメイソン",
        action:"freemaison",
        group:"citizen",
        number:2
    }
}
const group={
    citizen:"村人",
    wolfman:"人狼",
    firefox:"妖狐"
}
window.onload=()=>{
    document.querySelector("#wrapper").appendChild(document.importNode(document.querySelector("#top").content,true));
}
function changeScene(sceneName){
    document.querySelector("#wrapper").innerHTML="";
    document.querySelector("#wrapper").appendChild(document.importNode(document.querySelector("#"+sceneName).content,true));
}
Array.prototype.mode=function(){
    var counter={};
    var maxValue=null;
    this.forEach(e=>{
        if(!counter[e]){
            counter[e]=1;
        }else{
            counter[e]++;
        }
    });
    Object.keys(counter).forEach(e=>{
        if(maxValue==null) maxValue=e;
        if(counter[maxValue]<counter[e]) maxValue=e;
    });
    return maxValue;
}
Array.prototype.j=function(){
    let i=0;
    this.forEach(e=>{
        if(jobs[e.job].group=="wolfman"&&e.died!=true){
            i++;
        }
    });
    return i;
}

Array.prototype.m=function(){
    let i=0;
    this.forEach(e=>{
        if(jobs[e.job].group=="citizen"&&e.died!=true){
            i++;
        }
    });
    return i;
}
