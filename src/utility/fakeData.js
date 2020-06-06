const FakeData = [
	{
		topicName: "Fard Salah",
		topic: "prayer",
		icon: "sun",
		status: 60,
		image: require("../assets/images/prayer.png"),
		subTasks: [
			{
				name: "Fajr",
				done: false
			},
			{
				name: "Dhuhr",
				done: false
			},
			{
				name: "Asr",
				done: false
			},
			{
				name: "Magrib",
				done: false
			},
			{
				name: "Isha",
				done: false
			}
		]
	},

	{
		topicName: "Quran",
		topic: "quran",
		icon: "book",
		status: 90,
		image: require("../assets/images/quran.jpg"),
		subTasks: [
			{
				name: "Read at least 100 ayah",
				done: false
			},
			{
				name: "Read 1 Juz",
				done: false
			},
			{
				name: "Memorize 5 ayah",
				done: false
			},
			{
				name: "Read 1 Manzil",
				done: false
			}
		]
	},

	{
		topicName: "Sunna Salah",
		topic: "sunnahPrayer",
		icon: "bar-chart",
		image: require("../assets/images/sunnah.jpg"),
		status: 73,
		subTasks: [
			{
				name: "Fajr 2 rakah",
				done: false
			},
			{
				name: "Ishraq 4 rakah",
				done: false
			},
			{
				name: "Dhuhr 2+4 rakah",
				done: false
			},
			{
				name: "Magrib 2 rakah",
				done: false
			},
			{
				name: "Isha 2+1 rakah",
				done: false
			}
		]
	},

	{
		topicName: "Tahajjud",
		topic: "tahajjud",
		icon: "moon",
		status: 40,
		image: require("../assets/images/tahajjud.jpg"),
		subTasks: [
			{
				name: "Pray in last 1/3 of night",
				done: false
			},
			{
				name: "Pray after isha",
				done: false
			},
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
		icon: "dollar-sign",
		status: 10,
		image: require("../assets/images/sadaqa.png"),
		subTasks: [
			{
				name: "money",
				done: false
			},
			{
				name: "smile",
				done: false
			},
			{
				name: "lokma",
				done: false
			},
			{
				name: "Intimacy",
				done: false
			}
		]
	},

	{
		topicName: "Morning Dua",
		topic: "morningDua",
		icon: "clock",
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
		icon: "clock",
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
