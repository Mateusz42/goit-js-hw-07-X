const categories = document.querySelectorAll('#categories > li.item');

const numberOfCategories = categories.length;
console.log(`Number of categories: ${numberOfCategories}\n`);

categories.forEach(category => {
 
  const categoryName = category.querySelector('h2').textContent;
  
  const elements = category.querySelectorAll('ul > li');
  
  const numberOfElements = elements.length;
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${numberOfElements}\n`);
});