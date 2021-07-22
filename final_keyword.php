<?php
class base
{
    final function data()
    {
        echo "base class";
    }
    function nonfinal()
    {
        echo "\nfinal function of base class";
    }
}
class  Derived extends base
{
    function nonfinal()
    {
        echo "\nDeried class non final function";
    }
}
$d = new Derived();
$d->data();
$d->nonfinal();
?>
