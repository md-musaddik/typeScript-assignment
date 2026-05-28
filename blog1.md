Why is any labeled a "type safety hole," and why is unknown the safer choice for handling unpredictable data? Explain the concept of type narrowing.

The whole purpose of typescript is to make javascript safer by ensuring type safety.
Any tells the compiler the types can be any. So, typscript stop type checking. That's why any is dangerous.
But, unknown is safer than any. Because it forces the compiler to type checking.