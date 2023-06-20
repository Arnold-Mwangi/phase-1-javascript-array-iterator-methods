const users = [
    {
      firstName: "Niky",
      lastName: "Morgan",
      favoriteColor: "Blue",
      favoriteAnimal: "Jaguar",
      personalQuote: "You're never too old to learn something new",
    },
    {
      firstName: "Tracy",
      lastName: "Lum",
      favoriteColor: "Yellow",
      favoriteAnimal: "Penguin",
      personalQuote: "I just got lost in thought - it was unfamiliar territory",
    },
    {
      firstName: "Josh",
      lastName: "Rowley",
      favoriteColor: "Blue",
      favoriteAnimal: "Penguin",
      personalQuote: "Always remember you’re unique, just like everyone else",
    },
    {
      firstName: "Kate",
      lastName: "Travers",
      favoriteColor: "Red",
      favoriteAnimal: "Jaguar",
      personalQuote: "Behind every great man is a woman rolling her eyes",
    },
    {
      firstName: "Avidor",
      lastName: "Turkewitz",
      favoriteColor: "Blue",
      favoriteAnimal: "Penguin",
      personalQuote:
        "You don’t have to see the whole staircase, just take the first step",
    },
    {
      firstName: "Drew",
      lastName: "Price",
      favoriteColor: "Yellow",
      favoriteAnimal: "Elephant",
      personalQuote:
        "Failure is not the opposite of success: it’s part of success",
    },
  ];

  // lets practise by first finding a single element that meets a condition
  // lets find all the first user with favorite color blue and print out their names
  // we use find()

const blue = users.find(item => item.favoriteColor === "Blue");
console.log(blue)

// we can also find the index of the  first element with the value of red
const indexofFirstRedUser = users.map((user)=>user.favoriteColor.indexOf("Red"));

console.log(indexofFirstRedUser)
// or we can use findIndex which will return 3
const firstRedUser = users.findIndex(user => user.favoriteColor === "Red");
console.log(firstRedUser)

// we are going to find and return a list of names with favotite color blue
// we use filter

const favRed = users.filter(users => users.favoriteColor === "Red").forEach(user => console.log(user.firstName));;

// okay, lets now add a new property Full name which will take firstName + lastName

const usersWithFirstName = users.reduce((accumlator, user) =>{
    const fullName = user.firstName + " " +user.lastName;
    const userWithFullName = {...user, fullName};
    return [...accumlator, userWithFullName]
}, []);
console.log(usersWithFirstName)