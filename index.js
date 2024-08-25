const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

// ejercio 1

const idInparPizzas  = () => pizzas.filter(pizza => pizza.id % 2 === 1)

console.log('Las pizzas con id inpar son: ',idInparPizzas())


// ejercio 2

const pizzasBaratas = () => pizzas.filter(pizza => pizza.precio < 600)

console.log('Las pizzas que cuestan 600 o menos son:',pizzasBaratas())

// ejercio 3

const pizzaNames = () => pizzas.map(pizza => pizza.nombre.concat(' $', pizza.precio,'\n')).join('')

console.log('Las pizzas son:\n',pizzaNames())

// ejercio 4

const pizzasIngredientes = () => pizzas.forEach(pizza => pizza.ingredientes.map(ingrediente => console.log('pizza:',pizza.nombre, 'ingredientes:',ingrediente)))

console.log(pizzasIngredientes())
