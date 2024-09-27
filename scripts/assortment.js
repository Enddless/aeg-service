const assortmentData = [
  {
    name: 'Стиральные машины',
    assortment_id: 'Стиральная машина',
    assortment_prices: [
      {
        id: 0,
        name: 'Замена насоса',
        price: 1100
      },
      {
        id: 1,
        name: 'Устранение засора',
        price: 650
      },
      {
        id: 2,
        name: 'Замена сетевого шнура',
        price: 550
      },
      {
        id: 3,
        name: 'Разборка стиральной машины',
        price: 950
      },
      {
        id: 4,
        name: 'Замена датчиков',
        price: 850
      },
      {
        id: 5,
        name: 'Замена тэна',
        price: 750
      },
      {
        id: 6,
        name: 'Чистка системы слива',
        price: 850
      },
      {
        id: 7,
        name: 'Ремонт или Замена помпы',
        price: 130
      },
      {
        id: 8,
        name: 'Замена подшипника',
        price: 750
      },
      {
        id: 9,
        name: 'Замена амортизаторов',
        price: 1000
      }
    ]
  },
  {
    name: 'Посудомоечные машины',
    assortment_id: 'Посудомоечная машина',
    assortment_prices: [
      {
        id: 0,
        name: 'Замена насоса',
        price: 1100
      },
      {
        id: 1,
        name: 'Устранение засора',
        price: 650
      },
      {
        id: 2,
        name: 'Ремонт электродвигателя',
        price: 1350
      },
      {
        id: 3,
        name: 'Ремонт электроцепи',
        price: 650
      },
      {
        id: 4,
        name: 'Устранение засора в сливе',
        price: 900
      },
      {
        id: 5,
        name: 'Замена или Ремонт устройства блокировки люка',
        price: 850
      },
      {
        id: 6,
        name: 'Ремонт или Замена мотора',
        price: 1000
      },
      {
        id: 7,
        name: 'Замена тэна',
        price: 750
      },
      {
        id: 8,
        name: 'Замена подшипника',
        price: 750
      },
      {
        id: 9,
        name: 'Замена амортизаторов',
        price: 1000
      }
    ]
  },
  {
    name: 'Сушильные машины',
    assortment_id: 'Сушильная машина',
    assortment_prices: [
      {
        id: 0,
        name: 'Замена уплотнителей',
        price: 600
      },
      {
        id: 1,
        name: 'Ремонт реле уровня воды',
        price: 650
      },
      {
        id: 2,
        name: 'Замена ручки',
        price: 650
      },
      {
        id: 3,
        name: 'Восстановление контакта в электроцепи',
        price: 600
      },
      {
        id: 4,
        name: 'Замена датчика температуры',
        price: 850
      },
      {
        id: 5,
        name: 'Замена тэна',
        price: 700
      },
      {
        id: 6,
        name: 'Установка ремня',
        price: 900
      },
      {
        id: 7,
        name: 'Замена амортизаторов',
        price: 1000
      },
      {
        id: 8,
        name: 'Ремонт или Замена сливного насоса',
        price: 13
      },
      {
        id: 9,
        name: 'Ремонт модуля',
        price: 1000
      }
    ]
  },
  {
    name: 'Холодильники',
    assortment_id: 'Холодильник',
    assortment_prices: [
      {
        id: 0,
        name: 'Заправка фреоном',
        price: 180
      },
      {
        id: 1,
        name: 'Устранение утечки хладагена',
        price: 800
      },
      {
        id: 2,
        name: 'Прочистка дренажной системы',
        price: 900
      },
      {
        id: 3,
        name: 'Замена трубопровода',
        price: 150
      },
      {
        id: 4,
        name: 'Замена датчика температуры',
        price: 1750
      },
      {
        id: 5,
        name: 'Ремонт платы управления',
        price: 1000
      },
      {
        id: 6,
        name: 'Замена или ремонт компрессора',
        price: 1650
      },
      {
        id: 7,
        name: 'Ремонт',
        price: 800
      },
      {
        id: 8,
        name: 'Замена нагревателя оттаивания',
        price: 1600
      },
      {
        id: 9,
        name: 'Замена дифростера',
        price: 700
      }
    ]
  },
  {
    name: 'Кофемашины',
    assortment_id: 'Кофемашина',
    assortment_prices: [
      {
        id: 0,
        name: 'Замена термостата',
        price: 600
      },
      {
        id: 1,
        name: 'Замена или Ремонт модуля управления',
        price: 800
      },
      {
        id: 2,
        name: 'Замена или Ремонт термоблока',
        price: 700
      },
      {
        id: 3,
        name: 'Замена сетевого шнура',
        price: 900
      },
      {
        id: 4,
        name: 'Чистка гидросистемы',
        price: 800
      },
      {
        id: 5,
        name: 'Удаление засора',
        price: 450
      },
      {
        id: 6,
        name: 'Затягивание патрубков',
        price: 450
      },
      {
        id: 7,
        name: 'Замена уплотнителей',
        price: 500
      },
      {
        id: 8,
        name: 'Пересоединение проводки',
        price: 600
      },
      {
        id: 9,
        name: 'Ремонт переключателя режимов',
        price: 900
      }
    ]
  },
  {
    name: 'Кухонные вытяжки',
    assortment_id: 'Кухонная вытяжка',
    assortment_prices: [
      {
        id: 0,
        name: 'Замена сетевого шнура',
        price: 500
      },
      {
        id: 1,
        name: 'Замена или Ремонт двигателя',
        price: 1000
      },
      {
        id: 2,
        name: 'Ремонт панели управления',
        price: 750
      },
      {
        id: 3,
        name: 'Замена предохранителя',
        price: 400
      },
      {
        id: 4,
        name: 'Замена кнопок',
        price: 400
      },
      {
        id: 5,
        name: 'Ремонт блока управления',
        price: 750
      },
      {
        id: 6,
        name: 'Замена или ремонт платы',
        price: 500
      },
      {
        id: 7,
        name: 'Замена лампы',
        price: 300
      },
      {
        id: 8,
        name: 'Замена или ремонт платы',
        price: 750
      },
      {
        id: 9,
        name: 'Замена предохранителя',
        price: 400
      }
    ]
  },
  {
    name: 'Винные шкафы',
    assortment_id: 'Винный шкаф',
    assortment_prices: [
      {
        id: 0,
        name: 'Заправка фреоном',
        price: 1000
      },
      {
        id: 1,
        name: 'Устранение утечки хладагента',
        price: 800
      },
      {
        id: 2,
        name: 'Замена или ремонт компрессора',
        price: 1650
      },
      {
        id: 3,
        name: 'Прочистка дренажной системы',
        price: 900
      },
      {
        id: 4,
        name: 'Замена трубопровода',
        price: 1500
      },
      {
        id: 5,
        name: 'Замена датчика температуры',
        price: 1700
      },
      {
        id: 6,
        name: 'Ремонт платы управления',
        price: 1000
      },
      {
        id: 7,
        name: 'Устранение утечки хладагента',
        price: 800
      },
      {
        id: 8,
        name: 'Замена или ремонт компрессора',
        price: 1650
      },
      {
        id: 9,
        name: 'Замена вентилятора обдува испарителя',
        price: 1800
      }
    ]
  },
  {
    name: 'Духовые шкафы',
    assortment_id: 'Духовой шкаф',
    assortment_prices: [
      {
        id: 0,
        name: 'Замена предохранителя',
        price: 1100
      },
      {
        id: 1,
        name: 'Замена проводки',
        price: 850
      },
      {
        id: 2,
        name: 'Ремонт или замена блока управления',
        price: 900
      },
      {
        id: 3,
        name: 'Замена или ремонт переключателей',
        price: 1500
      },
      {
        id: 4,
        name: 'Замена или ремонт сенсорной панели',
        price: 1250
      },
      {
        id: 5,
        name: 'Чистка панели',
        price: 650
      },
      {
        id: 6,
        name: 'Замена термостата',
        price: 1000
      },
      {
        id: 7,
        name: 'Замена регулятора температуры',
        price: 1000
      },
      {
        id: 8,
        name: 'Замена конфорки',
        price: 1000
      },
      {
        id: 9,
        name: 'Замена электроподжига',
        price: 1000
      }
    ]
  },
  {
    name: 'Варочные панели',
    assortment_id: 'Варочная панель',
    assortment_prices: [
      {
        id: 0,
        name: 'Замена предохранителя',
        price: 100
      },
      {
        id: 1,
        name: 'Замена проводки',
        price: 850
      },
      {
        id: 2,
        name: 'Ремонт или замена блока управления',
        price: 900
      },
      {
        id: 3,
        name: 'Замена или ремонт переключателей',
        price: 1500
      },
      {
        id: 4,
        name: 'Замена или ремонт сенсорной панели',
        price: 1250
      },
      {
        id: 5,
        name: 'Чистка панели',
        price: 650
      },
      {
        id: 6,
        name: 'Замена термостата',
        price: 900
      },
      {
        id: 7,
        name: 'Замена или ремонт конфорки',
        price: 850
      },
      {
        id: 8,
        name: 'Чистка форсунок',
        price: 500
      },
      {
        id: 9,
        name: 'Замена тэна',
        price: 1000
      }
    ]
  },
  {
    name: 'Морозильные камеры',
    assortment_id: 'Морозильная камера',
    assortment_prices: [
      {
        id: 0,
        name: 'Заправка фреоном',
        price: 1800
      },
      {
        id: 1,
        name: 'Устранение утечки хладагента',
        price: 800
      },
      {
        id: 2,
        name: 'Прочистка дренажной системы',
        price: 900
      },
      {
        id: 3,
        name: 'Замена трубопровода',
        price: 1500
      },
      {
        id: 4,
        name: 'Замена датчика температуры',
        price: 1700
      },
      {
        id: 5,
        name: 'Ремонт платы управления',
        price: 1000
      },
      {
        id: 6,
        name: 'Замена термостата',
        price: 700
      },
      {
        id: 7,
        name: 'Замена или ремонт компрессора',
        price: 1650
      },
      {
        id: 8,
        name: 'Замена вентилятора обдува испарителя',
        price: 1800
      },
      {
        id: 9,
        name: 'Замена реле',
        price: 1000
      }
    ]
  }
];

