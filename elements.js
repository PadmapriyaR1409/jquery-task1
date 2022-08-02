// $('btn').click(()=>{
    // console.log($('input').val())  insdie the input tag we can set a any value
// })

let counter =0;
// looping concept
for(let i=0;i<10;i++){
    const $span = $(`<span>hello:${counter}</span>`)
    $('.div3').append($span);
}
for(let i=0;i<3;i++){
    counter++;
    const $btn = $(`<button>Click ${i+1}</button>`)
    $('.div4').after($btn); //can give after,before,insert,insertAfter,insertBefore
    $btn.click(function(){
        console.log($(this).text())
    })
    insertAfter('.$div').click(function(){
        console.log($(this).text())
    })
}

$('btn1').click(()=>{
    // $('.div1').html($('input').val()) or we can give text,html,append,prepend,remove
    const val = $('input').val()
    $('div1').text(val);
    $('div1').append(val); //adding the value after the text
    $('div1').prepend(val); //adding the value before the text
    $('div1').remove(val);
})

$('btn2').click(()=>{
    counter++
    const $div = $(`<div>hello:${counter}</div>`)
    $('.div3').append($(`<div>hello:${counter}</div>`))
    // $('.div3').append($div)
    // $div.appendTo('.div3')
    $(`<div>hello:${counter}</div>`).appendTo('.div3') 
    console.log($div)
})

// here we have used elements concepts like append,prepend,input,val,appendTo,insert,insertAfter,insetBefore,looping,clone,replaceAll,replaceWith

$('#btn1').click(()=>{
    $('<h3>Hellooo</h3>').replaceAll('.div3')  //instead of that element it can replace,given value
    $('.div2').replaceWith('<h3>Hellooo</h3>') //same as it is in replacewith ,the element only.
})

$('#btn2').click(()=>{
    const $ele = $('#mySet').clone() //input can clone all the elements
    console.log($ele)
    const temp= $('#mySet').val()
    $('#input').last().clone().prependTo('div')
    // $('#mySet').val(temp).clone().prependTo('div')
    // $('input').clone().prependTo('div')
    // $ele.clone.prependTo('div')
})