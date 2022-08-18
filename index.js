//Lab test here
const karibuNyumbani = function (){
 return function (){
  return "You are Welcome to Kenya."
 }; karibuNyumbani();
}
function receivesAFunction(name){
  console.log(name())
  return name();
  // return karibuNyumbani;
}receivesAFunction(karibuNyumbani() )


function returnsANamedFunction(){
  return receivesAFunction;
}returnsANamedFunction();



function returnsAnAnonymousFunction(){
  return function(){
    console.log("Kenya is great Country!")
    return "Kenya is great Country!"
  }
}returnsAnAnonymousFunction()()






//Lesson Begins here//
// function runFiveMiles() {
//   console.log("Go for a five-mile run");
// }
// function liftWeights() {
//   console.log("Pump iron");
// }

// function swimFortyLaps() {
//   console.log("Swim 40 laps");
// }

// // function Monday() {
// //   exerciseRoutine(liftWeights);
// // }Monday()

// function exerciseRoutine(postRunActivity) {
//   runFiveMiles();
//   postRunActivity();
// }
// // function Monday() {
// //   runFiveMiles();
// //   liftWeights();

// // }
// // Monday()

// // function Tuesday() {
// //   // console.log("Go for a five-mile run");
// //   // console.log("Swim 40 laps");

// //   exerciseRoutine(swimFortyLaps)
// // }
// // Tuesday()

// // function Wednesday() {
// // //   console.log("Go for a five-mile run");
// // //   console.log("Go for a five-mile run");
// // exerciseRoutine(runFiveMiles)
// // }
// // Wednesday()

// // // function Thursday() {
// // //   console.log("Go for a five-mile run");
// // //   console.log("Pump iron");

// // // }
// // // Thursday()

// // function Friday() {
// // //   console.log("Go for a five-mile run");
// // //   console.log("Swim 40 laps");
// //   exerciseRoutine(() => console.log("Stretch! Work that Core!"));
// // }
// // Friday()

// function morningRoutine(exercise) {
//   let breakfast;

//   if (exercise === liftWeights) {
//     breakfast = "protein bar";
//   } else if (exercise === swimFortyLaps) {
//     breakfast = "kale smoothie";
//   } else {
//     breakfast = "granola";
//   }

//   exerciseRoutine(exercise);
//   return function () {
//     console.log(`Nom nom nom, this ${breakfast} is delicious!`);
//   };
// }
// const afterExercise = morningRoutine(liftWeights)
// afterExercise();
