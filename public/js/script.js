/* ================================================================
   HAPPY HEARTS KINDERGARTEN — Main Script
   Features: i18n, dark mode, scroll reveal, counters, sliders,
             FAQ accordion, lightbox, WhatsApp, back-to-top,
             page transitions, parallax, progress bar
   ================================================================ */

/* ── i18n Dictionary ── */
const TRANSLATIONS = {
  kk: {
    // Nav
    'nav.home':        'Басты бет',
    'nav.about':       'Біз туралы',
    'nav.teachers':    'Тәрбиешілер',
    'nav.gallery':     'Галерея',
    'nav.news':        'Жаңалықтар',
    'nav.admissions':  'Қабылдау',
    'nav.contacts':    'Байланыс',

    // Hero
    'hero.badge':      '✨ Жаңа жыл — жаңа достар',
    'hero.title1':     'Бақытты балалық —',
    'hero.title2':     'жарық болашақ',
    'hero.lead':       'Happy Hearts — ойын, шығармашылық және ғылым арқылы әр баланың талантын ашатын премиум балабақша.',
    'hero.cta1':       'Балаңызды жаздырыңыз',
    'hero.cta2':       'Бағдарламалар',
    'hero.stat1':      'Бақытты бала',
    'hero.stat2':      'Тәрбиеші',
    'hero.stat3':      'Жыл тәжірибе',
    'hero.card1.t':    'Қауіпсіз орта',
    'hero.card1.s':    'Бейнебақылау 24/7',
    'hero.card2.t':    'Дені сау тамақ',
    'hero.card2.s':    'Күнде 5 рет',

    // Features
    'feat.eyebrow':    'НЕЛІКТЕН БІЗ',
    'feat.title':      'Неліктен ата-аналар Happy Hearts таңдайды',
    'feat.sub':        'Балаларға деген сүйіспеншілік, заманауи әдістемелер және мейірімді күтімді біріктіреміз.',
    'feat.1.t':        'Шығармашылық даму',
    'feat.1.d':        'Сурет, музыка, би және театр — әр бала өзін ашады.',
    'feat.2.t':        'STEM бағдарламасы',
    'feat.2.d':        'Логика, робототехника және эксперименттер — болашаққа дайындық.',
    'feat.3.t':        'Үш тілді орта',
    'feat.3.d':        'Қазақша, орысша және ағылшынша — күнделікті оқыту.',
    'feat.4.t':        'Денсаулық және спорт',
    'feat.4.d':        'Йога, жүзу, дене шынықтыру және теңгерімді тамақтану.',

    // Programs
    'prog.eyebrow':    'БАҒДАРЛАМАЛАР',
    'prog.title':      'Жас бойынша бағдарламалар',
    'prog.sub':        'Әр жас — өз әдістемесі.',
    'prog.1.age':      '2–3 жас',
    'prog.1.t':        'Сәбилер тобы',
    'prog.1.d':        'Сенсорлық даму, ертегілер және алғашқы әлеуметтену.',
    'prog.2.age':      '3–5 жас',
    'prog.2.t':        'Орта топ',
    'prog.2.d':        'Шығармашылық сабақтар, тілдерді үйрену және музыка.',
    'prog.3.age':      '5–7 жас',
    'prog.3.t':        'Мектепке дайындық',
    'prog.3.d':        'Оқу, жазу, математика және STEM пәндері.',
    'prog.more':       'Толығырақ',

    // Gallery
    'gal.eyebrow':     'СӘТТЕР',
    'gal.title':       'Біздің күнделікті өмір',
    'gal.sub':         'Бақытты күндердің суреттері.',

    // News
    'news.eyebrow':    'ЖАҢАЛЫҚТАР',
    'news.title':      'Соңғы жаңалықтар мен оқиғалар',
    'news.sub':        'Балабақшамыздың өмірі.',
    'news.cat.event':  'Іс-шара',
    'news.cat.comp':   'Жарыс',
    'news.cat.work':   'Семинар',
    'news.1.t':        'Жаңа оқу жылы ашылды',
    'news.1.d':        'Біз 2026 жылды жаңа жоспарлармен және жаңа достармен қарсы алдық.',
    'news.2.t':        'Робототехника жарысы',
    'news.2.d':        'Тәрбиеленушілеріміз үш жүлделі орын алды.',
    'news.3.t':        'Ата-аналарға арналған семинар',
    'news.3.d':        'Балалардың эмоционалды интеллекті туралы пайдалы кездесу.',
    'news.more':       'Толығырақ',

    // Testimonials
    'test.eyebrow':    'ПІКІРЛЕР',
    'test.title':      'Ата-аналар не айтады',
    'test.1.q':        '"Үш баламды осы садикке апарамын, кішісінің сөйлеуі өте жақсы жақсарды."',
    'test.1.n':        'Айдана Оразбай',
    'test.1.r':        '3 баланың анасы · 2GIS',
    'test.2.q':        '"Жиенім садикке қуана барады, тәрбиешілерді өте жақсы көреді."',
    'test.2.n':        'Анастасия Лустина',
    'test.2.r':        'Ата-ана · 2GIS ★★★★★',
    'test.3.q':        '"Қызым Салима апайдың тобына тез бейімделді, нәтиже көрінеді."',
    'test.3.n':        'Nursaule Shegenbayeva',
    'test.3.r':        'Ата-ана · 2GIS ★★★★★',
    'test.4.q':        '"Ағылшын тілі мен математика бойынша нәтиже байқалады. Теңіз жанындағы таза ауа — плюс."',
    'test.4.n':        'KAS',
    'test.4.r':        'Ата-ана · 2GIS ★★★★★',
    'test.5.q':        '"Дамуы мен жылы атмосферасы үшін алғысымды білдіремін."',
    'test.5.n':        'Актоты Утарбаева',
    'test.5.r':        'Ата-ана · 2GIS ★★★★★',

    // FAQ
    'faq.eyebrow':     'СҰРАҚТАР',
    'faq.title':       'Жиі қойылатын сұрақтарға жауаптар',
    'faq.1.q':         'Жұмыс режимі қандай?',
    'faq.1.a':         'Дүйсенбіден жұмаға дейін 07:30-дан 19:00-ге дейін.',
    'faq.2.q':         'Тамақтану қалай ұйымдастырылған?',
    'faq.2.a':         '5 рет теңгерімді тамақтану.',
    'faq.3.q':         'Сынақ күні бар ма?',
    'faq.3.a':         'Иә, тегін сынақ күні — бізбен байланысыңыз.',
    'faq.4.q':         'Қандай тілдер оқытылады?',
    'faq.4.a':         'Қазақша, орысша және ағылшынша.',

    // CTA
    'cta.title':       'Балаңыздың бақытты болашағы осы жерден басталады',
    'cta.sub':         'Сынақ күніне жазылыңыз — бәрін өз көзіңізбен көресіз.',
    'cta.btn':         'Өтінім қалдыру',

    // Footer
    'footer.about':    'Happy Hearts — заманауи балабақша.',
    'footer.nav':      'Навигация',
    'footer.contact':  'Байланыс',
    'footer.social':   'Әлеуметтік желілер',
    'footer.copy':     '© 2026 Happy Hearts. Барлық құқықтар қорғалған.',
    'footer.made':     '❤️ Алматыда жасалған',

    // Contact
    'contact.addr':    'Мекенжай',
    'contact.addr.v':  'Ақтау, Самал мкр, 51',
    'contact.phone':   'Телефон',
    'contact.phone.v': '+7 701 486 00 00',
    'contact.email':   'Email',
    'contact.email.v': 'happyhearts.aktau@gmail.com',
    'contact.hours':   'Жұмыс уақыты',
    'contact.hours.v': 'Дс–Жм, 07:30–19:00',

    // WhatsApp message
    'wa.msg':          'Сәлеметсіз бе! Мен баламды Happy Hearts балабақшасына жаздырғым келеді.',
    'wa.tooltip':      'WhatsApp-қа жазу',

    // About page
    'about.eyebrow':   'БІЗ ТУРАЛЫ',
    'about.title':     'Happy Hearts туралы',
    'about.sub':       'Балаларға деген сүйіспеншілік пен кәсіби тәжірибені біріктіреміз.',
    'about.history.eyebrow': 'ТАРИХ',
    'about.history.title':   'Біздің тарихымыз',
    'about.mission.eyebrow': 'МИССИЯ',
    'about.mission.title':   'Біздің миссиямыз',
    'about.values.eyebrow':  'ҚҰНДЫЛЫҚТАР',
    'about.values.title':    'Біздің құндылықтарымыз',
    'about.methods.eyebrow': 'ӘДІСТЕМЕЛЕР',
    'about.methods.title':   'Оқыту әдістемелері',

    // Teachers page
    'teach.eyebrow':   'КОМАНДАМЫЗ',
    'teach.title':     'Біздің тәрбиешілер',
    'teach.sub':       'Кәсіби және мейірімді команда.',

    // Gallery page
    'gallery.eyebrow': 'ГАЛЕРЕЯ',
    'gallery.title':   'Фотогалерея',
    'gallery.sub':     'Балабақшамыздың сәттері.',

    // News page
    'newspage.eyebrow':'ЖАҢАЛЫҚТАР',
    'newspage.title':  'Жаңалықтар',
    'newspage.sub':    'Соңғы оқиғалар мен жаңалықтар.',

    // Admissions
    'adm.eyebrow':     'ҚАБЫЛДАУ',
    'adm.title':       'Балаңызды жаздырыңыз',
    'adm.sub':         'Қарапайым және ыңғайлы қабылдау процесі.',
    'adm.steps.eyebrow':'ҚАДАМДАР',
    'adm.steps.title': 'Қабылдау процесі',
    'adm.docs.eyebrow':'ҚҰЖАТТАР',
    'adm.docs.title':  'Қажетті құжаттар',
    'adm.faq.eyebrow': 'СҰРАҚТАР',
    'adm.faq.title':   'Жиі қойылатын сұрақтар',

    // Contacts page
    'cont.eyebrow':    'БАЙЛАНЫС',
    'cont.title':      'Бізбен байланысыңыз',
    'cont.sub':        'Кез-келген сұрақ бойынша хабарласыңыз.',
    'cont.form.title': 'Хабарлама жіберу',
    'cont.form.name':  'Аты-жөніңіз',
    'cont.form.phone': 'Телефон',
    'cont.form.email': 'Email',
    'cont.form.subj':  'Тақырып',
    'cont.form.msg':   'Хабарлама',
    'cont.form.send':  'Жіберу',
  },

  ru: {
    'nav.home':        'Главная',
    'nav.about':       'О нас',
    'nav.teachers':    'Воспитатели',
    'nav.gallery':     'Галерея',
    'nav.news':        'Новости',
    'nav.admissions':  'Поступление',
    'nav.contacts':    'Контакты',

    'hero.badge':      '✨ Новый год — новые друзья',
    'hero.title1':     'Счастливое детство —',
    'hero.title2':     'светлое будущее',
    'hero.lead':       'Happy Hearts — премиальный детский сад, где через игру, творчество и науку мы раскрываем таланты каждого ребёнка.',
    'hero.cta1':       'Записать ребёнка',
    'hero.cta2':       'Программы',
    'hero.stat1':      'Счастливых детей',
    'hero.stat2':      'Воспитателей',
    'hero.stat3':      'Лет опыта',
    'hero.card1.t':    'Безопасная среда',
    'hero.card1.s':    'Видеонаблюдение 24/7',
    'hero.card2.t':    'Здоровое питание',
    'hero.card2.s':    '5 раз в день',

    'feat.eyebrow':    'ПОЧЕМУ МЫ',
    'feat.title':      'Почему родители выбирают Happy Hearts',
    'feat.sub':        'Мы объединяем любовь к детям, современные методики и заботливый уход.',
    'feat.1.t':        'Творческое развитие',
    'feat.1.d':        'Рисование, музыка, танцы и театр — каждый ребёнок раскрывает себя.',
    'feat.2.t':        'Программа STEM',
    'feat.2.d':        'Логика, робототехника и эксперименты — готовим к будущему.',
    'feat.3.t':        'Трёхъязычная среда',
    'feat.3.d':        'Казахский, русский и английский — ежедневное обучение.',
    'feat.4.t':        'Здоровье и спорт',
    'feat.4.d':        'Йога, плавание, физкультура и сбалансированное питание.',

    'prog.eyebrow':    'ПРОГРАММЫ',
    'prog.title':      'Программы по возрастам',
    'prog.sub':        'Каждый возраст — своя методика.',
    'prog.1.age':      '2–3 года',
    'prog.1.t':        'Группа малышей',
    'prog.1.d':        'Сенсорное развитие, сказки и первая социализация.',
    'prog.2.age':      '3–5 лет',
    'prog.2.t':        'Средняя группа',
    'prog.2.d':        'Творческие занятия, изучение языков и музыка.',
    'prog.3.age':      '5–7 лет',
    'prog.3.t':        'Подготовка к школе',
    'prog.3.d':        'Чтение, письмо, математика и STEM-предметы.',
    'prog.more':       'Подробнее',

    'gal.eyebrow':     'МОМЕНТЫ',
    'gal.title':       'Наша повседневная жизнь',
    'gal.sub':         'Кадры из счастливых будней.',

    'news.eyebrow':    'НОВОСТИ',
    'news.title':      'Последние новости и события',
    'news.sub':        'Жизнь нашего детского сада.',
    'news.cat.event':  'Событие',
    'news.cat.comp':   'Конкурс',
    'news.cat.work':   'Семинар',
    'news.1.t':        'Новый учебный год торжественно открыт',
    'news.1.d':        'Мы встретили 2026 год новыми планами и новыми друзьями.',
    'news.2.t':        'Конкурс по робототехнике',
    'news.2.d':        'Наши воспитанники заняли три призовых места.',
    'news.3.t':        'Семинар для родителей',
    'news.3.d':        'Полезная встреча об эмоциональном интеллекте детей.',
    'news.more':       'Подробнее',

    'test.eyebrow':    'ОТЗЫВЫ',
    'test.title':      'Что говорят родители',
    'test.1.q':        '"Троих детей вожу в этот садик — у младшего заметно улучшилась речь."',
    'test.1.n':        'Айдана Оразбай',
    'test.1.r':        'Мама троих детей · 2GIS',
    'test.2.q':        '"Племянница с радостью ходит в садик, очень хвалит воспитателей."',
    'test.2.n':        'Анастасия Лустина',
    'test.2.r':        'Родитель · 2GIS ★★★★★',
    'test.3.q':        '"Дочка быстро адаптировалась к группе Салимы апай, результат виден."',
    'test.3.n':        'Nursaule Shegenbayeva',
    'test.3.r':        'Родитель · 2GIS ★★★★★',
    'test.4.q':        '"Виден результат в английском и математике. Чистый воздух у моря — отдельный плюс."',
    'test.4.n':        'KAS',
    'test.4.r':        'Родитель · 2GIS ★★★★★',
    'test.5.q':        '"Благодарны за развитие ребёнка и тёплую атмосферу в садике."',
    'test.5.n':        'Актоты Утарбаева',
    'test.5.r':        'Родитель · 2GIS ★★★★★',

    'faq.eyebrow':     'ВОПРОСЫ',
    'faq.title':       'Ответы на ваши вопросы',
    'faq.1.q':         'Какой режим работы?',
    'faq.1.a':         'С понедельника по пятницу с 07:30 до 19:00.',
    'faq.2.q':         'Как организовано питание?',
    'faq.2.a':         '5-разовое сбалансированное питание.',
    'faq.3.q':         'Пробный день?',
    'faq.3.a':         'Да, бесплатный пробный день — свяжитесь с нами.',
    'faq.4.q':         'Языки обучения?',
    'faq.4.a':         'Казахский, русский и английский.',

    'cta.title':       'Счастливое будущее вашего ребёнка начинается здесь',
    'cta.sub':         'Запишитесь на пробный день — увидите всё своими глазами.',
    'cta.btn':         'Оставить заявку',

    'footer.about':    'Happy Hearts — современный детский сад.',
    'footer.nav':      'Навигация',
    'footer.contact':  'Контакты',
    'footer.social':   'Мы в соцсетях',
    'footer.copy':     '© 2026 Happy Hearts. Все права защищены.',
    'footer.made':     '❤️ Сделано в Алматы',

    'contact.addr':    'Адрес',
    'contact.addr.v':  'Актау, мкр. Самал, 51',
    'contact.phone':   'Телефон',
    'contact.phone.v': '+7 701 486 00 00',
    'contact.email':   'Email',
    'contact.email.v': 'happyhearts.aktau@gmail.com',
    'contact.hours':   'Часы работы',
    'contact.hours.v': 'Пн–Пт, 07:30–19:00',

    'wa.msg':          'Здравствуйте! Я хотел бы записать своего ребенка в детский сад Happy Hearts.',
    'wa.tooltip':      'Написать в WhatsApp',

    'about.eyebrow':   'О НАС',
    'about.title':     'О Happy Hearts',
    'about.sub':       'Объединяем любовь к детям и профессиональный опыт.',
    'about.history.eyebrow': 'ИСТОРИЯ',
    'about.history.title':   'Наша история',
    'about.mission.eyebrow': 'МИССИЯ',
    'about.mission.title':   'Наша миссия',
    'about.values.eyebrow':  'ЦЕННОСТИ',
    'about.values.title':    'Наши ценности',
    'about.methods.eyebrow': 'МЕТОДИКИ',
    'about.methods.title':   'Методики обучения',

    'teach.eyebrow':   'НАША КОМАНДА',
    'teach.title':     'Наши воспитатели',
    'teach.sub':       'Профессиональная и заботливая команда.',

    'gallery.eyebrow': 'ГАЛЕРЕЯ',
    'gallery.title':   'Фотогалерея',
    'gallery.sub':     'Моменты из жизни нашего садика.',

    'newspage.eyebrow':'НОВОСТИ',
    'newspage.title':  'Новости',
    'newspage.sub':    'Последние события и новости.',

    'adm.eyebrow':     'ПОСТУПЛЕНИЕ',
    'adm.title':       'Запишите своего ребёнка',
    'adm.sub':         'Простой и удобный процесс поступления.',
    'adm.steps.eyebrow':'ШАГИ',
    'adm.steps.title': 'Процесс поступления',
    'adm.docs.eyebrow':'ДОКУМЕНТЫ',
    'adm.docs.title':  'Необходимые документы',
    'adm.faq.eyebrow': 'ВОПРОСЫ',
    'adm.faq.title':   'Часто задаваемые вопросы',

    'cont.eyebrow':    'КОНТАКТЫ',
    'cont.title':      'Свяжитесь с нами',
    'cont.sub':        'Готовы ответить на любые вопросы.',
    'cont.form.title': 'Отправить сообщение',
    'cont.form.name':  'Ваше имя',
    'cont.form.phone': 'Телефон',
    'cont.form.email': 'Email',
    'cont.form.subj':  'Тема',
    'cont.form.msg':   'Сообщение',
    'cont.form.send':  'Отправить',
  },

  en: {
    'nav.home':        'Home',
    'nav.about':       'About',
    'nav.teachers':    'Teachers',
    'nav.gallery':     'Gallery',
    'nav.news':        'News',
    'nav.admissions':  'Admissions',
    'nav.contacts':    'Contacts',

    'hero.badge':      '✨ New Year — New Friends',
    'hero.title1':     'Happy Childhood —',
    'hero.title2':     'Bright Future',
    'hero.lead':       'Happy Hearts is a premium kindergarten where we unlock every child\'s potential through play, creativity, and science.',
    'hero.cta1':       'Enroll Your Child',
    'hero.cta2':       'Programs',
    'hero.stat1':      'Happy Children',
    'hero.stat2':      'Teachers',
    'hero.stat3':      'Years Experience',
    'hero.card1.t':    'Safe Environment',
    'hero.card1.s':    'CCTV 24/7',
    'hero.card2.t':    'Healthy Meals',
    'hero.card2.s':    '5 meals a day',

    'feat.eyebrow':    'WHY US',
    'feat.title':      'Why Parents Choose Happy Hearts',
    'feat.sub':        'We combine love for children, modern methods and caring approach.',
    'feat.1.t':        'Creative Development',
    'feat.1.d':        'Drawing, music, dance and theatre — every child shines.',
    'feat.2.t':        'STEM Program',
    'feat.2.d':        'Logic, robotics and experiments — preparing for the future.',
    'feat.3.t':        'Trilingual Environment',
    'feat.3.d':        'Kazakh, Russian and English — daily learning.',
    'feat.4.t':        'Health & Sports',
    'feat.4.d':        'Yoga, swimming, PE and balanced nutrition.',

    'prog.eyebrow':    'PROGRAMS',
    'prog.title':      'Age-Based Programs',
    'prog.sub':        'Each age — its own methodology.',
    'prog.1.age':      '2–3 years',
    'prog.1.t':        'Toddler Group',
    'prog.1.d':        'Sensory development, stories and first socialization.',
    'prog.2.age':      '3–5 years',
    'prog.2.t':        'Middle Group',
    'prog.2.d':        'Creative activities, language learning and music.',
    'prog.3.age':      '5–7 years',
    'prog.3.t':        'School Preparation',
    'prog.3.d':        'Reading, writing, math and STEM subjects.',
    'prog.more':       'Learn more',

    'gal.eyebrow':     'MOMENTS',
    'gal.title':       'Our Daily Life',
    'gal.sub':         'Snapshots from happy days.',

    'news.eyebrow':    'NEWS',
    'news.title':      'Latest News & Events',
    'news.sub':        'Life at our kindergarten.',
    'news.cat.event':  'Event',
    'news.cat.comp':   'Competition',
    'news.cat.work':   'Workshop',
    'news.1.t':        'New Academic Year Opened',
    'news.1.d':        'We welcomed 2026 with new plans and new friends.',
    'news.2.t':        'Robotics Competition',
    'news.2.d':        'Our students won three prize places.',
    'news.3.t':        'Parent Workshop',
    'news.3.d':        'A useful meeting about children\'s emotional intelligence.',
    'news.more':       'Read more',

    'test.eyebrow':    'TESTIMONIALS',
    'test.title':      'What Parents Say',
    'test.1.q':        '"I bring all three of my children here — the youngest has noticeably improved speech."',
    'test.1.n':        'Aidana Orazbai',
    'test.1.r':        'Mom of 3 · 2GIS',
    'test.2.q':        '"My niece happily goes to kindergarten and praises the teachers a lot."',
    'test.2.n':        'Anastasia Lustina',
    'test.2.r':        'Parent · 2GIS ★★★★★',
    'test.3.q':        '"My daughter adapted quickly to Salima\'s group — the results are visible."',
    'test.3.n':        'Nursaule Shegenbayeva',
    'test.3.r':        'Parent · 2GIS ★★★★★',
    'test.4.q':        '"We see progress in English and math. Fresh sea air is a bonus."',
    'test.4.n':        'KAS',
    'test.4.r':        'Parent · 2GIS ★★★★★',
    'test.5.q':        '"Grateful for the child\'s development and the warm atmosphere."',
    'test.5.n':        'Aktoty Utarbayeva',
    'test.5.r':        'Parent · 2GIS ★★★★★',

    'faq.eyebrow':     'FAQ',
    'faq.title':       'Frequently Asked Questions',
    'faq.1.q':         'What are the working hours?',
    'faq.1.a':         'Monday to Friday from 07:30 to 19:00.',
    'faq.2.q':         'How is nutrition organized?',
    'faq.2.a':         '5 balanced meals per day.',
    'faq.3.q':         'Is there a trial day?',
    'faq.3.a':         'Yes, a free trial day — contact us.',
    'faq.4.q':         'Which languages are taught?',
    'faq.4.a':         'Kazakh, Russian and English.',

    'cta.title':       'Your Child\'s Happy Future Starts Here',
    'cta.sub':         'Sign up for a trial day — see everything for yourself.',
    'cta.btn':         'Apply Now',

    'footer.about':    'Happy Hearts — a modern kindergarten.',
    'footer.nav':      'Navigation',
    'footer.contact':  'Contact',
    'footer.social':   'Follow Us',
    'footer.copy':     '© 2026 Happy Hearts. All rights reserved.',
    'footer.made':     '❤️ Made in Almaty',

    'contact.addr':    'Address',
    'contact.addr.v':  'Aktau, Samal district, 51',
    'contact.phone':   'Phone',
    'contact.phone.v': '+7 701 486 00 00',
    'contact.email':   'Email',
    'contact.email.v': 'happyhearts.aktau@gmail.com',
    'contact.hours':   'Working Hours',
    'contact.hours.v': 'Mon–Fri, 07:30–19:00',

    'wa.msg':          'Hello! I would like to enroll my child in Happy Hearts kindergarten.',
    'wa.tooltip':      'Chat on WhatsApp',

    'about.eyebrow':   'ABOUT US',
    'about.title':     'About Happy Hearts',
    'about.sub':       'Combining love for children and professional expertise.',
    'about.history.eyebrow': 'HISTORY',
    'about.history.title':   'Our History',
    'about.mission.eyebrow': 'MISSION',
    'about.mission.title':   'Our Mission',
    'about.values.eyebrow':  'VALUES',
    'about.values.title':    'Our Values',
    'about.methods.eyebrow': 'METHODS',
    'about.methods.title':   'Teaching Methods',

    'teach.eyebrow':   'OUR TEAM',
    'teach.title':     'Our Teachers',
    'teach.sub':       'Professional and caring team.',

    'gallery.eyebrow': 'GALLERY',
    'gallery.title':   'Photo Gallery',
    'gallery.sub':     'Moments from our kindergarten.',

    'newspage.eyebrow':'NEWS',
    'newspage.title':  'News',
    'newspage.sub':    'Latest events and news.',

    'adm.eyebrow':     'ADMISSIONS',
    'adm.title':       'Enroll Your Child',
    'adm.sub':         'Simple and convenient admission process.',
    'adm.steps.eyebrow':'STEPS',
    'adm.steps.title': 'Admission Process',
    'adm.docs.eyebrow':'DOCUMENTS',
    'adm.docs.title':  'Required Documents',
    'adm.faq.eyebrow': 'FAQ',
    'adm.faq.title':   'Frequently Asked Questions',

    'cont.eyebrow':    'CONTACT',
    'cont.title':      'Get in Touch',
    'cont.sub':        'We are ready to answer any questions.',
    'cont.form.title': 'Send a Message',
    'cont.form.name':  'Your Name',
    'cont.form.phone': 'Phone',
    'cont.form.email': 'Email',
    'cont.form.subj':  'Subject',
    'cont.form.msg':   'Message',
    'cont.form.send':  'Send',
  }
};

