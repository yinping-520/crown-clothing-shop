import { useContext } from "react"
import { ProductContext } from "../../contexts/products.context"
import ProductCard from '../../components/product-cards/product-card.component'
import './shop.style.scss'
const Shop = () => {
    // const {currentProduct, setCurrentProduct} = useContext(ProductContext)
    // setCurrentProduct(SHOP_DATA)
    const {products} = useContext(ProductContext)
    
    return (
        <div className="products-container">
            {products.map((product) => (
                <ProductCard key={product.id} product={product}/>
            )
            )}
        </div>
    )
}

export default Shop