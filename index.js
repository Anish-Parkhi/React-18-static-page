/*
Challenge: Starting from scratch, build and render the 
HTML for our section project. Check the Google slide for 
what you're trying to build.

We'll be adding styling to it later.

Hints:
* The React logo is a file in the project tree, so you can
  access it by using `src="./react-logo.png" in your image
  element
* You can also set the `width` attribute of the image element
  just like in HTML. In the slide, I have it set to 40px
 */

import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(
    <div>
        <div>
            <img className='img' src="./react-logo.png"></img>
        </div>
        <h1>Fun facts about React</h1>
        <ul>
            <li>Was first released in 2018</li>
            <li>Was created by Jordan Walke</li>
            <li>Has over 100k stars on github</li>
            <li>It's maintained by facebook</li>            
        </ul>
    </div>
,document.getElementById("root"));
