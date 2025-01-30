# `@vsrx/react` - Icon Component

## Overview

The `Icon` component is a versatile and customizable component used to display icons in your React application. It supports various icon libraries and custom icons.

Here's a list of all of the currently available icons: https://microsoft.github.io/vscode-codicons/dist/codicon.html

## Installation

To install the `@vsrx/react` package, use the following command:

```bash
npm install @vsrx/react
```

## Usage

Here is an example of how to use the `Icon` component in your project:

```jsx
import React from 'react';
import { Icon } from '@vsrx/react';

const MyComponent = () => (
    <div>
        <Icon name="home" size="large" color="blue" />
    </div>
);

export default MyComponent;
```

## Props

The `Icon` component accepts the following props:

| Prop      | Type   | Description                          |
|-----------|--------|--------------------------------------|
| `name`    | string | The name of the icon to display.     |
| `size`    | string | The size of the icon (e.g., small, medium, large). |
| `color`   | string | The color of the icon.               |
| `onClick` | func   | Function to call when the icon is clicked. |

## Custom Icons

To use custom icons, you can pass the SVG path or any other custom icon component as a child to the `Icon` component:

```jsx
import React from 'react';
import { Icon } from '@vsrx/react';

const CustomIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24">
        <path d="M12 2L2 22h20L12 2z" />
    </svg>
);

const MyComponent = () => (
    <div>
        <Icon>
            <CustomIcon />
        </Icon>
    </div>
);

export default MyComponent;
```

## License

This project is licensed under the MIT License.

## Contributing

We welcome contributions to improve the `Icon` component. Please submit a pull request or open an issue to discuss your ideas.

## Contact

For any questions or support, please contact the maintainers at [support@vsrx.com](mailto:support@vsrx.com).
