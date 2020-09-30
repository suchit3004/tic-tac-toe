function Newgame()
{
var a;
for ( a = 1; a <= 9; a++ )
{
document.getElementById(a).value = "";
char = "X";
won = 1;

}
}


var won = 1;

var char = "X";

function c1() {
if (document.getElementById('1').value == "")
{
document.getElementById('1').value = char;
check();
}
checkwin();
}

function c2() {
if (document.getElementById('2').value == "")
{
document.getElementById('2').value = char;
check();
}
checkwin();
}

function c3() {
if (document.getElementById('3').value == "")
{
document.getElementById('3').value = char;
check();
}
}

function c4() {
if (document.getElementById('4').value == "")
{
document.getElementById('4').value = char;
check();
}
checkwin();
}

function c5() {
if (document.getElementById('5').value == "")
{
document.getElementById('5').value = char;
check();
}
checkwin();
}

function c6() {
if (document.getElementById('6').value == "")
{
document.getElementById('6').value = char;
check();
}
checkwin();
}

function c7() {
if (document.getElementById('7').value == "")
{
document.getElementById('7').value = char;
check();
}
checkwin();
}

function c8() {
if (document.getElementById('8').value == "")
{
document.getElementById('8').value = char;
check();
}
checkwin();
}

function c9() {
if (document.getElementById('9').value == "")
{
document.getElementById('9').value = char;
check();
}
checkwin();
}


function check() 
{
checkwin();
if (char == "X")
  {
char = "O";
document.getElementById('Player up next').value = "\'O\' up next";
  }
else
{
if (char == "O")
  {
char = "X";
document.getElementById('Player up next').value = "\'X\' up next";
  }
}
}

function checkwin() {

if ( won == 1 )

{

if ( document.getElementById('1').value == char && document.getElementById('2').value == char && document.getElementById('3').value == char )
{alert (char + " wins!"); won = 2;}

if ( document.getElementById('4').value == char && document.getElementById('5').value == char && document.getElementById('6').value == char )
{alert (char + " wins!"); won = 2;}

if ( document.getElementById('7').value == char && document.getElementById('8').value == char && document.getElementById('9').value == char )
{alert (char + " wins!"); won = 2;}

if ( document.getElementById('1').value == char && document.getElementById('4').value == char && document.getElementById('7').value == char )
{alert (char + " wins!"); won = 2;}

if ( document.getElementById('2').value == char && document.getElementById('5').value == char && document.getElementById('8').value == char )
{alert (char + " wins!"); won = 2;}

if ( document.getElementById('3').value == char && document.getElementById('6').value == char && document.getElementById('9').value == char )
{alert (char + " wins!"); won = 2;}

if ( document.getElementById('1').value == char && document.getElementById('5').value == char && document.getElementById('9').value == char )
{alert (char + " wins!"); won = 2;}

if ( document.getElementById('3').value == char && document.getElementById('5').value == char && document.getElementById('7').value == char )
{
alert (char + " wins!");
won = 2;
}

if ( won == 2 )
{
Newgame();
}

}
}


