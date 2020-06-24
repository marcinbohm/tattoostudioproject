const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    treshold = 1;
};

const appearOnScroll = new InterceptionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry =>{
        if(!entry.isIntersecting){
            return;
        }
        else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    })
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});