function toggleAccordion(header) {
    const body = header.nextElementSibling;
    if (body.style.display === "block") {
        body.style.display = "none";
    } else {
        body.style.display = "block";
    }
}
document.addEventListener("DOMContentLoaded", function () {
    const agentItems = document.querySelectorAll(".agent-item");

    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1, // Trigger when 10% of the item is in view
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1"; // Fade in
                entry.target.style.transform = "translateY(0)"; // Move to original position
            }
        });
    }, observerOptions);

    agentItems.forEach((item) => {
        observer.observe(item);
    });
});
