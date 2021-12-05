let index = 0;
let beNum = 1;


let rolling = null;
banner(0);
out();
function banner(i){
    li = document.querySelectorAll('.fadein');
    smallLi = document.querySelectorAll('.before')
    if(index >= li.length){
        index = 0;
    }
    if(i !=undefined ){
        index= i;
    }
    for(i=0; i<li.length;i++){
        if(i==index){ 
           li.item(i).setAttribute('class','fadein on');
            smallLi.item(i).setAttribute('class','before after');
        }else{
            li.item(i).setAttribute('class','fadein');
            smallLi.item(i).setAttribute('class','before');
        }
    }
    index++;
}
function bannerBtn(i){
    clearInterval(rolling);
    banner(i);
}
rolling = setInterval(banner,2000);


function over(){
    const nu = document.getElementById('menu');
    nu.style.display="block";
}
function out(){
    const me = document.getElementById('menu');
    if(me.getAttribute('onmouseover')==true){
        over();
    }else{
    me.style.display="none";   }
}


function slider(type,currentIndex,newIndex){
    flag = true;
    li = document.querySelectorAll('.image_size>li>a>img');
    
    if(index == li.length){
        inde = 0;
    }
    if(type != undefined){
        flag =false;
    }
    for(i=0; i<li.length; i++){
        var onNum = inde+1;
        if(onNum==4){
            onNum = 0;
        }
        if(type ==0){
            if(i ==currentIndex){
                li.item(i).setAttribute('class','out2');
            } else if(i==newIndex){
                li.item(i).setAttribute('class','on2');
            } else{
                li.item(i).setAttribute('class','');
            }
        } else{
            if(i==inde){
                li.item(i).setAttribute('class','out');
            } else if(i == onNum){
                li.item(i).setAttribute('class','on');
            }else{
                li.item(i).setAttribute('class','');
            }
        }
    }
    if(flag){
        inde ++;
    } else{
        inde = newIndex
    }
}
function interviewBtn(type){
    console.log(inde);
    var newIndex;
    if(type ==0){
        newIndex = inde -1;
        if(newIndex == -1){ newIndex =3;}
        console.log('이전 인덱스값' + newIndex,'현재인덱스값'+inde);
    }else if(type ==1){
        newIndex = inde +1;
        if(newIndex ==4){newIndex=0;}
        console.log('다음 인덱스 값' + newIndex,'현재인덱스값',+inde);
    }
    clearInterval(rolling);
    slider(type,inde,newIndex);
    rolling = setInterval(slider,2000);
}
rolling = setInterval(slider,2000);
