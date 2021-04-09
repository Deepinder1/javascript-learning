let arrOfExercises = [
  ["Bench press-widegrip Barbell", { kgs: [5], reps: [5], time: [] }],
  ["Squats", { kgs: [5], reps: [5], time: [] }],
  ["Bench press-widegrip Barbell", { kgs: [10], reps: [15], time: [] }],
  ["Aerobics", { kgs: [5], reps: [5], time: [] }],
];

let tempArrOfExercisesNames = [];
let duplicateIndex;

arrOfExercises.map((exercise) => {
  tempArrOfExercisesNames.push(exercise[0]);
});

getDuplicate(tempArrOfExercisesNames);
console.log(duplicateIndex)

arrOfExercises.splice(duplicateIndex, 1)
console.log(arrOfExercises);

function getDuplicate(arr) {
  var inputArray = arr;
  var encounteredIndices = {};

  for (var i = 0; i < inputArray.length; i++)
    if (encounteredIndices[inputArray[i]]) {
      duplicateIndex = i;
    }
    // Or add to some array if you wish
    else encounteredIndices[inputArray[i]] = 1;
}
