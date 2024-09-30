// 1.take two strings with spaces at starting of one string and 
// at the ending of another string remove the spaces and 
// concat the both string and 
// convert the combined string into uppercase string

var str1=" shiva"
var str2="redddy "
var trim=str1.trimStart()
var trim2=str2.trimEnd()
console.log(trim.concat(trim2).toUpperCase());

// 2.Extract Middle Portion of the string and
//  get the last index of char of extracted string and
//  Convert the portion to Lowercase
 

var str="JAVASCRIPT"
var slice=str.slice(3,7)
var index=slice.indexOf('R')
console.log(index+" "+slice.toLowerCase());

// 3.take a single char and concat string to that char and 
// convert the resulted string to uppercase and 
// then extract the last second char 

var char='v'
var str3='kohli'
var result=char.concat(str3).toUpperCase()
console.log(result+" last second char: "+result.charAt(result.length-2));

// 4.we have 2 string and extract first 3 chars of first string and
//  extra last 3 chars of another string and concat those 2 results together
//  and first char and last char of the resulted concatinated string should as uppercase

var first='shiva'
var last='reddy'
console.log(first.charAt(0).toUpperCase()+first.slice(1,3)+last.slice(-3,-1)+last.charAt(4).toUpperCase());

// 5.You are given a string with extra spaces at the beginning and end.
//  You need to trim the string, make the first and last characters uppercase, 
//  extract a specific part of the string, 
//  concatenate it with another string

var newstr=' shivareddy '
var str4="prog"
var trimed=newstr.trim()
var upper=trimed.charAt(0).toUpperCase()+trimed.slice(1,5)+trimed.slice(5,9)+trimed.charAt(9).toUpperCase()
var extract=trimed.slice(0,5)+str4
console.log(upper+" "+extract);

//6."hello there , how are you " find the index of are word in the sentence

var sentence="hello there how are you"
var ind=sentence.split(" ")
console.log("index of are is : "+ind.indexOf('are'));
