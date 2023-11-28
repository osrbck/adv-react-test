# Step 1

Inside the fetchData() function's code block, you executed the fetch() function, passing it a single string argument: "https://randomuser.me/api/?results=1".


## Step 2

Next, inside the fetchData() function, under the fetch() function call, you added the following piece of code:


### Step 3

You then added another then() call, which takes an arrow function.

The passed-in arrow function, receives a data argument, and using that data argument, it invokes the setUser() function, with the data passed to it.


### Step 4

In the return statement of the App component, under the h1 heading that reads “Customer data”,  you added an h2 heading, with the following code: Name: {user.results[0].name.first}


### `npm run build`

You then updated the return statement of the App component by adding another line of code under the newly-added h2.

**If you wanna add an img element, with the src attribute and an alt attribute holding the following code:**
 {user.results[0].picture.large}