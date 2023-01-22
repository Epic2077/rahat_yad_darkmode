$('.btn1').tilt({
    glare: true,
    maxGlare: 0.1
})



addEventListener('resize', (event) => {
    let sn =$("#st");
    if(window.innerWidth <= 768) {
        sn.removeClass("position-sticky");
    } else {
        sn.addClass("position-sticky");
    }
});


