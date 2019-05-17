console.log('App.js is running!')

// create app object title/subtitle
// user title/subtitle in the template
// render template

// only render the subtitle (and p tag) if subtitle exists - logical and operator
// render new p tag - if options.length > 0 "Here are your options" "No options"

let app = {
    title: "Indecision App",
    options: ['One', 'Two']
}

// JSX - Javascript XML
let template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
    <ol>
      <li>Stuff</li>
      <li>More Stuff</li>
    </ol>
  </div>
)

// Create a templateTwo var JSX expression
// div
// h1 -> Joshua
// p -> Age: 25
// p -> Location: Atlanta
// Render templateTwo instead of template

let user = {
    name: 'Joshua',
    age: 25,
    location: 'Atlanta'
}

function getLocation(location) {
  if (location) {
      return <p>Location: {location}</p>
  }
}

let templateTwo = (
    <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
      {user.age >= 18 && <p>Age: {user.age}</p>}
      {getLocation(user.location)}
    </div>
)

let appRoot = document.getElementById('app')

ReactDOM.render(template, appRoot)