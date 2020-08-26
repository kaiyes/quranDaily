function uniqueId() {
	return (
		'_' +
		Math.random()
			.toString(36)
			.substr(2, 9)
	)
}

let items = [
	{
		name_bn: 'কুরআনের দোয়া',
		name_en: 'Quranic',
		color: 'darkslateblue',
		category: 'quran'
	},
	{
		name_bn: 'সকাল-সন্ধ্যায়',
		name_en: 'Morning-evening',
		color: 'indianred',
		category: 'morningEvening'
	},
	{
		name_bn: 'খাওয়ার দোয়া',
		name_en: 'Eating',
		color: 'darkslateblue',
		category: 'eating'
	},
	{
		name_bn: 'বাড়ী থেকে বের হওয়ার দোয়া',
		name_en: 'Going out of home',
		color: 'indianred',
		category: 'home'
	},
	{
		name_bn: 'যাত্রা পথে',
		name_en: 'Travel',
		color: 'darkslateblue',
		category: 'travelling'
	},
	{
		name_bn: 'সালাতের দোয়া',
		name_en: 'Salat',
		color: 'indianred',
		category: 'salat'
	},
	{
		name_bn: 'সালাত শেষে দোয়া',
		name_en: 'After Salat',
		color: 'darkslateblue',
		category: 'salatEnd'
	},
	{
		name_bn: 'কুরবানির দোয়া',
		name_en: 'Qurbani',
		color: 'indianred',
		category: 'qurbani'
	},
	{
		name_en: 'Repentance',
		name_bn: 'তাওবার দোয়া ',
		color: 'darkslateblue',
		category: 'tawba'
	},
	{
		name_bn: 'ঈমানের সুরক্ষায় দোয়া',
		name_en: 'Eeman',
		color: 'indianred',
		category: 'eeman'
	},
	{
		name_bn: 'উপকারীর জন্যে দোয়া',
		name_en: 'For Benefactor',
		color: 'darkslateblue',
		category: 'beneficial'
	},
	{
		name_bn: 'ইস্তেখারার দোয়া ',
		name_en: 'Divine Guidence',
		color: 'indianred',
		category: 'istekhara'
	},
	{
		name_bn: 'অসুস্থতার দোয়া ',
		name_en: 'Disease',
		color: 'darkslateblue',
		category: 'disease'
	},
	{
		name_bn: 'শিশুদের নিরাপত্তা',
		name_en: 'Child Safety',
		color: 'indianred',
		category: 'child'
	},
	{
		name_bn: 'রুকিয়ার দোয়া',
		name_en: 'Rukia',
		color: 'darkslateblue',
		category: 'ruqiah'
	},
	{
		name_bn: 'বিয়ে সঙ্ক্রান্ত',
		name_en: 'Marriage',
		color: 'indianred',
		category: 'marriage'
	},
	{
		name_bn: 'আর্থিক',
		name_en: 'Finance',
		color: 'darkslateblue',
		category: 'financial'
	},
	{
		name_en: 'Funeral',
		name_bn: 'জানাযা',
		color: 'indianred',
		category: 'janaza'
	},
	{
		name_bn: 'অতিথির জন্যে',
		name_en: 'Guest',
		color: 'darkslateblue',
		category: 'mehman'
	},
	{
		name_bn: 'রামাদানের দোয়া',
		name_en: 'Ramadan',
		color: 'indianred',
		category: 'ramadan'
	},
	{
		name_en: 'Hajj',
		name_bn: 'হজ্বের দোয়া',
		colorlor: 'darkslateblue',
		category: 'hajj'
	},
	{
		name_en: 'Sleeping',
		name_bn: 'ঘুমের দোয়া',
		color: 'indianred',
		category: 'sleeping'
	},
	{
		name_en: 'Feelings',
		name_bn: 'অনুভূতির দোয়া',
		color: 'darkslateblue',
		category: 'feelings'
	},
	{
		name_bn: 'দুর্দশাগ্রস্ত ও বিপদের দোয়া',
		name_en: 'When in Danger',
		color: 'indianred',
		category: 'danger'
	},
	{
		name_en: 'Enemy',
		name_bn: 'শত্রুর সামনে দোয়া',
		color: 'darkslateblue',
		category: 'enemy'
	},
	{
		name_en: 'Child Birth',
		name_bn: 'জন্ম হলে দোয়া',
		color: 'indianred',
		category: 'childborn'
	},
	{
		name_en: 'Weather',
		name_bn: 'আবহাওয়ার দোয়া',
		color: 'darkslateblue',
		category: 'weather'
	},
	{
		name_en: 'Assembly',
		name_bn: 'মজলিসের দোয়া',
		color: 'indianred',
		category: 'majlis'
	}
]

items.map(item => {
	return (item.key = uniqueId())
})

export default items
