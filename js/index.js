/**
 * Created by DELL on 2018/4/19.
 */
// 当页面加载后执行
window.onload=function () {
    slideImg();
};

//全局变量
var index=0,
    timer=null,
    pic=document.getElementById('banner'),
    pics=pic.getElementsByTagName('div'),
    len=pics.length;
var li=document.getElementsByTagName('li');

function slideImg() {
    var main=document.getElementById('main');
    var li_len=li.length;
//鼠标滑过就清除定时器，离开继续
    main.onmousemove=function () {
    //滑过清除定时器
        if(timer){
            clearInterval(timer);
        }
    };
    main.onmouseout=function () {
        timer=setInterval(function () {
            index++;
            if(index>=len){
                index=0;
            }
            //切换图片
            changeImg();
        },3000);
    };
    main.onmouseout();

//    点击文字切换图片
    for(var j=0;j<li_len;j++){
        //因为作用域改变，所以设置id方便遍历取出对应
        li[j].id=j;
        li[j].onclick=function () {
            index=this.id;
            //调用图片切换函数
            changeImg();
        }
    }
}

//切换图片
function changeImg() {
    //重设pics和li的样式显示
    for(var i=0;i<len;i++){
        pics[i].style.display='none';
        li[i].className='';
    }
    //为pics和li分别设置新样式
    pics[index].style.display='block';
    li[index].className='showBg';
}