import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MyComponent = () => {
  const [dessertCategories, setDessertCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: 'https://www.themealdb.com/api/json/v1/1/categories.php',
      };

      try {
        const response = await axios.request(options);
        const dessertCategories = response.data.categories.slice(0, 4);
        setDessertCategories(dessertCategories);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  console.log(dessertCategories);

  return (
    <div>
      {dessertCategories.map((dessertCategory, index) => (
        <div className='adsContainer' key={index}>
          <h1 className='adsTitle'>{dessertCategory.strCategory}</h1>
          <div>
            <p className='ads_body'>{dessertCategory.strCategoryDescription}</p>
            <a className="adsLink" href={dessertCategory.strCategoryThumb}>Click Here!</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyComponent;


// try {
//     const response = await axios.request(options);
//     const dessertCategory = response.data.categories.find(
//       category => category.strCategory === 'Dessert'
//     );
//     setDessertCategory(dessertCategory);
//   } catch (error) {
//     console.error(error);
//   }
