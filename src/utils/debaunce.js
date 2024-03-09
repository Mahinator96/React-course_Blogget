// Для того, чтобы передаваемая в аргументе функция не выполнялась очень часто
export const debounceRaf = (fn) => {
  let raf = 0;

  return (...args) => {
    if (raf) return;
    raf = requestAnimationFrame(() => {
      fn(...args);
      raf = 0;
    });
  };
};
