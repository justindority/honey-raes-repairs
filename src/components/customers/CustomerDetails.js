import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const CustomerDetails = () => {
    const customerId = useParams()
    const [customer, updateCustomer] = useState([])

    useEffect(
        () => {
            fetch(`http://localhost:8088/customers?_expand=user&customerId=${customerId}`)
            .then(r => r.json())
            .then((array) => {
                console.log(array)
                const singleCustomer = array[0]
                updateCustomer(singleCustomer)
            })
        },[customerId]
    )

    return <section className="customer">
        <header>{customer?.user?.fullName}</header>
        <div>Email: {customer?.user?.email}</div>
        <div>Address: {customer?.address}</div>
        <div>Phone: {customer?.phoneNumber}</div>
    </section>
}