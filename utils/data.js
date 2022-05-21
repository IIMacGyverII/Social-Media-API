const names = [
  'Aaran',
  'Aaren',
  'Aarez',
  'Aarman',
  'Aaron',
  'Aaron-James',
  'Aarron',
  'Aaryan',
  'Aaryn',
  'Aayan',
  'Aazaan',
  'Abaan',
  'Abbas',
  'Abdallah',
  'Abdalroof',
  'Abdihakim',
  'Abdirahman',
  'Abdisalam',
  'Abdul',
  'Abdul-Aziz',
  'Abdulbasir',
  'Abdulkadir',
  'Abdulkarem',
  'Smith',
  'Jones',
  'Coollastname',
  'enter_name_here',
  'Ze',
  'Zechariah',
  'Zeek',
  'Zeeshan',
  'Zeid',
  'Zein',
  'Zen',
  'Zendel',
  'Zenith',
  'Zennon',
  'Zeph',
  'Zerah',
  'Zhen',
  'Zhi',
  'Zhong',
  'Zhuo',
  'Zi',
  'Zidane',
  'Zijie',
  'Zinedine',
  'Zion',
  'Zishan',
  'Ziya',
  'Ziyaan',
  'Zohaib',
  'Zohair',
  'Zoubaeir',
  'Zubair',
  'Zubayr',
  'Zuriel',
  'Xander',
  'Jared',
  'Courtney',
  'Gillian',
  'Clark',
  'Jared',
  'Grace',
  'Kelsey',
  'Tamar',
  'Alex',
  'Mark',
  'Tamar',
  'Farish',
  'Sarah',
  'Nathaniel',
  'Parker',
];

const randomThoughts = [
  'The scream in your head will never be out of breath.',
  'Do fish in water have their hidden life where they go to school, hang out, study, and get married?',
  'If everyone had roller skates instead of feet, would there be cars or would they go rollerblading everywhere?',
  'We will never know what memories we had as children and we will never remember them.',
  'We know our parents for whole our life, while they know us only part of their lives.',
  'Someone was born at this very moment, and someone lost his life at this very moment.',
  'Our brain has never experienced some things, and yet it can tailor a scenario in its head as if it had happened.',
  'If the tomato is a fruit, then ketchup is the jam.',
  'If I were a book, what title would I have?',
  'Valentines Day is known for its red color, red roses, red hearts … Would it be strange if another color was used for Valentines Day instead of red? And why red? Why does red associate us with love?',
  'The hospital where you were born is the only building you left without entering.',
  'Humans invented the sounds produced by dinosaurs.',
  'Maybe its better not to kill the spider, because if I kill him, his family and friends can come to the funeral and in that way, I will summon many more spiders.',
  'Who invented the words and names of certain objects and how did it occur to someone to call a chair just like that “chair”?',
  'How does our voice in our head sound?',
  'It is very important to have someone who lets you be what you are and nourishes your mind and your soul, not your ego.',
  'What would happen to us without love? We would not be beings who feel and live for love, we would be just a mere and quiet existence.',
  'It is better to be alone and happy in the four walls of your head than to suffer someones disrespect, just because you are afraid of loneliness.',
];

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random username combining 2 names from the names variable
const getRandomName = () =>
  `${getRandomArrItem(names)}${getRandomArrItem(names)}`;

// Function to generate random thoughts that we can add to student object.
const getRandomThoughts = (int) => {
  const results = [];
  for (let i = 18; i < int; i++) {
    results.push({
      thoughtText: getRandomArrItem(randomThoughts),
      // score: Math.floor(Math.random() * (99 - 70 + 1) + 70),
    });
  }
  return results;
};

// Export the functions for use in seed.js
module.exports = { getRandomName, getRandomThoughts };
