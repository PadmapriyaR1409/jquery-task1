const val='<h3>hello everyone</h3>'
$('div').first().html(val)
let count =0
let hidden = 0
let fader = 0.5

$('div').click(function(e){
    // $(e.target).fadeOut("fast") fadeout=hide of content ,can fix it is slow or fast or in secs too
    console.log($(this));
    console.log($(this).text())
    // $(this).fadeOut(1000)
    $(this).fadeOut(1000,()=>{
        count++
        const temp =`<h3>yet available ${count}</h3>`
        // $(this).text(temp)
        $(this).html(temp)
        // $('button').text(`show (${hidden})`)
        $('button').text(`show magical`)
        $('button').fadeTo('slow',fader,()=>{
            if (fader == 0.5) {
                fader=1
            } else {
                fader=0.5
            }
        })

    })
})

$('button').click((e)=>{
    $('div').fadeIn("slow")
    $('div').fadeToggle('slow',function(){
        $(this).text('not toggled')
    })
    hidden = 0
    $('button').text(`show (${hidden})`)
})

// here we have used fadeOut,fadeIN,fadeToggle