// تغيير اللغة
function changeLanguage(language) {
    var title = document.getElementById('title');
    var description = document.getElementById('description');
    var aboutTitle = document.getElementById('about-title');
    var aboutText = document.getElementById('about-text');
    var aboutLink = document.getElementById('about-link');
    var projectsLink = document.getElementById('projects-link');
    var skillsLink = document.getElementById('skills-link');
    var cvLink = document.getElementById('cv-link');
    var contactLink = document.getElementById('contact-link');

    if (language === 'ar') {
        title.innerHTML = 'مرحبًا بك في محفظتي';
        description.innerHTML = 'اكتشف عملي ومهاراتي';
        aboutTitle.innerHTML = 'عنّي';
        aboutText.innerHTML = 'أنا مصمم جرافيكي شغوف، متخصص في إنشاء تصاميم إبداعية باستخدام برامج مثل فوتوشوب، الالستريتور، وكانفا. هدفي هو تحويل الأفكار إلى واقع مرئي مذهل.';
        aboutLink.innerHTML = 'عنّي';
        projectsLink.innerHTML = 'المشاريع';
        skillsLink.innerHTML = 'المهارات';
        cvLink.innerHTML = 'السيرة الذاتية';
        contactLink.innerHTML = 'اتصل بي';
    } else if (language === 'en') {
        title.innerHTML = 'Welcome to My Portfolio';
        description.innerHTML = 'Discover my work and skills';
        aboutTitle.innerHTML = 'About Me';
        aboutText.innerHTML = 'I am a passionate graphic designer, specializing in creating creative designs using Photoshop, Illustrator, and Canva. My goal is to turn ideas into stunning visual reality.';
        aboutLink.innerHTML = 'About Me';
        projectsLink.innerHTML = 'Projects';
        skillsLink.innerHTML = 'Skills';
        cvLink.innerHTML = 'CV';
        contactLink.innerHTML = 'Contact Me';
    } else if (language === 'ru') {
        title.innerHTML = 'Добро пожаловать в моё портфолио';
        description.innerHTML = 'Откройте для себя мою работу и навыки';
        aboutTitle.innerHTML = 'Обо мне';
        aboutText.innerHTML = 'Я страстный графический дизайнер, специализирующийся на создании креативных дизайнов с использованием Photoshop, Illustrator и Canva. Моя цель - превращать идеи в потрясающую визуальную реальность.';
        aboutLink.innerHTML = 'Обо мне';
        projectsLink.innerHTML = 'Проекты';
        skillsLink.innerHTML = 'Навыки';
        cvLink.innerHTML = 'Резюме';
        contactLink.innerHTML = 'Свяжитесь со мной';
    }
}

// إظهار وإخفاء الأقسام مع تأثير سلس
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById(targetId).classList.add('active');
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

// إغلاق الرسالة التفاعلية
function closeOverlay() {
    document.querySelector('.shap-overlay').style.display = 'none';
}

// العودة إلى الأعلى
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// إظهار زر العودة إلى الأعلى عند التمرير
function debounce(func, wait) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

window.onscroll = debounce(function() {
    var backToTopButton = document.querySelector('.back-to-top');
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
}, 100);

// رسالة تفاعلية عند النقر على زر السيرة الذاتية
document.querySelector('.cv-btn').addEventListener('click', function () {
    alert('تم النقر على زر السيرة الذاتية!');
});

// رسالة تفاعلية عند النقر على زر العودة إلى الأعلى
document.querySelector('.back-to-top').addEventListener('click', function () {
    alert('تم النقر على زر العودة إلى الأعلى!');
});