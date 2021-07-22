<?php
function swap(&$a,&$b,$str,$str1)
{
    $c=$a;
    $a=$b;
    $b=$c;
    $str ="this call by refernce";
    $str1 ="call by value";
}
$b1=5;
$b2=15;
$str="\nThis is";
$str1="\nHello";
echo "the two values are:-".$b1."".$b2;
swap($b1,$b2,$str,$str);
echo $str;
echo $str1;
echo "\nthe two values are:-".$b1."".$b2;
?>