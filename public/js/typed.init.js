$(".element").each(function(){
    var $this = $(this);
    $this.typed({
    strings: $this.attr('data-elements').split(','),
    typeSpeed: 50, // typing speed
    backDelay: 500 // pause before backspacing
    });
});