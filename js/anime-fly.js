function gofly() {

    var path1 = anime.path('.anime .motion_path_01');

    anime({
        targets: '.anime .shape-bird',
        translateX: path1('x'),
        translateY: path1('y'),
        //            rotate: path1('angle'),
        easing: 'easeOutQuad',
        duration: 1500,
        delay: 250,
        loop: false
    });

    anime({
        targets: '.anime .bird',
        scale: [
            {
                value: .2,
                duration: 0,
                delay: 0,
                easing: 'linear'
        },
            {
                value: .7,
                duration: 850,
                delay: 0,
                easing: 'easeOutQuad'
        },
            {
                value: 1,
                duration: 650,
                delay: 0,
                easing: 'easeOutQuad'
        }
    ],
        rotate: [
            {
                value: 5,
                duration: 150,
                delay: 0,
                easing: 'linear'
            },
            {
                value: -12,
                duration: 250,
                delay: 0,
                easing: 'linear'
            },
            {
                value: 3,
                duration: 850,
                delay: 0,
                easing: 'easeOutExpo'
            },
            {
                value: 0,
                duration: 250,
                delay: 0,
                easing: 'linear'
            }
    ],
        easing: 'easeOutQuad',
        duration: 1500,
        delay: 250,
        loop: false
    });

    anime({
        targets: '.anime .bird #wingr',
        rotate: [
            {
                value: -30,
                duration: 50,
                delay: 200,
                easing: 'linear'
            },
            {
                value: 30,
                duration: 50,
                delay: 0,
                easing: 'linear'
            },
            {
                value: -30,
                duration: 50,
                delay: 0,
                easing: 'linear'
            },
            {
                value: 30,
                duration: 50,
                delay: 0,
                easing: 'linear'
            },
            {
                value: -30,
                duration: 50,
                delay: 0,
                easing: 'linear'
            },
            {
                value: 30,
                duration: 50,
                delay: 0,
                easing: 'linear'
            },
            {
                value: -45,
                duration: 50,
                delay: 0,
                easing: 'linear'
            },
            {
                value: 20,
                duration: 50,
                delay: 0,
                easing: 'linear'
            },
            {
                value: -45,
                duration: 50,
                delay: 0,
                easing: 'easeOutExpo'
            },
            {
                value: 20,
                duration: 50,
                delay: 0,
                easing: 'easeOutExpo'
            },
            {
                value: -45,
                duration: 300,
                delay: 0,
                easing: 'easeOutExpo'
            },
            {
                value: 0,
                duration: 150,
                delay: 550,
                easing: 'easeOutQuad'
            },
    ],
        duration: 1500,
        delay: 250,
        easing: 'easeOutExpo',
        loop: false
    });

    anime({
        targets: '.anime .bird #wingl',
        rotate: [
            {
                value: 30,
                duration: 50,
                delay: 200,
                easing: 'linear'
            },
            {
                value: -30,
                duration: 50,
                delay: 0,
                easing: 'linear'
            },
            {
                value: 30,
                duration: 50,
                delay: 0,
                easing: 'linear'
            },
            {
                value: -30,
                duration: 50,
                delay: 0,
                easing: 'linear'
            },
            {
                value: 30,
                duration: 50,
                delay: 0,
                easing: 'linear'
            },
            {
                value: -30,
                duration: 50,
                delay: 0,
                easing: 'linear'
            },
            {
                value: 45,
                duration: 50,
                delay: 0,
                easing: 'linear'
            },
            {
                value: -20,
                duration: 50,
                delay: 0,
                easing: 'linear'
            },
            {
                value: 45,
                duration: 50,
                delay: 0,
                easing: 'easeOutExpo'
            },
            {
                value: -20,
                duration: 50,
                delay: 0,
                easing: 'easeOutExpo'
            },
            {
                value: 45,
                duration: 300,
                delay: 0,
                easing: 'easeOutExpo'
            },
            {
                value: 0,
                duration: 150,
                delay: 550,
                easing: 'easeOutQuad'
            },
    ],
        duration: 1500,
        delay: 250,
        easing: 'easeOutExpo',
        loop: false
    });
}