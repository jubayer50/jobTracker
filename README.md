**1.	What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?**
Ans:
These are all the system of getting elements from an HTML file element. 

getElementById:
getElementById helps to catch the element of HTML that include id in html tag. getElementById  selects one element by ID. 

getElementsByClassName:
In an HTML file sometime there are many class names in a tag. We can get these class name tag by getElementByClassname in JavaScript. It gives us an HTML collection that looks like an array. 

 querySelector:
 We also get the first element of HTML by querySelector.  We can select via querySelector an element of an HTML file by class name and id name. 

querySelectorAll:
uerySelectorAll also works as a getElementByClassName, but it provides a nodeList that also looks like an array.we can get element by class name and id together if need like: How we select in CSS sometime. 



**2.	How do you create and insert a new element into the DOM?**
Ans:
 In DOM (document object model), we can create an element like HTML by document.createElement(), then we write in parenthesis tag name what tag element we need by quotation. After creating an element, we append a child to the parent element using the append method in JavaScript.



**3.	What is Event Bubbling? And how does it work?**
Ans: 
Event bubbling is a part of DOM manipulation. That helps us to get the target element’s parent. In this way, we can get the root elements. For example, 
We click on the button, but we want to reach the button’s parent elements. It is possible by the event bubbling process.  In this way, we can reach from a child element to the parent element in an HTML file using JavaScript.



**4.	What is Event Delegation in JavaScript? Why is it useful?**
Ans:
Event delegation is a system that works mostly on the concept of event bubbling. It helps us handle the events. 



**5.	 What is the difference between preventDefault() and stopPropagation() methods?**
Ans:
preventDefault():
preventDefault() method stops the browser's default action.  For example, when we submitted from then reload the page it is a browser's default behaviors but we can stop reload behavirs and we can set instead of default behaviors what we want using JavaScript.

stopPropagation() :
stopPropagation() method stops the event bubbling propagation. For example, when we click a button, we can reach the button’s parent by processing the event bubbling. stopPropagation() method stops this process.  
