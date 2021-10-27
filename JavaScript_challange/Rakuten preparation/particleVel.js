/**
 * Particle velocity
 * 
 */

// const readline = require('readline');

/**
 function particleVelocity(particles) {
     // WRITE YOUR BRILLIANT CODE HERE
     let total_periods = 0;
     const particles_size = particles.length;
     for (let i = 0; i < particles_size; i++) {
         for (let count = 0; i + 2 < particles_size && particles[i + 1] - particles[i] === particles[i + 2] - particles[i + 1]; i++) {
             count++;
             total_periods += count;
         }
     }
     return total_periods < 1000000000 ? total_periods : -1;
 }
 console.log(particleVelocity([-1,1,3,3,3,2,3,2,1,0]));
  */

 /**
 const rl = readline.createInterface(process.stdin);
 rl.on('line', (input) => {
     rl.close();
     const particles = input.split(' ').map(x => parseInt(x, 10));
     console.log(particleVelocity(particles));
 });
  */



 /**
  * Particle velocity
  * Define:
  *     Measure a single particle in N equally distributed moemnts of time
  *     K is recorded in array as particles as particles[K]
  *     
  * Question:
  *     count all the periods of time when the movement of the particlse was stable
  *     
  */

 /**
 function solution(N){ // particle
    //define velocity
    let arrN = [];
    const parArr = N.length; //define the length of the 
    
    for(let i = 0 ; i<=arrN;i++){ //for every array of particle example [-1,0,1,3,...]
        console.log(arrN[i]);

    }
    return arrN;

 }
 console.log(solution([-1,1,3,3,3,2,3,2,1,0]));
  */


 /**
  * print normal array
  */
 function normalArr(arr){
     //define
     let num = [];
     for(let i = 0 ; i< arr.length; i++){
         num += arr[i];
     }
     return num;
 }
 console.log(normalArr([2,3,4,1,4]));