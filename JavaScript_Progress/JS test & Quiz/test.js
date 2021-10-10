let calc2 = (z) => z * 10;

let calc1 = (x,y) => {
  return (x * y) + calc2(x);
};

console.log(calc1(2,3));




//"Jane Doe has a staff of 5"
 class Employee {
      constructor(fn,ln) {
         this.fn = fn;
         this.ln = ln;
        }
    
        getFullName() {
         return this.fn + ' ' + this.ln;
        }
     } 
     
     class Manager extends Employee {
       constructor(fn, ln, staff) {
        this.staff = staff;
       }
    
       displayInfo() {
         console.log(this.getFullName() + ' has a staff of ' + this.staff); 
       }
     }
     var mgr = new Manager('Jane','Doe',5);
     mgr.displayInfo();