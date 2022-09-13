import './style.scss'

const LoadingSpinner = () => {
    return (
        <>
            <div className='loading-spinner-container'>
                <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>

            </div>
        </>
    )
}
export default LoadingSpinner