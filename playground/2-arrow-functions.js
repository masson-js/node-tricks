// const square = function(x) {
//   return x * x
// }



// const square = (x) => x * x

// console.log(square(3))

// const obj = {
//   age: 36,
//   name: 'Vova',
//   all: function() {
//     console.log(this.name + ' was ' + this.age + ' old')
//   }
// }

const obj = {
  age: 36,
  name: 'Vova',
  all() {
    console.log(this.name + ' was ' + this.age + ' old')
  }
}
//  obj.all()

 const event = {
  name: 'Birthday Party',
  guestList: ['Adrew', 'Vova' , 'Vera'],
  printGuestList() {
    
    console.log('Guest list for ' + this.name)

    this.guestList.forEach((guest) => 
      console.log(guest + ' is attending ' + this.name)
    )
  }
 }

 event.printGuestList()


