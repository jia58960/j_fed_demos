# 利用CSS3渐变相关知识实现小雨伞

+ CSS渐变基础知识

理论上可在任何使用背景图片的地方使用渐变，比如最常见的background-image、list-style-type以及CSS3的图像边框属性border-image。但直到目前为止，仅在背景图片中得到最完美的支持。

渐变色背景：background: linear-gradient(0deg, red, green);表示0°渐变，这里就是从下到上由红变绿，如果是90°就表示从左往右渐变。默认是从上到下也就是180°。也可以加上多颜色并指定开始渐变的百分比，意思是在总进度百分之多少的时候进行渐变，比如background: linear-gradient(135deg, red 0, green 10%, yellow 50%, blue 100%)表示135°红色开始渐变，从10%开始绿色渐变，从50%开始黄色渐变。

CSS3已经支持多背景叠加：还是用linear-grdient这个属性，比如：在背景图片上利用线性渐变， background: linear-gradient(135deg, transparent 0,transparent 49.5%,green 49.5%, green 50%, transparent 50.5%, transparent 100%), url('1.png') no-repeat center top;

background-size的意思是指定背景图片（或背景色）的大小。一般用在两个场景，第一种场景是背景图片真的要缩小，第二张场景是在适配移动端的时候（多分辨率适配）

+ 初步实现小雨伞效果

其原理就是利用径向渐变，然后给定一些位置参数等信息来实现。

 ## 发现问题？
发邮件(547221469@qq.com)给我或直接提issue :joy: