export const saveToLocalStorage = (compareList) => {
  localStorage.setItem('compareList', JSON.stringify(compareList));
};

export const getFromLocalStorage = () => {
  const savedList = localStorage.getItem('compareList');
  return savedList ? JSON.parse(savedList) : [];
};
