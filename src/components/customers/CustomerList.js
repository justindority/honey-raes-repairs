import { useEffect, useState } from "react"
import { Customer } from "./Customer"

export const CustomerList = () => {
    const [customers,updateCustomers] = useState([])


    useEffect(
        () => {
            fetch(`http://localhost:8088/users?isStaff=false`)
                .then(response => response.json())
                .then((custArray) => {
                    updateCustomers(custArray)
                })
        },
        []
    )

    return <article className="customers">
    {
        customers.map(cust => <Customer prop={cust}/>)
    }
    </article>


}