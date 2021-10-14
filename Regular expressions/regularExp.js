/**
 * using test method
 */
 let myString = "Hello, World!";
 let myRegex = /Hello/;
 let result = myRegex.test(myString);// Change this line
 console.log(result); //check


 /**
  * Match literal strings
  */
  let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
  let waldoRegex = /Waldo/; // Change this line
  let result1 = waldoRegex.test(waldoIsHiding);

  /**
   * Match literal String with different possibilities
   */

   let petString = "James has a pet cat.";
   let petRegex = /dog|cat|bird|fish/; // Change this line
   let result2 = petRegex.test(petString);
   console.log(result1)


   /**
    * Ignore case while matching
    */
    let myString = "freeCodeCamp";
    let fccRegex = /freeCodeCamp/i; // Change this line
    let result = fccRegex.test(myString);

    /**
     * Extract matches
     */
     let extractStr = "Extract the word 'coding' from this string.";
     let codingRegex = /coding/; // Change this line
     let result = extractStr.match(codingRegex); // Change this line

     /**
      * Find more than first match
      */
      let twinkleStar = "Twinkle, twinkle, little star";
      let starRegex = /twinkle/gi; // Change this line
      let result = twinkleStar.match(starRegex); // Change this line

      /**
       * Match anything with wildcard
       */
       let exampleStr = "Let's have fun with regular expressions!";
       let unRegex = /.un/; // Change this line
       let result = unRegex.test(exampleStr);