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
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80'
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
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80'
    ],
    isNew: false,
    isPopular: true,
    inStock: true,
    material: 'Шелк 100%'
  },
  {
    id: 3,
    name: 'Платье Velvet Evening',
    category: 'Костюм',
    gender: 'Женское',
    price: 7600,
    oldPrice: 9500,
    description: 'Вечернее платье с бархатным блеском, мягкой драпировкой и выразительным силуэтом.',
    sizes: ['XS', 'S', 'M'],
    colors: ['Burgundy', 'Black'],
    images: [
      'https://images.unsplash.com/photo-1487412912498-0447578fcca8?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80'
    ],
    isNew: true,
    isPopular: false,
    inStock: true,
    material: 'Вискоза 80%, полиэстер 20%'
  },
  {
    id: 4,
    name: 'Сумка Ashline Tote',
    category: 'Аксессуары',
    gender: 'Унисекс',
    price: 6400,
    oldPrice: 7900,
    description: 'Структурированная сумка из мягкой кожи с продуманной внутренней организацией.',
    sizes: ['One Size'],
    colors: ['Ash', 'Black'],
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80'
    ],
    isNew: false,
    isPopular: true,
    inStock: false,
    material: 'Натуральная кожа 100%'
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
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80'
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
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80'
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
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80'
    ],
    isNew: true,
    isPopular: false,
    inStock: true,
    material: 'Хлопок 70%, полиэстер 30%'
  },
  {
    id: 8,
    name: 'Подвеска Aurelia',
    category: 'Аксессуары',
    gender: 'Женское',
    price: 2800,
    oldPrice: 3600,
    description: 'Минималистичный кулон из матового металла с тонкой отделкой и деликатным сиянием.',
    sizes: ['One Size'],
    colors: ['Gold', 'Silver'],
    images: [
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80'
    ],
    isNew: false,
    isPopular: true,
    inStock: true,
    material: 'Латунь, позолота'
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
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80'
    ],
    isNew: false,
    isPopular: true,
    inStock: true,
    material: 'Шерсть 80%, полиэстер 20%'
  },
  {
    id: 10,
    name: 'Сумка Lumen Crossbody',
    category: 'Аксессуары',
    gender: 'Унисекс',
    price: 3400,
    oldPrice: 4200,
    description: 'Компактная сумка с мягким ремнем, чистой формой и продуманным внутренним карманом.',
    sizes: ['One Size'],
    colors: ['Black', 'Taupe'],
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80'
    ],
    isNew: true,
    isPopular: false,
    inStock: true,
    material: 'Натуральная кожа 100%'
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
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80'
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
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80'
    ],
    isNew: false,
    isPopular: true,
    inStock: true,
    material: 'Натуральная кожа 100%'
  }
];

export default products;
