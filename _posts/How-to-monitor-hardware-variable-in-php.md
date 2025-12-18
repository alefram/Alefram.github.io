---
title: "How to monitor hardware variables in PHP"
date: '2023-05-08'
description: "How to monitor hardware variables like cpu load, memory usage, disk usage and disk total with PHP."
keywords: 'PHP, hardware, Laravel'
category: 'Software Engineering'
---

In my previous job, we released the MoonGuard Filament Plugin, a PHP package 
for monitoring Laravel applications in the cloud. We had been searching for 
new features to enhance the experience of supporting and monitoring these 
applications. One of the challenges we encountered was the ability to monitor 
server hardware variables, such as CPU and RAM usage, as well as disk storage 
space. These variables provide crucial information about our servers, allowing 
us to optimize our applications and prevent critical failures. Therefore, we 
conducted research on how to monitor these variables using PHP.


## Cpu Load

In PHP, there is a function called `sys_getloadavg()` which is used to obtain
the average system load. It returns three samples that represent the average
system load over the last 1, 5, and 15 minutes, respectively. This function is
useful for monitoring system performance. It is important to note that this
function only works on Unix systems such as Linux and MacOS. Therefore, it is
not available on Windows platforms. You can refer to the official PHP
[documentation](https://www.php.net/manual/es/function.sys-getloadavg.php) for
more information on how to use this function.

With this function, we can create a method that retrieves the three data values
in percentage and stores them in an array to use them.

```php
<?php

public function getCpuLoadUsage(): float
{
  try {
    $result = false;

    if (function_exists('sys_getloadavg')) {
      $result = sys_getloadavg();
    }

    $result = array_map(fn ($n) => round($n * 100), $result);

    return $result;
  } catch(Throwable $e) {
      //handle exception
  }
}
```

## Memory

To obtain the percentage of used memory, we found a method in the
[stethoscope](https://github.com/MohsenAbrishami/stethoscope) package that
makes use of Unix system commands, such as the `free` command, which displays
the amount of free and used memory in the system.

To use this command in PHP, we can use the
[`shell_exec`](https://www.php.net/manual/es/function.shell-exec.php)
function, which allows us to execute commands in the terminal and save their
output in a PHP variable. This way, we can create a method that executes the
'free' command and use the `grep Mem` command to filter the output and display
only the line that contains the word 'Mem', which has the amount of RAM memory
in the system.

To obtain the percentage, we will use `awk’{print$3/$2 * 100}’`, this will give
us the field that contains the amount of used RAM, we divide it by the total
amount of RAM and by multiplying by 100 we will get the percentage value.

```php
<?php

public function getMemoryUsage(): float
{
  try {
    if (function_exists('exec')) {
      $memory = shell_exec(" free | grep Mem | awk '{print $3/$2 * 100}' ");
      $result = round((float) $memory);
    }

    return $result;
  } catch(Throwable $e) {
    //handle exception
  }
}
```

## Space Disk

To obtain the disk space, we can use the PHP `functions disk_free_space` and
`disk_total_space`, which allow us to get the available and total space of the
directory passed to your Linux server as a parameter. This way, we can create a
method that indicates both the total space of the disk and the available space
in the following way.

```php
<?php

public function getDiskUsage(): array
{
  try {
    $freeSpace = false;
    $totalSpace = false;

    if (function_exists('disk_free_space') && function_exists('disk_total_space')) {
      $freeSpace = round((disk_free_space('/') / pow(1024, 3)), 1);
      $totalSpace = round((disk_total_space('/') / pow(1024, 3)), 1);
    }

    $result = [
      'freeSpace' => $freeSpace,
      'totalSpace' => $totalSpace,
    ];

    return $result;
  } catch (Throwable $e) {
    //handle exception
  }
}
```

We use the function `pow(1024, 3)` to obtain the value in gigabytes, which makes
it more efficient.

Having these methods, you can use them in your Laravel or PHP project. I hope
they are useful to you.

