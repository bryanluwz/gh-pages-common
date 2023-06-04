export function setLocalStorageValue(itemName, item) {
	localStorage.setItem(itemName, JSON.stringify(item));
}

export function getLocalStorageItem(itemName) {
	const item = localStorage.getItem(itemName);
	if (item) {
		return JSON.parse(item);
	}
	return null;
}

export function removeLocalStorageItem(itemName) {
	localStorage.removeItem(itemName);
}

export function clearLocalStorage() {
	localStorage.clear();
}