/* ── State ── */
let currentLang = localStorage.getItem('hh_lang') || 'ru';
let currentTheme = localStorage.getItem('hh_theme') || 'light';

/* ── Helpers ── */
const t = key => (TRANSLATIONS[currentLang] || TRANSLATIONS.ru)[key] || key;

/* ── Apply i18n ── */
function applyLang(animate = false) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = t(key);
    if (!val) return;
    const update = () => { el.textContent = val; };
    if (animate) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(4px)';
      setTimeout(() => {
        update();
        el.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
        setTimeout(() => { el.style.transition = ''; el.style.transform = ''; }, 300);
      }, 80);
    } else { update(); }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = t(el.getAttribute('data-i18n-placeholder'));
  });

  /* Update WhatsApp link */
  updateWaLink();

  /* Mark active lang button */
  document.querySelectorAll('.lang-switch button').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
  });

  document.documentElement.lang = currentLang;
}

function updateWaLink() {
  const num = (window._contacts && window._contacts.whatsapp) ? window._contacts.whatsapp : '77014860000';
  const msg = encodeURIComponent(t('wa.msg'));
  document.querySelectorAll('.wa-btn').forEach(a => {
    a.href = `https://wa.me/${num}?text=${msg}`;
  });
}

function applyContacts(c) {
  window._contacts = c;
  /* Update i18n values for all languages */
  ['kk','ru','en'].forEach(lang => {
    if (TRANSLATIONS[lang]) {
      if (c.addr)  { TRANSLATIONS[lang]['contact.addr.v']  = c.addr; }
      if (c.phone) { TRANSLATIONS[lang]['contact.phone.v'] = c.phone; }
      if (c.email) { TRANSLATIONS[lang]['contact.email.v'] = c.email; }
      if (c.hours) { TRANSLATIONS[lang]['contact.hours.v'] = c.hours; }
    }
  });
  /* Re-apply text content */
  document.querySelectorAll('[data-i18n="contact.addr.v"]').forEach(el => { el.textContent = c.addr; });
  document.querySelectorAll('[data-i18n="contact.phone.v"]').forEach(el => { el.textContent = c.phone; });
  document.querySelectorAll('[data-i18n="contact.email.v"]').forEach(el => { el.textContent = c.email; });
  document.querySelectorAll('[data-i18n="contact.hours.v"]').forEach(el => { el.textContent = c.hours; });
  /* tel: and mailto: links */
  document.querySelectorAll('a[href^="tel:"]').forEach(a => { a.href = 'tel:' + c.phone_raw; });
  document.querySelectorAll('a[href^="mailto:"]').forEach(a => {
    a.href = 'mailto:' + c.email;
    if (a.textContent && a.textContent.includes('@')) a.textContent = c.email;
  });
  updateWaLink();
}

