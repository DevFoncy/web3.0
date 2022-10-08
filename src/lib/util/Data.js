import { pathServer } from '../shared/constants/Strings';

export const TYPES_VALUES = {
  medianas: 'medianas',
  familiares: 'familiares',
  superFamiliares: 'superFamiliares',
};

export const PIZZAS_TAGS = {
  clasicas: {
    id: 1,
    class: 'pizza-clasica',
    label: 'Las Clásicas',
  },
  gourmet: {
    id: 2,
    class: 'pizza-gourmet',
    label: 'Las Gourmets',
  },
  especiales: {
    id: 3,
    class: 'pizza-especial',
    label: 'Las Especiales',
  },
};

const TYPES_PIZZA = [
  { label: 'Medianas Artesanales (23cm) 4 pedazos', value: TYPES_VALUES.medianas },
  { label: 'Familiares Artesanales (40cm) 12 pedazos', value: TYPES_VALUES.familiares },
  { label: 'Super Familiares Artesanales (45cm) 16 pedazos', value: TYPES_VALUES.superFamiliares },
];

const CONFIG_PIZZAS = {
  defaultValue: TYPES_PIZZA[0],
  options: TYPES_PIZZA,
};

const DATA_PIZZA = [
  {
    id: 1,
    url: `${pathServer.PIZZAS}pizza_americana.png`,
    ur2: `${pathServer.PIZZAS}pizza_americana.png`,
    title: 'Pizza Americana',
    description: 'Jamón Ingles, Queso Mozarella y Salsa Pizza',
    price: 12.0,
    price2: 25.0,
    price3: 33.0,
    tag: PIZZAS_TAGS.clasicas,
    icon: `${pathServer.PIZZAS}pizza_americana-tag.png`,
    ...CONFIG_PIZZAS,
  },
  {
    id: 5,
    url: `${pathServer.PIZZAS}pizza_hawaiana.png`,
    ur2: `${pathServer.PIZZAS}pizza_hawaiana.png`,
    title: 'Pizza Hawaina',
    description: 'Jamón ingles, Piña, Queso Mozarella y Salsa Pizza',
    price: 13.0,
    price2: 28.0,
    price3: 36.0,
    tag: PIZZAS_TAGS.clasicas,
    icon: `${pathServer.PIZZAS}pizza_hawaiana-tag.png`,
    ...CONFIG_PIZZAS,
  },
  {
    id: 7,
    url: `${pathServer.PIZZAS}pizza_pepperoni.png`,
    ur2: `${pathServer.PIZZAS}pizza_pepperoni.png`,
    title: 'Pizza Pepperoni',
    description: 'Pepperoni Americano, Queso Mozarella y Salsa Pizza',
    price: 13.0,
    price2: 30.0,
    price3: 37.0,
    tag: PIZZAS_TAGS.clasicas,
    icon: `${pathServer.PIZZAS}pizza_pepperoni-tag.png`,
    ...CONFIG_PIZZAS,
  },
  {
    id: 11,
    url: `${pathServer.PIZZAS}pizza_vegetariana.png`,
    ur2: `${pathServer.PIZZAS}pizza_vegetariana.png`,
    title: 'Pizza Vegetariana',
    description: 'Champiñones, Cebolla Blanca, Aceitunas Verdes, Queso Mozarella y Salsa Pizza',
    price: 13.0,
    price2: 30.0,
    price3: 37.0,
    tag: PIZZAS_TAGS.gourmet,
    ...CONFIG_PIZZAS,
  },
  {
    id: 6,
    url: `${pathServer.PIZZAS}pizza_jamaica.png`,
    ur2: `${pathServer.PIZZAS}pizza_jamaica.png`,
    title: 'Pizza Jamaica',
    description:
      'Jamón ingles, Pollo en Trozos, Tocino ahumado, Salsa BBQ, Queso mozarella y Salsa Pizza',
    price: 13.0,
    price2: 32.0,
    price3: 39.0,
    tag: PIZZAS_TAGS.gourmet,
    ...CONFIG_PIZZAS,
  },
  {
    id: 2,
    url: `${pathServer.PIZZAS}pizza_caribeña.png`,
    ur2: `${pathServer.PIZZAS}pizza_caribeña.png`,
    title: 'Pizza Caribeña',
    description: 'Jamón Ingles, Durazno, Tocino Ahumado, Queso Mozarella y Salsa Pizza',
    price: 13.0,
    price2: 32.0,
    price3: 39.0,
    tag: PIZZAS_TAGS.gourmet,
    ...CONFIG_PIZZAS,
  },
  {
    id: 4,
    url: `${pathServer.PIZZAS}pizza_continental.png`,
    ur2: `${pathServer.PIZZAS}pizza_continental.png`,
    title: 'Pizza Continental',
    description: 'Jamón, Cebolla blanca, Champiñones, Queso Mozarella y Salsa Pizza',
    price: 13.0,
    price2: 30.0,
    price3: 38.0,
    tag: PIZZAS_TAGS.gourmet,
    ...CONFIG_PIZZAS,
  },

  {
    id: 8,
    url: `${pathServer.PIZZAS}pizza_peruana.png`,
    ur2: `${pathServer.PIZZAS}pizza_peruana.png`,
    title: 'Pizza Peruana',
    description: 'Pepperoni , Carne de Res, Chorizo, Cebolla blanca, Queso Mozarella y Salsa Pizza',
    price: 14.0,
    price2: 33.0,
    price3: 40.0,
    tag: PIZZAS_TAGS.especiales,
    icon: `${pathServer.PIZZAS}pizza_peruana-tag.png`,
    ...CONFIG_PIZZAS,
  },
  {
    id: 12,
    url: `${pathServer.PIZZAS}pizza_venezolana.png`,
    ur2: `${pathServer.PIZZAS}pizza_venezolana.png`,
    title: 'Pizza Venezolana',
    description: 'Jamón ingles, Pimientos Tocino, Maiz, queso Mozarella y Salsa Pizza ',
    price: 14.0,
    price2: 31.0,
    price3: 38.0,
    tag: PIZZAS_TAGS.especiales,
    icon: `${pathServer.PIZZAS}pizza_venezolana-tag.png`,
    ...CONFIG_PIZZAS,
  },
  {
    id: 10,
    url: `${pathServer.PIZZAS}pizza_suprema.png`,
    ur2: `${pathServer.PIZZAS}pizza_suprema.png`,
    title: 'Pizza Suprema',
    description:
      'Pepperoni, Carne de Res, Pimientos, Cebolla blanca, Champiñones, Queso Mozarella y salsa Pizza',
    price: 15.0,
    price2: 34.0,
    price3: 41.0,
    tag: PIZZAS_TAGS.especiales,
    ...CONFIG_PIZZAS,
  },
  {
    id: 3,
    url: `${pathServer.PIZZAS}pizza_carnivora.png`,
    ur2: `${pathServer.PIZZAS}pizza_carnivora.png`,
    title: 'Pizza Carnívora',
    description: 'Jamón, Pepperoni, Chorizo, Tocino, Carne de Res, Queso Mozzarella y Salsa Pizza',
    price: 16.0,
    price2: 37.0,
    price3: 43.0,
    tag: PIZZAS_TAGS.especiales,
    ...CONFIG_PIZZAS,
  },

  {
    id: 9,
    url: `${pathServer.PIZZAS}pizza_super-suprema.png`,
    ur2: `${pathServer.PIZZAS}pizza_super-suprema.png`,
    title: 'Pizza Super Suprema',
    description:
      'Jamón, Pepperoni, Pimientos, Cebolla Blanca, Chorizo, Tocino, Carne de Res, Acetiruna Verdes, Queso Mozarella y Salsa Pizza',
    price: 17.0,
    price2: 38.0,
    price3: 45.0,
    tag: PIZZAS_TAGS.especiales,
    ...CONFIG_PIZZAS,
  },
];

