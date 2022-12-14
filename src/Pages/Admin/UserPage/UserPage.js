import React, { useEffect, useState } from 'react'
import './style.scss'
import Table from '../../../Components/Admin/Table/Table'
import { useQuery } from '../../../hooks/useQuery'
import { useSelector, useDispatch } from 'react-redux'
import { getUsers } from '../../../features/user/userSlice'
const UserPage = () => {
    const query = useQuery()
    const dispatch = useDispatch()
    const { result } = useSelector(state => state.user.current)
    const [displayOptions, setDisplayOptions] = useState({
        sortBy: 'id',
        order: 'asc',
        size: 5,
    })
    const page = query.get('page') || 1

    useEffect(() => {
        dispatch(getUsers({ page, ...displayOptions }))
    }, [displayOptions, page])
    return (
        <>
            <div className='UserPage'>
                <Table type={'user'} page={page} display={displayOptions} setDisplayOptions={setDisplayOptions} data={result} />
            </div>
        </>
    )
}
export default UserPage