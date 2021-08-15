const suras = [
	{
		number: 1,
		page: 0,
		name: 'سورة الفاتحة',
		transliteration_en: 'Al-Faatiha',
		translation_en: 'The Opening',
		total_verses: 7,
		revelation_type: 'Meccan'
	},
	{
		number: 2,
		page: 1,
		name: 'سورة البقرة',
		transliteration_en: 'Al-Baqara',
		translation_en: 'The Cow',
		total_verses: 286,
		revelation_type: 'Medinan'
	},
	{
		number: 3,
		page: 49,
		name: 'سورة آل عمران',
		transliteration_en: 'Aal-i-Imraan',
		translation_en: 'The Family of Imraan',
		total_verses: 200,
		revelation_type: 'Medinan'
	},
	{
		number: 4,
		page: 76,
		name: 'سورة النساء',
		transliteration_en: 'An-Nisaa',
		translation_en: 'The Women',
		total_verses: 176,
		revelation_type: 'Medinan'
	},
	{
		number: 5,
		page: 105,
		name: 'سورة المائدة',
		transliteration_en: 'Al-Maaida',
		translation_en: 'The Table',
		total_verses: 120,
		revelation_type: 'Medinan'
	},
	{
		number: 6,
		page: 127,
		name: 'سورة الأنعام',
		transliteration_en: "Al-An'aam",
		translation_en: 'The Cattle',
		total_verses: 165,
		revelation_type: 'Meccan'
	},
	{
		number: 7,
		page: 150,
		name: 'سورة الأعراف',
		transliteration_en: "Al-A'raaf",
		translation_en: 'The Heights',
		total_verses: 206,
		revelation_type: 'Meccan'
	},
	{
		number: 8,
		page: 176,
		name: 'سورة الأنفال',
		transliteration_en: 'Al-Anfaal',
		translation_en: 'The Spoils of War',
		total_verses: 75,
		revelation_type: 'Medinan'
	},
	{
		number: 9,
		page: 186,
		name: 'سورة التوبة',
		transliteration_en: 'At-Tawba',
		translation_en: 'The Repentance',
		total_verses: 129,
		revelation_type: 'Medinan'
	},
	{
		number: 10,
		page: 207,
		name: 'سورة يونس',
		transliteration_en: 'Yunus',
		translation_en: 'Jonas',
		total_verses: 109,
		revelation_type: 'Meccan'
	},
	{
		number: 11,
		page: 220,
		name: 'سورة هود',
		transliteration_en: 'Hud',
		translation_en: 'Hud',
		total_verses: 123,
		revelation_type: 'Meccan'
	},
	{
		number: 12,
		page: 234,
		name: 'سورة يوسف',
		transliteration_en: 'Yusuf',
		translation_en: 'Joseph',
		total_verses: 111,
		revelation_type: 'Meccan'
	},
	{
		number: 13,
		page: 248,
		name: 'سورة الرعد',
		transliteration_en: "Ar-Ra'd",
		translation_en: 'The Thunder',
		total_verses: 43,
		revelation_type: 'Medinan'
	},
	{
		number: 14,
		page: 254,
		name: 'سورة ابراهيم',
		transliteration_en: 'Ibrahim',
		translation_en: 'Abraham',
		total_verses: 52,
		revelation_type: 'Meccan'
	},
	{
		number: 15,
		page: 261,
		name: 'سورة الحجر',
		transliteration_en: 'Al-Hijr',
		translation_en: 'The Rock',
		total_verses: 99,
		revelation_type: 'Meccan'
	},
	{
		number: 16,
		page: 266,
		name: 'سورة النحل',
		transliteration_en: 'An-Nahl',
		translation_en: 'The Bee',
		total_verses: 128,
		revelation_type: 'Meccan'
	},
	{
		number: 17,
		page: 281,
		name: 'سورة الإسراء',
		transliteration_en: 'Al-Israa',
		translation_en: 'The Night Journey',
		total_verses: 111,
		revelation_type: 'Meccan'
	},
	{
		number: 18,
		page: 292,
		name: 'سورة الكهف',
		transliteration_en: 'Al-Kahf',
		translation_en: 'The Cave',
		total_verses: 110,
		revelation_type: 'Meccan'
	},
	{
		number: 19,
		page: 304,
		name: 'سورة مريم',
		transliteration_en: 'Maryam',
		translation_en: 'Mary',
		total_verses: 98,
		revelation_type: 'Meccan'
	},
	{
		number: 20,
		page: 311,
		name: 'سورة طه',
		transliteration_en: 'Taa-Haa',
		translation_en: 'Taa-Haa',
		total_verses: 135,
		revelation_type: 'Meccan'
	},
	{
		number: 21,
		page: 321,
		name: 'سورة الأنبياء',
		transliteration_en: 'Al-Anbiyaa',
		translation_en: 'The Prophets',
		total_verses: 112,
		revelation_type: 'Meccan'
	},
	{
		number: 22,
		page: 331,
		name: 'سورة الحج',
		transliteration_en: 'Al-Hajj',
		translation_en: 'The Pilgrimage',
		total_verses: 78,
		revelation_type: 'Medinan'
	},
	{
		number: 23,
		page: 341,
		name: 'سورة المؤمنون',
		transliteration_en: 'Al-Muminoon',
		translation_en: 'The Believers',
		total_verses: 118,
		revelation_type: 'Meccan'
	},
	{
		number: 24,
		page: 349,
		name: 'سورة النور',
		transliteration_en: 'An-Noor',
		translation_en: 'The Light',
		total_verses: 64,
		revelation_type: 'Medinan'
	},
	{
		number: 25,
		page: 358,
		name: 'سورة الفرقان',
		transliteration_en: 'Al-Furqaan',
		translation_en: 'The Criterion',
		total_verses: 77,
		revelation_type: 'Meccan'
	},
	{
		number: 26,
		page: 366,
		name: 'سورة الشعراء',
		transliteration_en: "Ash-Shu'araa",
		translation_en: 'The Poets',
		total_verses: 227,
		revelation_type: 'Meccan'
	},
	{
		number: 27,
		page: 376,
		name: 'سورة النمل',
		transliteration_en: 'An-Naml',
		translation_en: 'The Ant',
		total_verses: 93,
		revelation_type: 'Meccan'
	},
	{
		number: 28,
		page: 384,
		name: 'سورة القصص',
		transliteration_en: 'Al-Qasas',
		translation_en: 'The Stories',
		total_verses: 88,
		revelation_type: 'Meccan'
	},
	{
		number: 29,
		page: 395,
		name: 'سورة العنكبوت',
		transliteration_en: 'Al-Ankaboot',
		translation_en: 'The Spider',
		total_verses: 69,
		revelation_type: 'Meccan'
	},
	{
		number: 30,
		page: 403,
		name: 'سورة الروم',
		transliteration_en: 'Ar-Room',
		translation_en: 'The Romans',
		total_verses: 60,
		revelation_type: 'Meccan'
	},
	{
		number: 31,
		page: 410,
		name: 'سورة لقمان',
		transliteration_en: 'Luqman',
		translation_en: 'Luqman',
		total_verses: 34,
		revelation_type: 'Meccan'
	},
	{
		number: 32,
		page: 414,
		name: 'سورة السجدة',
		transliteration_en: 'As-Sajda',
		translation_en: 'The Prostration',
		total_verses: 30,
		revelation_type: 'Meccan'
	},
	{
		number: 33,
		page: 417,
		name: 'سورة الأحزاب',
		transliteration_en: 'Al-Ahzaab',
		translation_en: 'The Clans',
		total_verses: 73,
		revelation_type: 'Medinan'
	},
	{
		number: 34,
		page: 427,
		name: 'سورة سبإ',
		transliteration_en: 'Saba',
		translation_en: 'Sheba',
		total_verses: 54,
		revelation_type: 'Meccan'
	},
	{
		number: 35,
		page: 433,
		name: 'سورة فاطر',
		transliteration_en: 'Faatir',
		translation_en: 'The Originator',
		total_verses: 45,
		revelation_type: 'Meccan'
	},
	{
		number: 36,
		page: 439,
		name: 'سورة يس',
		transliteration_en: 'Yaseen',
		translation_en: 'Yaseen',
		total_verses: 83,
		revelation_type: 'Meccan'
	},
	{
		number: 37,
		page: 445,
		name: 'سورة الصافات',
		transliteration_en: 'As-Saaffaat',
		translation_en: 'Those drawn up in Ranks',
		total_verses: 182,
		revelation_type: 'Meccan'
	},
	{
		number: 38,
		page: 452,
		name: 'سورة ص',
		transliteration_en: 'Saad',
		translation_en: 'The letter Saad',
		total_verses: 88,
		revelation_type: 'Meccan'
	},
	{
		number: 39,
		page: 457,
		name: 'سورة الزمر',
		transliteration_en: 'Az-Zumar',
		translation_en: 'The Groups',
		total_verses: 75,
		revelation_type: 'Meccan'
	},
	{
		number: 40,
		page: 466,
		name: 'سورة غافر',
		transliteration_en: 'Ghafir',
		translation_en: 'The Forgiver',
		total_verses: 85,
		revelation_type: 'Meccan'
	},
	{
		number: 41,
		page: 476,
		name: 'سورة فصلت',
		transliteration_en: 'Fussilat',
		translation_en: 'Explained in detail',
		total_verses: 54,
		revelation_type: 'Meccan'
	},
	{
		number: 42,
		page: 482,
		name: 'سورة الشورى',
		transliteration_en: 'Ash-Shura',
		translation_en: 'Consultation',
		total_verses: 53,
		revelation_type: 'Meccan'
	},
	{
		number: 43,
		page: 488,
		name: 'سورة الزخرف',
		transliteration_en: 'Az-Zukhruf',
		translation_en: 'Ornaments of gold',
		total_verses: 89,
		revelation_type: 'Meccan'
	},
	{
		number: 44,
		page: 495,
		name: 'سورة الدخان',
		transliteration_en: 'Ad-Dukhaan',
		translation_en: 'The Smoke',
		total_verses: 59,
		revelation_type: 'Meccan'
	},
	{
		number: 45,
		page: 498,
		name: 'سورة الجاثية',
		transliteration_en: 'Al-Jaathiya',
		translation_en: 'Crouching',
		total_verses: 37,
		revelation_type: 'Meccan'
	},
	{
		number: 46,
		page: 501,
		name: 'سورة الأحقاف',
		transliteration_en: 'Al-Ahqaf',
		translation_en: 'The Dunes',
		total_verses: 35,
		revelation_type: 'Meccan'
	},
	{
		number: 47,
		page: 506,
		name: 'سورة محمد',
		transliteration_en: 'Muhammad',
		translation_en: 'Muhammad',
		total_verses: 38,
		revelation_type: 'Medinan'
	},
	{
		number: 48,
		page: 510,
		name: 'سورة الفتح',
		transliteration_en: 'Al-Fath',
		translation_en: 'The Victory',
		total_verses: 29,
		revelation_type: 'Medinan'
	},
	{
		number: 49,
		page: 506,
		name: 'سورة الحجرات',
		transliteration_en: 'Al-Hujuraat',
		translation_en: 'The Inner Apartments',
		total_verses: 18,
		revelation_type: 'Medinan'
	},
	{
		number: 50,
		page: 517,
		name: 'سورة ق',
		transliteration_en: 'Qaaf',
		translation_en: 'The letter Qaaf',
		total_verses: 45,
		revelation_type: 'Meccan'
	},
	{
		number: 51,
		page: 519,
		name: 'سورة الذاريات',
		transliteration_en: 'Adh-Dhaariyat',
		translation_en: 'The Winnowing Winds',
		total_verses: 60,
		revelation_type: 'Meccan'
	},
	{
		number: 52,
		page: 522,
		name: 'سورة الطور',
		transliteration_en: 'At-Tur',
		translation_en: 'The Mount',
		total_verses: 49,
		revelation_type: 'Meccan'
	},
	{
		number: 53,
		page: 525,
		name: 'سورة النجم',
		transliteration_en: 'An-Najm',
		translation_en: 'The Star',
		total_verses: 62,
		revelation_type: 'Meccan'
	},
	{
		number: 54,
		page: 527,
		name: 'سورة القمر',
		transliteration_en: 'Al-Qamar',
		translation_en: 'The Moon',
		total_verses: 55,
		revelation_type: 'Meccan'
	},
	{
		number: 55,
		page: 530,
		name: 'سورة الرحمن',
		transliteration_en: 'Ar-Rahmaan',
		translation_en: 'The Beneficent',
		total_verses: 78,
		revelation_type: 'Medinan'
	},
	{
		number: 56,
		page: 533,
		name: 'سورة الواقعة',
		transliteration_en: 'Al-Waaqia',
		translation_en: 'The Inevitable',
		total_verses: 96,
		revelation_type: 'Meccan'
	},
	{
		number: 57,
		page: 536,
		name: 'سورة الحديد',
		transliteration_en: 'Al-Hadid',
		translation_en: 'The Iron',
		total_verses: 29,
		revelation_type: 'Medinan'
	},
	{
		number: 58,
		page: 541,
		name: 'سورة المجادلة',
		transliteration_en: 'Al-Mujaadila',
		translation_en: 'The Pleading Woman',
		total_verses: 22,
		revelation_type: 'Medinan'
	},
	{
		number: 59,
		page: 544,
		name: 'سورة الحشر',
		transliteration_en: 'Al-Hashr',
		translation_en: 'The Exile',
		total_verses: 24,
		revelation_type: 'Medinan'
	},
	{
		number: 60,
		page: 548,
		name: 'سورة الممتحنة',
		transliteration_en: 'Al-Mumtahana',
		translation_en: 'She that is to be examined',
		total_verses: 13,
		revelation_type: 'Medinan'
	},
	{
		number: 61,
		page: 550,
		name: 'سورة الصف',
		transliteration_en: 'As-Saff',
		translation_en: 'The Ranks',
		total_verses: 14,
		revelation_type: 'Medinan'
	},
	{
		number: 62,
		page: 552,
		name: 'سورة الجمعة',
		transliteration_en: "Al-Jumu'a",
		translation_en: 'Friday',
		total_verses: 11,
		revelation_type: 'Medinan'
	},
	{
		number: 63,
		page: 553,
		name: 'سورة المنافقون',
		transliteration_en: 'Al-Munaafiqoon',
		translation_en: 'The Hypocrites',
		total_verses: 11,
		revelation_type: 'Medinan'
	},
	{
		number: 64,
		page: 555,
		name: 'سورة التغابن',
		transliteration_en: 'At-Taghaabun',
		translation_en: 'Mutual Disillusion',
		total_verses: 18,
		revelation_type: 'Medinan'
	},
	{
		number: 65,
		page: 557,
		name: 'سورة الطلاق',
		transliteration_en: 'At-Talaaq',
		translation_en: 'Divorce',
		total_verses: 12,
		revelation_type: 'Medinan'
	},
	{
		number: 66,
		page: 559,
		name: 'سورة التحريم',
		transliteration_en: 'At-Tahrim',
		translation_en: 'The Prohibition',
		total_verses: 12,
		revelation_type: 'Medinan'
	},
	{
		number: 67,
		page: 561,
		name: 'سورة الملك',
		transliteration_en: 'Al-Mulk',
		translation_en: 'The Sovereignty',
		total_verses: 30,
		revelation_type: 'Meccan'
	},
	{
		number: 68,
		page: 563,
		name: 'سورة القلم',
		transliteration_en: 'Al-Qalam',
		translation_en: 'The Pen',
		total_verses: 52,
		revelation_type: 'Meccan'
	},
	{
		number: 69,
		page: 565,
		name: 'سورة الحاقة',
		transliteration_en: 'Al-Haaqqa',
		translation_en: 'The Reality',
		total_verses: 52,
		revelation_type: 'Meccan'
	},
	{
		number: 70,
		page: 567,
		name: 'سورة المعارج',
		transliteration_en: "Al-Ma'aarij",
		translation_en: 'The Ascending Stairways',
		total_verses: 44,
		revelation_type: 'Meccan'
	},
	{
		number: 71,
		page: 570,
		name: 'سورة نوح',
		transliteration_en: 'Nooh',
		translation_en: 'Noah',
		total_verses: 28,
		revelation_type: 'Meccan'
	},
	{
		number: 72,
		page: 571,
		name: 'سورة الجن',
		transliteration_en: 'Al-Jinn',
		translation_en: 'The Jinn',
		total_verses: 28,
		revelation_type: 'Meccan'
	},
	{
		number: 73,
		page: 573,
		name: 'سورة المزمل',
		transliteration_en: 'Al-Muzzammil',
		translation_en: 'The Enshrouded One',
		total_verses: 20,
		revelation_type: 'Meccan'
	},
	{
		number: 74,
		page: 574,
		name: 'سورة المدثر',
		transliteration_en: 'Al-Muddaththir',
		translation_en: 'The Cloaked One',
		total_verses: 56,
		revelation_type: 'Meccan'
	},
	{
		number: 75,
		page: 576,
		name: 'سورة القيامة',
		transliteration_en: 'Al-Qiyaama',
		translation_en: 'The Resurrection',
		total_verses: 40,
		revelation_type: 'Meccan'
	},
	{
		number: 76,
		page: 577,
		name: 'سورة الانسان',
		transliteration_en: 'Al-Insaan',
		translation_en: 'Man',
		total_verses: 31,
		revelation_type: 'Medinan'
	},
	{
		number: 77,
		page: 579,
		name: 'سورة المرسلات',
		transliteration_en: 'Al-Mursalaat',
		translation_en: 'The Emissaries',
		total_verses: 50,
		revelation_type: 'Meccan'
	},
	{
		number: 78,
		page: 581,
		name: 'سورة النبإ',
		transliteration_en: 'An-Naba',
		translation_en: 'The Announcement',
		total_verses: 40,
		revelation_type: 'Meccan'
	},
	{
		number: 79,
		page: 582,
		name: 'سورة النازعات',
		transliteration_en: "An-Naazi'aat",
		translation_en: 'Those who drag forth',
		total_verses: 46,
		revelation_type: 'Meccan'
	},
	{
		number: 80,
		page: 584,
		name: 'سورة عبس',
		transliteration_en: 'Abasa',
		translation_en: 'He frowned',
		total_verses: 42,
		revelation_type: 'Meccan'
	},
	{
		number: 81,
		page: 585,
		name: 'سورة التكوير',
		transliteration_en: 'At-Takwir',
		translation_en: 'The Overthrowing',
		total_verses: 29,
		revelation_type: 'Meccan'
	},
	{
		number: 82,
		page: 586,
		name: 'سورة الإنفطار',
		transliteration_en: 'Al-Infitaar',
		translation_en: 'The Cleaving',
		total_verses: 19,
		revelation_type: 'Meccan'
	},
	{
		number: 83,
		page: 586,
		name: 'سورة المطففين',
		transliteration_en: 'Al-Mutaffifin',
		translation_en: 'Defrauding',
		total_verses: 36,
		revelation_type: 'Meccan'
	},
	{
		number: 84,
		page: 588,
		name: 'سورة الإنشقاق',
		transliteration_en: 'Al-Inshiqaaq',
		translation_en: 'The Splitting Open',
		total_verses: 25,
		revelation_type: 'Meccan'
	},
	{
		number: 85,
		page: 589,
		name: 'سورة البروج',
		transliteration_en: 'Al-Burooj',
		translation_en: 'The Constellations',
		total_verses: 22,
		revelation_type: 'Meccan'
	},
	{
		number: 86,
		page: 590,
		name: 'سورة الطارق',
		transliteration_en: 'At-Taariq',
		translation_en: 'The Morning Star',
		total_verses: 17,
		revelation_type: 'Meccan'
	},
	{
		number: 87,
		page: 590,
		name: 'سورة الأعلى',
		transliteration_en: "Al-A'laa",
		translation_en: 'The Most High',
		total_verses: 19,
		revelation_type: 'Meccan'
	},
	{
		number: 88,
		page: 591,
		name: 'سورة الغاشية',
		transliteration_en: 'Al-Ghaashiya',
		translation_en: 'The Overwhelming',
		total_verses: 26,
		revelation_type: 'Meccan'
	},
	{
		number: 89,
		page: 592,
		name: 'سورة الفجر',
		transliteration_en: 'Al-Fajr',
		translation_en: 'The Dawn',
		total_verses: 30,
		revelation_type: 'Meccan'
	},
	{
		number: 90,
		page: 593,
		name: 'سورة البلد',
		transliteration_en: 'Al-Balad',
		translation_en: 'The City',
		total_verses: 20,
		revelation_type: 'Meccan'
	},
	{
		number: 91,
		page: 594,
		name: 'سورة الشمس',
		transliteration_en: 'Ash-Shams',
		translation_en: 'The Sun',
		total_verses: 15,
		revelation_type: 'Meccan'
	},
	{
		number: 92,
		page: 594,
		name: 'سورة الليل',
		transliteration_en: 'Al-Lail',
		translation_en: 'The Night',
		total_verses: 21,
		revelation_type: 'Meccan'
	},
	{
		number: 93,
		page: 595,
		name: 'سورة الضحى',
		transliteration_en: 'Ad-Dhuhaa',
		translation_en: 'The Morning Hours',
		total_verses: 11,
		revelation_type: 'Meccan'
	},
	{
		number: 94,
		page: 595,
		name: 'سورة الشرح',
		transliteration_en: 'Ash-Sharh',
		translation_en: 'The Consolation',
		total_verses: 8,
		revelation_type: 'Meccan'
	},
	{
		number: 95,
		page: 596,
		name: 'سورة التين',
		transliteration_en: 'At-Tin',
		translation_en: 'The Fig',
		total_verses: 8,
		revelation_type: 'Meccan'
	},
	{
		number: 96,
		page: 596,
		name: 'سورة العلق',
		transliteration_en: 'Al-Alaq',
		translation_en: 'The Clot',
		total_verses: 19,
		revelation_type: 'Meccan'
	},
	{
		number: 97,
		page: 597,
		name: 'سورة القدر',
		transliteration_en: 'Al-Qadr',
		translation_en: 'The Power, Fate',
		total_verses: 5,
		revelation_type: 'Meccan'
	},
	{
		number: 98,
		page: 597,
		name: 'سورة البينة',
		transliteration_en: 'Al-Bayyina',
		translation_en: 'The Evidence',
		total_verses: 8,
		revelation_type: 'Medinan'
	},
	{
		number: 99,
		page: 597,
		name: 'سورة الزلزلة',
		transliteration_en: 'Az-Zalzala',
		translation_en: 'The Earthquake',
		total_verses: 8,
		revelation_type: 'Medinan'
	},
	{
		number: 100,
		page: 598,
		name: 'سورة العاديات',
		transliteration_en: 'Al-Aadiyaat',
		translation_en: 'The Chargers',
		total_verses: 11,
		revelation_type: 'Meccan'
	},
	{
		number: 101,
		page: 599,
		name: 'سورة القارعة',
		transliteration_en: "Al-Qaari'a",
		translation_en: 'The Calamity',
		total_verses: 11,
		revelation_type: 'Meccan'
	},
	{
		number: 102,
		page: 599,
		name: 'سورة التكاثر',
		transliteration_en: 'At-Takaathur',
		translation_en: 'Competition',
		total_verses: 8,
		revelation_type: 'Meccan'
	},
	{
		number: 103,
		page: 600,
		name: 'سورة العصر',
		transliteration_en: 'Al-Asr',
		translation_en: 'The Declining Day, Epoch',
		total_verses: 3,
		revelation_type: 'Meccan'
	},
	{
		number: 104,
		page: 600,
		name: 'سورة الهمزة',
		transliteration_en: 'Al-Humaza',
		translation_en: 'The Traducer',
		total_verses: 9,
		revelation_type: 'Meccan'
	},
	{
		number: 105,
		page: 600,
		name: 'سورة الفيل',
		transliteration_en: 'Al-Fil',
		translation_en: 'The Elephant',
		total_verses: 5,
		revelation_type: 'Meccan'
	},
	{
		number: 106,
		page: 601,
		name: 'سورة قريش',
		transliteration_en: 'Quraish',
		translation_en: 'Quraysh',
		total_verses: 4,
		revelation_type: 'Meccan'
	},
	{
		number: 107,
		page: 601,
		name: 'سورة الماعون',
		transliteration_en: "Al-Maa'un",
		translation_en: 'Almsgiving',
		total_verses: 7,
		revelation_type: 'Meccan'
	},
	{
		number: 108,
		page: 601,
		name: 'سورة الكوثر',
		transliteration_en: 'Al-Kawthar',
		translation_en: 'Abundance',
		total_verses: 3,
		revelation_type: 'Meccan'
	},
	{
		number: 109,
		page: 602,
		name: 'سورة الكافرون',
		transliteration_en: 'Al-Kaafiroon',
		translation_en: 'The Disbelievers',
		total_verses: 6,
		revelation_type: 'Meccan'
	},
	{
		number: 110,
		page: 602,
		name: 'سورة النصر',
		transliteration_en: 'An-Nasr',
		translation_en: 'Divine Support',
		total_verses: 3,
		revelation_type: 'Medinan'
	},
	{
		number: 111,
		page: 602,
		name: 'سورة المسد',
		transliteration_en: 'Al-Masad',
		translation_en: 'The Palm Fibre',
		total_verses: 5,
		revelation_type: 'Meccan'
	},
	{
		number: 112,
		page: 603,
		name: 'سورة الإخلاص',
		transliteration_en: 'Al-Ikhlaas',
		translation_en: 'Sincerity',
		total_verses: 4,
		revelation_type: 'Meccan'
	},
	{
		number: 113,
		page: 603,
		name: 'سورة الفلق',
		transliteration_en: 'Al-Falaq',
		translation_en: 'The Dawn',
		total_verses: 5,
		revelation_type: 'Meccan'
	},
	{
		number: 114,
		page: 603,
		name: 'سورة الناس',
		transliteration_en: 'An-Naas',
		translation_en: 'Mankind',
		total_verses: 6,
		revelation_type: 'Meccan'
	}
]

export default suras
