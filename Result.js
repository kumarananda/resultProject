function Result(){

    this.resust = function(marks){

        // let gpa;
        // let grade;

        if(marks >= 0 && marks < 33){
            gpa = 0;
            grade = `F`;
        }else if(marks >= 33 && marks < 40){
            gpa = 1;
            grade = `D`;
        }else if(marks >= 40 && marks < 50){
            gpa = 2;
            grade = `C`;
        }else if(marks >= 50 && marks < 60){
            gpa = 3;
            grade = `B`;
        }else if(marks >= 60 && marks < 70){
            gpa = 3.5;
            grade = `A-`;
        }else if(marks >= 70 && marks < 80){
            gpa = 4;
            grade = `A`;
        }else if(marks >= 80 && marks <= 100){
            gpa = 5;
            grade = `A+`;
        }else{
            gpa = `Invalid`;
            grade = `Invalid`;
        }
        return {
            gpa1 : gpa,
            grade1 :grade

        };
        //return [gpa = gpa, grade = grade];
    }

    this.finalResult = function (bn, en, math, s, ss, rel) {
        let cgpa;
        let finalgrade;
        
        let totalGpa = this.resust(bn).gpa1 + this.resust(en).gpa1 + this.resust(math).gpa1 + this.resust(s).gpa1 +  this.resust(ss).gpa1 + this.resust(rel).gpa1 ;
        cgpa = totalGpa/6;

        if(bn < 33 || en < 33 || math < 33 || s < 33 || ss < 33 || rel < 33 ){
            finalgrade = `F`;
        }else if(cgpa >= 0 && cgpa < 1 ){
            finalgrade = `F`;
        }else if(cgpa >= 1 && cgpa < 2 ){
            finalgrade = `D`;
        }else if(cgpa >= 2 && cgpa < 3 ){
            finalgrade = `C`;
        }else if(cgpa >= 3 && cgpa < 3.5 ){
            finalgrade = `B`;
        }else if(cgpa >= 3.5 && cgpa < 4 ){
            finalgrade = `A-`;
        }else if(cgpa >= 4 && cgpa < 5 ){
            finalgrade = `A`;
        }else if(cgpa <= 5 ){
            finalgrade = `A+`;
        }

        return {
            finalcgpa : cgpa,
            finalgrade : finalgrade

        }

    }


}  