import HomePage from "../pages/HomePage/HomePage"
import OrderPage from "../pages/OrderPage/OrderPage"
import ServicePage from "../pages/ServicePage/ServicePage"
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
        path:  '/service',
        page: ServicePage,
        isShowHeader: true
    },
    {
        path:  '*',
        page: NotFoundPage
    },

]