function loadContacts() {
  fetch('/data/contacts.json?_=' + Date.now())
    .then(r => r.ok ? r.json() : null)
    .then(c => { if (c) applyContacts(c); })
    .catch(() => {});
}

/* ── Theme (light only) ── */
function applyTheme() {
  document.documentElement.setAttribute('data-theme', 'light');
}

function toggleTheme() {}

/* ── Loader ── */
function hideLoader() {
  const loader = document.querySelector('.loader');
  if (loader) {
    setTimeout(() => loader.classList.add('hidden'), 600);
  }
}

/* ── Header scroll effect ── */
function initHeader() {
  const header = document.querySelector('.header');
  if (!header) return;
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 20);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ── Scroll progress bar ── */
function initProgressBar() {
  const bar = document.querySelector('.progress-bar');
  if (!bar) return;
  window.addEventListener('scroll', () => {
    const pct = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) * 100;
    bar.style.width = Math.min(pct, 100) + '%';
  }, { passive: true });
}

/* ── Burger / Mobile menu ── */
function initBurger() {
  const burger = document.querySelector('.burger');
  const menu   = document.querySelector('.mobile-menu');
  if (!burger || !menu) return;
  burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    menu.classList.toggle('open');
  });
  document.addEventListener('click', e => {
    if (!burger.contains(e.target) && !menu.contains(e.target)) {
      burger.classList.remove('open');
      menu.classList.remove('open');
    }
  });
}

