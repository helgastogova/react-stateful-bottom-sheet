# React Stateful Bottom Sheet

React Stateful Bottom Sheet is a dynamic, customizable npm package that offers a stateful bottom sheet component for your React applications. It integrates seamlessly into your project, enabling the creation of interactive and responsive user interfaces.

## Features
1. **Flexible and customizable:** Adapt the bottom sheet component to match your project's design and functionality requirements with ease.
2. **Draggable and resizable:** Users can interactively drag the bottom sheet up and down, with the component automatically resizing its height in response.
3. **State management:** Built-in state management allows for toggling the bottom sheet open or closed, offering a smooth user experience.
4. **Smooth animations:** Leverages the framer-motion library for fluid animations and transitions.
5. **TypeScript support:** TypeScript integration enhances type safety and the overall developer experience.

With these features, React Stateful Bottom Sheet serves as a comprehensive solution for implementing bottom sheets in your React applications, facilitating the creation of dynamic, engaging user interfaces.

## Demo 
[codesandbox demo](https://codesandbox.io/s/romantic-ritchie-sj8qzf)

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

1. **rootClassName** (optional): A string representing the CSS class name for the bottom sheet container.
2. **wrapperClassName** (optional): A string representing the CSS class name for the wrapper element inside the bottom sheet container.
3. **lineClassName** (optional): A string representing the CSS class name for the line element inside the bottom sheet.
4. **contentClassName** (optional): A string representing the CSS class name for the content area inside the bottom sheet.
5. **compactHeight** (optional): The height of the bottom sheet when it is in its compact state. Default is "auto".
6. **fullHeight** (optional): The height of the bottom sheet when it is in its full state. Default is "90vh". Set it to "auto" if you want to have a height appropriate for your content.
7. **children** (optional): React nodes to be rendered inside the bottom sheet. It can either be a single child or a function which returns a child and accepts an object with isOpen and setOpen properties. If children is null, component returns null;
8. **onClickOutside** (optional): A callback function that is invoked when a click is detected outside the bottom sheet.
9. **closeOnClickOutside** (optional): A boolean value indicating whether the bottom sheet should be closed when a click is detected outside of it. Default is true.

## License
React Clickable Post Wrapper is released under the MIT License.


