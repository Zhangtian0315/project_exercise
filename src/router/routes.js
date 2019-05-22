import Home from '../pages/home/Home'
import Category from '../pages/category/Category'
import Personal from '../pages/personal/Personal'
import Recognize from '../pages/recognize/Recognise'
import ShopCart from '../pages/shopCart/ShopCart'
import Search from '../pages/search/Search'
import Recommend from '../pages/recognize/recommend/Recommend'
import Others from '../pages/recognize/others/Others'
import PhoneLogin from '../pages/personal/phoneLogin/phoneLogin'
import EmailLogin from '../pages/personal/emailLogin/emailLogin'
export default [
  {
    path:'/home',
    component:Home,
    meta: {
      showFooter: true,
      showHeader: true
    }
  },
  {
    path:'/category',
    component:Category,
    meta: {
      showFooter: true
    }
  },
  {
    path:'/personal',
    component:Personal,
    children: [
      {path:'/personal/phoneLogin', component:PhoneLogin},
      {path:'/personal/emailLogin', component:EmailLogin},
    ]
  },

  {
    path:'/recognize',
    component:Recognize,
    meta: {
      showFooter: true
    },

    children:[{
      path:'/recognize/recommend', component:Recommend,
      meta: {
        showFooter: true
      }},
      {
        path:'/recognize/others',
        component:Others,
        meta: {
          showFooter: true
        }
        },
      {
        path: '',
        redirect: '/recognize/recommend'
      }
    ],

  },
  {
    path:'/shopcart',
    component:ShopCart,
    meta: {
      showFooter: true
    }
  },
  {
    path:'/search',
    component:Search
  },
  {
    path: '/',
    redirect: '/home'
  }
]
