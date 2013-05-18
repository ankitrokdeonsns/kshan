Kshan.js
========

This is an attempt to represent datetime in various timezones and not be dependant upon your browser's timezone.
Given standard constructor parameters for javascript date object and a timezone name Kshan object will represent the given datetimein that timezone.

>e.g.
>var kshan = Kshan(0, 'Asia/Kolkata')
>kshan object represents Jan 1, 1970 05:30am India Standard Time

The timezone information is gathered from Wikipedia, Olson timezone database files and (http://home.tiscali.nl/~t876506/TZworld.html#top)

The goal is to support as many timezones as possible with emphasis on DST rules of recent past (preferably since Jan 1, 1970), present and future.

Kshan means moment in Marathi language. 
