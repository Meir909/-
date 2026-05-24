/* ================================================================
   HAPPY HEARTS — Script
   ================================================================ */

const TRANSLATIONS = {
  kk: {
    /* NAV */
    'nav.home':      'Басты бет',
    'nav.news':      'Жаңалықтар',
    'nav.about':     'Балабақша туралы',
    'nav.director':  'Басшы туралы',
    'nav.documents': 'Құжаттар',
    'nav.gallery':   'Галерея',
    'nav.contacts':  'Байланыс',
    'nav.consult':   'Консультациялық орталық',
    'nav.attest':    'Аттестация',

    /* HEADER */
    'hdr.orgtype':   'Мектепке дейінгі білім берудің жеке мекемесі',
    'hdr.dept':      'Ақтау қаласындағы балабақша',

    /* SIDEBAR */
    'side.contacts': 'Байланыс',
    'side.addr':     'Ақтау қ., Самал мкр., 51',
    'side.hours':    'Дс–Жм: 07:30–19:00',

    /* FOOTER */
    'footer.copy':   '© 2026 ЖМ «Happy Hearts». Барлық құқықтар қорғалған. | Ақтау қ., Самал мкр., 51 | +7 701 486 00 00',

    /* INDEX */
    'index.title':   'Happy Hearts-қа қош келдіңіз!',
    'index.p1':      '«Happy Hearts» жеке балабақшасы — әр бала өзін сүйікті, қорғалған және бақытты сезінетін орын. Біз балаларды жылулық пен қамқорлық атмосферасында үйлесімді дамыту үшін жағдай жасаймыз.',
    'index.p2':      'Балабақшамыз Ақтау қаласында орналасқан және 2-ден 7 жасқа дейінгі балаларды қабылдайды. Біз әр баланың тұлғасын жан-жақты дамытуға бағытталған әртүрлі білім беру бағдарламаларын ұсынамыз.',
    'index.adv':     'Біздің артықшылықтарымыз',
    'index.adv1':    'Тәжірибелі және қамқор педагогтар',
    'index.adv2':    'Екі тілде оқыту (қазақша, орысша)',
    'index.adv3':    'Мектепке дейінгі білім берудің заманауи әдістемелері',
    'index.adv4':    'Теңгерімді 5 реттік тамақтану',
    'index.adv5':    'Қауіпсіз дамытушы орта',
    'index.adv6':    'Спорттық және шығармашылық сабақтар',
    'index.adv7':    'Тұрақты мерекелер мен іс-шаралар',
    'index.latestnews': 'Соңғы жаңалықтар',
    'index.allnews': 'Барлық жаңалықтар »',
    'index.readmore':'Толығырақ »',

    /* NEWS */
    'news.title':    'Жаңалықтар мен оқиғалар',
    'news.1.title':  'Жаңа оқу жылы салтанатты ашылды',
    'news.1.intro':  'Біз 2026–2027 оқу жылын жаңа жоспарлар мен жаңа достармен қуанышпен қарсы алдық! Салтанатты іс-шара жылы атмосферада өтті.',
    'news.2.title':  'Балабақшамызда Наурыз мерекесі',
    'news.2.intro':  'Балалар мен тәрбиешілер Наурыз мерекесін қуанышпен атап өтті. Балалар ұлттық билерді орындады, қазақ әндерін айтты.',
    'news.3.title':  'Тәрбиеленушілеріміз қалалық байқауда жеңіске жетті',
    'news.3.intro':  'Happy Hearts тәрбиеленушілері «Балалар көзімен» шығармашылық байқауда жүлделі орындарды алды.',
    'news.4.title':  'Сурет салу бойынша шығармашылық шебер-сынып',
    'news.4.intro':  'Балабақшамызда тәжірибелі педагог басшылығымен сурет салу бойынша қызықты шебер-сынып өтті.',
    'news.5.title':  'Тәрбиеленушілер арасындағы шахмат турнирі',
    'news.5.intro':  'Happy Hearts-та үлкен топтар арасында бірінші шахмат турнирі өтті. Жас шахматшылар жақсы білім мен логикалық ойлауын көрсетті.',
    'news.6.title':  'Ата-аналар жиналысы: жаңа оқу жылы',
    'news.6.intro':  'Педагогтар жаңа оқу жылының жоспарлары, білім беру бағдарламалары мен алдағы іс-шаралар туралы айтып берген ата-аналар жиналысы өтті.',
    'news.breadcrumb': 'Жаңалықтар',
    'news.next':     'Келесі »',

    /* ABOUT */
    'about.title':   '«Happy Hearts» балабақшасы туралы',
    'about.breadcrumb': 'Балабақша туралы',
    'about.p1':      '«Happy Hearts» жеке балабақшасы — Ақтау қаласындағы 2-ден 7 жасқа дейінгі балаларды сапалы мектепке дейінгі білім беру мен тәрбиелеу мақсатында құрылған заманауи мектепке дейінгі мекеме.',
    'about.p2':      'Балабақшамыз Қазақстан Республикасының мемлекеттік білім беру стандарттарына сәйкес жұмыс істейді.',
    'about.mission': 'Біздің миссиямыз',
    'about.missiontext': 'Әр балаға өз мүмкіндіктерін ашып, шығармашылық қабілеттерін дамытып, қауіпсіз және сүйіспеншілікті ортада бірінші қарым-қатынас дағдыларын алу жағдайын жасау.',
    'about.programs':'Білім беру бағдарламалары',
    'about.programs.col1':'Жас тобы',
    'about.programs.col2':'Топ атауы',
    'about.programs.col3':'Жас',
    'about.programs.r1c1':'Ясли тобы',
    'about.programs.r1c2':'«Күнше»',
    'about.programs.r1c3':'2–3 жас',
    'about.programs.r2c1':'Кіші топ',
    'about.programs.r2c2':'«Ромашка»',
    'about.programs.r2c3':'3–4 жас',
    'about.programs.r3c1':'Орта топ',
    'about.programs.r3c2':'«Кемпірқосақ»',
    'about.programs.r3c3':'4–5 жас',
    'about.programs.r4c1':'Үлкен топ',
    'about.programs.r4c2':'«Жұлдызшалар»',
    'about.programs.r4c3':'5–6 жас',
    'about.programs.r5c1':'Дайындық тобы',
    'about.programs.r5c2':'«Болашақ оқушылар»',
    'about.programs.r5c3':'6–7 жас',
    'about.directions': 'Жұмыс бағыттары',
    'about.d1': 'Дене тәрбиесі және денсаулықты сақтау',
    'about.d2': 'Танымдық және сөйлеу дамуы',
    'about.d3': 'Көркемдік-эстетикалық даму',
    'about.d4': 'Әлеуметтік-коммуникативтік даму',
    'about.d5': 'Екі тілде оқыту (қазақша, орысша)',
    'about.d6': 'Музыкалық тәрбие',
    'about.d7': 'Хореография және театр',
    'about.conditions': 'Болу жағдайлары',
    'about.conditionstext': 'Балабақша заманауи ойын бөлмелерімен, спорт залымен, музыка залымен, серуен алаңдарымен және медициналық кабинетпен жабдықталған.',
    'about.schedule': 'Жұмыс режимі',
    'about.sch.r1c1': 'Жұмыс режимі',
    'about.sch.r1c2': 'Дүйсенбі – Жұма: 07:30 – 19:00',
    'about.sch.r2c1': 'Таңғы қабылдау',
    'about.sch.r2c2': '07:30 – 08:30',
    'about.sch.r3c1': 'Күндізгі ұйқы',
    'about.sch.r3c2': '13:00 – 15:00',
    'about.sch.r4c1': 'Кешкі шығу',
    'about.sch.r4c2': '19:00-ға дейін',

    /* GALLERY */
    'gallery.title':  'Фотогалерея',
    'gallery.breadcrumb': 'Галерея',
    'gallery.desc':   'Балабақшамыздың күнделікті өмірінен суреттер — сабақтар, мерекелер, серуендер.',
    'gallery.cap1':   'Топтағы сабақ',
    'gallery.cap2':   'Шахмат клубы',
    'gallery.cap3':   'Шығармашылық сабақ',
    'gallery.cap4':   'Таза ауада серуен',
    'gallery.cap5':   'Қалалық байқау',
    'gallery.cap6':   'Дамытушы сабақ',
    'gallery.cap7':   'Кішкентайлар тобы',
    'gallery.cap8':   'Біздің тәрбиеленушілер',
    'gallery.cap9':   'Наурыз мерекесі',
    'gallery.cap10':  'Оқыту және ойын',
    'gallery.cap11':  'English room сабағы',
    'gallery.cap12':  'Спорт сабағы',
    'gallery.cap13':  'Балалар шығармашылығы',
    'gallery.cap14':  'Жаңа жыл кеші',

    /* CONTACTS */
    'contacts.title':  'Байланыс ақпараты',
    'contacts.breadcrumb': 'Байланыс',
    'contacts.r1c1':  'Толық атауы',
    'contacts.r1c2':  'ЖМ «Happy Hearts»',
    'contacts.r2c1':  'Мекенжайы',
    'contacts.r2c2':  'Ақтау қ., Самал мкр., 51-үй',
    'contacts.r3c1':  'Телефон',
    'contacts.r4c1':  'Электрондық пошта',
    'contacts.r5c1':  'WhatsApp',
    'contacts.r6c1':  'Жұмыс режимі',
    'contacts.r6c2':  'Дүйсенбі – Жұма: 07:30 – 19:00',
    'contacts.r7c1':  'Басшының қабылдау сағаттары',
    'contacts.r7c2':  'Дүйсенбі – Жұма: 09:00 – 12:00',
    'contacts.form':  'Бізге жазыңыз',
    'contacts.formdesc': 'Байланысу үшін телефон арқылы немесе жұмыс күндері балабақшаға жеке келіңіз.',
    'contacts.name':  'Сіздің атыңыз *',
    'contacts.nameplaceholder': 'Атыңызды енгізіңіз',
    'contacts.phone': 'Телефон *',
    'contacts.email': 'Email',
    'contacts.msg':   'Хабарлама *',
    'contacts.msgplaceholder': 'Сұрағыңызды жазыңыз...',
    'contacts.send':  'Жіберу',

    /* DIRECTOR */
    'director.title': 'Басшы туралы',
    'director.breadcrumb': 'Басшы туралы',
    'director.positionlabel': 'Лауазымы',
    'director.positionval': 'Балабақша меңгерушісі',
    'director.edulabel': 'Білімі',
    'director.eduval': 'Жоғары педагогикалық',
    'director.phonelabel': 'Телефон',
    'director.emaillabel': 'Email',
    'director.hourslabel': 'Қабылдау сағаттары',
    'director.hoursval': 'Дүйсенбі – Жұма: 09:00 – 12:00',
    'director.biotext': 'Балабақша басшысы туралы ақпарат осында орналастырылады. Осы бөлімді толтыру үшін деректер беріңіз.',
    'director.placeholder': 'Атауы',
    'director.placeholderorg': 'Happy Hearts',

    /* DOCUMENTS */
    'docs.title':     'Құжаттар',
    'docs.breadcrumb':'Құжаттар',
    'docs.desc':      '«Happy Hearts» балабақшасының нормативтік және ұйымдастырушылық құжаттары.',
    'docs.cat1':      'Құрылтай құжаттары',
    'docs.cat2':      'Білім беру бағдарламалары',
    'docs.cat3':      'Ішкі құжаттар',
    'docs.cat4':      'Есептер мен жоспарлар',
    'docs.d1.1':      'Мемлекеттік тіркеу туралы куәлік',
    'docs.d1.2':      '«Happy Hearts» ЖМ Жарғысы',
    'docs.d1.3':      'Білім беру қызметіне лицензия',
    'docs.d2.1':      'Мектепке дейінгі білім берудің негізгі бағдарламасы',
    'docs.d2.2':      'Тәрбие жұмысының бағдарламасы',
    'docs.d2.3':      '2025–2026 оқу жылының оқу жоспары',
    'docs.d2.4':      'Сабақ кестесі',
    'docs.d3.1':      'Ішкі еңбек тәртібі ережелері',
    'docs.d3.2':      'Балаларды қабылдау тәртібі туралы ереже',
    'docs.d3.3':      'Білім беру қызметтерін көрсетудің мемлекеттік шарты',
    'docs.d3.4':      'Сыбайлас жемқорлыққа қарсы саясат',
    'docs.d4.1':      '2025–2026 оқу жылына арналған жылдық жұмыс жоспары',
    'docs.d4.2':      '2024–2025 оқу жылы бойынша өзін-өзі тексеру есебі',
    'docs.download':  'Жүктеу',
    'docs.note':      'Түпнұсқа құжаттарды алу үшін балабақша әкімшілігіне хабарласыңыз.',

    /* CONSULT */
    'consult.title':  'Консультациялық орталық',
    'consult.breadcrumb': 'Консультациялық орталық',
    'consult.p1':     '«Happy Hearts» консультациялық орталығы мектепке дейінгі жастағы балалардың ата-аналарына (заңды өкілдерге) тегін әдістемелік, психологиялық-педагогикалық, диагностикалық және консультативтік көмек көрсетеді.',
    'consult.p2':     'Консультациялар белгіленген кесте бойынша балабақшамыздың тәжірибелі мамандары жүргізеді.',
    'consult.specialists': 'Біздің мамандар',
    'consult.spec1':  'Педагог-психолог',
    'consult.spec1desc': 'Баланың психологиялық дамуы, балабақшаға бейімделу, ата-бала қарым-қатынасы мәселелері бойынша консультациялар.',
    'consult.spec1hours': 'Дүйсенбі, Сәрсенбі: 10:00 – 12:00',
    'consult.spec2':  'Мұғалім-логопед',
    'consult.spec2desc': 'Сөйлеу бұзылыстарын диагностикалау және түзету. Сөйлеу дамуы мәселелері бойынша ата-аналарды консультациялау.',
    'consult.spec2hours': 'Сейсенбі, Бейсенбі: 10:00 – 12:00',
    'consult.spec3':  'Педагог-тәрбиеші',
    'consult.spec3desc': 'Баланы тәрбиелеу, оқыту және мектепке дайындау мәселелері бойынша консультациялар.',
    'consult.spec3hours': 'Жұма: 10:00 – 12:00',
    'consult.spec4':  'Медициналық қызметкер',
    'consult.spec4desc': 'Мектепке дейінгі жастағы балалардың денсаулығы, тамақтануы және дене дамуы мәселелері бойынша консультациялар.',
    'consult.spec4hours': 'Дүйсенбі – Жұма: 09:00 – 11:00',
    'consult.booking': 'Консультацияға жазылу',
    'consult.bookingdesc': 'Консультацияға жазылу үшін телефон арқылы немесе жұмыс күндері балабақшаға жеке келіңіз.',

    /* ATTEST */
    'attest.title':   'Педагогикалық қызметкерлерді аттестациялау',
    'attest.breadcrumb': 'Аттестация',
    'attest.p1':      'Педагогикалық қызметкерлерді аттестациялау олардың кәсіби қызметін бағалау негізінде лауазымдарға сәйкестігін растау мақсатында жүргізіледі.',
    'attest.categories': 'Біліктілік санаттары',
    'attest.cat1name': 'Бірінші санат',
    'attest.cat1desc': 'Жоғары кәсіби шеберлік деңгейі бар, тұрақты нәтижелерге ие педагогтар.',
    'attest.cat2name': 'Жоғары санат',
    'attest.cat2desc': 'Жоғары біліктілік деңгейіне ие, айтарлықтай кәсіби тәжірибесі бар педагогтар.',
    'attest.cat3name': 'Лауазымға сәйкестік',
    'attest.cat3desc': 'Педагогикалық қызметкердің лауазымына сәйкестігін растауға арналған міндетті аттестация.',
    'attest.table':   'Happy Hearts педагогтарын аттестациялау туралы мәліметтер',
    'attest.col1':    'Педагогтың ТАӘ',
    'attest.col2':    'Лауазымы',
    'attest.col3':    'Біліктілік санаты',
    'attest.col4':    'Жарамдылық мерзімі',
    'attest.empty':   'Деректер ақпарат берілгеннен кейін толтырылады',
    'attest.note':    'Өзекті ақпарат алу үшін балабақша әкімшілігіне хабарласыңыз',
  },

  ru: {
    /* NAV */
    'nav.home':      'Главная',
    'nav.news':      'Новости',
    'nav.about':     'О детском саде',
    'nav.director':  'О руководителе',
    'nav.documents': 'Документы',
    'nav.gallery':   'Галерея',
    'nav.contacts':  'Контакты',
    'nav.consult':   'Консультационный пункт',
    'nav.attest':    'Аттестация',

    /* HEADER */
    'hdr.orgtype':   'Частное учреждение дошкольного образования',
    'hdr.dept':      'Детский сад г. Актау',

    /* SIDEBAR */
    'side.contacts': 'Контакты',
    'side.addr':     'г. Актау, мкр. Самал, 51',
    'side.hours':    'Пн–Пт: 07:30–19:00',

    /* FOOTER */
    'footer.copy':   '© 2026 ЧУ «Happy Hearts». Все права защищены. | г. Актау, мкр. Самал, 51 | +7 701 486 00 00',

    /* INDEX */
    'index.title':   'Добро пожаловать в Happy Hearts!',
    'index.p1':      'Частный детский сад «Happy Hearts» — это место, где каждый ребёнок чувствует себя любимым, защищённым и счастливым. Мы создаём условия для гармоничного развития детей в атмосфере тепла и заботы.',
    'index.p2':      'Наш детский сад расположен в г. Актау и принимает детей от 2 до 7 лет. Мы предлагаем разнообразные образовательные программы, направленные на всестороннее развитие личности каждого ребёнка.',
    'index.adv':     'Наши преимущества',
    'index.adv1':    'Опытные и заботливые педагоги',
    'index.adv2':    'Двуязычное обучение (казахский, русский)',
    'index.adv3':    'Современные методики дошкольного образования',
    'index.adv4':    'Сбалансированное 5-разовое питание',
    'index.adv5':    'Безопасная развивающая среда',
    'index.adv6':    'Спортивные и творческие занятия',
    'index.adv7':    'Регулярные праздники и мероприятия',
    'index.latestnews': 'Последние новости',
    'index.allnews': 'Все новости »',
    'index.readmore':'Читать далее »',

    /* NEWS */
    'news.title':    'Новости и события',
    'news.1.title':  'Новый учебный год торжественно открыт',
    'news.1.intro':  'Мы с радостью встретили новый 2026–2027 учебный год! Торжественная линейка прошла в тёплой и праздничной атмосфере.',
    'news.2.title':  'Праздник Наурыз в нашем детском саду',
    'news.2.intro':  'Дети и воспитатели с радостью отметили праздник Наурыз. Дети исполняли национальные танцы, пели казахские песни.',
    'news.3.title':  'Наши воспитанники победили в городском конкурсе',
    'news.3.intro':  'Воспитанники Happy Hearts заняли призовые места в городском конкурсе детского творчества «Мир глазами детей».',
    'news.4.title':  'Творческий мастер-класс по рисованию',
    'news.4.intro':  'В нашем детском саду прошёл увлекательный мастер-класс по рисованию под руководством опытного педагога.',
    'news.5.title':  'Шахматный турнир среди воспитанников',
    'news.5.intro':  'В Happy Hearts прошёл первый шахматный турнир среди воспитанников старших групп. Юные шахматисты продемонстрировали отличные знания.',
    'news.6.title':  'Родительское собрание: новый учебный год',
    'news.6.intro':  'Состоялось родительское собрание, на котором педагоги рассказали о планах на новый учебный год и образовательных программах.',
    'news.breadcrumb': 'Новости',
    'news.next':     'Следующая »',

    /* ABOUT */
    'about.title':   'О детском саде «Happy Hearts»',
    'about.breadcrumb': 'О детском саде',
    'about.p1':      'Частный детский сад «Happy Hearts» — современное дошкольное учреждение в г. Актау, созданное с целью обеспечения качественного дошкольного образования и воспитания детей в возрасте от 2 до 7 лет.',
    'about.p2':      'Наш детский сад работает в соответствии с государственными образовательными стандартами Республики Казахстан.',
    'about.mission': 'Наша миссия',
    'about.missiontext': 'Создать для каждого ребёнка условия, в которых он сможет раскрыть свой потенциал, развить творческие способности, получить первые навыки общения в безопасной и любящей среде.',
    'about.programs':'Образовательные программы',
    'about.programs.col1':'Возрастная группа',
    'about.programs.col2':'Название группы',
    'about.programs.col3':'Возраст',
    'about.programs.r1c1':'Ясельная группа',
    'about.programs.r1c2':'«Солнышко»',
    'about.programs.r1c3':'2–3 года',
    'about.programs.r2c1':'Младшая группа',
    'about.programs.r2c2':'«Ромашка»',
    'about.programs.r2c3':'3–4 года',
    'about.programs.r3c1':'Средняя группа',
    'about.programs.r3c2':'«Радуга»',
    'about.programs.r3c3':'4–5 лет',
    'about.programs.r4c1':'Старшая группа',
    'about.programs.r4c2':'«Звёздочки»',
    'about.programs.r4c3':'5–6 лет',
    'about.programs.r5c1':'Подготовительная группа',
    'about.programs.r5c2':'«Будущие школьники»',
    'about.programs.r5c3':'6–7 лет',
    'about.directions': 'Направления работы',
    'about.d1': 'Физическое воспитание и здоровьесбережение',
    'about.d2': 'Познавательное и речевое развитие',
    'about.d3': 'Художественно-эстетическое развитие',
    'about.d4': 'Социально-коммуникативное развитие',
    'about.d5': 'Двуязычное обучение (казахский, русский)',
    'about.d6': 'Музыкальное воспитание',
    'about.d7': 'Хореография и театр',
    'about.conditions': 'Условия пребывания',
    'about.conditionstext': 'Детский сад оснащён современными игровыми комнатами, спортивным залом, музыкальным залом, прогулочными площадками и медицинским кабинетом.',
    'about.schedule': 'Режим работы',
    'about.sch.r1c1': 'Режим работы',
    'about.sch.r1c2': 'Понедельник – Пятница: 07:30 – 19:00',
    'about.sch.r2c1': 'Утренний приём',
    'about.sch.r2c2': '07:30 – 08:30',
    'about.sch.r3c1': 'Дневной сон',
    'about.sch.r3c2': '13:00 – 15:00',
    'about.sch.r4c1': 'Вечерний уход',
    'about.sch.r4c2': 'До 19:00',

    /* GALLERY */
    'gallery.title':  'Фотогалерея',
    'gallery.breadcrumb': 'Галерея',
    'gallery.desc':   'Фотографии из повседневной жизни нашего детского сада — занятия, праздники, прогулки.',
    'gallery.cap1':   'Занятие в группе',
    'gallery.cap2':   'Шахматный клуб',
    'gallery.cap3':   'Творческое занятие',
    'gallery.cap4':   'Прогулка на свежем воздухе',
    'gallery.cap5':   'Городской конкурс',
    'gallery.cap6':   'Развивающее занятие',
    'gallery.cap7':   'Группа малышей',
    'gallery.cap8':   'Наши воспитанники',
    'gallery.cap9':   'Праздник Наурыз',
    'gallery.cap10':  'Обучение и игра',
    'gallery.cap11':  'Занятие в English room',
    'gallery.cap12':  'Спортивное занятие',
    'gallery.cap13':  'Детское творчество',
    'gallery.cap14':  'Новогодний утренник',

    /* CONTACTS */
    'contacts.title':  'Контактная информация',
    'contacts.breadcrumb': 'Контакты',
    'contacts.r1c1':  'Полное наименование',
    'contacts.r1c2':  'Частное учреждение «Happy Hearts»',
    'contacts.r2c1':  'Адрес',
    'contacts.r2c2':  'г. Актау, мкр. Самал, дом 51',
    'contacts.r3c1':  'Телефон',
    'contacts.r4c1':  'Электронная почта',
    'contacts.r5c1':  'WhatsApp',
    'contacts.r6c1':  'Режим работы',
    'contacts.r6c2':  'Понедельник – Пятница: 07:30 – 19:00',
    'contacts.r7c1':  'Приёмные часы руководителя',
    'contacts.r7c2':  'Понедельник – Пятница: 09:00 – 12:00',
    'contacts.form':  'Напишите нам',
    'contacts.formdesc': 'Для записи обратитесь по телефону или лично в детский сад в рабочие дни.',
    'contacts.name':  'Ваше имя *',
    'contacts.nameplaceholder': 'Введите ваше имя',
    'contacts.phone': 'Телефон *',
    'contacts.email': 'Email',
    'contacts.msg':   'Сообщение *',
    'contacts.msgplaceholder': 'Напишите ваш вопрос или сообщение...',
    'contacts.send':  'Отправить',

    /* DIRECTOR */
    'director.title': 'О руководителе',
    'director.breadcrumb': 'О руководителе',
    'director.positionlabel': 'Должность',
    'director.positionval': 'Заведующий детским садом',
    'director.edulabel': 'Образование',
    'director.eduval': 'Высшее педагогическое',
    'director.phonelabel': 'Телефон',
    'director.emaillabel': 'Email',
    'director.hourslabel': 'Приёмные часы',
    'director.hoursval': 'Понедельник – Пятница: 09:00 – 12:00',
    'director.biotext': 'Информация о руководителе детского сада будет размещена здесь. Пожалуйста, предоставьте данные для заполнения этого раздела.',
    'director.placeholder': 'Руководитель',
    'director.placeholderorg': 'Happy Hearts',

    /* DOCUMENTS */
    'docs.title':     'Документы',
    'docs.breadcrumb':'Документы',
    'docs.desc':      'Нормативные и организационные документы детского сада «Happy Hearts».',
    'docs.cat1':      'Учредительные документы',
    'docs.cat2':      'Образовательные программы',
    'docs.cat3':      'Внутренние документы',
    'docs.cat4':      'Отчёты и планы',
    'docs.d1.1':      'Свидетельство о государственной регистрации',
    'docs.d1.2':      'Устав частного учреждения «Happy Hearts»',
    'docs.d1.3':      'Лицензия на образовательную деятельность',
    'docs.d2.1':      'Основная образовательная программа дошкольного образования',
    'docs.d2.2':      'Рабочая программа воспитания',
    'docs.d2.3':      'Учебный план на 2025–2026 учебный год',
    'docs.d2.4':      'Расписание занятий',
    'docs.d3.1':      'Правила внутреннего трудового распорядка',
    'docs.d3.2':      'Положение о порядке приёма детей',
    'docs.d3.3':      'Публичный договор оказания образовательных услуг',
    'docs.d3.4':      'Антикоррупционная политика',
    'docs.d4.1':      'Годовой план работы на 2025–2026 учебный год',
    'docs.d4.2':      'Отчёт о самообследовании за 2024–2025 учебный год',
    'docs.download':  'Скачать',
    'docs.note':      'Для получения оригиналов документов обращайтесь в администрацию детского сада.',

    /* CONSULT */
    'consult.title':  'Консультационный пункт',
    'consult.breadcrumb': 'Консультационный пункт',
    'consult.p1':     'Консультационный пункт «Happy Hearts» оказывает бесплатную методическую, психолого-педагогическую, диагностическую и консультативную помощь родителям детей дошкольного возраста.',
    'consult.p2':     'Консультации проводятся опытными специалистами нашего детского сада в соответствии с утверждённым графиком.',
    'consult.specialists': 'Наши специалисты',
    'consult.spec1':  'Педагог-психолог',
    'consult.spec1desc': 'Консультации по вопросам психологического развития ребёнка, адаптации к детскому саду, детско-родительских отношений.',
    'consult.spec1hours': 'Понедельник, Среда: 10:00 – 12:00',
    'consult.spec2':  'Учитель-логопед',
    'consult.spec2desc': 'Диагностика и коррекция речевых нарушений. Консультирование родителей по вопросам развития речи.',
    'consult.spec2hours': 'Вторник, Четверг: 10:00 – 12:00',
    'consult.spec3':  'Педагог-воспитатель',
    'consult.spec3desc': 'Консультации по вопросам воспитания, обучения и подготовки ребёнка к школе.',
    'consult.spec3hours': 'Пятница: 10:00 – 12:00',
    'consult.spec4':  'Медицинский работник',
    'consult.spec4desc': 'Консультации по вопросам здоровья, питания и физического развития детей дошкольного возраста.',
    'consult.spec4hours': 'Понедельник – Пятница: 09:00 – 11:00',
    'consult.booking': 'Запись на консультацию',
    'consult.bookingdesc': 'Для записи на консультацию обратитесь по телефону или лично в детский сад в рабочие дни с 08:00 до 17:00.',

    /* ATTEST */
    'attest.title':   'Аттестация педагогических работников',
    'attest.breadcrumb': 'Аттестация',
    'attest.p1':      'Аттестация педагогических работников проводится в целях подтверждения соответствия педагогических работников занимаемым ими должностям на основе оценки их профессиональной деятельности.',
    'attest.categories': 'Квалификационные категории',
    'attest.cat1name': 'Первая категория',
    'attest.cat1desc': 'Педагоги с высоким уровнем профессионального мастерства, стабильными результатами деятельности.',
    'attest.cat2name': 'Высшая категория',
    'attest.cat2desc': 'Педагоги с высшим уровнем квалификации, имеющие значительный опыт профессиональной деятельности.',
    'attest.cat3name': 'Соответствие должности',
    'attest.cat3desc': 'Обязательная аттестация для подтверждения соответствия занимаемой должности педагогического работника.',
    'attest.table':   'Сведения об аттестации педагогов Happy Hearts',
    'attest.col1':    'ФИО педагога',
    'attest.col2':    'Должность',
    'attest.col3':    'Квалификационная категория',
    'attest.col4':    'Срок действия',
    'attest.empty':   'Данные будут добавлены после предоставления информации',
    'attest.note':    'Для получения актуальной информации обратитесь к администрации детского сада',
  }
};

