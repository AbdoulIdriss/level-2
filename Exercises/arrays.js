//Simple array exercises

var studentScoreInExam = [ 10, 17, 13, 17, 18, 19, 20];

//coefficient of Exam = 5
//Highest mark = 100

//Find the actual score of each student
//Find the average score of the class
//Find the student index with the highest score
var coefficient = 5;
var higestMarks = 100;

for (var index = 0; index < studentScoreInExam.length; index++) 
 {
    var actualScore = studentScoreInExam[index] * coefficient; //courses[0]
    console.log('The actual score is', actualScore);
    
 }

 //Average score

 var averageScore = 0;

 function averageScoreCalculator(array) {
    var sumTotal = 0;
    for (var index = 0; index < array.length; index++) {
        sumTotal += array[index];
    }
    return sumTotal / array.length;
 }
 averageScore = averageScoreCalculator(studentScoreInExam);
 console.log('average score is ', averageScore);

//  3)how to get the largest number in an array

    // var highestScore = Math.max.apply(Math, studentScoreInExam);
     var highestScore = 0;
     var highestScoreIndex = 0;

    for(var index = 0; index < studentScoreInExam.length; index++) 
   {
      if(studentScoreInExam[index] > highestScore) 
      {
         highestScore = studentScoreInExam[index];
         highestScoreIndex = index;
      }

   }
    console.log(highestScoreIndex);