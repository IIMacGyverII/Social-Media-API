const connection = require('../config/connection');
const { Thought, User } = require('../models');
const { getRandomName, getRandomThoughts } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing thoughts
  await Thought.deleteMany({});

  // Drop existing users
  await User.deleteMany({});

  // Create empty array to hold the users
  const users = [];
  const thoughts = [];

  // Loop 20 times -- add users to the users array
  for (let i = 0; i < 20; i++) {
    // Get some random thoughts objects using a helper function that we imported from ./data
    const thoughtText = getRandomThoughts(20);

    const username = getRandomName();
    const email = `${username}@${username}.com`;
    const friends = getRandomName();
    // const last = fullName.split(' ')[1];
    // const github = `${first}${Math.floor(Math.random() * (99 - 18 + 1) + 18)}`;
console.log(username);
console.log(email);
console.log(friends)
console.log(thoughtText);
    thoughts.push({
      thoughtText,
    })

    users.push({
      username,
      email,
      friends,
      friends,
    });    
  }
  

  // Add users to the collection and await the results
  await User.collection.insertMany(users);

  // Add thoughts to the collection and await the results
  await Thought.collection.insertMany(thoughts);

  // Log out the seed data to indicate what should appear in the database
  console.table(users);
  console.table(thoughts)
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
