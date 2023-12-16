let student = [
    {
        name: "NVA",
        age: 16,
        course: ["mindX 01", "mindX 02", "mindX 03"]
    },
    {
        name: "NVB",
        age: 18,
        course: ["mindX 01", "mindX 02", "mindX 04"]
    },
    {
        name: "NVC",
        age: 17,
        course: ["mindX 01", "mindX 03", "mindX 04"]
    },
    {
        name: "NVD",
        age: 15,
        course: ["mindX 01", "mindX 02", "mindX 03"]
    }
    ]
    
// function age(){
//     const input =  document.getElementById('input').value;
//     for(let i of student){
//         let names = i.name;
//         let ages = i.age; 
//         if(input == ages){
//             alert(names)
//         }
//         else{
//             console.log("không tìm thấy")
//         }
//     }
   
// }
//  function lop(){
//     const input =  document.getElementById('input').value;
//     for(let i of student){
//         let names = i.name;
//         let courses = i.course; 
//         if(input == courses){
//             alert(names)
//         }
//         else{
//             console.log("không tìm thấy")
//         }
//     }
//  }

let nhaptuoi = prompt("Độ tuổi cần tìm: ");
let nhaplop = prompt("Nhập lớp cần tìm");

let timtuoi = false;
let timlop = false;

for (let person of student) {
    if (person.age == parseInt(nhaptuoi)) {
        console.log(person.name)
        timtuoi = true;
    }

    if (person.course.includes(nhaplop)) {
        console.log(person.name)
        timlop = true;
    }
}
