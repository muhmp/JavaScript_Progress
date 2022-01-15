
/**
 * Apply Functional Programming to Convert Strings to URL Slugs
 */

// Only change code below this line

//gloval variable
const varTitle = "Winter is Coming"

function urlSlug(title) {
  return title.toLowerCase().trim().split(/\s+/).join("-")

}
// Only change code above this line
console.log(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone"));