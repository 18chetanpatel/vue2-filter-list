# Vue2-filter-list &nbsp;
Prebuilt filters for Vue.js

## Table of contents:
- [Get Started](#get-started)
- [Contributing](#contributing)
- [Collection](#collection)
  - [after](#after)
  - [afterWhere](#afterwhere)
  - [before](#before)
  - [beforeWhere](#beforewhere)
  - [concat](#concat)
  - [filterBy](#filterby)
  - [find](#find)
  - [flatten](#flatten)
  - [fuzzy](#fuzzy)
  - [isEmpty](#isempty)
  - [join](#join)
  - [limitBy](#limitBy)
  - [orderBy](#orderBy)
  - [range](#range)
  - [removeWith](#removewith)
  - [reverse](#reverse)
  - [where](#where)
- [String](#string)
  - [endsWith](#endswith)
  - [latinize](#latinize)
  - [uppercase](#uppercase)
  - [lowercase](#lowercase)
  - [test](#test)
  - [trim](#trim)
  - [ltrim](#ltrim)
  - [rtrim](#rtrim)
  - [match](#match)
  - [phoneUS](#phoneus)
  - [placeholder](#placeholder)
  - [repeat](#repeat)
  - [reverse](#reverse-1)
  - [slugify](#slugify)
  - [split](#split)
  - [startsWith](#startswith)
  - [stripTags](#striptags)
  - [stringular](#stringular)
  - [truncate](#truncate)
  - [ucfirst](#ucfirst)
  - [uriEncode](#uriencode)
  - [uriComponentEncode](#uricomponentencode)
  - [wrap](#wrap)
- [Math](#math)
  - [min](#min)
  - [max](#max)
  - [abs](#abs)
  - [percent](#percent)
  - [radix](#radix)
  - [sum](#sum)
  - [degrees](#degrees)
  - [radians](#radians)
  - [shortFmt](#shortfmt)
  - [byteFmt](#bytefmt)
  - [kbFmt](#kbfmt)
- [Other](#other)
  - [bytes](#bytes)
  - [currency](#currency)
  - [dateFormat](#dateFormat)
  - [json](#json)
  - [number](#number)
  - [ordinal](#ordinal)
  - [pluralize](#pluralize)


## Get Started
### NPM 
```
npm install vue2-filters
```
When used with a module system, you must explicitly install the filters via `Vue.use()`:

```js
import Vue from 'vue'
import VueFilterList from 'vue2-filter-list'

Vue.use(VueFilterList)
```

You don't need to do this when using global script tags.

To use one of the predefined methods (such as `limitBy`, `filterBy`, `find`, or `orderBy`) in your component, you also need to add `Vue2Filters.mixin` to mixin list:

```js
import VueFilterList from 'vue2-filter-list'

export default {
  ...
  mixins: [VueFilterList.mixin],
  ...
}
```


## Collection

### after
get a collection(array or object) and specified count, and returns all of the items
in the collection after the specified count.
```js
collection : [
    { name: 'foo' },
    { name: 'bar' },
    { name: 'baz' },
    { name: 'zap' },
  ]
```
```html
<tr v-for="col in after(collection,2)">
  {{ col.name }}
</tr>
<!--result:
  baz
  zap
-->

```
### afterWhere
get a collection and properties object, and returns all of the items,
in the collection after the first that found with the given properties, including it.
```js
orders : [
  { id: 1, customer: { name: 'foo' }, date: 'Tue Jul 15 2014' },
  { id: 2, customer: { name: 'foo' }, date: 'Tue Jul 16 2014' },
  { id: 3, customer: { name: 'foo' }, date: 'Tue Jul 17 2014' },
  { id: 4, customer: { name: 'foo' }, date: 'Tue Jul 18 2014' },
  { id: 5, customer: { name: 'foo' }, date: 'Tue Jul 19 2014' }
]
```
```html
<tr v-for="order in afterWhere(orders,{date: 'Tue Jul 17 2014'})">
  order: {{ order.id }}, {{ order.date }}
</tr>
<!--result:
  order: 3, Tue Jul 17 2014
  order: 4, Tue Jul 18 2014
  order: 5, Tue Jul 19 2014
-->
```

### before
get a collection(array or object) and specified count, and returns all of the items
in the collection before the specified count.
```js
collection : [
    { name: 'foo' },
    { name: 'bar' },
    { name: 'baz' },
    { name: 'zap' },
  ]
```
```html
<tr v-for="col in before(collection,3)">
  {{ col.name }}
</tr>
<!--result:
  foo
  bar
-->

```

### beforeWhere
get a collection and properties object, and returns all of the items,
in the collection before the first that found with the given properties, including it.
```js
orders : [
  { id: 1, customer: { name: 'foo' }, date: 'Tue Jul 15 2014' },
  { id: 2, customer: { name: 'foo' }, date: 'Tue Jul 16 2014' },
  { id: 3, customer: { name: 'foo' }, date: 'Tue Jul 17 2014' },
  { id: 4, customer: { name: 'foo' }, date: 'Tue Jul 18 2014' },
  { id: 5, customer: { name: 'foo' }, date: 'Tue Jul 19 2014' }
]
```
```html
<tr v-for="order in beforeWhere(orders,{date: 'Tue Jul 17 2014'})">
  order: {{ order.id }}, {{ order.date }}
</tr>
<!--result:
  order: 1, Tue Jul 15 2014
  order: 2, Tue Jul 16 2014
  order: 3, Tue Jul 17 2014
-->
```
### concat

Concatenates an array/object into another one.


```js
array : [ {a: 1}, {a: 2} ],
object : {
    0: {a: 3},
    1: {a: 4}
  }
```

```html
<li ng-repeat="elm in concat(array,object)">
  {{ elm.a }}
</li>

<!--
result:
1 2 3 4
-->

<li ng-repeat="elm in concat(object,array)">
  {{ elm.a }}
</li>

<!--
result:
3 4 1 2
-->
```
### filterBy
 - Arguments
    - {Array} [items]
    - {String} [query]
    - {String} [searchKey]
 
```html
<!-- only items that contain the target string "hello" will be displayed -->
<div v-for="item in filterBy(items, 'hello')">
<!-- the filter will only search for "Jack" in the name field of each user object -->
<div v-for="user in filterBy(users, 'Jack', 'name')">
<!-- the filter will only search for "Bonnie" in the name or age fields of each user object -->
<div v-for="user in filterBy(users, 'Bonnie', 'name', 'age')">
```

### find
 - Arguments
    - {Array} [items]
    - {String} [query]
    - {String} [searchKey]
 
```html
<!-- only the first item that contains the target string "hello" will be displayed -->
<div v-for="item in find(items, 'hello')">
<!-- the filter will only search for "Bonnie" in the name or age fields of each user object and return the first result -->
<div v-for="user in find(users, 'Bonnie', 'name', 'age')">
```

### flatten
Flattens a nested array (the nesting can be to any depth).<br/>
If you pass shallow, the array will only be flattened a single level<br/>
**Usage:** ```collection | flatten: shallow[optional]```
```js
weirdArray : [[], 1, 2, 3, [4, 5, 6, [7, 8, 9, [10, 11, [12, [[[[[13], [[[[14, 15]]]]]]]]]]]]]
```
```html
<th v-for="elm in flatten(wierdArray)">
 {{ elm }},
</th>
<!--result:
1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
```

### fuzzy
fuzzy string searching(approximate string matching). [Read more](http://en.wikipedia.org/wiki/Approximate_string_matching)<br/>
**note:** use fuzzyBy to filter by one property to improve performance<br/>
**Usage:** ```collection | fuzzy: search: caseSensitive[optional]```
```js
books : [
  { title: 'The DaVinci Code', author: 'F. Scott Fitzgerald' },
  { title: 'The Great Gatsby', author: 'Dan Browns' },
  { title: 'Angels & Demons',  author: 'Dan Louis' },
  { title: 'The Lost Symbol',  author: 'David Maine' },
  { title: 'Old Man\'s War',   author: 'Rob Grant' }
]
```
```html
<input type="text" v-model="search" placeholder="search book" />
<li ng-repeat="book in fuzzy(books,search)">
  {{ book.title }}
</li>
<!--case sensitive-->
<li ng-repeat="book in fuzzy(books,search,true)">
  {{ book.title }}
</li>
```
### isEmpty
get collection or string and return if it empty[Boolean]

```html
<tr v-for="order in orders" v-hide="orders | isEmpty">
<!-- ..... -->
</tr>
<!--some replacer msg-->
<tr v-show="orders | isEmpty">
  no content to show
</tr>
```

### join
Joins the contents of a collection into a string.<br/>
By default, it will join elements with a *single space*, but you can provide your own delimiter.

**Usage:** ```collection | join:', '```

Example:

```js
names : ['John', 'Sebastian', 'Will', 'James']
```

```html
<p>{{ names | join(', ') }}</p>
<!-- Will print "John, Sebastian, Will, James" -->

```
### limitBy
 - Arguments
    - {Number|Array} [items]
    - {Number} [limit]
    - {Number} [offset]
 
```html
<!-- only display first 10 items -->
<div v-for="item in limitBy(items, 10)">{{ item }}</div>
<!-- display items 5 to 15 -->
<div v-for="item in limitBy(items, 10, 5)">{{ item }}</div>
<!-- with a Range -->
<div v-for="n in limitBy(10, 4, 2)">{{ n }}</div>
```

### orderBy
 - Arguments
    - {Array} [items]
    - {String} [sortKey]
    - {Number} [order] - default: 1
 
 Sort users by name:
```html
<ul>
  <li v-for="user in orderBy(users, 'name')">
    {{ user.name }}
  </li>
</ul>
``` 
In descending order:
```html
<ul>
  <li v-for="user in orderBy(users, 'name')">
    {{ user.name }}
  </li>
</ul>
```
Sort primitive values:

```html
<ul>
  <li v-for="name in orderBy(names, true)">
    {{ name }}
  </li>
</ul>
```

### range
Return a new collection from a given length, start, increment, and callback<br/>
By default start is 0, increment is 1, and callback is null.
**Usage:** ```collection | range: length:start:increment:callback```<br/>
```html
<span v-for="i in range([],3)">{{i}},</span>
<!--result:
0,1,2,
-->
```
```html
<span v-for="i in range([],10,10)">{{i}},</span>
<!--result:
10,11,12,13,14,15,16,17,18,19,
-->
```
```html
<span v-for="i in range([],10,5,2)">{{ i }},</span>
<!--result:
5, 7, 9, 11, 13, 15, 17, 19, 21, 23
-->
```
```html
<span ng-repeat="i in range([],11,4,2)">{{ i }},</span>
<!--result:
4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24
-->
```
```js
double(i) {
  return i * 2;
}
```
```html
<span ng-repeat="i in range(11,4,2,double)">{{ i }},</span>
<!--result:
8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48
-->
```

### removeWith
comparison for each element in a collection to the given properties object,<br/>
returning an array without all elements that have equivalent property values.
```js
  collection : [
    { id: 1, name: 'foo' },
    { id: 1, name: 'bar' },
    { id: 2, name: 'baz' }
  ]
```
```html
<tr v-for="obj in removeWith(collection,{ id: 1 })">
  {{ obj.name }}
</tr>
<!-- result:
  baz
-->

<tr v-for="obj in removeWith(collection,{ id: 1, name: 'foo' })">
  {{ obj.name }}
</tr>
<!-- result:
  bar
  baz
```
### reverse
Reverse the order of the elements in a collection

```js
users : [
  { id: 1, name: 'bazzy' },
  { id: 2, name: 'dazzy' },
  { id: 3, name: 'lazzy' }
]
```
```html
<tr v-for="user in reverse(users)">
  user: {{ user.id }}, {{ user.name }}
</tr>
<!--result:
  user: 3, lazzy
  user: 2, dazzy,
  user: 1, bazzy
-->
```

### where
comparison for each element in a collection to the given properties object,<br/>
returning an array of all elements that have equivalent property values.
```js
  collection : [
    { id: 1, name: 'foo' },
    { id: 1, name: 'bar' },
    { id: 2, name: 'baz' }
  ]
```
```html
<tr v-for="obj in where(collection,{id: 1})">
  {{ obj.name }}
</tr>
<!-- result:
  foo
  bar
-->

<tr v-for="obj in where(collection,{id: 1, name: 'foo'})">
  {{ obj.name }}
</tr>
<!-- result:
  foo
  -->
```


## String

### ucfirst

ucfirstFilter get string as parameter and return it capitalized

```html
<p> {{ 'foo bar baz' | ucfirst }}</p>

<!--
result:
Foo Bar Baz
-->
```
### uppercase

uppercase get string as parameter and return it uppercase

```html
<p> {{ 'foo bar baz' | uppercase }}</p>

<!--
result:
FOO BAR BAZ
-->
```

### lowercase

lowercase get string as parameter and return it lowercase

```html
<p> {{ 'Foo Bar Baz' | lowercase }}</p>

<!--
result:
foo bar baz
-->
```

### uriEncode
get string as parameter and return encoded uri

```html
<a ng-href="http://domain.com/fetch/{{ data.name | uriEncode }}">Link</a>
```

### uriComponentEncode
get string as parameter and return encoded uri component

```html
<a ng-href="http://domain.com/fetch/{{ 'Some&strange=chars' | uriComponentEncode }}">Link</a>
```

### slugify
Transform text into a URL slug. Replaces whitespaces, with dash("-"), or given argument

```html
{{ 'Some string with spaces' | slugify }}
<!--replace with given argument-->
{{ 'Some string with spaces' | slugify('=') }}
<!--
result:
some-string-with-spaces

some=string=with=spaces
-->
```

### latinize
Remove accents/diacritics from a string

```html
 {{ 'Sòme strÏng with Âccénts' | latinize }}
<!--
result:
  Some strIng with Accents
-->
```
### startsWith
return whether string starts with the starts parameter.<br/>
usage: ```string | startsWith: 'start': case-sensitive[optional]```<br/>
```html
 {{ 'Lorem ipsum' | startsWith('lorem') }}
 {{ 'Lorem Ipsum' | startsWith('lorem',true) }}
 <!--result:
  true
  false
```
### endsWith
return whether string ends with the ends parameter.<br/>
usage: ```string | endsWith: 'ends': case-sensitive[optional]```<br/>
```html
 {{ 'image.JPG' | endsWith('.jpg') }}
 {{ 'image.JPG' | endsWith('.jpg', true) }}
 <!--result:
  true
  false
```
### stripTags
strip out html tags from string<br/>
**Important: this filter jobs it's not to replace ng-bind-html directive, it's only for tiny plain text

```js
text : '<p class="paragraph">Lorem Ipsum is simply dummy text of the printing...</p>'
```
```html
<p>{{ text | stripTags }}</p>
<!--result:
Lorem Ipsum is simply dummy text of the printing...
-->
```
### stringular
get string with {n} and replace match with enumeration values

```html
<p>{{ 'lorem {0} dolor {1} amet' | stringular('ipsum','sit') }}</p>
<p>{{ '{3} {0} dolor {1} amet' | stringular('ipsum','sit',null,'lorem') }}</p>

<!-- result:
<p>lorem ipsum dolor sit amet</p>
<p>lorem ipsum dolor sit amet</p>
-->

<p>{{ 'lorem {0} dolor sit amet' | stringular }}<p>
<!--result:
<p>lorem {0} dolor sit amet</p>
```

### phoneUS
Format a string or a number into a us-style phone number  
```html
<p>{{ 1234567890 | phoneUS }}</p>

<!--result:
<p>(123) 456-7890</p>
```

### truncate
truncates a string given a specified length, providing a custom string to denote an omission.<br/>
usage: ``` | truncate: [length]: [suffix-optional]: [preserve-optinal]```<br/>
```js
text : 'lorem ipsum dolor sit amet'
```
```html
<!--should not cut words in the middle if preserve is true-->
<p>{{ text | truncate(7, '...', true) }}</p>

<p>{{ text | truncate( 13, '...') }}</p>

<!--should not touch string that shorter than the provided length -->
<p>{{ text | truncate( 50, '...') }}</p>

<!--result:
lorem ipsum...
lorem ipsum d...
lorem ipsum dolor sit amet
```
### split
truncates a string given a specified length, providing a custom string to denote an omission.<br/>
usage: ``` | split: [delimiter]: [skip-optional]```<br/>
```js
text : 'lorem ipsum dolor sit amet'
```
```html

<p>{{ text | split(' ') }}</p>

<p>{{ text | split(' ', 2)}}</p>

<!--result:
['lorem', 'ipsum', 'dolor', 'sit', 'amet']
['lorem ipsum dolor', 'sit', 'amet']
```
### reverse
Reverses a string
```js
text : 'lorem ipsum dolor sit amet'
```
```html
<p>{{ text | reverse }}</p>
<!--result:
tema tis rolod muspi merol
```
### wrap
Wrap a string with another string<br/>
usage: ```string | wrap: string: string[optional]```
```html
<p>{{ 'foo' | wrap('/') }}</p>
<p>{{ 'foo' | wrap('{{', '}}') }}</p>
<!--result:
/foo/
{{foo}}
```
### trim
Strip whitespace (or other characters) from the beginning and end of a string<br/>
usage: ```string | trim: chars[optional]```
```html
<p>{{ '    foo   ' | trim }}</p>
<p>{{ 'foobarfoo' | trim('foo') }}
<!--result:
foo
bar
```
### ltrim
Strip whitespace (or other characters) from the beginning of a string<br/>
usage: ```string | ltrim: chars[optional]```
```html
<p>{{ 'barfoobar' | ltrim('bar') }}
<!--result:
foobar
```
### rtrim
Strip whitespace (or other characters) from the end of a string<br/>
usage: ```string | rtrim: chars[optional]```
```html
<p>{{ 'barfoobar' | rtrim('bar') }}
<!--result:
barfoo
```
### repeat
Repeats a string n times<br/>
**Usage:** ```string | repeat: n: separator[optional]```
```html
<p>{{ 'foo' | repeat(3, '-') }}</p>
<!--repeat:
foo-foo-foo
```
### test
Test if a string match a pattern<br/>
**Usage:** ```string | test: pattern: flag[optional]```
```html
<p>{{ '15/12/2003' | test('^[0-9]{2}[/]{1}[0-9]{2}[/]{1}[0-9]{4}$', 'i') }}</p>
<p>{{ '0123456' | test('\\D', 'i') }}</p>
<!--result:
true
true
```
### match
Return an array of matched element in a string<br/>
**Usage:** ```string | match: pattern: flag[optional]```
```html
<p>{{ '15/12/2003' | match('\\d+', 'g') }}</p>
<!--result:
['15', '12', '2003']
```


## Math

### max
max find and return the largest number in a given array.
if an `expression` is provided, will return max value by expression.
**Usage:** ```array | max: expression[optional]```
```js
users : [
  { user: { score: 988790 } },
  { user: { score: 123414 } },
  { user: { rank : 988999 } },
  { user: { score: 987621 } }
]
```
```html
<p> {{ [1,2,3,4,7,8,9] | max }}</p>
<p> {{ users | max('user.score || user.rank') }}</p>
<!--
result:
* 9
* { user: { rank : 988999 } }
```

### min
min find and return the lowest number in a given array.
if an `expression` is provided, will return min value by expression.
**Usage:** ```array | min: expression[optional]```
```js
users : [
  { user: { score: 988790 } },
  { user: { score: 123414 } },
  { user: { score: 987621 } }
]
```
```html
<p> {{ [1,2,3,4,7,8,9] | min }}</p>
<p> {{ users | min('user.score') }}</p>
<!--
result:
* 1
* { user: { score: 123414 } }
```
### abs
Returns the absolute value of a number
**Usage:** ```number | string```
```html
<div v-for="val in [-2.2, 1.3, '-3.4', '4.5']">The absolute value of {{val}} is {{val | abs}}</div>
<!--
result:
* The absolute value of -1.2 is 1.2
* The absolute value of 2.3 is 2.3
* The absolute value of -3.4 is 3.4
* The absolute value of '4.5' is 4.5
```
### percent
Percentage between two numbers<br/>
**Usage:** ``` number | percent: total: round[optional]```, round by default false.
```html
<p>{{ 23 | percent(500) }}</p>
<p>{{ 23 | percent(500, true) }}</p>
<!--result:
4.6
4
```
### radix
Converting decimal numbers to different bases(radix)<br/>
**Usage:** ```number | radix: base```
```html
<p>{{ 8 | radix(2)}}</p>
<p>{{ 32586 | radix(16) }}</p>
<!--result:
1000
7F4A
```
### sum
Sum up all values within an array<br/>
**Usage:** ```array | sum: initial-value[optional]```
```html
{{ [2,3,5] | sum }}
{{ [2,3,5] | sum(10) }}
<!--result
10
20
```
### degrees
Converts radians into degrees<br/>
**Usage:** ```radians | degrees: round-to-decimal```,
```html
<p>{{ 0.785398 | degrees(0) }}</p>
<p>{{ -1.57 | degrees(3) }}</p>
<!--result
45
-89.954
```
### radians
Converts degrees into radians<br/>
**Usage:** ```degrees | radians: round-to-decimal```,
```html
<p>{{ 45 | radians(2) }}</p>
<p>{{ 180 | radians(5) }}</p>
<!--result
0.79
3.14159
```
### shortFmt
Converts numbers into formatted display<br/>
**Usage:** ```number | shortFmt: round-to-decimal```,
```html
<p>{{ 45000 | shortFmt(0) }}</p>
<p>{{ 18234822 | shortFmt(1) }}</p>
<!--result
45 k
18.2 m
```
### byteFmt
Converts bytes into formatted display<br/>
**Usage:** ```number | byteFmt: round-to-decimal```,
```html
<p>{{ 1998 | byteFmt(2) }}</p>
<p>{{ 1339234901 | byteFmt(5) }}</p>
<!--result
1.95 KB
1.24726 GB
```
### kbFmt
Converts kilobytes into formatted display<br/>
**Usage:** ```number | kbFmt: round-to-decimal```,
```html
<p>{{ 1024 | kbFmt(0) }}</p>
<p>{{ 1049901 | kbFmt(5) }}</p>
<!--result
1 MB
1.00126 GB

```

## Other
###bytes
+ Arguments:
  * `{Number} [decimalDigits] - default: 2`

+ Examples:

  ```js
  {{ 20 | bytes }}             // => 20 byte
  {{ 2000 | bytes }}           // => 1.95 kb
  {{ 2000000 | bytes }}        // => 1.91 MB
  {{ 2000000000 | bytes }}     // => 1.86 GB
  {{ 2000000000000 | bytes }}  // => 1.82 TB
  ```

  Change the number of digits after the decimal point:

  ```js
  {{ 2000000000 | bytes(4) }}  // => 1.8626 GB
  ```
  
### currency

+ Arguments:
  * `{String} [symbol] - default: '$'`
  * `{Number} [decimalDigits] - default: 2`
  * `{Object} [options] - default: {}`

+ Options:
  * `{String} [thousandsSeparator] - default: ','`
  * `{String} [decimalSeparator] - default: '.'`
  * `{Boolean} [symbolOnLeft] - default: true`
  * `{Boolean} [spaceBetweenAmountAndSymbol] - default: false`
  * `{Boolean} [showPlusSign] - default: false`

+ Example:

  ```js
  {{ amount | currency }} // 12345 => $12,345.00
  ```
  Use a different symbol:

  ```js
  {{ amount | currency('£') }} // 12345 => £12,345.00
  ```
  Use a different number decimal places:

  ```js
  {{ amount | currency('₽', 0) }} // 12345 => ₽12,345
  ```
  Use a different thousands separator:

  ```js
  {{ amount | currency('$', 0, { thousandsSeparator: '.' }) }} // 12345 => $12.345
  ```
  Use a different decimal separator:

  ```js
  {{ amount | currency('$', 2, { decimalSeparator: ',' }) }} // 12345 => $12,345,00
  ```
  Use symbol on right:

  ```js
  {{ amount | currency('$', 0, { symbolOnLeft: false }) }} // 12345 => 12,345$
  ```
  Add space between amount and symbol:

  ```js
  {{ amount | currency('$', 0, { spaceBetweenAmountAndSymbol: true }) }} // 12345 => $ 12,345
  ```

  Show the plus sign if the value is greater than zero:

  ```js
  {{ amount | currency('$', 0, { showPlusSign: true }) }} // 12345 => +$12,345
  ```
  Use multiple options:

  ```js
  {{ amount | currency('kr', 2, { symbolOnLeft: false, spaceBetweenAmountAndSymbol: true }) }} // 12345 => 12,345.00 kr
  ```
### pluralize

+ Arguments:
  * `{String|Array} single or Array(single, double, triple, ...)`
  * `{Object} [options] - default: {}`

+ Options:
  * `{Boolean} [includeNumber] - default: false`

+ Example:

  ```js
  {{ count }} {{ count | pluralize('item') }} 

  // 1 => '1 item'
  // 2 => '2 items'
  ```

  Use an array of words:

  ```js
  {{ count }} {{ count | pluralize(['fry', 'fries']) }} 

  // 1 => '1 fry'
  // 2 => '2 fries'
  // 3 => '3 fries'
  ```

  Include number to output:

  ```js
  {{ count | pluralize('test', { includeNumber: true }) }} 

  // 1 => '1 test'
  // 2 => '2 tests'
  ```
  
## ordinal

+ Arguments:
  * `{Object} [options] - default: {}`

+ Options:
  * `{Boolean} [includeNumber] - default: false`

+ Example:

  ```js
  {{ date | ordinal }} 

  // 1 => 'st'
  // 2 => 'nd'
  // 3 => 'rd'
  // 4 => 'th'
  // 5 => 'th'
  ```

  Include number to output:

  ```js
  {{ date | ordinal({ includeNumber: true }) }} 

  // 1 => '1st'
  // 2 => '2nd'
  ```
### number

+ Arguments:
  * `{String} [format] - default: ''`
  * `{Object} [options] - default: {}`

+ Options:
  * `{String} [thousandsSeparator] - default: ','`
  * `{String} [decimalSeparator] - default: '.'`

+ Examples:

  ```js
  {{ 123456 | number('0,0') }} // => 123,456
  ```

  Change the number of digits after the decimal point:

  ```js
  {{ 12345.67 | number('0.0000') }} // => 12345.6700
  ```

  Add a plus or minus sign to the beginning:

  ```js
  {{ 123456 | number('+0') }} // => +123456
  {{ 123456 | number('-0') }} // => -123456
  ```

  Show number in thousand (K) or in millions (M):

  ```js
  {{ 123456 | number('0a') }} // => 123K
  {{ 123456 | number('0 a') }} // => 123 K
  {{ 123456789 | number('0a') }} // => 123M
  ```

  Use a different thousands separator:

  ```js
  {{ 1234567 | number('0,0', { thousandsSeparator: ' ' }) }} // => 1 234 567
  ```
  Use a different decimal separator:

  ```js
  {{ 12345.67 | number('0.00', { decimalSeparator: '|' }) }} // => 12,345|67
  ```

### dateFormat

-Converts date to given format

```js
date:new Date()
```
```html
{{ date | dateFormat('YYYY-MM-DD')}}
```

### json

-Converts javascript object to json string

```js
users : [
  { user: { score: 988790 } },
  { user: { score: 123414 } },
  { user: { rank : 988999 } },
  { user: { score: 987621 } }
]
```
```html
{{ users | json}}
```

## Contributing

If you find a bug or want to contribute to the code or documentation, you can help by submitting an issue or a pull request.


## License
[MIT](http://opensource.org/licenses/MIT)
