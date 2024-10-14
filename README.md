# TooltipComponent

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


Angular Tooltip Component
This project contains a customizable and lightweight tooltip component built with Angular. The tooltip appears on hover and click events and includes smooth transitions and dynamic positioning to enhance user interaction.

Features
Hover Tip: Appears when hovering over an element and disappears on mouse out.
Click Tip: Appears on click and stays visible until you click outside or press the close button.
Smooth Animations: Tooltips fade in and out for a clean visual experience.
Dynamic Positioning: Tooltips adjust their position to avoid clipping or going out of the viewport.
Accessible: Can be closed using the Esc key or the close button.
Setup Instructions
Clone the repository:

bash
git clone https://github.com/arpitpatidar1999/borneo-assignment
cd tooltip-component
Install dependencies:

bash
npm install
Run the application:

bash
ng serve
Access the app in your browser:

Navigate to http://localhost:4200.
Usage
To integrate the tooltip into your project, use the app-tooltip component like this:

html
<app-tooltip [fullMessage]="'This is a tooltip message'" [truncatedMessage]="'This is a...'">
  <button>Hover/Click me</button>
</app-tooltip>
Hover over the button to display the truncated message.
Click the button to display the full message with a close button.