/* ── Language switcher ── */
function initLangSwitch() {
  document.querySelectorAll('.lang-switch button').forEach(btn => {
    btn.addEventListener('click', () => {
      currentLang = btn.dataset.lang;
      localStorage.setItem('hh_lang', currentLang);
      applyLang(true);
    });
  });
}

/* ── Theme toggles ── */
function initThemeToggle() {
  document.querySelectorAll('.theme-toggle').forEach(btn => {
    btn.addEventListener('click', toggleTheme);
  });
}

/* ── Active nav link ── */
function setActiveNav() {
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(a => {
    const href = a.getAttribute('href') || '';
    a.classList.toggle('active', href.includes(page) || (page === 'index.html' && href.endsWith('index.html')));
  });
}

/* ── Scroll Reveal ── */
function initReveal() {
  const items = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  if (!items.length) return;
  const io = new IntersectionObserver(entries => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 80);
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });
  items.forEach(el => io.observe(el));
}

/* ── Animated Counters ── */
function animateCounter(el, target, duration = 1800) {
  let start = null;
  const step = ts => {
    if (!start) start = ts;
    const progress = Math.min((ts - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.querySelector('.count-num').textContent = Math.floor(eased * target);
    if (progress < 1) requestAnimationFrame(step);
    else el.querySelector('.count-num').textContent = target;
  };
  requestAnimationFrame(step);
}

function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        animateCounter(e.target, parseInt(e.target.dataset.count));
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => io.observe(c));
}

