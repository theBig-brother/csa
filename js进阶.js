const person = {
    name: 'csa',
    age: 1000000,
    address: {
    city: 'ChongQing',
    area: 'NanShan'
    },
    title: ['student',{year:2021, title:'GoodStudent'}]
   }
   //你的代码
   const { name, age:year, address: { city, area: mountain },title:[title1,{title:title2}]} = person;
   title3='God'
   console.log(name) // csa
   console.log(year) // 1000000 这里没有写错哈，就是要输出 1000000，结合课件
   console.log(city) // ChongQing 
   console.log(mountain) // NanShan //这里没有写错，就是要输出 NanShan，结合课件
   console.log(title1) // student
   console.log(title2) // GoodStudent
   console.log(title3) // God 结合课件