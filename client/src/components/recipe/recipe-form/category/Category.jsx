import { element } from "prop-types";
import { useState, useEffect, useCallback } from "react";


function Category({getCategories, categoriesList, addCategory }) {

  const [selectCategory, setSelectCategory] = useState('Dessert');

  const handleAddCategory = useCallback( (e) => {
    const findCategoryId= categoriesList.find(element => element.categoryName==e.target.value)?.id

    setSelectCategory(findCategoryId);
    addCategory(findCategoryId);
  }, [categoriesList]);

  useEffect(() => {
    getCategories();

  }, []);

  return (
    <div>
    <h1 className="title">Category</h1>
    <select 
    id="category"
    name="category"
    rows={1}
    onChange={handleAddCategory}>
      {categoriesList.map((category) => (
        <option key={category.id} value={category.categoryName}>{category.categoryName}</option>
      ))}
    </select>
  </div>
  );
}

export default Category;
