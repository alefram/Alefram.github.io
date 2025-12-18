---
title: "Using a local php package in your projects"
date: '2023-02-06'
description: "I discuss my experience with learning how to create PHP packages and my concerns about testing packages locally and contributing to open source packages."
keywords: 'Laravel, PHP'
category: 'Software Engineering'
---


When I first started learning how to create packages in PHP, I often wondered how
I could test my packages locally, or even how I could install an open-source
package to examine it and potentially contribute to it. In the past, every time
I used a PHP package, I used the `composer require` command. But now, I will
show you how to install your packages locally and test them.


In a PHP project, there is an important file called **"composer.json."** This is a
JSON file that is used by the Composer package manager to manage the dependencies
of your project, install the necessary packages and libraries, and specify project
properties and metadata. In this file, we specify the path of our package to
install into the project by defining the **"repositories"** key.


```json
{

    //Another keys....

    "repositories": [
        {
            "type": "path",
            "url": "../<My_Package_path>/my-package"
        }
    ]
}
```
In the "repositories" key, you define the path of your package, as shown in the
example. In the "url" key, you specify the path of your package located on your
computer.

In case you have multiple packages in the same directory, you can use a wildcard
instead, like this:

```json
{

	//Another keys....

    "repositories": [
        {
            "type": "path",
            "url": "../<My_Packages_path>/*"
        }
    ]
}
```
Once you have set this up, you can run the `composer require` command to add your
package to the vendor folder in your PHP project as a symbolic link (if possible).

```bash
composer require me/my-package
```
By installing it this way, we ensure that our package meets all the required
dependencies and runs properly, instead of just adding our source code directly
to the vendor folder in the PHP project.

If you prefer a "mirror" copy instead, you can set the `symlink` option to "false."

```json
{

	//Another keys....

    "repositories": [
        {
            "type": "path",
            "url": "../<My_Package_path>/my-package",
            "options": {
                "symlink": false
            }
        }
    ]
}
```
Another way to install it is to add your package to the "require" key, like this:

```json
{
		//...
		"require": {
				//...
				"me/my-package": "dev-main"
        }
}
```
Once you have done this, simply run the `composer update` command and check if
your package has been installed correctly.

```php
> @php artisan package:discover --ansi

   INFO  Discovering packages.

  akaunting/laravel-money .............................................. DONE
  blade-ui-kit/blade-heroicons ......................................... DONE
  blade-ui-kit/blade-icons ............................................. DONE
  laravel/sanctum ...................................................... DONE
  laravel/slack-notification-channel ................................... DONE
  laravel/tinker ....................................................... DONE
  livewire/livewire .................................................... DONE
  nesbot/carbon ........................................................ DONE
  nunomaduro/collision ................................................. DONE
  nunomaduro/termwind .................................................. DONE
  ryangjchandler/blade-capture-directive ............................... DONE
  spatie/laravel-ignition .............................................. DONE
  me/my-package ........................................................ DONE
```
💡 **Important:** Remember to run `composer update` if you make changes to the
`composer.json` file in your package or any provider it registers.

And that's it! You can now add your packages for testing in your PHP projects.
Go ahead and give it a try!✨

