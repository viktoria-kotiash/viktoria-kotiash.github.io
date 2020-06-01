ScrollOut({
    
//    once:true,
    
    onShown: function (el) {

        if (el.hasAttribute('data-animation')) {
            var animationName = el.getAttribute('data-animation');
            if (!el.classList.contains(animationName))
                el.classList.add(animationName);
        }
        if (el.classList.contains("anime")) {
            gofly();
        }
    },
    
    onHidden: function (el) {

        if (el.hasAttribute('data-animation')) {
            var animationName = el.getAttribute('data-animation');
            if (el.classList.contains(animationName))
                el.classList.remove(animationName);
        }
    }
});
