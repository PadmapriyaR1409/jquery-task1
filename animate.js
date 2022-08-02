$('#btn1').click(()=>{
    $('.div1').text(`I'm running`)
    $('.div1').animate({
        // left:"50",
        left:'+=50',
        opacity:0.5
    },2000,()=>{
        $('.div1').text(`stopped running`)
    });
    $('.div2').animate({
        left:'+=50',
        fontSize:'20px'
    },2000,()=>{
        $('.div2').text(`tired at the sametime`)
    })
})
//additionally we can set border, height,width ,etc using CSS concepts
$('#btn2').click(()=>{
    $('.div1').text(`I'm running`).animate({
    // $('.div1').animate({
        // left:"50",
        left:'-=50',
        opacity:1
    },2000,()=>{
        $('.div1').text(`stopped running`)
    })
})

//here we have used animate,inside the animate we can give css concepts,settimeout,anonymous func,class(hasClass,addClass,removeClass,toggleClass)

//DOM manipulation

$('div').click(function(){
    console.log($(this))
    const bool = $(this).hasClass('yellow')
    console.log(bool)
    if (bool) {
        $(this).text('Already exists')
    } else {
        $(this).text('Already changed')
    }
    $(this).addClass('red')
    $(this).removeClass('blue')
})

$('#btn1').click(()=>{
    $('div').addClass('blue')
})

$('#btn2').click(()=>{
    $('div').toggleClass('pink')
    $('div').toggleClass('red')
})
