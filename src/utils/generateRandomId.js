// Создание случайно-сгенерированного id
export const generateRandomId = () =>
  Math.random().toString(36).substring(2, 8) +
  Date.now().toString().substring(9);

// Добавление в объект свойства id: с значением generateRandomId (при .map)
export const assignId = (obj) => ({ ...obj, id: generateRandomId() });
