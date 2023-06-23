// pass in an object get back hash value
export function compareHash(obj) {
  if (obj === null || obj === undefined) return
  let str = JSON.stringify(obj)
  let hash = 0, i, chr, len;
  if (str.length === 0) return hash;
  for (i = 0, len = str.length; i < len; i++) {
    chr = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
}

export const updateCarts = (carts, newObj, qty) => {
  //get new obj hash value
  const hash = compareHash(newObj.productInfo)

  //find if exist product is in previous cart list, return index, existing cart item
  const index = carts.findIndex(prevObj => compareHash(prevObj.productInfo) === hash)
  const existingCartItem = carts[index]

  let updatedCarts = [...carts]

  //if cart item exists, update its quantity, else add the new obj to previous cart list
  if (existingCartItem) {
    const updatedItem = {...existingCartItem, qty: existingCartItem.qty + Number(qty)}
    updatedCarts = [...updatedCarts]
    updatedCarts[index] = updatedItem
  } else {
    updatedCarts = [...updatedCarts, newObj]
  }
  return updatedCarts
}

// update target product's quantity in cart list, if new quantity equal zero, delete the obj in cart list
export const editCartByQuantity = (carts, targetProduct, newQty) => {
  const targetIndex = carts.findIndex(item => compareHash(item.productInfo) === compareHash(targetProduct))
  const targetItem = carts[targetIndex]

  let editedList = [...carts]

  if (newQty === 0) {
    editedList = editedList.filter(item => compareHash(item.productInfo) !== compareHash(targetProduct))
  } else {
    editedList[targetIndex] = {...targetItem, qty: newQty}
  }
  return editedList
}

// update target product list by filter the target product
export const removeCartItem = (carts, product) => {
  let removedList = [...carts]
  removedList = removedList.filter(item => compareHash(item.productInfo) !== compareHash(product))
  return removedList
}