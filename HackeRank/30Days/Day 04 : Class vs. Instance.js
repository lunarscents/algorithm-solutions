function Person(initialAge){
  // Add some more code to run some checks on initialAge
  (initialAge <= 0) && (console.log('Age is not valid, setting age to 0.'));
  this.age = (initialAge <= 0) ? 0 : initialAge;
  
  this.amIOld=function(){
   // Do some computations in here and print out the correct statement to the console
      let age = this.age;
      let result = '';

      console.log(`You are ${(age >= 13 && age < 18) ? 'a teenager.' : ((age < 13) ? 'young.' : 'old.')}`);
  };
  
  this.yearPasses=function(){
          // Increment the age of the person in here
       return this.age++;
  };
}
