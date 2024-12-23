# Qodalis Angular CLI

**Qodalis Angular CLI** is a web-based terminal CLI component for Angular applications. It provides a powerful and extensible interface to execute commands and streamline workflows directly within your web application. The CLI can be extended with custom command processors to suit your specific needs.

---

## Features

- **Web-Based Terminal**: A terminal interface integrated into your Angular applications.
- **Custom Command Processors**: Easily extend functionality by creating custom command processors.
- **Lightweight and Flexible**: Designed to work seamlessly with your existing Angular project.
- **Interactive Interface**: Enables command execution and response handling in a terminal-like UI.

---

## Installation

Install the package using npm:

```bash
npm install @qodalis/angular-cli
```

## Usage

After installing, you can integrate the CLI component into your Angular application:

## Basic Setup

1. Import the CLI Module:

```typescript
import { CliModule } from "@qodalis/angular-cli";

@NgModule({
  imports: [CliModule],
})
export class AppModule {}
```

2. Add the CLI Component to Your Template:

```html
<app-cli [options]="cliOptions"></app-cli>
```

3. Configure the CLI:

```typescript
cliOptions = {};
```

## Extending with Custom Commands

You can extend the CLI by creating a class that implements the ICliCommandProcessor interface. This allows you to define new commands and their behavior.

### Creating a Custom Command Processor

1. Create a new class that extends `ICliCommandProcessor`:

```typescript
import { ICliCommandProcessor, CliProcessCommand, ICliExecutionContext } from "@qodalis/angular-cli";

export class MyCustomCommandProcessor implements ICliCommandProcessor {
  command = "greet";
  description = "Greet the user with a custom message";

  async processCommand(command: CliProcessCommand, context: ICliExecutionContext): Promise<void> {
    const [name] = command.command.split(" ").slice(1);
    const message = name ? `Hello, ${name}!` : "Hello!";
    context.writer.writeln(message);
  }
}
```

2. Register the command processor:

```typescript
import { CliModule, resolveCommandProcessorProvider } from "@qodalis/angular-cli";

@NgModule({
  imports: [CliModule],
  providers: [resolveCommandProcessorProvider(MyCustomCommandProcessor)],
})
export class AppModule {}
```

## Example Commands

### Built-in Commands

- **help**: Displays available commands and their descriptions.
- **clear**: Clears the terminal screen.
- **echo \<message\>**: Prints the provided message to the terminal.
- **ping**: Pings the server
- **theme**: Interact with the cli theme
- **cookies**: Interact with the cookies
- **history**: Prints the command history of the current session
- **local-storage**: Interact with the local storage
- **regex**: Provide utilities for working with regular expressions
- **su**: Switch user
- **version**: Prints the version information
- **whoami**: Display current user information

### Custom Command Example

After registering **MyCustomCommandProcessor**, you can use the following command:

```bash
greet John
```

Output:

```bash
Hello, John!
```

## Live Example

Check out a live example of the Qodalis Angular CLI on StackBlitz: [Live Example on StackBlitz](https://stackblitz.com/~/github.com/qodalis-nicolae-lupei/stackblitz-qodalis-cli-example)

## Contributing

We welcome contributions! To contribute:

1. Fork this repository.
2. Create a branch for your feature or bugfix.
3. Submit a pull request.

Please ensure all contributions follow the project coding standards.

## License

This project is licensed under the MIT License. See the **LICENSE** file for details.

```vbnet

You can copy this content into a file named `README.md` in your project directory. Let me know if there's anything else you'd like to adjust! 🚀
```
