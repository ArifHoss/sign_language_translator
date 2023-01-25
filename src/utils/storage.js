export const storageSave = (key, value) => {
 // localStorage.setItem(key, JSON.stringify(value))
 sessionStorage.setItem(key, JSON.stringify(value))
}

export const storageRead = key => {
 // const data = localStorage.getItem(key)
 const data = sessionStorage.getItem(key)
 if (data) {
  return JSON.parse(data)
 }
 return null
}


export const storageDelete = key => {
 // localStorage.removeItem(key)
 sessionStorage.removeItem(key)
}