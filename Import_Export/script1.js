var1 = 12;
var2 = 85;

// module.exports = var1;  for single variable
module.exports = {first: var1, second: var2};
// first and second works as variable which is also get print like this-> {first: var1, second: var2}
// if we dont use these first and second then original variale name-> {first: var1, second: var2}