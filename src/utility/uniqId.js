export default function uniqId() {
	return (
		'_' +
		Math.random()
			.toString(36)
			.substr(2, 9)
	)
}

// 	const data = {
// 		Quran: QuranData,
// 		'Fard Salah': FardSalahData,
// 		'Sunna Salah': SunnaSalahData,
// 		Tahajjud: TahajjudData,
// 		Sadakah: SadakahData,
// 		'Dua Morning': FardSalahData,
// 		'Dua Morning': SadakahData
// 	}
