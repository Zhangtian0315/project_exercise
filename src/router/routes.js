import Home from '../pages/home/Home'
import Category from '../pages/category/Category'
import Personal from '../pages/personal/Personal'
import Recognize from '../pages/recognize/Recognise'
import ShopCart from '../pages/category/Category'
export default [
  {
    path:'/home',
    component:Home
  },
  {
    path:'/category',
    component:Category
  },
  {
    path:'/personal',
    component:Personal
  },
  {
    path:'/recognize',
    component:Recognize
  },
  {
    path:'/shopcart',
    component:ShopCart
  },
  {
    path: '/',
    redirect: '/home'
  }
]
