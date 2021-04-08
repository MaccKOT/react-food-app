import { API_URL } from './config';

//Lookup full meal details by id
//www.themealdb.com/api/json/v1/1/lookup.php?i=52772
const getMealById = async (mealId) => {
  const response = await fetch(API_URL + 'lookup.php?i=' + mealId.toString());
  return await response.json();
};

//List all meal categories
//www.themealdb.com/api/json/v1/1/categories.php
const getAllCategories = async () => {
  const response = await fetch(API_URL + 'categories.php');
  return await response.json();
};

//Filter by Category
//www.themealdb.com/api/json/v1/1/filter.php?c=Seafood
const getFilteredCategory = async (catName) => {
  const response = await fetch(API_URL + 'filter.php?c' + catName.toString());
  return await response.json();
};

export { getMealById, getAllCategories, getFilteredCategory };
