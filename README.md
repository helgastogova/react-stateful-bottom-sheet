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

| Prop Name | Type | Description |
| --------- | ---- | ----------- |
| children | `ReactNode` or `((props: BottomSheetChildProps) => ReactNode)` | React node(s) to be rendered inside the bottom sheet. If this prop is a function, it will receive an object with `isOpen` and `setOpen` properties. |
| rootClassName | `string` (optional) | A CSS class name for the bottom sheet container. |
| wrapperClassName | `string` (optional) | A CSS class name for the wrapper element inside the bottom sheet container. |
| lineClassName | `string` (optional) | A CSS class name for the line element inside the bottom sheet. |
| contentClassName | `string` (optional) | A CSS class name for the content area inside the bottom sheet. |
| compactHeight | `string` (optional) | The height of the bottom sheet when it is in its compact state. Default is `"auto"`. |
| fullHeight | `string` (optional) | The height of the bottom sheet when it is in its full state. Default is `"90vh"`. |
| onClickOutside | `() => void` (optional) | A callback function that is invoked when a click is detected outside the bottom sheet. |
| closeOnClickOutside | `boolean` (optional) | Indicates whether the bottom sheet should close when a click is detected outside of it. Default is `true`. |


## License
React Clickable Post Wrapper is released under the MIT License.


