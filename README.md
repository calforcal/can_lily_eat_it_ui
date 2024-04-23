# Can Lily Eat It?
After my niece Lily developed a severe allergy to both dairy and soy, I set out to create an application for my sister to help her navigate which foods were safe for her to eat.

Particularly when it comes to Soy, but occasionally other allergens as well - the FDA does not require refined Soy products to be listed in the "Allergens" section of food labels. This can make it difficult to discern if a product is safe to consume if you have very sensitive allergies.

'Can Lily Eat It?' is designed so that you can search a UPC Code and get instant feedback on whether or not it is safe to eat. If it's not deemed safe, you'll get a list of the ingredients that could potentially contain allergens. Otherwise, you're good to go!

## Deployed Site
[Can Lily Eat It? Deployed Site](https://can-lily-eat-it-ui.vercel.app/)

## App Demo
![app demo](./public/images/clei-demo-gif.gif)

## Getting Started

### Prerequisites
- Javascript v16.15.1
- React 18.2.0
- NPM 8.11.0

### Installation
1. Fork and Clone a copy of this repo.
2. Navigate into the project directory
```
cd can_lily_eat_it_ui
```
3. Run the following command to install dependencies (npm packages):
```
npm install
```
4. The current repo makes API calls to the production server. To utilize the development server, do the following:
- Install the server (backend repo) [here](https://github.com/calforcal/can_lily_eat_it/tree/main)
- Do a universal find_and_replace of ```https://can-lily-eat-it.onrender.com``` with ```http://localhost:3000```
5. Run the following command to start the frontend server:
```
npm run dev
```
6. Go to ```http://127.0.0.1:5173/``` in your browser.