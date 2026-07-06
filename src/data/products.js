const imagePath = (fileName) => `${import.meta.env.BASE_URL}images/${fileName}`;

const products = [
  {
    id: 1,
    name: 'Черный костюм Atelier',
    category: 'Костюм',
    gender: 'Мужское',
    price: 18900,
    oldPrice: 22900,
    description: 'Черный костюм с однобортным пиджаком и прямыми брюками. Лаконичная посадка для делового и вечернего образа.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black'],
    images: [
      imagePath('5258424002500303397.jpg'),
      imagePath('5258424002500303399.jpg'),
      imagePath('5258424002500303398.jpg')
    ],
    isNew: true,
    isPopular: true,
    inStock: true,
    material: 'Шерсть 65%, вискоза 35%'
  },
  {
    id: 2,
    name: 'Серый пиджак Milano',
    category: 'Костюм',
    gender: 'Мужское',
    price: 14900,
    oldPrice: 17900,
    description: 'Серый фактурный пиджак с мягкой линией плеча и спокойным премиальным оттенком.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Ash', 'Stone'],
    images: [
      imagePath('5258424002500303402.jpg'),
      imagePath('5258424002500303404.jpg'),
      imagePath('5258424002500303403.jpg')
    ],
    isNew: false,
    isPopular: true,
    inStock: true,
    material: 'Шерсть 55%, полиэстер 45%'
  },
  {
    id: 3,
    name: 'Темно-синяя рубашка Oxford',
    category: 'Верхняя одежда',
    gender: 'Мужское',
    price: 6900,
    oldPrice: 8500,
    description: 'Плотная рубашка темно-синего оттенка с аккуратным воротником и чистой линией застежки.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Midnight'],
    images: [
      imagePath('5258424002500303413.jpg'),
      imagePath('5258424002500303414.jpg'),
      imagePath('5258424002500303415.jpg')
    ],
    isNew: true,
    isPopular: false,
    inStock: true,
    material: 'Хлопок 100%'
  },
  {
    id: 4,
    name: 'Белое поло Essential',
    category: 'Верхняя одежда',
    gender: 'Унисекс',
    price: 3900,
    oldPrice: 4900,
    description: 'Белое поло свободной посадки из мягкого трикотажа. Базовая вещь для спокойного премиального гардероба.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Ivory', 'White'],
    images: [
      imagePath('5258424002500303417.jpg'),
      imagePath('5258424002500303418.jpg'),
      imagePath('5258424002500303419.jpg')
    ],
    isNew: false,
    isPopular: true,
    inStock: true,
    material: 'Хлопок 92%, эластан 8%'
  },
  {
    id: 5,
    name: 'Молочное поло Resort',
    category: 'Верхняя одежда',
    gender: 'Унисекс',
    price: 4200,
    oldPrice: 5200,
    description: 'Молочное поло с мягким воротником и плотной тканью. Хорошо работает с брюками и костюмными комплектами.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Ivory', 'Cream'],
    images: [
      imagePath('5258424002500303422.jpg'),
      imagePath('5258424002500303423.jpg'),
      imagePath('5258424002500303424.jpg')
    ],
    isNew: true,
    isPopular: true,
    inStock: true,
    material: 'Хлопок 95%, эластан 5%'
  },
  {
    id: 6,
    name: 'Темно-синее поло Navy',
    category: 'Верхняя одежда',
    gender: 'Мужское',
    price: 4200,
    oldPrice: 5200,
    description: 'Темно-синее поло с минималистичной посадкой и аккуратной отделкой рукавов.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Midnight'],
    images: [
      imagePath('5258424002500303426.jpg'),
      imagePath('5258424002500303427.jpg'),
      imagePath('5258424002500303428.jpg')
    ],
    isNew: false,
    isPopular: true,
    inStock: true,
    material: 'Хлопок 92%, эластан 8%'
  },
  {
    id: 7,
    name: 'Коричневые брюки Tailored',
    category: 'Нижняя одежда',
    gender: 'Мужское',
    price: 7900,
    oldPrice: 9900,
    description: 'Коричневые брюки с аккуратной стрелкой и посадкой, которая держит форму без лишней жесткости.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Cocoa', 'Brown'],
    images: [
      imagePath('5258424002500303406.jpg'),
      imagePath('5258424002500303407.jpg')
    ],
    isNew: true,
    isPopular: false,
    inStock: true,
    material: 'Вискоза 60%, полиэстер 40%'
  },
  {
    id: 8,
    name: 'Черные брюки Classic',
    category: 'Нижняя одежда',
    gender: 'Мужское',
    price: 7600,
    oldPrice: 9400,
    description: 'Черные брюки прямого кроя с лаконичной посадкой. Подходят к пиджаку, рубашке и поло.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black'],
    images: [
      imagePath('5258424002500303400.jpg'),
      imagePath('5334774008328689927.jpg'),
      imagePath('5334774008328689928.jpg')
    ],
    isNew: false,
    isPopular: true,
    inStock: true,
    material: 'Вискоза 55%, полиэстер 45%'
  },
  {
    id: 9,
    name: 'Кепка Graphite',
    category: 'Аксессуары',
    gender: 'Унисекс',
    price: 2900,
    oldPrice: 3600,
    description: 'Графитовая кепка с плотной формой и аккуратной перфорацией. Спокойный аксессуар на каждый день.',
    sizes: ['One Size'],
    colors: ['Graphite', 'Black'],
    images: [
      imagePath('5334774008328689930.jpg'),
      imagePath('5334774008328689934.jpg'),
      imagePath('5334774008328689943.jpg')
    ],
    isNew: true,
    isPopular: true,
    inStock: true,
    material: 'Хлопок 70%, полиэстер 30%'
  },
  {
    id: 10,
    name: 'Кепка Sand',
    category: 'Аксессуары',
    gender: 'Унисекс',
    price: 2900,
    oldPrice: 3600,
    description: 'Кепка песочного оттенка с мягким козырьком и чистой формой. Хорошо сочетается с коричневой и серой палитрой.',
    sizes: ['One Size'],
    colors: ['Gold', 'Sand'],
    images: [
      imagePath('5334774008328689941.jpg'),
      imagePath('5334774008328689931.jpg'),
      imagePath('5334774008328689932.jpg')
    ],
    isNew: false,
    isPopular: false,
    inStock: true,
    material: 'Хлопок 80%, эластан 20%'
  },
  {
    id: 11,
    name: 'Черные дерби Leather',
    category: 'Обувь',
    gender: 'Мужское',
    price: 12900,
    oldPrice: 15900,
    description: 'Черные кожаные дерби с аккуратной шнуровкой, мягкой стелькой и золотистой фурнитурой.',
    sizes: ['S', 'M', 'L'],
    colors: ['Black'],
    images: [
      imagePath('5357499384666462324.jpg'),
      imagePath('5357499384666462325.jpg'),
      imagePath('5357499384666462350.jpg'),
      imagePath('5357499384666462351.jpg')
    ],
    isNew: true,
    isPopular: true,
    inStock: true,
    material: 'Натуральная кожа 100%'
  },
  {
    id: 12,
    name: 'Оливковые лоферы Soft Step',
    category: 'Обувь',
    gender: 'Мужское',
    price: 11900,
    oldPrice: 14500,
    description: 'Оливковые лоферы с белой подошвой, мягкой посадкой и декоративным швом по носку.',
    sizes: ['S', 'M', 'L'],
    colors: ['Olive', 'Mink'],
    images: [
      imagePath('5357499384666462356.jpg'),
      imagePath('5357499384666462357.jpg'),
      imagePath('5357499384666462359.jpg'),
      imagePath('5357499384666462360.jpg')
    ],
    isNew: false,
    isPopular: true,
    inStock: true,
    material: 'Натуральная кожа 100%'
  }
];

export default products;
