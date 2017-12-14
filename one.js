window.onload=function(){
	//创建div1
    var box1=document.createElement("div")
    //设置div的id
    box1.id ="box1"
    //设置div的css样式
    box1.style.cssText="position: absolute; width:100px;height:100px;background-color:yellow; border:1px solid #000;left:100px;top:50px;"
    //把元素放进body标签里面
    document.body.appendChild(box1)

    //创建一个名为text的XML文件
    var text = new XMLHttpRequest()
    //发送GET请求
    text.open("GET","http://123.207.89.151/jrtt/forecast",true)
    text.send()
    text.onreadystatechange=function(){
    	console.log(text.readyState)
    	if (text.readyState===4 && text.status===200) {
    		//console.log(typeof(text.responseText))
    	    date=JSON.parse(text.responseText)
    	    a= document.getElementById("box1")
            a.innerHTML=("明天的天气："+date.明天.天气)
    	}
    }
    var clickNumber =0;
    function bg1(){
             return '#'+Math.floor(Math.random()*256).toString(10);
         }
         function bg2(){
             return '#'+Math.floor(Math.random()*0xffffff).toString(16);
         }

    box1.onclick=function () {
    	clickNumber++
    
    	if (clickNumber%2==1) {
    		box1.style.backgroundColor =bg1()
	        box1.style.left = '500px'
    	}
    	else{
    		box1.style.backgroundColor =bg2()
	        box1.style.left = '100px'
    	}
	

    }
}