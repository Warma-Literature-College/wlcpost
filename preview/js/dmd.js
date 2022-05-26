console.log("Welcome to Uomaread! You're viewing a passage!");
console.log("These modelized pages use vanilla css! Without Tailwind or Bootstrap!");
console.log("Enjoy!");
function doco(){
var ado = new Date();
var ccs = ado.getHours();
console.log("hour now: "+ccs);
if(ccs>8&&ccs<18){
    dawnn();

}else if(ccs<8||ccs>18){
    darken();
}else{
    console.log("出现异常,无法自动切换阳间模式/阴间模式");
}
}

function darken(){
    const awabo = document.getElementById('kawa');
    console.log("Dark");
    awabo.classList.replace("dzen","weczer");
    bol = true;
}

function dawnn(){
    const awabo = document.getElementById('kawa');
    console.log("Dawn");
    awabo.classList.replace("weczer","dzen");
    bol = false;
}

function sww(){
    if(bol == false){
        darken();
    }else{
        dawnn();
    }
}

window.onload = function zowo(){
    doco();
}

