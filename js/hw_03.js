//Task 7
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location =  {country: 'Jamaica', city: 'Kingston'};



// console.log(apartment);
// area - площадь в квадратных метрах, число 60;
// rooms - количество комнат, число 3;
// location - местоположение квартиры, обьект со следующими вложенными свойствами;
// country - страна, строка "Jamaica";
// city - город, строка "Kingston".

//Task 10
const apartment1 = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};

for (const key in apartment1) {
    console.log(key)
}
for (const value in apartment1) {
    console.log(apartment1[value])
}

//Task 11
const keys = [];
const values = [];
const advert = {
  service: "apt",
};
const apartment = Object.create(advert);
apartment.descr = "Spacious apartment in the city center";
apartment.rating = 4;
apartment.price = 2153;

for (const key in apartment) {

    if (apartment.hasOwnProperty(key)) {
        
  keys.push(key);
  values.push(apartment[key]);
    }


  
}
console.log(keys);
console.log(values);
console.log(advert);
console.log(apartment);

//Task 12
