var numbers = [20,43,56,74];

function count(){
  var sum,average;
  sum = numbers[0] + numbers[1] + numbers[2] + numbers[3];
  average = sum/numbers.length;
  console.log(average)
}
function setup() 
{
  createCanvas(400,400);

  count();
}

function draw() 
{
background(51);

}

