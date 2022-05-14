/*
Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

Numerical Score	Letter Grade
90 <= score <= 100	'A'
80 <= score < 90	'B'
70 <= score < 80	'C'
60 <= score < 70	'D'
0 <= score < 60	'F'
Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.
*/

function getGrade (s1, s2, s3) {
    let sum = s1 + s2 + s3
    let mean = sum / 3
    console.log(sum)
    console.log(mean)
    switch (true) {
        case (mean >= 90):
          return  'A';
          break;
        case (mean >= 80):
          return 'B';
          break;
        case (mean >= 70):
          return 'C';
          break;
        case (mean >= 60):
          return 'D';
          break;
        default:
          return 'F';
    }
}