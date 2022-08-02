CSS Properties

can set css inside of the function,no need to do separate css File
.css('color' (or) 'background-color') or .css(['color','height','width',etc]) ,can set inside a object and inside the array of whole css needed
output(val) ==> return the output and output value

can also pass props in looping ,and can add the orderedlist and unordered list
<ul></ul> and <li></li> , +=(increment),-=(decrement)

for(const prop in temp){
    html += `<li>${prop}:${temp[prop]}</li>`
} html += '</ul>';output(html)

'#' ==> Math.random().toString(16 or 12).substring(2,5) //by setting math ,we can adjust color words or ans can change as our convience

Element Attributes

arr.shift(),arr.push() => push and add the value as we need
detach() , empty() ==> remove the items , and empty the items as we need
Attributes ==> can set like key and value pair ,attr('id') ,checked ,checkedInput

Element Dimensions

1st have to set style in html style tag ,then only we need to change in js File
html += `<div>width: ${$(this).width()}</div>` same as method of innerHeight,inner w and h ,oouter w & h ,margin,padding,etc,of css Properties

also can check in the document and in window ==> console.log($(doucment or window).width or height())


Traversing Descendants

Find(),==>
children,
* --> it take whole Element 

Traversing Ancestors

console.log($(this).parent().length or each());
parents(),parents(),parentsUntil(),

Traversing siblings
$('#btn').siblings('div')or .next('span').addClass('box')
siblings --> same as DOM structure model
next,nextAll,nextUntil
prev,prevAll,prevUntil -->previous

Traversing Filtering  - can select particular or isolated elemnts
$(main).first().css('color','red')  in children
first(),last() -->give the selected vslue of first and last
eq()  --> we can set a number as we need ,it is like index value
filter(),not()-->can filter any value and not to do all the selected value

Data Methods 

















