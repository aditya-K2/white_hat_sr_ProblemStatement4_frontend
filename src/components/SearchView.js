import React, {useState} from 'react'
import styles from "./SearchView.module.css"
import FoodCard from "./FoodCard.js"

const SearchView = () => {

 const [searchInput, setSearchInput] = useState("");

 const menu = [

  { id: 1, name: "Belgium",      price: "Europe" },
  { id: 2, name: "India",        price: "Asia" },
  { id: 3, name: "Bolivia",      price: "South America" },
  { id: 4, name: "Ghana",        price: "Africa" },
  { id: 5, name: "Japan",        price: "Asia" },
  { id: 6, name: "Canada",       price: "North America" },
  { id: 7, name: "New Zealand",  price: "Australasia" },
  { id: 8, name: "Italy",        price: "Europe" },
  { id: 9, name: "South Africa", price: "Africa" },
  { id: 10, name: "China",        price: "Asia" },
  { id: 11, name: "Paraguay",     price: "South America" },
  { id: 12, name: "Usa",          price: "North America" },
  { id: 13, name: "France",       price: "Europe" },
  { id: 14, name: "Botswana",     price: "Africa" },
  { id: 15, name: "Spain",        price: "Europe" },
  { id: 16, name: "Senegal",      price: "Africa" },
  { id: 17, name: "Brazil",       price: "South America" },
  { id: 18, name: "Denmark",      price: "Europe" },
  { id: 19, name: "Mexico",       price: "South America" },
  { id: 20, name: "Australia",    price: "Australasia" },
  { id: 21, name: "Tanzania",     price: "Africa" },
  { id: 22, name: "Bangladesh",   price: "Asia" },
  { id: 23, name: "Portugal",     price: "Europe" },
  { id: 24, name: "Pakistan",     price: "Asia" },

];

const handleChange = (e) => {
  e.preventDefault();
  setSearchInput(e.target.value);
};

if (searchInput.length > 0) {
    menu.filter((country) => {
    return country.name.match(searchInput);
});
}

return <div className={styles.searchView}>
    <input
       type="search"
       placeholder="Search here"
       onChange={handleChange}
       value={searchInput} />
    <div className={styles.searchItems}>
    { menu.map(menu_item => <FoodCard key={menu_item.id} price={menu_item.price} name={menu_item.name}/>)}
    </div>
</div>
};

export default SearchView;
