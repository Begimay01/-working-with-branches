//задание 1
function sumOfNegatives(arr){
    let sumNegativeNum = arr.filter(item => item < 0).reduce((sum, item) => sum + item, 0)
    return sumNegativeNum
}
console.log(sumOfNegatives([1, 2, -3, 0, -4, 9, -45]))
// задание 2
const it_department_employees = [
    {
    name: 'Roman',
    salary: 1200
    },
    {
    name: 'Aijan',
    salary: 2000
    },
    {
    name: 'Asel',
    salary: 8000
    },
    {
    name: 'Timur',
    salary: 2100
    },
   {
   name: 'Altynai',
   salary: 100
   }
    ]
    let average =  it_department_employees.reduce((sum, item) => sum + item.salary, 0) / it_department_employees.length
    console.log(average)
   
