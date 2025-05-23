const  mySym = Symbol("key1")

const jsUser= {
    name :"vaibhav",
    age : 27,
    city : "bareilly ",
    isLoggedIn:  true,
    email: "vs84303@gmail.com",
    lastloginDays: ["monday", "saturday"],
    "full name" : "vaibhav singh",
    [mySym] : "mykey1"
}

// console.log(jsUser.city)
// console.log(jsUser["age"])
// console.log(jsUser["full name"])
// console.log(jsUser.mySym);
// console.log(typeof jsUser.mySym);
// console.log(jsUser[mySym]);
// console.log(typeof jsUser[mySym]);
// console.log(jsUser);
// console.log(typeof jsUser);


// jsUser.greetings = function() {

//     console.log("Hello user")
// }

// console.log(jsUser.greetings())

// jsUser.name= function() {
//     console.log(`Hello js User ${this.name}`)
// }

// console.log(jsUser.name())

const tinderUser = new Object() 
  
tinderUser.id = "123abc";
tinderUser.name= "vaibhav"
tinderUser.isLoggedIn = 1

// console.log(tinderUser)


// const regularUser = new Object() 

// regularUser.email= "vaiv@gmail.com"
// regularUser.fullname= {
//     username : {
//         firstname : "vaibhav",
//         lastname : "singh"
//     }
// }
//  console.log(regularUser.fullname.username.lastname) b

  const ob1= { a : 1, b : 2}
  const ob2= { c : 3, d : 4}

//   const ob3 = Object.assign({ }, ob1, ob2)
//   console.log(ob3)

// const ob3 = { ...ob1, ...ob2}
// console.log(ob3)

// console.log(tinderUser)

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))

const course = {
    coursename : "js"
}