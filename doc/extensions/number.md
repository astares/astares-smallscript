## Number extensions

### timeRepeat()

Provides a timesRepeat() function that allows to repeat an action *n* time easily. Only applicable for positive
numbers. Negative numbers do not run.

````JavaScript
(5).timesRepeat(i => console.log(`Iteration ${i}`));
````
outputs to 
````
Iteration 1
Iteration 2
Iteration 3
Iteration 4
Iteration 5
````

