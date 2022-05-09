## electroweb

Testing loading an HTML website in an electron web browser.

![screenshot](/resources/screenshot.png)

## Requirements

1. Windows 10 OS
2. NodeJS v14.18.3

### Core Libraries and Frameworks

The following libraries and frameworks are automatically downloaded and installed during installation.

1. electron v18.2.0
2. electron-builder v23.0.3

## Installation

1. Clone this repository.  
`git clone https://github.com/weaponsforge/electroweb.git`

2. Install dependencies.  
`npm install`

## Available Scripts

### `npm start`

Run the electron app.  

### `npm run dev`

Load the website for localhost development with hot reload (using webpack 5).

### `npm run build`

Pack the raw HTML website source for production distribution using webpack inside the `/build` directory.

### `npm run dist`

Package the electron app into an executable (**.exe**) file for Windows OS inside the `/dist` directory.

### `npm run lint`

Lint the JavaScript files.

### `npm run lint:fix`

Fix lint errors.

@weaponsforge  
20220508
