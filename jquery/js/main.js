// jquery syntax;
    // $(Selector).member

    // $(document).ready(function(){
    //     alert("Hello Wolrd");
    // });

    // the above is a detailed version of document ready. jquery provides shorthand version as below:

    $(function(){
        alert("Hello world");
    });

    $('#box').hide();
    $('.thing').fadeOut(1000);

    $('button').click(function(){
        $('.thing').fadeOut(1000);
    });

    //Groupiing selectors
    $("h1, h2, h3").css("border", "solid 2px pink");

    //class selector
    $("div.container").css("width", "1100px");
    $("div.container").css("margin", "20px auto");

    //ID selector
    $("div#box").css("border", "solid 2px red");

    //Descendent selectors
    $(".container p").css("border", "dashed 4px red");

    //child selector
    $(".container>p").css("border-radius", "20px");

    //pseudo selecor
    //$("ul>li:first-child").css("background-color", "#FC3");

    $("ul>li:odd").css("background-color", "#EEE");
    
    $("ul>li:even").css("background-color", "#CCC");
    
    // select all heading tags
    $(":header").css("text-transform","uppercase");

    //contains selector
    $("p:contains('Love')").css("background-color", "hotpink");

    //jquery chaining
    $("#name").css('padding','5px').css('display','block').css('width','100%');
    $(".notification-bar").delay(3000)/slideDown().delay(5000).slideUp();


    ////jquery events
    //$(selector).event(function() { }, function() { })

    $("#textForm").submit(function(evt){
        evt.preventDefault();
        const input = $("name").val();
        if(input == ""){
            $("#name").css("border","solid 1px red");
            $("#name + .help-text").css('display', 'block');
        }
    });

    $("#name").blur(function(){
        if($(this).val() == ""){
            $("#name").css("border", "solid 1px red");
            $("#name + .help-text").css('display', 'block');
        }
    })

    $("#box").hover(function(){
        $(this).text("Hovered In...");
    },function(){
        $(this).text("Hovered Out...");
    });

    $("button").click(function(){
        $(".thing").fadeToggle(5000);
    })