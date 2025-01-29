# VSRX

Reactive Full stack framework for developing VSCode extensions.

## Packages

### @vsrx/core

The @vsrx/core package includes all of the code that runs within the context of the extension.

### @vsrx/react

The @vsrx/react package includes the React ui toolkit, components and hooks for building React applications to run in VSCode and integrate with
the @vsrx/core package.

## Quickstart

### 1. Install VSRX

```shell
npm i @vsrx/core @vsrx/react
```

### 2. Create a React component

Create a new React component at `src/greeting.tsx`.

```tsx
import React from 'react';
import {useStream, provideWebview} from '@vsrx/react';

const Greeting: React.FC = () => {
    return (
        <div>
            <h1>Hello World!</h1>
        </div>
    );
};

export default provideWebview(Greeting);
```

Now build the Greeting component:

```shell
npx vsrx-build-react
```

### 3. Add a command to VSCode to open your webview

First you need to add the command to your extension `package.json` file:

```json
"contributes": {
    "commands": [
      {
        "command": "myExtension.greeting",
        "title": "Show Greeting"
      }
    ]
  },
```

Then add the handler for the command in your `src/extension.js` file:

```typescript
import { WebViewContext, renderWebView } from '@vsrx/core/webview';
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    WebViewContext.setContext(context);
    const disposable = vscode.commands.registerCommand('myExtension.greeting', () => {
        const panel = renderWebView('greeting');
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}
```

## Passing props to your components

You can pass static props to your React components from your extension. These static props are inserted when we build your webview, so they are immutable and do not support passing functions.

First you need to update the greeting component to accept props:

```tsx
import React from 'react';
import {useStream, provideWebview} from '@vsrx/react';

export interface GreetingProps {
    name: string;
}

const Greeting: React.FC = ({name}: GreetingProps) => {
    return (
        <div>
            <h1>Hello {name}!</h1>
        </div>
    );
};

export default provideWebview(Greeting);
``

Now build the updated Greeting component:

```shell
npx vsrx-build-react
```

Next you need to update your `src/extension.ts` to pass the name:

```typescript
import { WebViewContext, renderWebView } from '@vsrx/core';
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    WebViewContext.setContext(context);
    const disposable = vscode.commands.registerCommand('myExtension.greeting', () => {
        const panel = renderWebView('greeting', {name: 'Forrest'});
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}
```

## Realtime communication

If you need to support realtime communication you can use our stream which enables you to send any kind of data to and from your webviews.

```tsx
import React from 'react';
import {useStream, provideWebview} from '@vsrx/react';

const Greeting: React.FC = () => {
    const [name, sendName] = useStream('name');
    const [inputName, setInputName] = React.useState('');

    const handleSetName = () => {
        sendName(inputName);
    };

    return (
        <div>
            <h1>Hello {name}</h1>
            <input 
                type="text" 
                value={inputName} 
                onChange={(e) => setInputName(e.target.value)} 
                placeholder="Enter your name" 
            />
            <button onClick={handleSetName}>Set Name</button>
        </div>
    );
};

export default provideWebview(About);
```


Now build the updated Greeting component:

```shell
npx vsrx-build-react
```

Next you need to update your `src/extension.ts` to send and receive the name:

```typescript
import { WebViewContext, renderWebView } from '@vsrx/core';
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    WebViewContext.setContext(context);
    const disposable = vscode.commands.registerCommand('myExtension.greeting', () => {
        const panel = renderWebView('greeting');
        panel.send('name', 'Guest');
        panel.addEventListener('name', ({name}) => {
            // todo save the user's name
            panel.send('name', name);
        });
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}
```