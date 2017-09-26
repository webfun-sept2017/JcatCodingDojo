var students = [
  {first_name: "Michael", last_Name: "Jordan"},
  {first_name: "John",  last_Name: "Rosales"},
  {first_name: "Mark", last_Name:"Guillen"},
  {first_name: "KB",  last_name:"Tonel"}
]


// for an array of objects. The index of the objects can be call like: students[0].first_name or students[2].last_Name
// But I couldn't find any information regarding to the objects array Range.

students.forEach(
   function(elem) {
     console.log(elem)
   });


students.forEach(
    function(indexOf){
       console.log(indexOf)
     });


students.forEach(
     function(first_name, last_Name)
         {console.log(first_name, last_Name)});

students.forEach(
   function(elem, index){
     console.log(index + ' . ' + elem)
   }
)

students.forEach(
    function (elem, index) {
       console.log(index + " . " + elem)})

// this was wrote by JC CodingDojo --

       for (var i in students) {console.log(i + "  " + students[i].first_name + " - " + students[i].last_Name)}
       VM584:1 0  Michael - Jordan
       VM584:1 1  John - Rosales
       VM584:1 2  Mark - Guillen
       VM584:1 3  KB - undefined


// CodingDojo - solutions helped me to determine the students[i].firstname - students[i].last_Name

var users = {
   'Students': [
       {first_name:  'Michael', last_name : 'Jordan'},
       {first_name : 'John', last_name : 'Rosales'},
       {first_name : 'Mark', last_name : 'Guillen'},
       {first_name : 'KB', last_name : 'Tonel'}
    ],
   'Instructors': [
       {first_name : 'Michael', last_name : 'Choi'},
       {first_name : 'Martin', last_name : 'Puryear'}
    ]
   }
  function printThings(){
    for (var group in users) {
      console.log(group)
      for (var i = 0; i < users[group].length; i++) { //users["students"] -> users.students
        var fullname = users[group][i].first_name + users[group].last_name
        console.log(`${i} - ${users[group][i].first_name} ${users[group][i].last_name} - ${fullname.length}`)
      }
    }
  }
  printThings();
