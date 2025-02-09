document.addEventListener("DOMContentLoaded", function () {
    let scrollToTop = document.getElementById("scrollToTop");
    let lists = document.querySelector(".lists");

    window.addEventListener("scroll", function () {
        let scrollY = window.scrollY;

        // 📌 تثبيت القائمة فوق
        if (scrollY > 150) {
            lists.classList.add("fixed-menu");
        } else {
            lists.classList.remove("fixed-menu");
        }

        // 🔼 زر الرجوع للأعلى
        if (scrollY > 200) {
            scrollToTop.style.display = "block";
        } else {
            scrollToTop.style.display = "none";
        }
    });

    // ⬆️ عند الضغط على زر الرجوع للأعلى
    scrollToTop.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // ✨ أنميشن ظهور العناصر عند التمرير
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // نتأكد إننا ما نعدلش القائمة أو الزر
                if (!entry.target.classList.contains("lists") && entry.target.id !== "scrollToTop") {
                    entry.target.classList.add("show");
                }
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    // 📌 اختيار كل العناصر اللي مش الزر والقائمة
    let elements = document.querySelectorAll(".animate");

    elements.forEach(element => {
        if (!element.classList.contains("lists") && element.id !== "scrollToTop") {
            element.classList.add("hidden");
            observer.observe(element);
        }
    });
});
