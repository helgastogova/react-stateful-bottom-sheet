# React Stateful Bottom Sheet

React Stateful Bottom Sheet is a versatile npm package that provides a stateful bottom sheet component for your React applications. It fits easily into your project, enhancing user interaction and responsiveness.

## Features
1. **Flexible and customizable:** Adapt the bottom sheet component to match your project's design and functionality requirements with ease.
2. **Draggable and resizable:** Users can interactively drag the bottom sheet up and down, with the component automatically resizing its height in response.
3. **State management:** Built-in state management allows for toggling the bottom sheet open or closed, offering a smooth user experience.
4. **Smooth animations:** Leverages the framer-motion library for fluid animations and transitions.
5. **TypeScript support:** TypeScript integration enhances type safety and the overall developer experience.

With these features, React Stateful Bottom Sheet serves as a comprehensive solution for implementing bottom sheets in your React applications, facilitating the creation of dynamic, engaging user interfaces.

## Demo 
[Check out demo on codesandbox](https://codesandbox.io/p/sandbox/romantic-ritchie-sj8qzf?file%253D%252Fsrc%252FApp.tsx%253A8%252C5-27%252C23)

## Installation
`npm install react-stateful-bottom-sheet`

## Usage
Here is an example of how you can use the React Stateful Bottom Sheet component::
```jsx
import React from "react";
import { BottomSheet } from "react-stateful-bottom-sheet";

const MyComponent = () => {
  return (
    <BottomSheet>
      {({ isOpen, setOpen }) => {
          if (isOpen)
            return (
              <div>
                <div>Open state example</div>
                <button onClick={() => setOpen(false)}>
                  Test setOpen function
                </button>
              </div>
            );
          return (
            <div>Closed state example</div>
          );
        }}
    </BottomSheet>
  );
};

export default MyComponent;

```

## Props
The StatefulBottomSheet component accepts the following props:

1. **children** (optional): ReactNode or a function that accepts an object with isOpen and setOpen properties and returns a ReactNode. The component returns null if children is null.
2. **rootClassName** (optional): A string for the CSS class name of the bottom sheet container.
3. **wrapperClassName** (optional): A string for the CSS class name of the wrapper element within the bottom sheet container.
4. **lineClassName** (optional): A string for the CSS class name of the line element inside the bottom sheet.
5. **contentClassName** (optional): A string for the CSS class name of the content area within the bottom sheet.
6. **compactHeight** (optional): The height of the bottom sheet in its compact state. Default value is "auto".
7. **fullHeight** (optional): The height of the bottom sheet in its full state. Default value is "90vh". Set it to "auto" to let the content determine the appropriate height.
8. **onClickOutside** (optional): A callback function triggered when a click is detected outside the bottom sheet.
closeOnClickOutside (optional): A boolean indicating whether the bottom sheet should close upon detecting a click outside of it. Default is true.
## License
React Clickable Post Wrapper is released under the MIT License.