const INCREMENT_PRICE = {
  mediana: 4,
  familiar: 8,
  superFamiliar: 8,
};

const getFormattedPizzas = (type) => {
  switch (type) {
    case 2:
      return DATA_PIZZA.map((p) => ({
        label: p.title,
        value: p.id,
        price: p.price2 + INCREMENT_PRICE.familiar,
      }));
    case 3:
      return DATA_PIZZA.map((p) => ({
        label: p.title,
        value: p.id,
        price: p.price3 + INCREMENT_PRICE.superFamiliar,
      }));
    default:
      return DATA_PIZZA.map((p) => ({
        label: p.title,
        value: p.id,
        price: p.price + INCREMENT_PRICE.mediana,
      }));
  }
};

export const CONFIG_PIZZAS_PROMOCIONES = () => ({
  options: [
    { label: 'Americana', value: 1, price: 40 },
    { label: 'Hawaiana', value: 2, price: 45 },
    { label: 'Pepperoni', value: 3, price: 46 },
    { label: 'Vegetariana', value: 4, price: 46 },
    { label: 'Jamaica', value: 5, price: 47 },
    { label: 'Caribeña', value: 6, price: 47 },
    { label: 'Continental', value: 7, price: 45 },
    { label: 'Peruana', value: 8, price: 48 },
    { label: 'Venezonala', value: 9, price: 47 },
    { label: 'Suprema', value: 10, price: 49 },
    { label: 'Carnívora', value: 11, price: 51 },
    { label: 'Super Suprema', value: 12, price: 53 },
  ],
});

