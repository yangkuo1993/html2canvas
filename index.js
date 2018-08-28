    //以下是截图代码
$(function(){  
    $("#btn").click(function(){  
        html2canvas($("#contbox"), {  
            height: $("#contbox").outerHeight() + 20,  
                width: $("#contbox").outerWidth() + 20  ,
                onrendered: function(canvas) {
                //将canvas画布放大若干倍，然后盛放在较小的容器内，就显得不模糊了
                var timestamp = Date.parse(new Date());
                //把截取到的图片替换到a标签的路径下载  
                $("#down1").attr('href',canvas.toDataURL());  
                //下载下来的图片名字  
                $("#down1").attr('download',timestamp + '.png') ;   
                //document.body.appendChild(canvas);  
            }  
            //可以带上宽高截取你所需要的部分内容 
        });  
    });  
});  
