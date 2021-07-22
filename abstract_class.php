<?php
abstract class base
{
    abstract function print();
}
class derived extends base
{
    function print()
    {
        echo "Derived class";
    }
}
$d = new derived();
$d->print();
?>