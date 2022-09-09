import './style.scss'
const Shipping = () => {
    const formFields = [
        { name: 'Address', placeholder: 'Email address' },
        { name: 'City', placeholder: 'Enter city' },
        { name: 'Postal Code', placeholder: 'Enter postal code' },
        { name: 'Country', placeholder: 'Enter country' }]
    return (
        <div className="Shipping">
            <div className='Shipping__header'>
                SHIPPING
            </div>
            {
                formFields.map((field) =>

                    <div className='Shipping__field'>
                        <h3 className='Shipping__field--name'>
                            {field.name}
                        </h3>
                        <input type='text' placeholder={field.placeholder} />
                    </div>
                )
            }
            <button>Continue</button>
        </div>
    )
}
export default Shipping