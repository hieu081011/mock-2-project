import './style.scss'
const Shipping = ({ setIndicator, shippingForm, setShippingForm }) => {
    const handleContinue = () => {
        if (!shippingForm.address || !shippingForm.city || !shippingForm.postalCode || !shippingForm.country) {

            alert('You must enter all the field!')
            return
        }
        setIndicator('method')
    }

    const formFields = [
        { name: 'Address', placeholder: 'Enter address', value: 'address' },
        { name: 'City', placeholder: 'Enter city', value: 'city' },
        { name: 'Postal Code', placeholder: 'Enter postal code', value: 'postalCode' },
        { name: 'Country', placeholder: 'Enter country', value: 'country' }]
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
                        <input type='text' placeholder={field.placeholder} value={shippingForm[field.value]} onChange={(e) => { setShippingForm({ ...shippingForm, [field.value]: e.target.value }) }} />
                    </div>
                )
            }
            <button onClick={handleContinue}>Continue</button>
        </div>
    )
}
export default Shipping