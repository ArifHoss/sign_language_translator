import withAuth from "../hoc/withAuth";
import OrdersForm from "../components/orders/OrdersForm";
import OrderCoffeeButton from "../components/orders/OrderCoffeButton";
import {useState} from "react";
import {useUser} from "../context/UserContext";
import {orderAdd} from "../api/order";

const COFFEES = [
    {
        id: 1,
        name: "Americano",
        image: "img/americano.png"
    },
    {
        id: 2,
        name: "Cappuccino",
        image: "img/cappuccino.png"
    },
    {
        id: 3,
        name: "Espresso",
        image: "img/espresso.png"
    },
    {
        id: 4,
        name: "Latte",
        image: "img/latte.png"
    },
]

const Orders = () => {

    const [coffee, setCoffee] = useState(null)
    const {user} = useUser()

    const handleCoffeeClicked = (coffeeId) => {
       setCoffee(COFFEES.find(coffee => coffee.id ===coffeeId))
    }

    const handleOrderClicked = async (notes) => {

        if (!coffee) {
            alert("Please select a coffee first.")
            return
        }

        const order =(coffee.name+' '+notes).trim()

        const [error, result] = await  orderAdd(user, order)
        console.log("Error", error)
        console.log("Result", result)
    }

    const availableCoffees = COFFEES.map(coffee => {
        return <OrderCoffeeButton
            key={coffee.id}
            coffee={coffee}
            onSelect={handleCoffeeClicked}
        />
    })

    return (
        <>
        <h1>Orders</h1>
            <section id="coffee-options">

                {availableCoffees}
            </section>
            <section>
                <OrdersForm onOrder={handleOrderClicked}/>
            </section>
            <h4>Summary:</h4>
            {coffee && <p>Selected coffee: {coffee.name}</p>}

        </>
    )
}

export default withAuth(Orders);