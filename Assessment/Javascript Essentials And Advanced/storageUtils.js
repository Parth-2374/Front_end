

export const STORAGE_KEY = "appointments";


export function getItem() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error("storage get error", e);
    return [];
  }
}


export function setItem(arr) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(arr));
  } catch (e) {
    console.error("storage set error", e);
  }
}


export function appendItem(obj) {
  const arr = getItem();
  arr.push(obj);
  setItem(arr);
}


export function removeById(id) {
  const arr = getItem();
  const idx = arr.findIndex((x) => x.id === id);
  if (idx === -1) return false;
  arr.splice(idx, 1);
  setItem(arr);
  return true;
}
