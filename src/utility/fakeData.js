const FakeData = [
	{
		topicName: 'Fard Salah',
		topic: 'prayer',
		image: require('../assets/images/prayer.png'),
		subTasks: [
			{
				name: 'Fajr',
				done: true,
				icon: require('../assets/icons/sun_up.png')
			},
			{
				name: 'Dhuhr',
				done: true,
				icon: require('../assets/icons/sun_full.png')
			},
			{
				name: 'Asr',
				done: false,
				icon: require('../assets/icons/sun_asr.png')
			},
			{
				name: 'Magrib',
				done: false,
				icon: require('../assets/icons/sun_down.png')
			},
			{
				name: 'Isha',
				done: false,
				icon: require('../assets/icons/moon.png')
			}
		]
	},

	{
		topicName: 'Quran',
		topic: 'quran',
		image: require('../assets/images/quran.jpg'),
		subTasks: [
			{
				name: 'Memorize 5 ayah',
				done: false,
				icon: require('../assets/icons/5_ayah.png')
			},
			{
				name: '1 page',
				done: false,
				icon: require('../assets/icons/1_page.png')
			},
			{
				name: 'Read at least 100 ayah',
				done: true,
				icon: require('../assets/icons/100.png')
			},
			{
				name: 'Read 1 Juz',
				done: false,
				icon: require('../assets/icons/1_juz.png')
			},
			{
				name: 'Read 1 Manzil',
				done: false,
				icon: require('../assets/icons/1_monjil.png')
			}
		]
	},

	{
		topicName: 'Sunna Salah',
		topic: 'sunnahPrayer',
		image: require('../assets/images/sunnah.png'),
		subTasks: [
			{
				name: 'Fajr 2 rakah',
				done: false,
				icon: require('../assets/icons/sun_up.png')
			},
			{
				name: 'Ishraq 4 rakah',
				done: true,
				icon: require('../assets/icons/sun_israq.png')
			},
			{
				name: 'Dhuhr 2+4 rakah',
				done: false,
				icon: require('../assets/icons/sun_full.png')
			},
			{
				name: 'Magrib 2 rakah',
				done: true,
				icon: require('../assets/icons/sun_down.png')
			},
			{
				name: 'Isha 2+1 rakah',
				done: false,
				icon: require('../assets/icons/moon.png')
			}
		]
	},

	{
		topicName: 'Tahajjud',
		topic: 'tahajjud',
		image: require('../assets/images/tahajjud.png'),
		subTasks: [
			{
				name: 'Pray 2 rakah at least',
				done: true,
				icon: require('../assets/icons/2.png')
			},
			{
				name: 'Pray 4 rakah',
				done: false,
				icon: require('../assets/icons/4.png')
			},
			{
				name: 'Pray full 8 rakah',
				done: false,
				icon: require('../assets/icons/8.png')
			}
		]
	},

	{
		topicName: 'Sadakah',
		topic: 'sadaqa',
		image: require('../assets/images/sadaqa.png'),
		subTasks: [
			{
				name: 'money',
				done: false,
				icon: require('../assets/icons/money.png')
			},
			{
				name: 'smile',
				done: true,
				icon: require('../assets/icons/intimate.jpg')
			},
			{
				name: 'lokma',
				done: false,
				icon: require('../assets/icons/smile.png')
			}
		]
	},

	{
		topicName: 'Morn/Even Dua',
		topic: 'morningDua',
		image: require('../assets/images/morning.jpg'),
		subTasks: [
			{
				name: 'Read All',
				done: false,
				icon: require('../assets/icons/sun_full.png')
			},
			{
				name: 'Read Collected ones',
				done: false,
				icon: require('../assets/icons/moon_t.png')
			}
		]
	}
]

export default FakeData
