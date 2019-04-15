# Location-navigation-bar
网页定位导航栏（jquery）

实现思路

1.使图片并排显示

display:inline


2.使导航栏上下位置固定，左右位置随窗口改变（永远紧贴主体部分右边）

display:fixed;        //相对窗口固定定位

top:100px;

left:50%;             //先左右居中

margin-left:400px;    //再相对于中线右移


3.锚点定位(点击导航栏按钮，跳到对应floor)

a href="#定位到的元素id"


4.导航栏按钮根据滚动条定位改变（jquery）

通过each()寻找当前所处楼层

通过比较滚动条偏移(.scrollTop())和各楼层元素偏移(.offset().top)判断焦点应落在那一层，并记录该层元素id。

将id与各导航栏元素的href元素比较，找到id=href对应的导航栏元素，删除之前的焦点(removeClass)并设置焦点(addClass)。
