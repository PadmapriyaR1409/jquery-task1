// $("#btn").click(function(){
//     $("test").text("freecode is available here")
// })

const { ready } = require("jquery")

// $("#btn1").click(function(){
//     $("test").text("freecode is not-available here")
// })

// $ = selector , . = class , # = Id
// console.dir(document) , $(document) ,$(document).(ready)

// $('div').html('padmapriya')

$('div').on('click',()=>{
     $('div').html('padmapriya')
})

$('div').on('click',()=>{
    $('div').html('priya')
}).html('click me')

const ele1 = $('Container')
console.log(ele1)
// console.log(ele1[0])
$('div').html('hello Priya')

// class
const ele2 = $('.Container')
console.log(ele2)

// Id
const ele3 = $('#Container1')
console.log(ele3)

const ele4 =$('#Container1','.Container')
console.log(ele4)

// if we move the script tag into the head tag have to use document ready func
// $(document).ready(()=>{
//     code would be inside the func
// })
// only the script tag have to give in the below of body tag 