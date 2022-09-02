import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const EmployeeDetails = () => {
    const {employeeId} = useParams()
    const [employee,udpateEmployee] = useState({})
    
    useEffect(
        () => {
            fetch(`http://localhost:8088/employees?_expand=user&_embed=employeeTickets&userId=${employeeId}`)
            .then(r => r.json())
            .then((array) => {
                console.log(array)
                const singleEmployee = array[0]
                udpateEmployee(singleEmployee)
            })
        },[employeeId]
    )
        
    return <section className="employee">
        <header>{employee?.user?.fullName}</header>
        <div>Email: {employee?.user?.email}</div>
        <div>Specialty: {employee?.specialty}</div>
        <div>Rate: {employee?.rate}</div>
        <footer>Currently working on {employee?.employeeTickets?.length} tickets.</footer>
    </section>
}