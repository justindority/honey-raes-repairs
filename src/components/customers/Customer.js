import { Link } from "react-router-dom"

export const Customer = ({prop}) => {
    return <section className="cusomter" key={`customer--${prop.id}`}>
    <div>
        <Link to={`/customers/${prop.id}`}>Name: {prop.fullName}</Link>
    </div>
    <div> Email: {prop.email}</div>
</section>
}