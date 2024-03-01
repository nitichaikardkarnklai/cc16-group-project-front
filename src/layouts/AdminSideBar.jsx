import React from 'react'
import ToyMartLogo from '../assets/icon/ToyMartLogo'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
import HomeIcon from '../assets/icon/HomeIcon'
import ChatIcon from '../assets/icon/ChatIcon'
import TrendIcon from '../assets/icon/TrendIcon'
import UserIcon from '../assets/icon/UserIcon'
import ProductIcon from '../assets/icon/ProductIcon'
import CatagoriesIcon from '../assets/icon/CatagoriesIcon'
import TransactionIcon from '../assets/icon/TransactionIcon'

const menuList = [
    {
        id: 1,
        name: "Home",
        link: "/admin",
        component: <HomeIcon />
    },
    {
        id: 2,
        name: "Chat",
        link: "/admin/admin-chat-page",
        component: <ChatIcon />
    },
    {
        id: 3,
        name: "Category Management",
        link: "/admin/admin-category-mgt-page",
        component: <CatagoriesIcon />
    },
    {
        id: 4,
        name: "Product Management",
        link: "/admin/admin-product-mgt-page",
        component: <ProductIcon />
    },
    {
        id: 5,
        name: "Trend Management",
        link: "/admin/admin-trend-mgt-page",
        component: <TrendIcon />
    },
    {
        id: 6,
        name: "Customer Management",
        link: "/admin/admin-user-mgt-page",
        component: <UserIcon />
    },
    {
        id: 7,
        name: "Admin Management",
        link: "/admin/admin-admin-mgt-page",
        component: <UserIcon />
    },
    {
        id: 8,
        name: "Transaction Monitoring",
        link: "/admin/admin-transaction-monitoring-page",
        component: <TransactionIcon />
    },
]

export default function AdminSideBar() {
    return (
        <div className='w-[24%] p-8 bg-grayBg100 shadow-md'>
            <Link to="/admin"><ToyMartLogo></ToyMartLogo></Link>
            <div className='flex flex-col mt-24'>
                {menuList.map((el) => <Link key={el.id} to={el.link}><Button textPosition="start" bg="gray" width="full">{el.component} {el.name}</Button></Link>)}
            </div>
        </div>
    )
}