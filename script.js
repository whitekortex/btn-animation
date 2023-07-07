$('#btnEmail').on("click", function(event){
    const email = " careers.okbet@gmail.com";
    navigator.clipboard.writeText(email);

    let x = event.pageX - $(this).offset().left + 'px';
    let y = event.pageY - $(this).offset().top + 'px';
    
    
    let ripples = document.createElement('ripple');
    // ripples.style.position = 'absolute';
    console.log(x);
    console.log(y);
    ripples.style.left = x;
    ripples.style.top = y;
    this.appendChild(ripples);

    setTimeout(()=> {
        ripples.remove()
    }, 1000);
    
});

const svgContainer = document.getElementById('animCheck');
const animItem = bodymovin.loadAnimation({
    wrapper:svgContainer,
    animType: 'svg',
    loop: false,
    autoplay:false,
    path:'https://assets1.lottiefiles.com/packages/lf20_lb7e63po.json'

});


// Set up the tooltip element
var tooltip = $('<div class="tooltip">Copied Email</div>');
tooltip.css({
  position: "absolute",
  opacity: 0,
  top:0,
  left: "calc(50% - 60px)"
});

// Add the tooltip element to the DOM
$("body").append(tooltip);

// Set up the button element
var button = $("#btnEmail");
var mailIcon = $(".email-icon")
// Add a click event listener to the button element


button.click(function(event) {

    // let x = e.clientX - e.target.offsetLeft;
    // let y = e.clientY - e.target.offsetTop;


    // Animate the tooltip's opacity and position
    TweenMax.to(tooltip, 0.5, {
    opacity: 1,
    y: "60px",
    ease: Power2.easeOut
    });

    TweenMax.to(mailIcon, 0.5,{
    opacity: 0,
    y: "-60px",
    ease: Power2.easeOut,
    height: 0

    })

    TweenMax.to(mailIcon, 0.5,{
    height: "32px",
    delay: 1.2,
    opacity: 1,
    y: "0px",
    ease: Power2.easeOut

    })

    // Fade out the tooltip after 2 seconds
    TweenMax.to(tooltip, 0.5, {
    delay: 1.5,
    opacity: 0,
    y:"-60px",
    ease: Power2.easeOut
    });

    TweenMax.to(svgContainer, 0.5, {
        delay: 300,
        opacity: 0,
        ease: Power2.easeOut
    });
});








button.click(function() {
    svgContainer.classList.remove('hide');
    animItem.goToAndPlay(0,true);


    
});

