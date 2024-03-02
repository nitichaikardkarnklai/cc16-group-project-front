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
import useAuth from '../hooks/use-auth'

const menuList = [
    {
        id: 1,
        name: "Home",
        link: "/admin",
        component: <HomeIcon />,
        adminRole: ["ADMIN", "SUPERADMIN"]
    },
    {
        id: 2,
        name: "Chat",
        link: "/admin/admin-chat-page",
        component: <ChatIcon />,
        adminRole: ["ADMIN", "SUPERADMIN"]
    },
    {
        id: 3,
        name: "Category Management",
        link: "/admin/admin-category-mgt-page",
        component: <CatagoriesIcon />,
        adminRole: ["ADMIN", "SUPERADMIN"]
    },
    {
        id: 4,
        name: "Product Management",
        link: "/admin/admin-product-mgt-page",
        component: <ProductIcon />,
        adminRole: ["ADMIN", "SUPERADMIN"]
    },
    {
        id: 5,
        name: "Trend Management",
        link: "/admin/admin-trend-mgt-page",
        component: <TrendIcon />,
        adminRole: ["ADMIN", "SUPERADMIN"]
    },
    {
        id: 6,
        name: "Transaction Monitoring",
        link: "/admin/admin-transaction-monitoring-page",
        component: <TransactionIcon />,
        adminRole: ["ADMIN", "SUPERADMIN"]
    },
    {
        id: 7,
        name: "Customer Management",
        link: "/admin/admin-customer-mgt-page",
        component: <UserIcon />,
        adminRole: ["ADMIN", "SUPERADMIN"]
    },
    {
        id: 8,
        name: "Admin Management",
        link: "/admin/admin-admin-mgt-page",
        component: <UserIcon />,
        adminRole: ["SUPERADMIN"]
    },
]

export default function AdminSideBar() {
    const { authUser } = useAuth();

    return (
        <div className='w-full'>
            <Link to="/admin"><ToyMartLogo></ToyMartLogo></Link>
            <div className='flex flex-col mt-24'>
                {menuList.map(el => (
                    el.adminRole.includes(authUser.role) ?
                        <Link key={el.id} to={el.link} >
                            <Button textPosition="start" bg="gray" width="full">{el.component} {el.name}</Button>
                        </Link>
                        :
                        ""
                ))}
            </div>
        </div >
    )
}