import React, { useEffect, useState, useLayoutEffect } from 'react'
import './style.scss'
import { RiDashboardFill, RiDatabase2Line, RiUser3Line, RiShoppingCartLine, RiSettings5Line, RiArrowDownSLine } from 'react-icons/ri'
import { NavLink, Link, useLocation } from 'react-router-dom'
const Navigation = () => {
    const [mainTabActive, setMaintabActive] = useState({ 0: false, 1: false })
    const [subTabActive, setSubTabActive] = useState(1)
    const location = useLocation()
    useLayoutEffect(() => {
        const pathname = location.pathname.split('/')
        if (pathname[2] === 'product') {
            setMaintabActive({ ...mainTabActive, 0: true })
            if (pathname[3] === 'create') {
                setSubTabActive(3)
            }
            else {
                setSubTabActive(2)
            }
        }
        if (pathname[2] === 'user') {
            setMaintabActive({ ...mainTabActive, 1: true })
            if (pathname[3] === 'create') {
                setSubTabActive(5)
            }
            else {
                setSubTabActive(4)
            }
        }
        if (pathname[2] === 'order') {
            setSubTabActive(6)
        }
    }, [location])
    return (
        <>
            <div className='Navigation'>
                <div className='Navigation__header'>
                    <div>SHOP APP</div>
                    <div>ADMIN</div>
                </div>
                <div className='Navigation__application'><a>APPLICATION</a></div>
                <ul className='Navigation__category'>
                    <li className={`Navigation__category--main ${subTabActive === 1 ? 'active' : undefined}`}
                        onClick={() => setSubTabActive(1)}
                    >
                        <span><RiDashboardFill /></span>
                        <Link to='/admin'>DASHBOARD</Link>

                        <span></span>
                    </li>
                    <li className={`Navigation__category--main ${mainTabActive[0] ? 'active-main' : undefined} `}
                        onClick={() => setMaintabActive({ ...mainTabActive, 0: !mainTabActive[0] })}
                    >
                        <span><RiDatabase2Line /></span>
                        <h5>Product</h5>
                        <span><RiArrowDownSLine /></span>

                    </li>
                    <li className={`Navigation__category--sub ${mainTabActive[0] ? 'active-sub' : undefined}`}>
                        <ul >
                            <li className={subTabActive === 2 ? 'active' : undefined}
                                onClick={() => setSubTabActive(2)}
                            ><Link to='/admin/product'  >Product List</Link></li>
                            <li className={subTabActive === 3 ? 'active' : undefined}
                                onClick={() => setSubTabActive(3)}
                            ><Link to='/admin/product/create'>Add Product</Link></li>
                        </ul>
                    </li>
                    <li className={`Navigation__category--main ${mainTabActive[1] ? 'active-main' : undefined} `}
                        onClick={() => setMaintabActive({ ...mainTabActive, 1: !mainTabActive[1] })}>
                        <span><RiUser3Line /></span>
                        <h5>User</h5>
                        <span><RiArrowDownSLine /></span>


                    </li>
                    <li className={`Navigation__category--sub ${mainTabActive[1] ? 'active-sub' : undefined}`}
                    >
                        <ul>
                            <li className={subTabActive === 4 ? 'active' : undefined}
                                onClick={() => setSubTabActive(4)}
                            ><Link to='/admin/user'>User List</Link></li>
                            <li className={subTabActive === 5 ? 'active' : undefined}
                                onClick={() => setSubTabActive(5)}
                            ><Link to='/admin/user/create'>Add User</Link></li>
                        </ul>
                    </li>
                    <li className={`Navigation__category--main ${subTabActive === 6 ? 'active' : undefined}`}
                        onClick={() => setSubTabActive(6)}
                    >
                        <span><RiShoppingCartLine /></span>
                        <Link to='/admin/order' >Orders</Link>
                    </li>
                    <li className='Navigation__category--main'>
                        <span><RiSettings5Line /></span>
                        <h5>Settings</h5>
                        <span><RiArrowDownSLine /></span>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Navigation