import React from 'react';
import { render } from 'react-dom';
import Pet from './Pet';

const App = () =>   {
         return React.createElement(
             "div",
             {},
             [
                 React.createElement('h1', {}, 'Adopt Me!'),
                 React.createElement(Pet, {
                     name:'jack', animal: 'Dog', breed:'basenji'
                    }),
                 React.createElement(Pet, {
                     name:'Pepper', animal: 'Bird', breed:'Cocktail'
                    }),
                 React.createElement(Pet, {
                     name:'Lucy', animal: 'Cat', breed:'Mixed'
                    })
            ])   
        };
        render(React.createElement(App),
         document.getElementById('root'));