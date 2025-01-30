# Button Component

The `@button.tsx` component is a reusable button component for your React application. It provides a customizable button with various styles and behaviors.

## Installation

To install the component, use npm or yarn:

```bash
npm install @vsrx/react
```

or

```bash
yarn add @vsrx/react
```

## Usage

Import the `Button` component and use it in your React application:

```jsx
import React from 'react';
import { Button } from '@vsrx/react';

const App = () => (
    <div>
        <Button onClick={() => alert('Button clicked!')}>Click Me</Button>
    </div>
);

export default App;
```

## Props

The `Button` component accepts the following props:

| Prop        | Type       | Description                                      |
|-------------|------------|--------------------------------------------------|
| `onClick`   | `function` | Function to call when the button is clicked      |
| `children`  | `node`     | Content to be displayed inside the button        |
| `disabled`  | `boolean`  | Disables the button if set to `true`             |
| `className` | `string`   | Additional CSS classes to apply to the button    |
| `style`     | `object`   | Inline styles to apply to the button             |

## Example

Here is an example of a button with custom styles and a click handler:

```jsx
import React from 'react';
import { Button } from '@vsrx/react';

const CustomButton = () => (
    <Button
        onClick={() => console.log('Custom button clicked!')}
        style={{ backgroundColor: 'blue', color: 'white' }}
    >
        Custom Button
    </Button>
);

export default CustomButton;
```

## License

This component is licensed under the MIT License.