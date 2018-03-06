const allBibleVerses = [
'John.3.16','John.1.1', 'John.14.6', 'Matthew.28.19','Romans.3.23','Ephesians.2.8','Genesis.1.1','Acts.1.8','2Timothy.3.16','Romans.10.9','Romans.6.23','Acts.2.38','John.1.12','Romans.8.28','John.1.9','Genesis.1.26','Genesis.001.002','Genesis.001.003','Genesis.001.004','Genesis.001.005','Genesis.001.006','Genesis.001.007','Genesis.001.008','Genesis.001.009','Genesis.001.010','Genesis.001.011','Genesis.001.012','Genesis.001.013','Genesis.001.014','Genesis.001.015','Genesis.001.016','Genesis.001.017','Genesis.001.018','Genesis.001.019','Genesis.001.020', 'Romans.12.1', 'Romans.5.8.', 'Matthew.28.18','John.3.3','Mark.16.15','John.10.10','John.1.14','Acts.4.12', 'Acts.2.42','John.3.1','Galatians.5.22','Proverbs.3.5','Jeremiah.29.11','John.2.1','Titus.3.5','Romans.12.2','John.14.1','John.4.1','Ephesians.4.11','Romans.5.12','Matthew.11.28','Romans.5.1','Genesis.1.27','Romans.1.16','1John.1.9','Acts.2.1','2Corinthians.5.17','Hebrews.11.1','2Timothy.2.15','Romans.8.1','Romans.10.13','John.8.32','Isaiah.9.6','John.14.15','Deuteronomy.6.4','John.13.34','Philippians.4.13','John.4.24','Ephesians.2.1','John.14.16','Hebrews.4.12','James.5.16','Isaiah.7.14','John.1.7','John.3.5','Philippians.2.5','John.1.29','Philippians.4.6','Hebrews.12.1','Acts.17.11','Matthew.16.18', 'Romans.1.18', 'Philippians.4.6','Acts.17.11', 'Galatians.2.20','Matthew.25.31', 'Matthew.5.17','Romans.10.17','Matthew.6.33','Luke.4.18', 'John.16.13','Acts.20.28', 'Titus.2.11','John.8.44','Ephesians.6.10','Romans.13.1', 'John.2.15','Mark.16.16','Romans.3.10','Genesis.3.15','Hebrews.11.6', 'John.14.26','John.5.24','Joel.2.28','Genesis.1.11','James.1.2','Colossians.1.15','Matthew.22.37','Titus.2.13','Philippians.4.8','Acts.1.9','John.4.7','Micah.6.8','John.17.17','Leviticus.18.22','Acts.20.7','Acts.16.31','John.11.25','John.8.58','Acts.2.4','Acts.2.41','Proverbs.22.6','James.1.5','Hebrews.1.1','2John.1.2','Luke.16.19','Luke.1.4','Revelation.3.20','1Peter.2.3','1Peter.3.15','Matthew.7.21','John.3.18','Genesis.12.1','John.3.8','Genesis.2.7','Genesis.1.3','1Peter.2.9','Luke.1.26','Hebrews.9.27','Exodus.3.14','1Corinthians.6.9','Ephesians.1.3','Romans.1.20','1Thessalonians.4.13','Hebrews.13.5','1John.4.1','James.1.17','Isaiah.61.1','Galatians.3.28','2Peter.3.9','Acts.1.11','James.5.14','Ephesians.6.12','Acts.3.19','Matthew.6.9','James.2.14','Isaiah.40.31','Luke.1.35','Ephesian.2.10','Ephesians.1.13','1John.4.5','Luke.2.1','James.1.27', 'Titus.2.3','Matthew.7.1','1Timothy.2.5','Ephesians.4.1','Ephesians.5.18','Ephesians.5.22','Revelation.21.1','Micah.5.2','2Peter.3.4','Psalms.119.105','1John.1.7','Isaiah.53.5','Ephesians1.7','Ephesians.5.25','Romans.8.9','Galatians.5.16','Luke.15.11','James.1.22','Colossians.1.16','Colossians.3.1','Acts.17.30','1Peter.3.18','Hebrews.10.25','James.4.7','1Peter.2.24','Acts.6.1','Romans.8.26','Luke.14.1','Romans.8.29','Jeremiah.17.9','1John.4.7','Exodus.1.5','1John.2.15','2Peter.1.20','Colossians.3.12','John.17.20','1John.3.1','Acts.10.34','Luke.4.16','Titus.1.5','Luke.9.23','Galatians.3.26','1John.2.1']

export function getVerseNames() {
	let randomNumbers = randomizedNumbers(); // array of random numbers
	let randomVerseArray = [];
	for (let i = 0; i < randomNumbers.length; i++) {
		console.log(allBibleVerses[randomNumbers[i]])
		randomVerseArray.push(allBibleVerses[randomNumbers[i]]);
	};
	return randomVerseArray;
};

function randomizedNumbers() {
	const total = allBibleVerses.length;
	let array = [];
	while (array.length < 10) {
		var randomNumber = Math.floor(Math.random() * total) + 1;
		if (array.indexOf(randomNumber) > -1) continue;
		array[array.length] = randomNumber;
	};
	return array.map(number => number - 1);
};


// export function parseCSV() {
// 	// Papa.parse(all_bible_verses)

// };

