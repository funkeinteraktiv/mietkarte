# mietkarte

Source code of our [Berlin rents map](http://morgenpost.de/mietkarte).
This repository does not contain real data, but **random data** for coloring the polygons.

![Berlin rents map](http://interaktiv.morgenpost.de/mietkarte-berlin/img/thumb_mietkarte.jpg)



## Installation
You need [bower](http://bower.io) in order to install the dependencies.

```shell

$ bower install 

```

## Start
Start a webserver in the **app folder**. For example:

For python3 
```shell

$ python -m http.server 1337
```

For older versions of python
```shell

$ python -m SimpleHTTPServer 1337
```

visit `http://localhost:1337`


## Development

##### Map
The map is based on [Leaflet](http://leafletjs.com). Moreover we use [topojson.js](https://github.com/mbostock/topojson) and this [codesnippet](https://gist.github.com/rclark/5779673) in order to enable TopoJSON support for Leaflet.

##### Data
We have two files that contain data we use in our application

* `data/berlin-zipcodes-data.topojson` This file contains the geodata and the data (id,name,district,randomRent) we use in our tooltips
* `data/labels.json` This file contains the labels we display on our map

##### UI/General
We use this libraries for our UI

* [jQuery](http://jquery.com)
* [noUiSlider](http://refreshless.com/nouislider/)


### Contributors
* [Moritz Klack](http://github.com/moklick)
* [Julius Tröger](http://twitter.com/juliustroeger)


### Inspiration 
[London’s renting crisis](http://www.ft.com/intl/cms/s/2/ad4ef6a4-503d-11e3-befe-00144feabdc0.html)


### License

The MIT License (MIT)

Copyright (c) [2014] [Berliner Morgenpost]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