export const CONFIG_PIZZAS_COMBOS = (type = 1) => ({
  options: getFormattedPizzas(type),
});

export const FILTERS_PIZZA = {
  promociones: {
    id: 1,
    name: 'Promociones',
  },
  combos: {
    id: 2,
    name: 'Combos ',
  },
  pizzas: {
    id: 3,
    name: 'Pizzas',
  },
  pastas: {
    id: 4,
    name: 'Pastas',
  },
  complementos: {
    id: 5,
    name: 'Complementos',
  },
  bebidas: {
    id: 6,
    name: 'Bebidas',
  },
};

export const PRODUCTS_LIST = [
  {
    id: 1,
    title: FILTERS_PIZZA.promociones.name,
    items: [
      {
        id: 1,
        url: `${pathServer.PROMOCIONES}extrema.jpg`,
        url2: `${pathServer.PROMOCIONES}extrema.jpg`,
        title: 'Xtrema 4 Sabores ',
        description: 'Americana - Hawaiana - Pepperoni - Suprema (16 pedazos)',
        price: 39.9,
      },
      {
        id: 2,
        url: `${pathServer.PROMOCIONES}martes-jueves.jpg`,
        url2: `${pathServer.PROMOCIONES}martes-jueves.jpg`,
        title: 'Jueves 2x1',
        description: 'En Pizzas Familiares (12 pedazos)',
        price: 40.0,
        ...CONFIG_PIZZAS_PROMOCIONES(),
      },
    ],
  },
  {
    id: 2,
    title: FILTERS_PIZZA.combos.name,
    subTitle: 'Elige el sabor de tu pizza',
    items: [
      {
        id: 1,
        url: `${pathServer.COMBOS}combos-medianas.jpg`,
        url2: `${pathServer.COMBOS}combos-medianas.jpg`,
        title: 'Pizzas Medianas : 🍕 + 🧉 + 🥖',
        description: '+ 2 PANES al ajo + GASEOSA 500ml',
        price: 16.0,
        ...CONFIG_PIZZAS_COMBOS(1),
      },
      {
        id: 2,
        url: `${pathServer.COMBOS}combos-familiares.jpg`,
        url2: `${pathServer.COMBOS}combos-familiares.jpg`,
        title: 'Pizzas Familiares : 🍕 + 🧉 + 🥖',
        description: '+ 4 PANES al ajo + GASEOSA 1.5Lt',
        price: 33.0,
        ...CONFIG_PIZZAS_COMBOS(2),
      },
      {
        id: 3,
        url: `${pathServer.COMBOS}combos-superfamiliares.jpg`,
        url2: `${pathServer.COMBOS}combos-superfamiliares.jpg`,
        title: 'Pizzas Super Familiares : 🍕 + 🧉 + 🥖',
        description: '+ 4 PANES al ajo + Gaseosa 1.5Lt',
        price: 41.0,
        ...CONFIG_PIZZAS_COMBOS(3),
      },
    ],
  },

  {
    id: 3,
    title: FILTERS_PIZZA.pizzas.name,
    subTitle: 'Elige el tamaño de tu pizza',
    items: DATA_PIZZA,
  },
  {
    id: 4,
    title: FILTERS_PIZZA.pastas.name,
    items: [
      {
        id: 1,
        url: `${pathServer.PASTAS}pastas_lasagna.png`,
        url2: `${pathServer.PASTAS}pastas_lasagna.png`,
        title: 'Lasagna Bolognesa + 2 Panes al Ajo',
        price: 15.0,
      },
    ],
  },
  {
    id: 5,
    title: FILTERS_PIZZA.complementos.name,
    items: [
      {
        id: 0,
        url: `${pathServer.EXTRAS}alitas_bbq.jpeg`,
        url2: `${pathServer.EXTRAS}alitas_bbq.jpeg`,
        title: 'Alitas BBQ + Papas Fritas',
        price: 15.0,
      },
      {
        id: 1,
        url: `${pathServer.EXTRAS}alitas_picantes.jpeg`,
        url2: `${pathServer.EXTRAS}alitas_picantes.jpeg`,
        title: 'Alitas Picantes + Papas Fritas',
        price: 15.0,
      },
      {
        id: 7,
        url: `${pathServer.EXTRAS}combo-7.png`,
        url2: `${pathServer.EXTRAS}combo-7.png`,
        title: 'Gaseosa 1.5Lt + Pan al ajo (4unidades)',
        price: 8,
      },
      {
        id: 8,
        url: `${pathServer.EXTRAS}combo-8.png`,
        url2: `${pathServer.EXTRAS}combo-8.png`,
        title: 'Gaseosa 500ml + Pan al ajo (2unidades)',
        price: 4,
      },

      {
        id: 6,
        url: `${pathServer.EXTRAS}extra_pan-ajo-especial.png`,
        url2: `${pathServer.EXTRAS}extra_pan-ajo-especial.png`,
        title: 'Jarra de Chicha + Pan al ajo (4unidades)',
        price: 10,
      },

      {
        id: 9,
        url: `${pathServer.EXTRAS}pan-ajo-especialx2.png`,
        url2: `${pathServer.EXTRAS}pan-ajo-especialx2.png`,
        title: 'Vaso de chicha + Pan al ajo (2unidades)',
        price: 4,
      },
      {
        id: 2,
        url: `${pathServer.EXTRAS}extra_pan-ajo.png`,
        url2: `${pathServer.EXTRAS}extra_pan-ajo.png`,
        title: 'Pan al Ajo - 4 unidades',
        price: 5.0,
      },
      {
        id: 3,
        url: `${pathServer.EXTRAS}extra_pan-ajo-especial.png`,
        url2: `${pathServer.EXTRAS}extra_pan-ajo-especial.png`,
        title: 'Pan al Ajo Especial -4 unidades',
        price: 7.0,
      },
      {
        id: 4,
        url: `${pathServer.EXTRAS}pan-ajo-x2.png`,
        url2: `${pathServer.EXTRAS}pan-ajo-x2.png`,
        title: 'Pan al Ajo Especial - 2 unidades',
        price: 3.5,
      },
      {
        id: 5,
        url: `${pathServer.EXTRAS}pan-ajo-especialx2.png`,
        url2: `${pathServer.EXTRAS}pan-ajo-especialx2.png`,
        title: 'Pan al Ajo Especial - 2 unidades',
        price: 2.5,
      },
    ],
  },
  {
    id: 6,
    title: FILTERS_PIZZA.bebidas.name,
    items: [
      {
        id: 2,
        url: `${pathServer.BEBIDAS}bebida_pepsi.png`,
        url2: `${pathServer.BEBIDAS}bebida_pepsi.png`,
        title: 'Gaseosa Pepsi 1.5 Lt',
        price: 5.0,
      },
      {
        id: 3,
        url: `${pathServer.BEBIDAS}bebida_3.jpeg`,
        url2: `${pathServer.BEBIDAS}bebida_3.jpeg`,
        title: 'Gaseosa Pepsi 500 ml',
        price: 2.5,
      },
      {
        id: 4,
        url: `${pathServer.BEBIDAS}bebida_4.webp`,
        url2: `${pathServer.BEBIDAS}bebida_4.webp`,
        title: 'Gaseosa 7up 1.5 Lt',
        price: 5,
      },
      {
        id: 5,
        url: `${pathServer.BEBIDAS}bebida_5.jpeg`,
        url2: `${pathServer.BEBIDAS}bebida_5.jpeg`,
        title: 'Gaseosa 7up 500 ml',
        price: 2.5,
      },
      {
        id: 6,
        url: `${pathServer.BEBIDAS}bebida_6.jpeg`,
        url2: `${pathServer.BEBIDAS}bebida_6.jpeg`,
        title: 'Gaseosa Coca Cola 1.5Lt',
        price: 8,
      },
      {
        id: 7,
        url: `${pathServer.BEBIDAS}bebida_7.jpeg`,
        url2: `${pathServer.BEBIDAS}bebida_7.jpeg`,
        title: 'Gaseosa Coca Cola 600ml',
        price: 4,
      },
      {
        id: 8,
        url: `${pathServer.BEBIDAS}bebida_8.jpeg`,
        url2: `${pathServer.BEBIDAS}bebida_8.jpeg`,
        title: 'Gaseosa Inca Kola 1.5Lt',
        price: 8,
      },
      {
        id: 9,
        url: `${pathServer.BEBIDAS}bebida_9.jpeg`,
        url2: `${pathServer.BEBIDAS}bebida_9.jpeg`,
        title: 'Gaseosa Inca Kola 600ml',
        price: 4,
      },
    ],
  },
];

// Object.freeze(PRODUCTS_LIST);
