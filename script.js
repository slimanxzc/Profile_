<<<<<<< HEAD
/* ===== السنة ===== */
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ===== تاريخ الغلاف ===== */
const heroDate = document.getElementById('heroDate');
if (heroDate) {
  const d = new Date();
  const months = ['يناير','فبراير','مارس','أبريل','مايو','يونيو','يوليو','أغسطس','سبتمبر','أكتوبر','نوفمبر','ديسمبر'];
  heroDate.textContent = `${months[d.getMonth()]} ${d.getFullYear()}`;
}

/* ===== بيانات الأعمال ===== */
// ✏️ أضف أو عدّل مشاريعك هنا
const works = [
  {
    title: 'موقع قهوة',
    desc: 'موقع لمقهى محلي — قائمة، صور، وأوقات الفتح.',
    link: 'https://slimanxzc.github.io/riiwaq_coffee/',
    tags: ['HTML', 'CSS']
  },
  {
    title: 'تطبيق ديني - رحاب -  ',
    desc: 'تطبيق ديني يحتوي على العديد من المميزات مثل: القرآن الكريم، الأذكار، الأحاديث، وغيرها. -> ( التطبيق في حاله التطوير )',
    link: 'https://example.com',
    tags: [ 'Flutter', 'Dart']
  },


   {
    title: 'موقع صراف - العملات -  ',
    desc: 'صممت هذا الموقع لتحويل العملات بطريقة بسيطة وسريعة، مع دعم العربية والكوردية.',
    link: 'https://slimanxzc.github.io/sarraf.iq/',
    tags: [ 'Html', 'Css','Javascript']
  },
];

/* ===== توليد قائمة الأعمال ===== */
const list = document.getElementById('workList');

if (list) {
  works.forEach((w, i) => {
    const num = String(i + 1).padStart(2, '0');
    const tags = w.tags.map(t => `<span>${t}</span>`).join('');

    const li = document.createElement('li');
    li.className = 'work-item';

    li.innerHTML = `
      <a href="${w.link}" target="_blank" rel="noopener">
        <span class="wi-num">${num}</span>
        <span class="wi-content">
          <span class="wi-title">${w.title}</span>
          <span class="wi-desc">${w.desc}</span>
          <span class="wi-tags">${tags}</span>
        </span>
        <span class="wi-arrow">↗</span>
      </a>
    `;

    list.appendChild(li);
  });
}

/* ===== تفعيل رابط الناڤ أثناء التمرير ===== */
const navLinks = document.querySelectorAll('.side-nav a');
const sections = document.querySelectorAll('section[id]');

if (navLinks.length && sections.length) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.toggle(
            'active',
            link.getAttribute('href') === `#${entry.target.id}`
          );
        });
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(s => io.observe(s));
=======
/* ===== السنة ===== */
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ===== تاريخ الغلاف ===== */
const heroDate = document.getElementById('heroDate');
if (heroDate) {
  const d = new Date();
  const months = ['يناير','فبراير','مارس','أبريل','مايو','يونيو','يوليو','أغسطس','سبتمبر','أكتوبر','نوفمبر','ديسمبر'];
  heroDate.textContent = `${months[d.getMonth()]} ${d.getFullYear()}`;
}

/* ===== بيانات الأعمال ===== */
// ✏️ أضف أو عدّل مشاريعك هنا
const works = [
  {
    title: 'موقع قهوة',
    desc: 'موقع لمقهى محلي — قائمة، صور، وأوقات الفتح.',
    link: 'https://slimanxzc.github.io/riiwaq_coffee/',
    tags: ['HTML', 'CSS']
  },
  {
    title: 'تطبيق ديني - رحاب -  ',
    desc: 'تطبيق ديني يحتوي على العديد من المميزات مثل: القرآن الكريم، الأذكار، الأحاديث، وغيرها. -> ( التطبيق في حاله التطوير )',
    link: 'https://example.com',
    tags: [ 'Flutter', 'Dart']
  },

];

/* ===== توليد قائمة الأعمال ===== */
const list = document.getElementById('workList');

if (list) {
  works.forEach((w, i) => {
    const num = String(i + 1).padStart(2, '0');
    const tags = w.tags.map(t => `<span>${t}</span>`).join('');

    const li = document.createElement('li');
    li.className = 'work-item';

    li.innerHTML = `
      <a href="${w.link}" target="_blank" rel="noopener">
        <span class="wi-num">${num}</span>
        <span class="wi-content">
          <span class="wi-title">${w.title}</span>
          <span class="wi-desc">${w.desc}</span>
          <span class="wi-tags">${tags}</span>
        </span>
        <span class="wi-arrow">↗</span>
      </a>
    `;

    list.appendChild(li);
  });
}

/* ===== تفعيل رابط الناڤ أثناء التمرير ===== */
const navLinks = document.querySelectorAll('.side-nav a');
const sections = document.querySelectorAll('section[id]');

if (navLinks.length && sections.length) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.toggle(
            'active',
            link.getAttribute('href') === `#${entry.target.id}`
          );
        });
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(s => io.observe(s));
>>>>>>> 331db19b0586ca640de0e1d5dab1be62754ab735
}