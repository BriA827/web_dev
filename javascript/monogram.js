const productList = document.querySelectorAll(".product")
const shopBtnList = document.querySelectorAll(".shop-btn")
const priceList = document.querySelectorAll(".itemPrice")

productList.forEach(product => {
    product.addEventListener("mouseover", () => {
        let index = parseInt(product.id)
        shopBtnList[index].style.display = "block"
        priceList[index].style.display = "none"
    })
});

productList.forEach(product => {
    product.addEventListener("mouseout", () => {
        let index = parseInt(product.id)
        shopBtnList[index].style.display = "none"
        priceList[index].style.display = "block"
    })
});