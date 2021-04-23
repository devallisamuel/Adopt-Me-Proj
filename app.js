const Pet = ({name, animal, breed})  =>  {
    return React.createElement('div', {}, [
        React.createElement('h1', {}, name),
        React.createElement('h2', {}, animal),
        React.createElement('h2', {}, breed)
    ]);
};
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
        ReactDOM.render(React.createElement(App),
         document.getElementById('root'));