/* ── FAQ Accordion ── */
function initFaq() {
  document.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', () => {
      const item   = btn.closest('.faq-item');
      const answer = item.querySelector('.faq-a');
      const isOpen = btn.classList.contains('open');

      document.querySelectorAll('.faq-q.open').forEach(b => {
        b.classList.remove('open');
        b.closest('.faq-item').querySelector('.faq-a').classList.remove('open');
      });

      if (!isOpen) {
        btn.classList.add('open');
        answer.classList.add('open');
      }
    });
  });
}

/* ── Testimonials Slider ── */
function initTestimonialsSlider() {
  const wrap  = document.querySelector('.testimonials-wrap');
  if (!wrap) return;
  const track = wrap.querySelector('.testimonials-track');
  const dotsWrap = wrap.closest('.section')?.querySelector('.slider-dots');
  const btnPrev  = wrap.closest('.section')?.querySelector('.slider-btn.prev');
  const btnNext  = wrap.closest('.section')?.querySelector('.slider-btn.next');
  if (!track) return;

  const cards = track.querySelectorAll('.testimonial-card');
  let current = 0;
  let perView = getPerView();

  function getPerView() {
    if (window.innerWidth <= 560) return 1;
    if (window.innerWidth <= 900) return 2;
    return 3;
  }

  function buildDots() {
    if (!dotsWrap) return;
    const total = Math.ceil(cards.length / perView);
    dotsWrap.innerHTML = '';
    for (let i = 0; i < total; i++) {
      const d = document.createElement('button');
      d.className = 'slider-dot' + (i === 0 ? ' active' : '');
      d.setAttribute('aria-label', 'Slide ' + (i+1));
      d.addEventListener('click', () => goTo(i));
      dotsWrap.appendChild(d);
    }
  }

  function goTo(idx) {
    const total = Math.ceil(cards.length / perView);
    current = Math.max(0, Math.min(idx, total - 1));
    const cardW = cards[0].offsetWidth + 24;
    track.style.transform = `translateX(-${current * perView * cardW}px)`;
    dotsWrap?.querySelectorAll('.slider-dot').forEach((d, i) => d.classList.toggle('active', i === current));
  }

  btnPrev?.addEventListener('click', () => goTo(current - 1));
  btnNext?.addEventListener('click', () => goTo(current + 1));

  buildDots();
  window.addEventListener('resize', () => {
    perView = getPerView();
    buildDots();
    goTo(0);
  });

  /* Auto-play */
  let timer = setInterval(() => goTo(current + 1 >= Math.ceil(cards.length/perView) ? 0 : current + 1), 5000);
  wrap.addEventListener('mouseenter', () => clearInterval(timer));
  wrap.addEventListener('mouseleave', () => { timer = setInterval(() => goTo(current + 1 >= Math.ceil(cards.length/perView) ? 0 : current + 1), 5000); });
}

