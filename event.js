
// $('div').first() first value  
// $('div').last() last value  

console.log($('div').first())
const val = '<h1>Lmaerk</h1>'
$('div').first().html(val) //first html
$('div').last().text(val)  //last html
// $('div').first().text() first text and last text ==> it will the tag also

$('div').click((e)=>{
        const $e1 =$(e.target)
        console.log($e1)
        $e1.html('click here')
        $(e.target).text('Topics Names')
        $(e.target).hide("slow") //hide the content
        // $(e.target).hide("slow") hide the content and inside the hide ,we can set fast or slow,they move the content as it is
})

$('button').click((e)=>{
    $('div').show("fast")
    $('h1').show(3000) //or we can set a numbers in secs also
    // $('div').show("normal")  can set as normal also
})  

function eleClicker(e){
    console.log(e)
}


// $('button').click(()=>{
//     $('div').slideUp(3000 or "slow" or "fast",doneFun)
// })

$('#btn2').hide();
$('#btn1').click(()=>{
    $('div').slideUp(3000,doneFun)
})

$('#btn2').click(()=>{
    $('div').slideDown(3000,doneFun)
// $('#btn1').hide();
// $('#btn2').hide();
})

$('div').click(function(){
    $(this).slideToggle()
})

function doneFun(){
    console.log('party mind')
$('#btn2').toggle();
$('#btn2').toggle();
}

// here we have used first,last,hide,html,text,sildeUp,slideDown,slideToggle,slow,fast,normal,can put it in a sec too,!!!