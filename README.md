viewedByScroll.js
=================

listens to scrolling event and returns the element(s) viewed by scroll.
### Requirements
	jQuery 1.7 or later

### Installation
* * *
### Step 1: Link required files
	jQuery library need to be included.Next,include viewedByScroll.js
```html
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
<script src="viewedByScroll.js"></script>
```
### Step 2: Call the viewedByScroll
```javascript
$(document).ready(function(){
	//select element(s) to check by the scrolling event
	$('.viewedByScroll').viewedByScroll({indentTop:0},function(index,element){
		///codes
	})

});
```
Documentation
============
###.viewedByScroll(settings,callback);
***
**settings [object]**
configures  settings
see .settings()

**callback [function]**
triggers callback when the element is viewed in the viewport.
Pass an element and its index

###.setting(object)
configures settings
```
	top distance from the viewport
	indentTop: 0 //default
	
```
