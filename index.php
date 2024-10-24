<?php

require __DIR__.'/vendor/autoload.php';

use Cowsayphp\Farm;
use Cowsayphp\Farm\Cow;


$cow = Farm::create( Cow::class );
echo '<pre>'.$cow->say( "Hello Composer World !" ).'</pre>';
