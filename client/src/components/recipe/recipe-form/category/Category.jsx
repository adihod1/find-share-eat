import { element } from "prop-types";
import { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";


function Category({getCategories, categoriesList, addCategory }) {

  const [selectCategory, setSelectCategory] = useState('Dessert');

  const handleAddCategory = useCallback( (e) => {
    console.log('ssw', categoriesList)
    const findCategoryId= categoriesList.find(element => element.categoryName==e.target.value)?.id
    console.log('fff',findCategoryId)

    setSelectCategory(findCategoryId);
    console.log('ccccc',selectCategory)
    addCategory(findCategoryId);
    console.log('bla')
    // setSelectCategory("");
  }, [categoriesList]);

  useEffect(() => {
    getCategories();

  }, []);

  return (
    <div>
    <h1 className="title">Category</h1>
    {/* <p>please choose a category.</p> */}
    <select 
    id="category"
    name="category"
    rows={1}
    // onSubmit={handleAddCategory}
    onChange={handleAddCategory}>
      {categoriesList.map((category) => (
        <option key={category.id} value={category.categoryName}>{category.categoryName}</option>
      ))}
    </select>
  </div>
  );
}

export default Category;
