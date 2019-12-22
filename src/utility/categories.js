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
    detail: "quran"
  },
  {
    name: "সকাল-সন্ধ্যায়",
    color: "indianred",
    detail: "morning"
  },
  {
    name: "যাত্রা পথে",
    color: "darkslateblue",
    detail: "travelling"
  },
  {
    name: "সালাতের দোয়া",
    color: "indianred",
    detail: "salah"
  },
  { name: "তাওবা", color: "darkslateblue", detail: "তাওবা" },
  {
    name: "ইস্তেখারার দোয়া ",
    color: "indianred",
    detail: "istekhara"
  },
  {
    name: "অসুস্থতার দোয়া ",
    color: "darkslateblue",
    detail: "quran"
  },
  {
    name: "শিশুদের নিরাপত্তা",
    color: "indianred",
    detail: "morning"
  },
  {
    name: "রুকিয়ার দোয়া",
    color: "darkslateblue",
    detail: "ruqiah"
  },
  {
    name: "বিয়ে সঙ্ক্রান্ত",
    color: "indianred",
    detail: "marriage"
  },
  { name: "আর্থিক", color: "darkslateblue", detail: "money" },
  { name: "জানাযা", color: "indianred", detail: "janaza" },
  {
    name: "অতিথির জন্যে",
    color: "darkslateblue",
    detail: "mehman"
  },
  {
    name: "রামাদানের দোয়া",
    color: "indianred",
    detail: "ramadan"
  },
  { name: "হজ্বের দোয়া", color: "darkslateblue", detail: "hajj" },
  { name: "ঘুমের দোয়া", color: "indianred", detail: "sleeping" },
  { name: "অনুভূতির দোয়া", color: "darkslateblue", detail: "feelings" },
  { name: "দুর্দশাগ্রস্ত ও বিপদের দোয়া", color: "indianred", detail: "danger" },
  { name: "শত্রুর সামনে দোয়া", color: "darkslateblue", detail: "enemy" }
]

items.map(item => {
  return (item.key = uniqueId())
})

export default items