/* ── Lightbox ── */
function initLightbox() {
  const lb   = document.querySelector('.lightbox');
  if (!lb) return;
  const img  = lb.querySelector('.lightbox-img');
  const close= lb.querySelector('.lightbox-close');
  const prev = lb.querySelector('.lightbox-prev');
  const next = lb.querySelector('.lightbox-next');
  const items= [...document.querySelectorAll('.gallery-item img')];
  let current = 0;

  function open(idx) {
    current = idx;
    img.src = items[idx].src;
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeLb() {
    lb.classList.remove('open');
    document.body.style.overflow = '';
  }

  items.forEach((im, i) => {
    im.closest('.gallery-item').addEventListener('click', () => open(i));
  });

  close?.addEventListener('click', closeLb);
  lb.addEventListener('click', e => { if (e.target === lb) closeLb(); });
  prev?.addEventListener('click', () => open((current - 1 + items.length) % items.length));
  next?.addEventListener('click', () => open((current + 1) % items.length));
  document.addEventListener('keydown', e => {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') closeLb();
    if (e.key === 'ArrowLeft')  prev?.click();
    if (e.key === 'ArrowRight') next?.click();
  });
}

/* ── WhatsApp & Back to Top ── */
function initFloating() {
  const waBtn   = document.querySelector('.wa-btn');
  const backTop = document.querySelector('.back-top');

  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    waBtn?.classList.toggle('visible', y > 200);
    backTop?.classList.toggle('visible', y > 400);
  }, { passive: true });

  backTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ── Contact Form (mock submit) ── */
