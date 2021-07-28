<?php
$arr = array("10","20","30");
function f1($arr = [1,1,1])
{
    echo count ($arr);
    //$arr = array("bike\t","innova\t","car\t");
    echo $arr[0].$arr[1].$arr[2];
}
f1($arr);
?>