const filterBx = document.querySelector('.assortment-filterBx');
const serviceList = document.querySelector('.service-list');
const loadMoreButton = document.querySelector('.table-more');

let currentIndex = 0; // Индекс для текущего отображаемого элемента
const itemsToShow = 5; // Первоначально показываем 5 элементов
const additionalItems = 3; // Количество элементов, показываемых при нажатии "Показать еще"

// Функция для обновления списка услуг
function updateServiceList(selectedItem, startIndex, itemCount) {
  // Добавляем услуги из выбранного элемента
  const servicesToShow = selectedItem.assortment_prices.slice(
    startIndex,
    startIndex + itemCount
  );
  servicesToShow.forEach((service) => {
    const row = document.createElement('tr');
    row.className = 'row';

    row.innerHTML = `
            <td class="sorting_1">
                <a href="">${service.name}</a>
            </td>
            <td>
                <a href="">от ${service.price} ₽</a>
            </td>
            <td>${selectedItem.assortment_id}</td>
        `;

    serviceList.appendChild(row);
  });
}

// Обработка нажатий на кнопки
assortmentData.forEach((item, index) => {
  const button = document.createElement('div');
  button.className = 'assortment-filterBx__item';
  button.textContent = item.name;

  // Устанавливаем первую кнопку активной
  if (index === 0) {
    button.classList.add('active');
    updateServiceList(item, currentIndex, itemsToShow); // Загружаем услуги для первой кнопки
  }

  button.addEventListener('click', () => {
    // Убираем активный класс у всех кнопок
    document
      .querySelectorAll('.assortment-filterBx__item')
      .forEach((btn) => {
        btn.classList.remove('active');
      });

    // Устанавливаем активный класс на нажатую кнопку
    button.classList.add('active');

    // Сбрасываем индекс и обновляем список услуг
    currentIndex = 0; // Сбрасываем индекс при смене кнопки
    serviceList.innerHTML = ''; // Очищаем список перед обновлением
    updateServiceList(item, currentIndex, itemsToShow); // Загружаем первые 5 услуг
  });

  filterBx.appendChild(button);
});

// Обработка нажатия на кнопку "Показать еще"
loadMoreButton.addEventListener('click', () => {
  const activeButton = document.querySelector(
    '.assortment-filterBx__item.active'
  );
  const activeIndex = Array.from(filterBx.children).indexOf(
    activeButton
  );
  const selectedItem = assortmentData[activeIndex];

  currentIndex += additionalItems; // Увеличиваем индекс для следующей партии услуг
  updateServiceList(selectedItem, currentIndex, additionalItems); // Загружаем дополнительные услуги
});
