﻿// Masnun Dua Sticker
const Dua = [
  {
    id: "১",
    title: "ক্রোধ দমনের দুআ",
    dua: "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ",
    spelling: "আ‘ঊযু বিল্লা-হিমিনাশ্-শাইত্ব-র্নি রজীম্",
    meaning: "আল্লাহ্‌র নিকট আশ্রয় চাই বিতাড়িত শয়তান থেকে",
    source: "বুখারী, ৭/৯৯, ৩২৮২; মুসলিম, ৪/২০১৫, ২৬১০",
    audio: "angry_control"
  },
  {
    id: "২",
    title: "ভয় থেকে পরিত্রানের দুআ",
    dua: "لاَ إِلَهَ إِلاَّ اللّٰهُ",
    spelling: "লা ইলাহা ইল্লাল্ল-হ্",
    meaning: "আল্লাহ্ ব্যাতীত কোনো সত্য উপাস্য নেই",
    source: "বুখারী, ৬/৩৮১, ৩৩৪৬; মুসলিম, ৪/২২০৮, ২৮৮০",
    audio: "fear_control"
  },
  {
    id: "৩",
    title: "ঘরে প্রবেশের দুআ",
    dua:
      "بِسْمِ اللَّهِ وَلَجْنَا، وَبِسْمِ اللَّهِ خَرَجْنَا، وَعَلَى اللّٰهِ رَبِّنَا تَوَكَّلْنَا",
    spelling:
      "বিসমিল্লাহি ওয়ালাজ্না, ওয়াবিস্ মিল্ল াহি খরাজনা ওয়া ‘আলাল্ল হি রব্বিনা তাওয়াক্কাল্না",
    meaning:
      "আল্লাহর নামে আমরা প্রবেশ করলাম, আল্লাহর নামেই আমরা বের হলাম এবং আমাদের রব আল্লাহর উপরই আমরা ভরসা করলাম",
    source: "আবূ - দাউদ ৪/৩২৮; আলবানী, সাহীহাহ ১/৩৯৪, নং ২২৫",
    audio: "home_enter_dua"
  },
  {
    id: "৪",
    title: "ঘর থেকে বের হওয়ার দুআ",
    dua:
      "بِسْمِ اللَّهِ، تَوَكَّلْتُ عَلَى اللّٰهِ، وَلَاَ حَوْلَ وَلَا قُوَّةَ إِلاَّ بِاللَّهِ",
    spelling:
      "বিসমিল্লাহি তাওয়াক্কাল্তু ‘আলাল্লহ, লা-হাওলা ওয়ালা কুওয়াতা ইল্লা বিল্লাহ",
    meaning:
      "আল্লাহর নামে বের হচ্ছি।  আল্লাহর উপর ভরসা করলাম। আর আল্লাহর সাহায্য ছাড়া (পাপ কাজ থেকে দূরে থাকার) কোনো উপায় এবং (সৎকাজ করার) কোনো শক্তি কারো নেই ",
    source: "তিরমিযী, ৫/৪৫৬, ৩৪২৬",
    audio: "home_out_dua"
  },
  {
    id: "৫",
    title: "কাপড় পরিধানের দুআ",
    dua:
      "الْحَمْدُ للّٰهِ الَّذِي كَسَانِي هَذَا (الثَّوْبَ) وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلاَ قُوَّة",
    spelling:
      "আল্‌হামদু লিল্লা-হিল্লাযী কাসানী হা-যা (আসসাওবা) ওয়া রযাকানীহি মিন্ গইরি হাওলিম মিন্নী ওয়ালা কুওওয়াতিন",
    meaning:
      "সকল প্রশংসা আল্লাহ্‌র জন্য, যিনি আমাকে কাপড়টি পরিয়েছেন এবং আমার শক্তি-সামর্থ্য ছাড়াই তিনি আমাকে এটা দান করেছেন",
    source: "আবূ দাউদ, ৪০২৩; ইরওয়াউল গলীল, ৭/৪৭",
    audio: "cloth_wear_way_2"
  },
  {
    id: "৬",
    title: "কাপড় খুলে রাখার দুআ",
    dua: "بِسْمِ اللَّهِ",
    spelling: "বিসমিল্লাহ",
    meaning: "আল্লাহর নামে",
    source: "তিরমিযী, ২/৫০৫, ৬০৬; ইরওয়াউল গালীল, ৫০",
    audio: "cloth_getting_off"
  },

  {
    id: "৭",
    title: "কিছু খাওয়ার পরের দুআ",
    dua:
      "الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنِي هَذَا، وَرَزَقَنِيهِ، مِنْ غَيْرِ حَوْلٍ مِنِّي وَلاَ قُوَّةٍ",
    spelling:
      "আলহামদু লিল্লা-হিল্লাযী আত‘আমানী হা-যা ওয়া রাযাকানীহি মিন গাইরি হাউলিম মিন্নী ওয়ালা কুওয়াতিন",
    meaning:
      "সকল প্রশংসা আল্লাহ্‌র জন্য, যিনি আমাকে এ আহার করালেন এবং এ রিযিক দিলেন যাতে ছিল না আমার পক্ষ থেকে কোনো উপায়, ছিল না কোনো শক্তি-সামর্থ্য",
    source: "সহীহ ইরওয়া, ১৯৬৫; তালীকুর রাগীব ৩/১১৫-১১৬",
    audio: "eat_after"
  },
  {
    id: "৮",
    title: "ঘুমানোর দু‘আ",
    dua: "اللّٰهُمَّ بِاسْمِكَ أَمُوتُ وَأَحْيَا",
    spelling: "বিস্ মিকাল্ল -হুম্মা আমূতু ওয়া আ’হ্ইয়া",
    meaning:
      "হে আল্লাহ! আপনার নাম নিয়েই আমি ঘুমাচ্ছি এবং আপনার নাম নিয়েই জাগ্রত হবো।",
    source: "বুখারী, ৬৩১২; মুস. আহমাদ, ২৩৩১৯; সহীহ ইবনে হিব্বান, ৫৫৩৯",
    audio: "sleep_dua_way_2"
  },
  {
    id: "৯",
    title: "ঘুম হতে জেগে উঠার সময় দু‘আ",
    dua:
      "الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانًا بَعْدَمَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ",
    spelling:
      "আল্হাম্দু লিল্লা-হিল্লাযী আহ্ইয়া-না- বা‘দা মা-আমা-তানা-ওয়া ইলাইহিন্ নুশূর",
    meaning:
      "সকল প্রশংসা আল্লাহর জন্য যিনি নিদ্রারূপ মৃত্যুর পর আমাদেরকে জীবিত করলেন, আর তাঁরই নিকট সকলের পুনরুত্থান",
    source: "বুখারী, ৬৩১২; মুস. আহমাদ, ২৩৩১৯; সহীহ ইবনে হিব্বান, ৫৫৩৯",
    audio: "sleep_awake_dua"
  },
  {
    id: "১০",
    title: "ঘুমের মধ্যে পার্শ্বপরির্তনের দু‘আ",
    dua:
      "لاَ إِلَهَ إِلاَّ اللّٰهُ الْوَاحِدُ الْقَهَّارُ رَبُّ السَّمَاوَات وَالارْض وَمَا بَيْنَهُمَا الْعَزِيْزُ الْغَفَّارُ",
    spelling:
      "লা-ইলাহা ইল্লাল্লাহুল ওয়া-হিদুল ক্বহ্হার, রব্বুস সামা-ওয়া-তি ওয়াল আরদি ওয়া মা-বাইনাহুমাল ‘আযীযুল ‘গফ্ফা-র",
    meaning:
      "নেই কোনো উপাস্য আল্লাহ ছাড়া, তিনি একক, পরাক্রান্ত,  প্রতিপালক আসমানসমূহের এবং পৃথিবীর এবং এতদুভয়ের মধ্যবর্তী সবকিছুর তিনি মহা-সম্মানিত মহা-ক্ষমাশীল",
    source: "হাকিম, আল-মুসতাদরাক, ১/৭২৪; আলবানী, সাহীহাহ, ৫/৬৫",
    audio: "sleep_side_change"
  },
  {
    id: "১১",
    title: "টয়লেটে প্রবেশের দু‘আ",
    dua: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْخُبْثِ وَالْخَبائِث",
    spelling: "আল্ল -হুম্মা ইন্নী আ‘ঊযু বিকা মিনাল খুবুসি ওয়াল খবা-ইস্",
    meaning:
      "“হে আল্লহ! আমি আপনার নিকট আশ্রয় চাই অপবিত্র, অকল্যান, খারাপ কর্ম থেকে বা পুরুষ ও নারী শয়তান জিন্ থেকে",
    source: "বুখারী, ১/৬৬, ১৪২; মুসলিম, ১/২৮৩",
    audio: "toiletin"
  },
  {
    id: "১২",
    title: "টয়লেটে থেকে বের হওয়ার দু‘আ",
    dua: "غُفْرَانَكَ",
    spelling: "আল্লা-হুম্মা ইন্নী আ‘ঊযু বিকা মিনাল খুব্‌সি ওয়াল খাবা-ইসি",
    meaning:
      "হে আল্লাহ! আমি আপনার নিকট অপবিত্র নর জিন্ ও নারী জিন্ থেকে আশ্রয় চাই",
    source: "তিরমিজী ১/১২; সহীহ সুনান আবু দাউদ, ১/১৯১০৫৯",
    audio: "toiletout"
  },
  {
    id: "১৩",
    title: "অযু শুরু করার দুআ",
    dua: "بِسْمِ اللَّهِ",
    spelling: "বিসমিল্লাহ্",
    meaning: "আল্লাহর নামে",
    source: "আবু দাউদ,১০১; আহমাদ, ৯৪১৮; ইব্‌ন মাজাহ, ৩০৭",
    audio: "odhu_start"
  },
  {
    id: "১৪",
    title: "অযু শেষ করার পরের দুআ",
    dua:
      "أَشْهَدُ أَنْ لَا إِلَهَ إلَّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، وَأَشْهَدُ أَنَّ مُحَمَّداً عَبْدُهُ وَرَسُولُهُِ",
    spelling:
      "আশ্ হাদু আল্-লা ইলাহা ইল্লাল্লহু ওয়াহ্ দাহু লা- শারীকা লাহূ ওয়া আশ্হাদু আন্না মুহাম্মাদান ‘আব্দুহু ওয়া রসূলুহু",
    meaning:
      "আমি সাক্ষ্য দিচ্ছি যে, একমাত্র আল্লহ ছাড়া কোনো হক্ব ইলাহ নেই, তিঁনি একক, তাঁর কোনো শরীক নেই। আমি আরও সাক্ষ্য দিচ্ছি যে, মুহাম্মাদ (সাঃ) তাঁর বান্দা ও রাসূল",
    source: "মুসলিম, ১/২০৯, ২৩৪",
    audio: "odhu_end"
  },
  {
    id: "১৫",
    title: "পিতা-মাতার জন্য দু‘আ",
    dua: "رَّبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا",
    spelling: "রব্বির হাম্হুমা-কামারব্বাইয়া-নী ছগীরা",
    meaning:
      "হে আমার রব, তাদের প্রতি দয়া করুন যেভাবে শৈশবে তারা আমাকে লালন-পালন করেছেন",
    source: "সূরাতুল ইসরা, ১৭:২৪",
    audio: "parents"
  },
  {
    id: "১৬",
    title: "দুনিয়া ও আখেরাতের কল্যাণের দু‘আ",
    dua:
      "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّار",
    spelling:
      "রব্বানা আতিনা ফিদ্দুন্ইয়া হাসানাতাওঁ ওয়াফিল আখিরাতি হাসানাতাওঁ ওয়াক্বিনা আযাবানড়বার",
    meaning:
      "হে আমাদের প্রতিপালক! আমাদেরকে দুনিয়া ও আখিরাতের সর্বোত্তম কল্যাণ দান করুন এবং আগুনের আযাব হতে আমাদের রক্ষা করুন।",
    source: "সুরাতুল বাকারাহ, ০২:২০১",
    audio: "dunia_and_akhirah_dua"
  },
  {
    id: "১৭",
    title: "উপরে উঠার দু‘আ",
    dua: " اللّٰهُ أَكْبَرُ",
    spelling: "আল্ল-হু আকবার",
    meaning: "আল্লাহ সবচেয়ে বড়",
    source: "বুখারী, ৬/১৩৫, ২৯৯৩",
    audio: "climbing_up"
  },
  {
    id: "১৮",
    title: "নীচে নামার দু‘আ",
    dua: "سُبْحَانَاللّٰهِ",
    spelling: "সুবহান আল্লহ",
    meaning: "আল্লাহ্ কতই না পবিত্র-মহান",
    source: "বুখারী, ৬/১৩৫, ২৯৯৩",
    audio: "getting_down"
  },
  {
    id: "১৯",
    title: "নবজাতকের অভিন্দনের দু‘আ",
    dua:
      "بَارَكَ اللّٰهُ لَك فِيْ الْمَوْهُوْبِ لَك وَشَكَرْتَ الْوَاهِبَ وَبَلَغَ أَشُدَّهُ، وَرُزِقْتَ ",
    spelling:
      "বা-রাকাল্ল হু লাকা ফিল মাউহূবি লাকা ওয়া শাকারতাল ওয়া-হিবা ওয়া বালা‘গা আশুদ্দাহু ওয়া রুযিক্কতা বিররহ।",
    meaning:
      "আপনাকে আল্লাহ্ যে নবজাতক উপহার দিয়েছেন তাকে আল্লাহ্ বরকতময় করুক, আপনি উপহারদাতার কৃতজ্ঞতা প্রকাশ করুন, নবজাতক পূর্ণ বয়স লাভ করুক এবং আপনি তার খিদমত লাভ করুন",
    source: "বুখারী, ৩/১২৩৩",
    audio: "congratualting_new_born"
  },
  {
    id: "২০",
    title: "বৃষ্টির দু‘আ",
    dua: "اللّٰهُمَّ صَـيِّـبًا نَافِعًا",
    spelling: "আল্ল-হুম্মা স্বইয়িবান না-ফি‘আন",
    meaning: "হে আল্লাহ, কল্যাণময় প্রবল বৃষ্টিপাত প্রদান করুন",
    source: "বুখারী, ১/৩৪৯; ইবন হিব্বান, ৩/২৮৬",
    audio: "rain_dua"
  },
  {
    id: "২১",
    title: "অসুস্থ রোগীর জন্য দু‘আ",
    dua:
      "أَسْأَلُ اللّٰهَ الْعَظِيْمَ رَبَّ الْعَرْشِ الْعَظِيمِ أَنْ يَشْفِيَك",
    spelling: "আসআলুল্ল -হাল ‘আযীম, রব্বাল ‘আরশিল ‘আযীম আইঁ ইয়াশফিইয়াকা।",
    meaning:
      "আমি প্রার্থনা করছি মহামর্যাদাময় আল্লাহর নিকট, যিনি মহামর্যাদাময় আরশের প্রভু তিনি যেন তোমাকে সুস্থতা প্রদান করেন।",
    source: "বুখারী, ৫/২১৪১-২১৪৩",
    audio: "sickness_dua"
  },
  {
    id: "২২",
    title: "কঠিন কাজকে সহজ করার দু‘আ",
    dua:
      "اَللّٰهُمَّ لاَ سَهْلَ إِلاَّ مَا جَعَلْتَهُ سَهْلاً وَأَنْتَ تَجْعَلُ الْحَزْنَ إِذَا شِئْتَ سَهْلاً",
    spelling:
      "হে আল্লাহ আপনি যা সহজ করেন তা ছাড়া কিছুই সহজ নয়। আর আপনি ইচ্ছা করলে সুকঠিনকে সহজ করেন",
    spelling:
      "আল্লহুম্মা লা-সাহ্ লা ইল্লা মা-জা‘আল্তাহু সাহ্ লান, ওয়া আন্তা তাজ্‘আলুল্ হায্না ইযা-শি'তা সাহ্ লান",
    source: "সহীহ ইবনু হিব্বান ৩/২৫৫; আলবানী, সাহীহাহ ৬/৯০২",
    audio: "hardship_reduce"
  },
  {
    id: "২৩",
    title: "বিষাক্ত পোকা-মাকড়, বদ-নযর ও শাইতন থেকে হিফাযত",
    dua:
      "أُعِيْذُكُمْ بِكَلِمَاتِ اللَّهِ التَّامَّة مِنْ كُلِّ شَيْطَانٍ وَهَامَّةٍ َمِنْ كُلِّ عَيْنٍ لامَّةٍ",
    spelling:
      "উ‘ঈযুকুম বিকালিমা-তিল্লা-হিত তা-ম্মাতি মিন কুল্লি শাইত্বনিওঁ ওয়া হা-ম্মাহ ওয়া মিন কুল্লি ‘আইনিল লা-ম্মাহ।",
    meaning:
      "আমি তোমাদেরকে আশ্রয়ে রাখছি আল্লাহর পরিপূর্ণ কথাসমূহের,  সকল শাইতন থেকে,  সকল ক্ষতিকারক পোকামাকড় ও প্রাণি থেকে এবং সকল ক্ষতিকারক দৃষ্টি থেকে",
    source: "বুখারী, ৩/১২৩৩",
    audio: "evileye"
  },
  {
    id: "২৪",
    title: "ব্যাথা পেলে দু‘আ",
    dua:
      "بِسْمِ اللّٰهِ (বিসমিল্লাহ্-আল্লাহর নামে) أَعُوْذُ بِاللّٰهِ وَقُدْرَتِهِ مِنْ شَرِّ مَا أَجِدُ وَأُحَاذِرُ ",
    spelling:
      "(বিসমিল্লাহ্) আঊযু বিল্লাহ ওয়া কুদরতিহি মিন শাররি মা আজিদু ওয়া উহা-যিরু",
    meaning:
      "(আল্লাহর নামে) আমি আশ্রয় গ্রহন করছি আল্লাহর এবং তাঁর কুদরতের, আমি যা অনুভব করছি, এবং ভয় পাচ্ছি তা থেকে।  (দেহের যে স্থানে ব্যথা সেখানে হাত রেখে প্রথমে বিসমিল্লাহ্ ৩ বার এবং দু‘আটি ৭ বার পড়ুন)",
    source: "মুসলিম, ৪/১৭২৮",
    audio: "pain"
  },
  {
    id: "২৫",
    title: "ঋণ মুক্তির জন্য দু‘আ",
    dua:
      "اللّٰهُمَّ إِنِّيْ أَعُوْذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ وَالْعَجْزِ وَالْكَسَلِ وَالْبُخْلِ وَالْجُبْنِ وَضَلَعِ الدَّيْنِ وَغَلَبَةِ الرِّجَالِ",
    spelling:
      "আল্ল -হুম্মা ইনড়বী আ‘ঊযু বিকা মিনাল হাম্মি ওয়াল হাযানি ওয়াল ‘আজযি ওয়াল কাসালি, ওয়াল বুখলি ওয়াল জুবনি, ওয়া দলা‘ইদ দাইনি ওয়া গলাবাতির রিজা-ল।",
    meaning:
      "হে আল্লাহ্ আমি আপনার আশ্রয় গ্রহণ করছি দুশ্চিন্তা , দুঃখ-বেদনা, মনোকষ্ট, অক্ষমতা, অলসতা, কৃপণতা, কাপুরুষতা, ঋণের বোঝা এবং মানুষের প্রাধান্য বা প্রভাবের অধীনতা থেকে",
    source: "বুখারী, ৩/১০৫৯",
    audio: "debt2"
  }
]

export default Dua
