


function insert(num){
    document.form.affichage.value=document.form.affichage.value+num;
}

function equal(){
    var exp = document.form.affichage.value;
    if(exp){
    document.form.affichage.value=eval(exp);
}
}

function back(){
    var exp=document.form.affichage.value;
    document.form.affichage.value=exp.substring(0,exp.length-1);
}

function clean(){
    document.form.affichage.value='';
}

