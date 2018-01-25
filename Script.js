function calculateCurrentGrade(){
    var hw = convertStringToArray(document.getElementById("HomeworkGrades").value);
    var hwArrNum = convertArrayStringToNumber(hw);
    var hwAverageArray = averageArray(hwArrNum);
    var hwWeighted = hwAverageArray * (document.getElementById("homeworkWeight").value / 100);
    colorCoding("Homework", hwAverageArray);

    var classwork = convertStringToArray(document.getElementById("classworkGrades").value);
    var classworkArrNum = convertArrayStringToNumber(classwork);
    var classworkAverageArray = averageArray(classworkArrNum);
    var classworkWeighted = classworkAverageArray * (document.getElementById("classworkWeight").value / 100);
    colorCoding("Classwork", classworkAverageArray);

    var tests = convertStringToArray(document.getElementById("TestGrades").value);
    var testArrNum = convertArrayStringToNumber(tests);
    var testAverageArray = averageArray(testArrNum);
    var testWeighted = testAverageArray * (document.getElementById("testWeight").value / 100);
    colorCoding("Tests", testAverageArray);

    var midterm = convertStringToArray(document.getElementById("MidtermGrade").value);
    var midtermArrNum = convertArrayStringToNumber(midterm);
    var midtermWeighted = midtermArrNum * (document.getElementById("MidtermWeight").value / 100);
    colorCoding("Midterm", midtermArrNum);

    var finalWeight = parseInt(document.getElementById("finalWeight").value);

    grade = ((midtermWeighted + testWeighted + classworkWeighted + hwWeighted) / (100 - finalWeight)) * 100;
    document.getElementById("currentGrade").innerHTML = (grade) + "%";
    return grade;
}
function convertStringToArray(str){
      arr = str.split(",");
      return arr;
}
function convertArrayStringToNumber(arr){
    for (var i = 0; i < arr.length; i++) {
        arr[i] = parseInt(arr[i]);
        if (arr[i] > 150) {
            document.getElementById("failure").innerHTML =  "Hey! One or more of your grades seem a little high..." +
                " you should try again with different number(under 150).";
        }
    }
    return arr;
}
function averageArray(arr){
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    avg = sum / arr.length;
    return avg;
}
function colorCoding(row,arr) {
    if(arr <= 60) {
        document.getElementById(row).style.background = "red";
    }
    if(61 <= arr && arr < 70){
        document.getElementById(row).style.background = "orange";
    }
    if(70 <= arr && arr < 80){
        document.getElementById(row).style.background = "yellow";
    }
    if(80 <= arr && arr < 90){
        document.getElementById(row).style.background = "purple";
    }
    if(90 <= arr && arr <= 100){
        document.getElementById(row).style.background = "green";
    }
}
function calculateGradeNeeded(){
    var finalWeight = parseInt(document.getElementById("finalWeight").value);
    var finalDesired = parseInt(document.getElementById("Gradewanted").value);
    var currentWeight = 1 - (finalWeight/100);
    var weightedCurrent = grade * currentWeight;
    var finalGradeRequired = (finalDesired - weightedCurrent) / (finalWeight/100);
    document.getElementById("gradeNeeded").innerHTML = "You need a " + finalGradeRequired.toString().slice(0,5) + "% on your final to get a " + finalDesired
        + "% in this class. ";
}