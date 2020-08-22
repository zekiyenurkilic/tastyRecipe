import {
  SET_FAVORITE,
  SET_PRODUCT_DETAIL,
  SET_PRODUCT_DETAIL_FAV,
} from '../action/types';

const initialState = {
  headers: [
    {
      icon: 'pizza',
      name: 'Pizza',
    },
    {
      icon: 'food',
      name: 'Fast - Food',
    },
    {
      icon: 'food-drumstick',
      name: 'Chicken',
    },
    {
      icon: 'pasta',
      name: 'Pasta',
    },

    {
      icon: 'silverware-fork-knife',
      name: 'Meal',
    },
  ],
  products: [
    {
      _id: 1,
      name: 'Bread',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesettinag industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      calorie: '400 kcal',
      category: 1,
      isFav: false,
      image: 'https://i.imgyukle.com/2020/08/22/uznnC1.png',
      ingredients: [
        {
          name: 'Milk and yogurt',
          image: 'https://i.imgyukle.com/2020/08/21/uGwonR.png',
          quantity: '2 gr',
        },
        {
          name: 'Bread',
          image: 'https://i.imgyukle.com/2020/08/21/uGwonR.png',
          quantity: '1 pcs',
        },
        {
          name: 'Butter',
          image: 'https://i.imgyukle.com/2020/08/21/uGwonR.png',
          quantity: '100 gr',
        },
      ],
      nutritions: [
        {name: 'Fat', calorie: '30', unit: 'g'},
        {name: 'Protein', calorie: '20', unit: 'kcal'},
        {name: 'Carbo', calorie: '50', unit: 'k'},
        {name: 'Calories', calorie: '100', unit: 'kcal'},
      ],
    },
    {
      _id: 2,
      name: 'Pancake',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      calorie: '200 kcal',
      category: 2,
      isFav: false,
      image: 'https://i.imgyukle.com/2020/08/21/uGwonR.png',
      ingredients: [
        {
          name: 'Milk and yogurt',
          image: 'https://i.imgyukle.com/2020/08/21/uGwonR.png',
          quantity: '2 gr',
        },
        {
          name: 'Bread',
          image: 'https://i.imgyukle.com/2020/08/21/uGwonR.png',
          quantity: '1 pcs',
        },
        {
          name: 'Butter',
          image: 'https://i.imgyukle.com/2020/08/21/uGwonR.png',
          quantity: '100 gr',
        },
      ],
      nutritions: [
        {name: 'Fat', calorie: '30', unit: 'g'},
        {name: 'Protein', calorie: '20', unit: 'kcal'},
        {name: 'Carbo', calorie: '50', unit: 'k'},
        {name: 'Calories', calorie: '100', unit: 'kcal'},
      ],
    },
    {
      _id: 3,
      name: 'Drink',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      category: 3,
      isFav: false,
      calorie: '300 kcal',
      image: 'https://i.imgyukle.com/2020/08/22/uzVcGA.png',
      ingredients: [
        {
          name: 'Milk and yogurt',
          image: 'https://i.imgyukle.com/2020/08/21/uGwonR.png',
          quantity: '2 gr',
        },
        {
          name: 'Bread',
          image: 'https://i.imgyukle.com/2020/08/21/uGwonR.png',
          quantity: '1 pcs',
        },
        {
          name: 'Butter',
          image: 'https://i.imgyukle.com/2020/08/21/uGwonR.png',
          quantity: '100 gr',
        },
      ],
      nutritions: [
        {name: 'Fat', calorie: '30', unit: 'g'},
        {name: 'Protein', calorie: '20', unit: 'kcal'},
        {name: 'Carbo', calorie: '50', unit: 'k'},
        {name: 'Calories', calorie: '100', unit: 'kcal'},
      ],
    },
  ],
  product: null,
};

export default function (state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case SET_FAVORITE:
      return {
        ...state,
        products: state.products.map((product) =>
          product._id === payload._id ? {...product, payload} : product,
        ),
      };
    case SET_PRODUCT_DETAIL:
      return {
        ...state,
        product: payload,
      };
    case SET_PRODUCT_DETAIL_FAV:
      return {
        ...state,
        product: payload,
      };
    default:
      return state;
  }
}
