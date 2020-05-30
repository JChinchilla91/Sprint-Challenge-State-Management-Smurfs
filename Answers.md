1. What problem does the context API help solve?
    
    Context API helps to stop continuously passing props through several parts of your application. Instead, it gives the necessary information to those
    parts that use it.


1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    'Store' is the brain, where all instances of state are held. 'Actions' are what communicate with reducers to inform of what is going on with state. 'Reducers' are the area of manipulation. Information is dispatched to state and it is there where state is changed.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

    Application state is state that is used throughout the entire application. Component state is that which is only used within that component and its children. Application state is useful when all components need access to the state. Component state would be used in the opposite situation. 


1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    'Redux-thunk' allows us to introduce async logic into redux. It causes our action creators to reutrn a function instead of just an object.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

    I like redux because it helps me visualize what everything is doing. I really like to have a centralized location that stores everything.
    I appreciate the simplicity of useContext but I feel since I am starting out, redux will be my go to in personal projects.