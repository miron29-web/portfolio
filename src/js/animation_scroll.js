const animItems = document.querySelectorAll("._anim-item");

if (animItems.length) {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("_active");
                } else if (!entry.target.classList.contains("_anim-no-hide")) {
                    entry.target.classList.remove("_active");
                }
            });
        },
        {
            threshold: 0.1
        }
    );

    animItems.forEach((item) => {
        observer.observe(item);
    });
}