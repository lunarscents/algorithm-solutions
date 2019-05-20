## Objective

In this challenge, we practice creating buttons in JavaScript. Check out the attached tutorial for learning materials.

## Task

Complete the code in the editor so that it creates a clickable button satisfying the following properties:

- The button's id is btn.
- The button's initial text label is . After each click, the button must increment by . Recall that the button's text label is the JS object's innerHTML property.
- The button has the following style properties:
- A width of 96px.
- A height of 48px.
- The font-size attribute is 24px.

The .js and .css files are in different directories, so use the link tag to provide the CSS file path and the script tag to provide the JS file path:
```
<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="css/button.css" type="text/css">
    </head>
    
    <body>
    	<script src="js/button.js" type="text/javascript"></script>
    </body>
</html>
```

## Submissions

This is a new style of challenge involving Front-End rendering. It may take up to  seconds to see the result of your code, so please be patient after clicking Submit. The Submissions page contains screenshots to help you gauge how well you did.

Ask questions in the Discussions forum and submit any bug reports to support@hackerrank.com. Enjoy!

## Explanation

Initially, the button looks like this:
<br/>
![](https://s3.amazonaws.com/hr-challenge-images/17983/1456614015-11045006f4-btn_initial.png)


After the first 4 clicks, it looks like this:
<br/>
![](https://s3.amazonaws.com/hr-challenge-images/17983/1456614041-e93e72ebf9-btn_4_clicks.png)

After 5 more clicks, it looks like this:
<br/>
![](https://s3.amazonaws.com/hr-challenge-images/17983/1456614069-ee3675b288-btn_5_clicks.png)


<br/>
<br/>

## Solution
---

```javascript

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('btn');
    
    button.addEventListener('click', (e) => {
          const count = Number(e.currentTarget.innerText) + 1;
        
          e.currentTarget.innerText = count;
     });
});

```

---

```html

<!-- Enter your HTML code here -->
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Button</title>
        <link rel="stylesheet" href="css/button.css" type="text/css">
    </head>
    <body>
        <button id="btn" type="button">0</button>
        <script src="js/button.js" type="text/javascript"></script>
    </body>
</html>

```

---

```css

#btn {
    width: 96px;
    height: 48px;
    font-size: 24px;
}

```