let currentLang = localStorage.getItem('hh_lang') || 'ru';

function t(key) {
  return (TRANSLATIONS[currentLang] || TRANSLATIONS.ru)[key] || (TRANSLATIONS.ru[key] || key);
}

function applyLang() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = t(key);
    if (val) el.textContent = val;
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const val = t(el.getAttribute('data-i18n-placeholder'));
    if (val) el.placeholder = val;
  });
  document.documentElement.lang = currentLang;

  const kkEl = document.getElementById('lang-kk');
  const ruEl = document.getElementById('lang-ru');
  if (kkEl) kkEl.classList.toggle('lang-active', currentLang === 'kk');
  if (ruEl) ruEl.classList.toggle('lang-active', currentLang === 'ru');
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('hh_lang', lang);
  applyLang();
}

function toggleMobileMenu() {
  const menu = document.getElementById('main-menu');
  const overlay = document.getElementById('navOverlay');
  if (!menu) return;
  const isOpen = menu.classList.toggle('open');
  if (overlay) overlay.classList.toggle('open', isOpen);
}

function closeMobileMenu() {
  const menu = document.getElementById('main-menu');
  const overlay = document.getElementById('navOverlay');
  if (menu) menu.classList.remove('open');
  if (overlay) overlay.classList.remove('open');
}

