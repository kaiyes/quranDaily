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
		category: 'quranic'
	},
	{
		name_bn: 'উপকারী জিকর',
		name_en: 'Benficial Zikr',
		color: 'darkslateblue',
		category: 'zikr'
	},
	{
		name_bn: 'সকাল-সন্ধ্যায়',
		name_en: 'Morning-evening',
		color: 'indianred',
		category: 'morningEvening'
	},

	{
		name_bn: 'কাপড় পরার দোয়া ',
		name_en: 'Dressing',
		color: 'darkslateblue',
		category: 'dressing'
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
		name_bn: 'অজু ',
		name_en: 'Ablution',
		color: 'darkslateblue',
		category: 'ablution'
	},
	{
		name_bn: 'টয়লেট ',
		name_en: 'Toilet',
		color: 'darkslateblue',
		category: 'toilet'
	},
	{
		name_bn: 'যাত্রা পথে',
		name_en: 'Travel',
		color: 'darkslateblue',
		category: 'travel'
	},
	{
		name_bn: 'মসজিদের দোয়া ',
		name_en: 'Mosque',
		color: 'darkslateblue',
		category: 'mosque'
	},
	{
		name_bn: 'আজান 	',
		name_en: 'Azan',
		color: 'darkslateblue',
		category: 'azan'
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
		category: 'afterSalat'
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
		category: 'repentance'
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
		category: 'forBenefactor'
	},
	{
		name_bn: 'রোগ ',
		name_en: 'Disease',
		color: 'darkslateblue',
		category: 'disease'
	},
	{
		name_bn: 'শিশুদের নিরাপত্তা',
		name_en: 'Child Safety',
		color: 'indianred',
		category: 'childSafety'
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
		category: 'finance'
	},
	{
		name_en: 'Funeral',
		name_bn: 'জানাযা',
		color: 'indianred',
		category: 'funeral'
	},
	{
		name_bn: 'অতিথির জন্যে',
		name_en: 'Guest',
		color: 'darkslateblue',
		category: 'guest'
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
		category: 'whenInDanger'
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
		category: 'childBirth'
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
		category: 'assembly'
	},
	{
		name_en: 'Harvest',
		name_bn: 'ফসল ',
		color: 'indianred',
		category: 'harvest'
	},
	{
		name_en: 'Sneezing',
		name_bn: 'হাঁচি ',
		color: 'indianred',
		category: 'sneezing'
	}
]

items.map(item => {
	return (item.key = uniqueId())
})

export default items
