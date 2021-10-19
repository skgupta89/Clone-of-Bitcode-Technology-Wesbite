// /* JQuery Card Read More */


$(document).ready(function(){
    $('.btnShow1').click(function(){
        console.log('hi')
        if($(this).html() === 'Know More'){
            console.log('by')
            $('.Hide1').toggle();
            $('.btnShow1').html('Less');
        }
        else{
            $('.Hide1').hide();
            $('.btnShow1').html('Know More');   
        }
    });

    // button 2

    $('.btnShow2').click(function(){
       
        if($(this).html() === 'Know More'){
            console.log('by')
            $('.Hide2').toggle();
            $('.btnShow2').html('Less');
        }
        else{
            $('.Hide2').hide();
            $('.btnShow2').html('Know More');   
        }
    });
    $('.btnShow3').click(function(){
        if($(this).html() === 'Know More'){
            
            $('.Hide3').toggle();
            $('.btnShow3').html('Less');
        }
        else{
            $('.Hide3').hide();
            $('.btnShow3').html('Know More');   
        }
    });
    
    $('.btnShow4').click(function(){
        
        if($(this).html() === 'Know More'){
            console.log('by')
            $('.Hide4').toggle();
            $('.btnShow4').html('Less');
        }
        else{
            $('.Hide4').hide();
            $('.btnShow4').html('Know More');   
        }
    });
});


// counter 

$(document).ready(function(){
    $('.counter').counterUp({
        delay:10,
        time: 1000
    });
})
