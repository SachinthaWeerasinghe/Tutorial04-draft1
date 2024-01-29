// Content.js
import React from 'react';
import myImage from './Assets/download.jpg';
import Counter from './Counter';
import { useState } from 'react';
const Content = () => {
//State for the Content component
const [contentState, setContentState] = useState('This is some sample content.');
// Props for the Counter component
const counterProps = {
initialCount: 0,
step: 1,
};
// Function to update the content state
const handleContentUpdate = () => {
setContentState('Content has been updated!');
};
return (
<section>
<p>Welcome to my website! This is some sample content.</p>
{/* Adding an image */}
<img src={myImage} alt="My_Image" />
{/* Adding a list */}
<ul>
<li>Item 1</li>
<li>Item 2</li>
<li>Item 3</li>
</ul>
{/* Adding a header */}
<h2>This is a subheading</h2>
{/* Adding another paragraph */}
<p>More content goes here...</p>
{/* Adding a link */}
<a href="https://www.example.com">Visit Example Website</a>
{/* Using the Counter component with props and state */}
<Counter {...counterProps} />
{/* Button to update content state */}
<button onClick={handleContentUpdate}>Update Content</button>
</section>
);
};
export default Content;







/*
import React from 'react';
import myImage from './Assets/download.jpg';
const Content = () => {
 return (
 <section>
 <p>Welcome to my website! This is some sample content.</p>
 

 <img src={myImage} alt="My_Image" />

 <ul>
 <li>Item 1</li>
 <li>Item 2</li>
 <li>Item 3</li>
 </ul>
 
 <h2>This is a subheading</h2>

 <p>More content goes here...</p>
 
 <a href="https://www.example.com">Visit Example Website</a>
 </section>
 );
};
export default Content;
*/









/*
import React from 'react';
const Content = () => {
return (
<section>
<p>Welcome to my website! This is some sample content.</p>
</section>
);
};
export default Content;

*/