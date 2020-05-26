import gsap from 'gsap';

class FeaturedTextTimeline {
    constructor() {
        //Welcome Text Animation TimeLine
        this.textTl = gsap.timeline({ repeat: 0 });
        this.textTl.from(".m-text-1", { opacity: 0, duration: 1, x: 100, ease: 'elastic', delay: 2 });
        this.textTl.from(".m-text-2", { opacity: 0, duration: 1, y: -10, ease: 'elastic' });
        this.textTl.to(".m-text-2", { opacity: 0, duration: 0.2, y: -10, delay: 1 });
        this.textTl.to(".m-text-1", { opacity: 0, duration: 0.2, x: -100 });
        this.textTl.from(".m-text-3", { opacity: 0, duration: 0.3, x: -100, delay: 2 });
        this.textTl.pause();
    }
    play() { this.textTl.play() }
    end() {
        if (this.textTl.isActive())
            this.textTl.seek(this.textTl.endTime());
    }
}

export default FeaturedTextTimeline;