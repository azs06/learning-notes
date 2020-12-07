PHP `namespace`

namespace is virtual directory/folder for php, it helps us writing cleaner code and avoid
name collision.

use example.

```
<?php

namespace Acme;

class Foo
{
    public function hello()
    {
        echo "hello";
    }
}

?>


// use Foo class

<?php

$foo = new \Acme\Foo();
$foo->hello();

?>

Alternatively we can import namespace at the top of the file

<?php

use Acme;

$foo = new Food();

$foo->hello();

?>

```

Core php classes are stored on the global namespace, so if they are used inside user created namespace, they have to be used with their global namespace.

```
<?php

namespace Foo;

class Foo
{

    public function hello()
    {   
        // this will not work, as php will try to find DateTime inside the current namespace, so to // use the the global php class we have to access it using global namespace
        $dt = new DateTime();
        echo $dt->getTimestamp();

        // this will work

        $dt1 = new \DateTime();
        echo $dt1->getTimestamp();
    }
}
?>
```

Another solution for this is to import it at the top of the file

```
<?php

namespace Foo;
use DateTime;

class Foo
{

    public function hello()
    {   
        $dt = new DateTime();
        echo $dt->getTimestamp();
    }
}

?>
```

//https://symfonycasts.com/screencast/php-namespaces/namespaces