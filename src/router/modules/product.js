import ProductList from '@/views/product/ProductList'
import ProductDetail from '@/views/product/ProductDetail'
import ProductReg from '@/views/product/ProductReg'

const productRouter = [
  {
    path : '/product/list',
    component : ProductList,
  },
  {
    path: '/product/detail/:productCode',
    component: ProductDetail,
    props : true
  },            
  {
    path : '/product/reg',
    component : ProductReg,
  },
]

export default productRouter