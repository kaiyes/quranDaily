function uniqueId() {
  return (
    "_" +
    Math.random()
      .toString(36)
      .substr(2, 9)
  )
}

let items = [
  {
    name: "কুরআনের দোয়া",
    color: "darkslateblue",
    category: "quran"
  },
  {
    name: "সকাল-সন্ধ্যায়",
    color: "indianred",
    category: "morningEvening"
  },
  {
    name: "খাওয়ার দোয়া",
    color: "darkslateblue",
    category: "eating"
  },
  {
    name: "বাড়ী থেকে বের হওয়ার দোয়া",
    color: "indianred",
    category: "home"
  },
  {
    name: "যাত্রা পথে",
    color: "darkslateblue",
    category: "travelling"
  },
  {
    name: "সালাতের দোয়া",
    color: "indianred",
    category: "salat"
  },
  { name: "সালাত শেষে দোয়া", color: "darkslateblue", category: "salatEnd" },
  {
    name: "কুরবানির দোয়া",
    color: "indianred",
    category: "qurbani"
  },
  { name: "তাওবার দোয়া ", color: "darkslateblue", category: "tawba" },
  {
    name: "ঈমানের সুরক্ষায় দোয়া",
    color: "indianred",
    category: "eeman"
  },
  {
    name: "উপকারীর জন্যে দোয়া",
    color: "darkslateblue",
    category: "beneficial"
  },
  {
    name: "ইস্তেখারার দোয়া ",
    color: "indianred",
    category: "istekhara"
  },
  {
    name: "অসুস্থতার দোয়া ",
    color: "darkslateblue",
    category: "disease"
  },
  {
    name: "শিশুদের নিরাপত্তা",
    color: "indianred",
    category: "child"
  },
  {
    name: "রুকিয়ার দোয়া",
    color: "darkslateblue",
    category: "ruqiah"
  },
  {
    name: "বিয়ে সঙ্ক্রান্ত",
    color: "indianred",
    category: "marriage"
  },
  { name: "আর্থিক", color: "darkslateblue", category: "financial" },
  { name: "জানাযা", color: "indianred", category: "janaza" },
  {
    name: "অতিথির জন্যে",
    color: "darkslateblue",
    category: "mehman"
  },
  {
    name: "রামাদানের দোয়া",
    color: "indianred",
    category: "ramadan"
  },
  { name: "হজ্বের দোয়া", color: "darkslateblue", category: "hajj" },
  { name: "ঘুমের দোয়া", color: "indianred", category: "sleeping" },
  { name: "অনুভূতির দোয়া", color: "darkslateblue", category: "feelings" },
  {
    name: "দুর্দশাগ্রস্ত ও বিপদের দোয়া",
    color: "indianred",
    category: "danger"
  },
  { name: "শত্রুর সামনে দোয়া", color: "darkslateblue", category: "enemy" },
  { name: "জন্ম হলে দোয়া", color: "indianred", category: "childborn" },
  { name: "আবহাওয়ার দোয়া", color: "darkslateblue", category: "weather" },
  { name: "মজলিসের দোয়া", color: "indianred", category: "majlis" }
]

items.map(item => {
  return (item.key = uniqueId())
})

export default items
