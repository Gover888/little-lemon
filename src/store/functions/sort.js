//sort related function

//sort target product list according to a string
export const sortByString = (string, productList) => {
    // 'price high to low' vs 'price low to high'
    if (string.includes('price')) {
        let increasing = string.includes('high to low') //expecting boolean
        productList = sortByPrice(productList, increasing)
        // 'name a to z' vs 'name z to a'
    } else if (string.includes('name')) {
        let increasing = string.includes('a to z')
        productList = sortByName(productList, increasing)
    }
    return productList
}

// sort target product list by product price according to a boolean
export const sortByPrice = (products, ascending) => {
    return products.sort((a, b) => {
        if (ascending) {
            return b.price - a.price
        } else {
            return a.price - b.price
        }
    })
}

// sort target product list by product name according to a boolean
export const sortByName = (products, ascending) => {
    return products.sort((a, b) => {
        if (ascending) {
            return a.name > b.name ? 1 : -1
        } else {
            return b.name > a.name ? 1 : -1
        }
    })
}