let slideIndex = 0;
function slideMove(dir) {
  const track = document.getElementById('sliderTrack');
  if (!track) return;
  const slides = track.querySelectorAll('.slide');
  if (!slides.length) return;
  slideIndex = (slideIndex + dir + slides.length) % slides.length;
  track.style.transform = `translateX(-${slideIndex * 100}%)`;
}
function startSlider() {
  if (!document.getElementById('sliderTrack')) return;
  setInterval(() => slideMove(1), 4000);
}

function openLightbox(cell) {
  const img = cell.querySelector('img');
  if (!img) return;
  const lb = document.getElementById('lightbox');
  const lbImg = document.getElementById('lightboxImg');
  if (!lb || !lbImg) return;
  lbImg.src = img.dataset.full || img.src;
  lbImg.alt = img.alt;
  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  const lb = document.getElementById('lightbox');
  if (!lb) return;
  lb.classList.remove('open');
  document.body.style.overflow = '';
}

function submitContactForm(e) {
  e.preventDefault();
  const btn = e.target.querySelector('.btn-submit');
  const orig = btn.textContent;
  btn.disabled = true;
  btn.textContent = currentLang === 'kk' ? 'Жіберілуде...' : 'Отправка...';
  setTimeout(() => {
    btn.textContent = currentLang === 'kk' ? 'Жіберілді!' : 'Отправлено!';
    btn.style.background = '#5aaa5a';
    setTimeout(() => {
      btn.textContent = orig;
      btn.disabled = false;
      btn.style.background = '';
      e.target.reset();
    }, 2500);
  }, 1000);
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });

document.addEventListener('DOMContentLoaded', () => {
  applyLang();
  startSlider();
});