function initContactForm() {
  const form = document.querySelector('.contact-form');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const orig = btn.textContent;
    btn.disabled = true;
    btn.textContent = '...';
    setTimeout(() => {
      btn.textContent = '✓';
      btn.style.background = 'linear-gradient(135deg,#B5EAD7,#2DC98C)';
      setTimeout(() => { btn.textContent = orig; btn.disabled = false; btn.style.background = ''; form.reset(); }, 2500);
    }, 1200);
  });
}

/* ── Parallax blobs (subtle) ── */
function initParallax() {
  const blobs = document.querySelectorAll('.blob');
  if (!blobs.length || window.matchMedia('(prefers-reduced-motion:reduce)').matches) return;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    blobs.forEach((b, i) => {
      b.style.transform = `translateY(${y * (0.05 + i * 0.02)}px)`;
    });
  }, { passive: true });
}

/* ── Teachers ── */
function loadTeachers() {
  const grid = document.getElementById('teachersGrid');
  if (!grid) return;
  fetch('/data/teachers.json?_=' + Date.now())
    .then(r => r.ok ? r.json() : [])
    .then(teachers => {
      if (!Array.isArray(teachers) || !teachers.length) {
        grid.innerHTML = '<p style="text-align:center;color:var(--text-muted);padding:40px 0">Воспитатели скоро появятся.</p>';
        return;
      }
      grid.innerHTML = teachers.map(t => `
        <div class="teacher-card reveal">
          <div class="teacher-photo">
            ${t.photo
              ? `<img src="${t.photo}" alt="${t.name}" loading="lazy">`
              : `<div style="width:100%;height:100%;background:var(--primary-light);display:flex;align-items:center;justify-content:center"><svg viewBox="0 0 24 24" width="64" height="64" fill="none" stroke="var(--primary)" stroke-width="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div>`
            }
            <div class="teacher-overlay"></div>
          </div>
          <div class="teacher-info">
            <h3>${t.name}</h3>
            ${t.role ? `<div class="teacher-role">${t.role}</div>` : ''}
            ${t.desc ? `<p class="teacher-desc">${t.desc}</p>` : ''}
          </div>
        </div>`).join('');
      initReveal();
    })
    .catch(() => {});
}

/* ── Dynamic hero stats ── */
const FOUNDED_YEAR = 2021;

function updateHeroStats() {
  // Years of experience — auto-increments every year
  const yearsEl = document.querySelector('.stat-num[data-years]');
  if (yearsEl) {
    const years = new Date().getFullYear() - FOUNDED_YEAR;
    yearsEl.dataset.count = years;
    const span = yearsEl.querySelector('.count-num');
    if (span) span.textContent = years;
  }

  // Teachers count — load from JSON
  const teachersEl = document.querySelector('.stat-num[data-count="28"]');
  if (!teachersEl) return;
  fetch('/data/teachers.json?_=' + Date.now())
    .then(r => r.ok ? r.json() : null)
    .then(data => {
      if (!Array.isArray(data)) return;
      teachersEl.dataset.count = data.length;
      const span = teachersEl.querySelector('.count-num');
      if (span) span.textContent = data.length;
    })
    .catch(() => {});
}

/* ── Init all ── */
document.addEventListener('DOMContentLoaded', () => {
  applyTheme();
  applyLang(false);
  loadContacts();
  loadTeachers();
  updateHeroStats();
  hideLoader();
  initHeader();
  initProgressBar();
  initBurger();
  initLangSwitch();
  initThemeToggle();
  setActiveNav();
  initReveal();
  initCounters();
  initFaq();
  initTestimonialsSlider();
  initLightbox();
  initFloating();
  initContactForm();
  initParallax();
});
