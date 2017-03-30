/*
Exercise #1
Create a for loop that prints out the numbers 1 to 100 in the console.
*/
var nums = new Array(100);
for (var i = 0; i < nums.length; i++)
{

console.log(i+1);

}

/*
Exercise #2
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
*/

var hashtag = ("");

for (var i = 0; i < 7; i++) 
{
hashtag = hashtag + '#';
console.log(hashtag);
}
