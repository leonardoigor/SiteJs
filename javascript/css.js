//css/
$(document).ready(function()
{
    $('body').css({margin:'0',padding:'0'});

    $('.container').css({width:'100%'
        ,background:'linear-gradient(to right,#385789,#415677)'
        ,height:'81px'
        ,position:'fixed'
        ,display:'flex'
        ,'justify-content': 'space-around'
        ,'align-items':'center'
    }).hide().delay('1000').fadeIn(2000);

    $('#top').css({
        'list-style':'none'
        ,display:'flex'
    });
    $('#top li').css(
        {
            width:'80px'
            ,height:'50px'
            ,'text-align':'center'
            ,'line-height':'50px'
        });

    $('#top a').css(
        {
            color: 'white'
        }).hide().delay('3000').fadeIn(2000);
});
