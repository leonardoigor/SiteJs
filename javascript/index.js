var create=function(obj,obj2)
{
    $(obj).append(obj2);
}

//create html/

$(document).ready(function()
{
    create('body','<div class=container>');
    create('.container','<input type=search>');
    //ul
    create('.container','<ul id=top></ul>');
    create('ul','<li><a href=#> Home</a></li>')
    create('ul','<li><a href=#> menu</a></li>')
    create('ul','<li><a href=#> info</a></li>')
    
    ///ul///

});
