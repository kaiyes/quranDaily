const FakeData = [
	{
		topicName: "Fard Salah",
		topic: "prayer",
		status: 60,
		image: require("../assets/images/prayer.png"),
		subTasks: [
			{
				name: "Fajr",
				done: false,
				icon: require("../assets/icons/sun_up.png")
			},
			{
				name: "Dhuhr",
				done: false,
				icon: require("../assets/icons/sun_full.png")
			},
			{
				name: "Asr",
				done: false,
				icon: require("../assets/icons/sun_asr.png")
			},
			{
				name: "Magrib",
				done: false,
				icon: require("../assets/icons/sun_down.png")
			},
			{
				name: "Isha",
				done: false,
				icon: require("../assets/icons/moon.png")
			}
		]
	},

	{
		topicName: "Quran",
		topic: "quran",
		status: 90,
		image: require("../assets/images/quran.jpg"),
		subTasks: [
			{
				name: "Memorize 5 ayah",
				done: false,
				icon: require("../assets/icons/5_ayah.png")
			},
			{
				name: "1 page",
				done: false,
				icon: require("../assets/icons/1_page.png")
			},
			{
				name: "Read at least 100 ayah",
				done: false,
				icon: require("../assets/icons/100.png")
			},
			{
				name: "Read 1 Juz",
				done: false,
				icon: require("../assets/icons/1_juz.png")
			},
			{
				name: "Read 1 Manzil",
				done: false,
				icon: require("../assets/icons/1_monjil.png")
			}
		]
	},

	{
		topicName: "Sunna Salah",
		topic: "sunnahPrayer",
		image: require("../assets/images/sunnah.jpg"),
		status: 73,
		subTasks: [
			{
				name: "Fajr 2 rakah",
				done: false,
				icon: require("../assets/icons/sun_up.png")
			},
			{
				name: "Ishraq 4 rakah",
				done: false,
				icon: require("../assets/icons/sun_israq.png")
			},
			{
				name: "Dhuhr 2+4 rakah",
				done: false,
				icon: require("../assets/icons/sun_full.png")
			},
			{
				name: "Magrib 2 rakah",
				done: false,
				icon: require("../assets/icons/sun_down.png")
			},
			{
				name: "Isha 2+1 rakah",
				done: false,
				icon: require("../assets/icons/moon.png")
			}
		]
	},

	{
		topicName: "Tahajjud",
		topic: "tahajjud",
		status: 40,
		image: require("../assets/images/tahajjud.jpg"),
		subTasks: [
			{
				name: "Pray 2 rakah at least",
				done: false
			},
			{
				name: "Pray 4 rakah",
				done: false
			},
			{
				name: "Pray full 8 rakah",
				done: false
			}
		]
	},

	{
		topicName: "Sadakah",
		topic: "sadaqa",
		status: 10,
		image: require("../assets/images/sadaqa.png"),
		subTasks: [
			{
				name: "money",
				done: false,
				icon: require("../assets/icons/money.png")
			},
			{
				name: "smile",
				done: false,
				icon: require("../assets/icons/intimate.jpg")
			},
			{
				name: "lokma",
				done: false,
				icon: require("../assets/icons/smile.png")
			}
		]
	},

	{
		topicName: "Morning Dua",
		topic: "morningDua",
		status: 46,
		image: require("../assets/images/morning.jpg"),
		subTasks: [
			{
				name: "Read All",
				done: false
			},
			{
				name: "Read Collected ones",
				done: false
			}
		]
	},

	{
		topicName: "Evening Dua",
		topic: "evening-Dua",
		status: 46,
		image: require("../assets/images/evening.jpg"),
		subTasks: [
			{
				name: "Read All",
				done: false
			},
			{
				name: "Read Collected ones",
				done: false
			}
		]
	}
]

export default FakeData
