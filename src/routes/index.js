import HomePage from "../pages/HomePage/HomePage"
import OrderPage from "../pages/OrderPage/OrderPage"
import ServicePage from "../pages/ServicePage/ServicePage"
import IntroducePage from "../pages/IntroductPage/IntroducePage"

import ServiceDetailPage from  "../pages/ServiceDetailPage/ServiceDetailPage"
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage"

export const routes = [
    {
        path:  '/',
        page: HomePage,
        isShowHeader: true
    },
    {
        path:  '/order',
        page: OrderPage,
        isShowHeader: true
    },
    {
        path:  '/services',
        page: ServicePage,
        isShowHeader: true
    },
    {
        path:  '/introduce',
        page: IntroducePage,
        isShowHeader: true
    },
    {
        path:  '/detail',
        page: ServiceDetailPage,
        isShowHeader: true
    },
    {
        path:  '*',
        page: NotFoundPage
    },

]