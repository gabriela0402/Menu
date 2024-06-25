class MobileNavbar{
    constructor(mobileMenu){
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navlist);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";
    }
}
