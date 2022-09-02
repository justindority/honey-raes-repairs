import { useEffect, useState } from "react"
import { Employee } from "./Employee"
import "./Employees.css"

export const EmployeeList = () => {
    const [employees,updateEmployees] = useState([])


    useEffect(
        () => {
            fetch(`http://localhost:8088/users?isStaff=true`)
                .then(response => response.json())
                .then((empArray) => {
                    updateEmployees(empArray)
                })
        },
        []
    )

        return <article className="employees">
        {
            employees.map(emp => <Employee key={`employee--${emp.id}`}
                id={emp.id} 
                fullName={emp.fullName} 
                email={emp.email}/>)
        }
        </article>


}