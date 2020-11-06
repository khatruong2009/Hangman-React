const foods = [
  "pizza",
  "broccoli",
  "hamburger", 
  "french fries",
  "steak", 
  "chicken", 
  "rice", 
  "cheese", 
  "pho", 
  "ramen", 
  "sushi", 
  "hot dog", 
  "apple",
  "banana",
  "grape",
  "watermelon", 
  "tomato",
  "carrot", 
  "hummus", 
  "chicken nugget", 
  "burrito",
  "quesadilla",
  "chicken teriyaki", 
  "chips",
  "ice cream", 
  "pear",
  "cake",
]

//comes up with a random word from the array above
function randomWord() {
  return foods[Math.floor(Math.random() * foods.length)];
}

export default randomWord;