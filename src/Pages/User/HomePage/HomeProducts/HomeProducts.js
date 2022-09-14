import './style.scss'
import { useState, useEffect } from 'react'
import HomeProduct from './HomeProduct/HomeProduct'
import HomeProductPaginate from './HomeProductPaginate/HomeProductPaginate'
import { useQuery } from '../../../../hooks/useQuery'
import { getAllProducts } from '../../../../api/product'
import LoadingSpinner from '../../../../Components/LoadingSpinner/LoadingSpinner'

const HomeProducts = () => {
    const query = useQuery()
    const page = query.get('page') || 1
    console.log(page)
    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([])
    const [totalPages, setTotalPages] = useState(0)
    useEffect(() => {
        async function getproduct() {
            try {
                setLoading(true)
                const { data: { data } } = await getAllProducts({ page, sortBy: 'id', order: 'asc', size: 8 })
                console.log(data)
                setProducts(data.result)
                setTotalPages(data.totalPages)
            } catch (error) {
                console.log(error)
            }
            setLoading(false)
        }
        getproduct()
    }, [page])
    return (
        <div className="HomeProducts">
            <div className='HomeProducts__header'>Latest product</div>
            {loading ? <LoadingSpinner /> :

                <div className='HomeProducts__grid'>
                    {products.map((product) => (
                        <HomeProduct key={product.id} images={product.images[0]?.url} id={product.id} numOfReviews={product.numOfReviews} rating={product.rating} price={product.price} name={product.name} />
                    ))
                    }


                </div>
            }
            <div className='HomeProducts__pagination'>
                <HomeProductPaginate page={page} totalPages={totalPages} />
            </div>
        </div>
    )
}
export default HomeProducts