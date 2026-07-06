const imagePath = (fileName) => `${import.meta.env.BASE_URL}images/${fileName}`;

const products = [
  {
    id: 1,
    name: 'Пальто Obsidian',
    category: 'Верхняя одежда',
    gender: 'Женское',
    price: 9800,
    oldPrice: 12900,
    description: 'Премиальное шерстяное пальто с точной посадкой, мягкой линией плеча и бархатистой фактурой.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Midnight', 'Cocoa'],
    images: [
      imagePath('5258424002500303402.jpg'),
      imagePath('5258424002500303404.jpg')
    ],
    isNew: true,
    isPopular: true,
    inStock: true,
    material: 'Шерсть 70%, акрил 30%'
  },
  {
    id: 2,
    name: 'Шелковая рубашка Noir',
    category: 'Костюм',
    gender: 'Мужское',
    price: 4200,
    oldPrice: 5600,
    description: 'Легкая рубашка из шелка с минималистичным кроем, матовым блеском и приятной текстурой.',
    sizes: ['S', 'M', 'L'],
    colors: ['Black', 'Ivory'],
    images: [
      imagePath('5258424002500303413.jpg'),
      imagePath('5258424002500303415.jpg')
    ],
    isNew: false,
    isPopular: true,
    inStock: true,
    material: 'Шелк 100%'
  },
  {
    id: 3,
    name: 'Костюм Noir Atelier',
    category: 'Костюм',
    gender: 'Женское',
    price: 7600,
    oldPrice: 9500,
    description: 'Чёрный костюм с мягкой линией пиджака, прямыми брюками и уверенной вечерней посадкой.',
    sizes: ['S', 'M', 'L'],
    colors: ['Black'],
    images: [
      imagePath('5258424002500303397.jpg'),
      imagePath('5258424002500303398.jpg')
    ],
    isNew: true,
    isPopular: false,
    inStock: true,
    material: 'Шерсть 70%, вискоза 30%'
  },
  {
    id: 4,
    name: 'Кепка Ashline',
    category: 'Аксессуары',
    gender: 'Унисекс',
    price: 6400,
    oldPrice: 7900,
    description: 'Лаконичная кепка с плотной посадкой, аккуратной фактурой и спокойным премиальным оттенком.',
    sizes: ['One Size'],
    colors: ['Black', 'Graphite'],
    images: [
      imagePath('5334774008328689930.jpg'),
      imagePath('5334774008328689934.jpg')
    ],
    isNew: false,
    isPopular: true,
    inStock: false,
    material: 'Хлопок 70%, полиэстер 30%'
  },
  {
    id: 5,
    name: 'Свитер Monarch Wool',
    category: 'Верхняя одежда',
    gender: 'Мужское',
    price: 5500,
    oldPrice: 7000,
    description: 'Уютный свитер из мериноса с плотной вязкой, чистой линией и спокойным премиальным характером.',
    sizes: ['M', 'L', 'XL'],
    colors: ['Graphite', 'Mauve'],
    images: [
      imagePath('5258424002500303426.jpg'),
      imagePath('5258424002500303428.jpg')
    ],
    isNew: true,
    isPopular: true,
    inStock: true,
    material: 'Меринос 100%'
  },
  {
    id: 6,
    name: 'Трикотажный сет Eclipse',
    category: 'Нижняя одежда',
    gender: 'Женское',
    price: 4900,
    oldPrice: 6200,
    description: 'Комплект из мягкого трикотажа для вечерних прогулок, путешествий и городского стиля.',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Espresso', 'Pearl'],
    images: [
      imagePath('5258424002500303406.jpg'),
      imagePath('5258424002500303407.jpg')
    ],
    isNew: false,
    isPopular: true,
    inStock: true,
    material: 'Хлопок 60%, вискоза 40%'
  },
  {
    id: 7,
    name: 'Тренч Cinder',
    category: 'Верхняя одежда',
    gender: 'Мужское',
    price: 8900,
    oldPrice: 11200,
    description: 'Длинный тренч с мягкой драпировкой, аккуратным воротником и лаконичным силуэтом.',
    sizes: ['S', 'M', 'L'],
    colors: ['Cinder', 'Stone'],
    images: [
      imagePath('5258424002500303399.jpg'),
      imagePath('5258424002500303400.jpg')
    ],
    isNew: true,
    isPopular: false,
    inStock: true,
    material: 'Хлопок 70%, полиэстер 30%'
  },
  {
    id: 8,
    name: 'Кепка Aurelia',
    category: 'Аксессуары',
    gender: 'Женское',
    price: 2800,
    oldPrice: 3600,
    description: 'Кепка в тёплом бежевом оттенке с чистой формой и тонкой отделкой.',
    sizes: ['One Size'],
    colors: ['Gold', 'Ivory'],
    images: [
      imagePath('5334774008328689941.jpg'),
      imagePath('5334774008328689942.jpg')
    ],
    isNew: false,
    isPopular: true,
    inStock: true,
    material: 'Хлопок 80%, эластан 20%'
  },
  {
    id: 9,
    name: 'Жакет Sculpted Wool',
    category: 'Костюм',
    gender: 'Мужское',
    price: 7600,
    oldPrice: 9400,
    description: 'Жакет с четкими линиями, свободной посадкой и плотной шерстяной фактурой.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Coal', 'Camel'],
    images: [
      imagePath('5334774008328689918.jpg'),
      imagePath('5334774008328689919.jpg')
    ],
    isNew: false,
    isPopular: true,
    inStock: true,
    material: 'Шерсть 80%, полиэстер 20%'
  },
  {
    id: 10,
    name: 'Кепка Lumen',
    category: 'Аксессуары',
    gender: 'Унисекс',
    price: 3400,
    oldPrice: 4200,
    description: 'Минималистичная кепка с мягким козырьком и глубоким матовым оттенком.',
    sizes: ['One Size'],
    colors: ['Black', 'Taupe'],
    images: [
      imagePath('5334774008328689931.jpg'),
      imagePath('5334774008328689932.jpg')
    ],
    isNew: true,
    isPopular: false,
    inStock: true,
    material: 'Хлопок 70%, полиэстер 30%'
  },
  {
    id: 11,
    name: 'Блуза Ember Evening',
    category: 'Нижняя одежда',
    gender: 'Женское',
    price: 4100,
    oldPrice: 5200,
    description: 'Блуза с тонкой драпировкой, мягким блеском и выразительной линией плеч.',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Rose', 'Cream'],
    images: [
      imagePath('5258424002500303422.jpg'),
      imagePath('5258424002500303423.jpg')
    ],
    isNew: true,
    isPopular: false,
    inStock: false,
    material: 'Шелк 70%, вискоза 30%'
  },
  {
    id: 12,
    name: 'Лоферы Contour Leather',
    category: 'Обувь',
    gender: 'Унисекс',
    price: 2300,
    oldPrice: 2900,
    description: 'Кожаные лоферы с мягкой стелькой, вытянутой линией носа и спокойным премиальным блеском.',
    sizes: ['S', 'M', 'L'],
    colors: ['Black', 'Mink'],
    images: [
      imagePath('5357499384666462324.jpg'),
      imagePath('5357499384666462325.jpg')
    ],
    isNew: false,
    isPopular: true,
    inStock: true,
    material: 'Натуральная кожа 100%'
  }
];

export default products;
