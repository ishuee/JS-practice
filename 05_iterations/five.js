//filter

const myNums=[1,2,3,4,5,6,7,8,9,10]

const newNums=myNums.filter((num)=>num>4)
console.log(newNums) //[ 5, 6, 7, 8, 9, 10 ]

//filter: To create a new array containing only the elements from the original array that satisfy a specific condition.

const books = [
  {
    title: "The Silent River",
    genre: "Mystery",
    publishingYear: 2015,
    edition: "1st"
  },
  {
    title: "Stars Beyond",
    genre: "Science Fiction",
    publishingYear: 2018,
    edition: "2nd"
  },
  {
    title: "Shadows of Time",
    genre: "Fantasy",
    publishingYear: 2020,
    edition: "1st"
  },
  {
    title: "Learning JavaScript",
    genre: "Education",
    publishingYear: 2021,
    edition: "3rd"
  },
  {
    title: "Deep in the Forest",
    genre: "Adventure",
    publishingYear: 2017,
    edition: "1st"
  },
  {
    title: "The Art of Mindfulness",
    genre: "Self-Help",
    publishingYear: 2019,
    edition: "2nd"
  },
  {
    title: "History of Civilizations",
    genre: "History",
    publishingYear: 2013,
    edition: "4th"
  },
  {
    title: "Modern Cooking",
    genre: "Cooking",
    publishingYear: 2022,
    edition: "1st"
  },
  {
    title: "Business Essentials",
    genre: "Business",
    publishingYear: 2016,
    edition: "5th"
  },
  {
    title: "Ocean Whisper",
    genre: "Romance",
    publishingYear: 2020,
    edition: "1st"
  }
];

let userBooks=books.filter( (bk)=> bk.genre=== "Mystery")
console.log(userBooks)
/*
[
  {
    title: 'The Silent River',
    genre: 'Mystery',
    publishingYear: 2015,
    edition: '1st'
  }
]
*/
userBooks=books.filter((bk)=>bk.publishingYear>2021)
console.log(userBooks)
/*
[
  {
    title: 'Modern Cooking',
    genre: 'Cooking',
    publishingYear: 2022,
    edition: '1st'
  }
]
*/

