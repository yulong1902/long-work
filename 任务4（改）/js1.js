window.onload=function(){
    var a02=document.getElementById('a02');
    var shang=document.getElementById('shang');
    var xia=document.getElementById('xia');
    function animate(offset){
        var newLeft=parseInt(a02.style.left)+offset;
        a02.style.left=newLeft+'px';
        if(newLeft<-3000){
            a02.style.left=-600+'px';
        }
        if(newLeft>-600){
            a02.style.left=-3000+'px';
        }
    }
    shang.onclick=function(){
        animate(600);
    }
    xia.onclick=function(){
        animate(-600);
    }
    var timer;
    function play(){
        timer=setInterval(function(){
            xia.onclick()
        },1500);
    }
    play();
    var a01=this.document.getElementById('a01');
    function stop(){
        clearInterval(timer);
    }
    a01.onmouseover=stop;
    a01.onmouseout=play;
    /新加的/ 
    var a03=this.document.getElementById('a03').getElementsByTagName('span');
    var index=1;
    function bottonshow(){
        for(var i=0;i<a03.length;i++){
            if(a03[i].className=='on'){
                a03[i].className='';
            }
        }
        a03[index-1].className='on';
    }
    shang.onclick=function(){
        index=index-1;
        if(index<1){
            index=5;
        }
        bottonshow();
        animate(600);
    }
    xia.onclick=function(){
        index=index+1;
        if(index>5){
            index=1;
        }
        bottonshow();
        animate(-600);
    }
}