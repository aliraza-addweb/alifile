<?php
$arr = array("one","two","three");
function f1($arr)
{
    $arr = array("bike\t","innova\t","car\t");
    echo $arr[0].$arr[1].$arr[2];
}
f1($arr);
?>