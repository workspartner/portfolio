$(function(){
    // $(".head-text").slideDouwn();
    $(".text").hover(
        function(){
            $(this).css("color","red");
        },
        function(){
            $(this).css("color","blue");
        }
    )    
    // howerの第二引数の前はcss
    $(".element").hover(
        function(){
            $(this).css("color","yellow");
            $(this).css("opacity","0.5");
            $(this).css("border-color","aqua");
            $(this).css("border-style","solid");
            $(this).css("border-width","5px");
        },
        function(){
            $(this).css("color","blue");
            $(this).css("opacity","1.0");
            $(this).css("border-color","turquoise");
            $(this).css("border-style","ridge");
            $(this).css("border-width","5px");
        }
    ) 
    // めちゃくちゃだるいし、カーソルを充てるまで適用されない。cssでコーディングするのが無難。   
    $(".element").click(function(){
        $(this).slideUp();
    }
    );
    });