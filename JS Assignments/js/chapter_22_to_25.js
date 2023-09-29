var sameWords = "captain";
var sliced = sameWords.slice(1, 3);
console.log(sliced);

var myString = "Hello, World!";
var numberOfCharacters = myString.length;
console.log(numberOfCharacters);

var animal = "elephant";
var seg = animal.slice(1, 5);
console.log(seg);

var myString = "This is a sample string";
var lengthOfString = myString.length;
console.log(lengthOfString);

var originalString = "Hello, World!";
var characterCount = originalString.length;
var slicedString = originalString.slice(1, characterCount - 3);
console.log(slicedString);

var text = "To go or not to go.";
var indx = text.lastIndexOf("go");
console.log(indx);

var strarray=["A","B","C"];
indexNum=0;
if (myString[indexNum]) {
    console.log(true);
  }else{
    console.log(false);
  }
  
var sampleString = "abcde";
var characterAtIndex2 = sampleString.charAt(2);
console.log(characterAtIndex2);

var text = "This is a long text with many characters.";
var cha = text.charAt(9);
console.log(cha);

var str = "This is a sample string";
var x = str.charAt(str.length - 1);
console.log(x);

var input = "This is some input.";
var cha2 = input.charAt(4);
console.log(cha2);

var strArray=["Tiara","Crown","Bracelet"];
if (myString.charAt(2) === 'a') {
    console.log(true);
  }else{
    console.log(false);
  }
  
var str2 = "Hello, World!";
var characterArray = [];
for (var i = 0; i < str2.length; i++) {
    characterArray.push(str2.charAt(i));
    console.log(characterArray);
  }

var text2 = "To be or not to be.";
var indx2 = text2.indexOf("be");
console.log(indx2);

var text3 = "To be or not to be.";
var indx3 = text3.lastIndexOf("be");
console.log(indx3);

var reply = "no, I said no, not yes!";
var revisedReply = reply.replace("no", "yes");
console.log(revisedReply);

var ogStr = "There is 1 apple on the tree.";
var newStr = ogStr.replace("1", "one");
console.log(newStr);

var a = "aaaabbbb";
var b = a.replace(/a/g, "z");// This will replace all 'a' characters with 'z'
console.log(b);
