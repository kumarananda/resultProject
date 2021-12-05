




/**student.map((data) => {
    console.log(data);
});**/

student.map((data) => {
    console.log(data);
});
console.log(`----devider----`);
student.map((data, index ) => {
    console.log(index + `. ` + data.name);
});
console.log(`----devider----`);
student.map((data, index ) => {
    console.log((index + 1) + `. ` + data.name);
});
console.log(`----devider----`);


let res = new Result;

student.map((data, index ) => {
    console.log(`
    
    ID              : ${data.id}
    Name            : ${data.name}
    Age             : ${data.age}
    Location        : ${data.location}
    Gender          : ${data.gender}
    
    Subject         Marks    GPA     Grade
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Bangla          ${data.bn}       ${res.resust(data.bn).gpa1}          ${res.resust(data.bn).grade1}
    English         ${data.en}       ${res.resust(data.en).gpa1}          ${res.resust(data.en).grade1}
    Math            ${data.math}       ${res.resust(data.math).gpa1}          ${res.resust(data.math).grade1}
    Science         ${data.s}       ${res.resust(data.s).gpa1}        ${res.resust(data.s).grade1}
    Social Science  ${data.ss}       ${res.resust(data.ss).gpa1}          ${res.resust(data.ss).grade1}
    Relegion        ${data.rel}       ${res.resust(data.rel).gpa1}          ${res.resust(data.rel).grade1}
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Total CGPA =   ${(res.finalResult(data.bn,data.en,data.math,data.s, data.ss, data.rel).finalcgpa).toFixed(2)}     Final Grade = ${res.finalResult(data.bn,data.en,data.math,data.s, data.ss, data.rel).finalgrade}
    
    `);
});
// student.map((data, index ) => {
//     console.log(`
    
//     ID              : ${data.id}
//     Name            : ${data.name}
//     Age             : ${data.age}
//     Location        : ${data.location}
//     Gender          : ${data.gender}
    
//     Subject         Marks    GPA     Grade
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//     Bangla          ${data.bn}       ${res.resust(data.bn).gpa1}          ${res.resust(data.bn).grade1}
//     English         ${data.en}       ${res.resust(data.en).gpa1}          ${res.resust(data.en).grade1}
//     Math            ${data.math}       ${res.resust(data.math).gpa1}          ${res.resust(data.math).grade1}
//     Science         ${data.s}       ${res.resust(data.s).gpa1}        ${res.resust(data.s).grade1}
//     Social Science  ${data.ss}       ${res.resust(data.ss).gpa1}          ${res.resust(data.ss).grade1}
//     Relegion        ${data.rel}       ${res.resust(data.rel).gpa1}          ${res.resust(data.rel).grade1}
//     When Array 
//     return  ${data.rel}       ${res.resust(data.rel)[0]}        ${res.resust(data.rel)[1]}
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//     Total CGPA =   ${(res.finalResult(data.bn,data.en,data.math,data.s, data.ss, data.rel).finalcgpa).toFixed(2)}     Final Grade = ${res.finalResult(data.bn,data.en,data.math,data.s, data.ss, data.rel).finalgrade}
    
//     `);
// });



