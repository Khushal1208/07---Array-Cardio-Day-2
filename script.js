  // ## Array Cardio Day 2

  const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
  ];


  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];



  // Some and Every Checks
  const isAdult = people.some(person => ((new Date()).getFullYear()) - person.year >= 19);

  console.log({ isAdult });

  const allAdults = people.every(person => ((new Date()).getFullYear()) - person.year >= 19);
  
  console.log({ allAdults });



  // Find
  const comment = comments.find(comment => comment.id === 823423);

  console.log(comment);



  // Find Index and Delete
  const index = comments.findIndex(comment => comment.id === 823423);

  console.log(index);

  const newComments = [...comments.slice(0, index), ...comments.slice(index + 1)];

  console.log(newComments);



  // Map - Create an array of people's names
  const names = people.map(person => person.name);

  console.log(names);



  // Filter - Get people born before 1990
  const olderPeople = people.filter(person => person.year < 1990);

  console.log(olderPeople);



  // Sort - Sort people by birth year (oldest to youngest)
  const sortedPeople = people.sort((a, b) => a.year - b.year);

  console.log(sortedPeople);



  // Reduce - Get the total years of all people's ages
  const totalYears = people.reduce((total, person) => total + ((new Date()).getFullYear() - person.year), 0);

  console.log(totalYears);