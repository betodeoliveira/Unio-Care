// Waits webflow and then adds the w--current class to the attributes links
var Webflow = Webflow || [];
Webflow.push(function () {
    // Get all elements that has the "navbar-link" attribute
    const navbarLinks = document.querySelectorAll('[navbar-link]');

    // Checks every element that has the attribute
    navbarLinks.forEach((navbarLink) => {
        // Gets the value of the attribute
        const navbarLinkValue = navbarLink.getAttribute('navbar-link');

        // Check to see if the values exists on the url
        if (window.location.href.includes(navbarLinkValue)) {
            // If it exists add the w--current class to the link
            $(navbarLink).addClass("w--current");
        }
    });
});