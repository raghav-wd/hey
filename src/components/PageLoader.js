// =====================Page loader
function PageLoader() {
    let pageRenderer = document.getElementById("page-renderer");
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText)
            pageRenderer.innerHTML = this.responseText;
            // gsap.from("skill", {opacity: 0, x: -50, ease: 'power3.out', delay: 0.7})
            // gsap.from(".m-head", { opacity: 0, y: -40, ease: 'elastic' })
            // if(page == navLinkNames[2])
            // addListner();
        }
    };
    xhttp.open("GET", `../pages/${this.tab}.html`, true);
    xhttp.send();
}

export default PageLoader;