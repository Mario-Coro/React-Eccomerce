export const Fetch = (products) => {
  getDocs(products)
  .then((data)=>{
    const list = data.docs.map((product)=>{
      return{
        ...product.data(), id: product.id
      }
    })
    setProductList(list)
    setLoading(false)
  })
};
