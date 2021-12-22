function getItem<T>(key: string): T {
  const data = localStorage.getItem(key);
  const parsedData = data ? JSON.parse(data) : null;
  return parsedData;
}

function getItemAsync<T>(key: string): Promise<T> {
  return new Promise((resolve, reject) => {
    try {
      const parsedData = getItem<T>(key);
      resolve(parsedData);
    } catch (error) {
      reject(error);
    }
  });
}

function setItem<T>(key: string, object: T): void {
  localStorage.setItem(key, JSON.stringify(object));
}

function setItemAsync<T>(key: string, object: T): Promise<void> {
  return new Promise((resolve, reject) => {
    try {
      setItem(key, object);
      resolve();
    } catch {
      reject();
    }
  });
}

export { getItem, getItemAsync, setItem, setItemAsync };
