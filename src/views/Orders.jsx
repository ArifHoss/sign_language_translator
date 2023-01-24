import withAuth from "../hoc/withAuth";
import OrderCoffeButton from "../components/orders/OrderCoffeButton";
import OrdersForm from "../components/orders/OrdersForm";
import OrderCoffeeButton from "../components/orders/OrderCoffeButton";
import {useState} from "react";

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

    const handleCoffeeClicked = (coffeeId) => {
       setCoffee(COFFEES.find(coffee => coffee.id ===coffeeId))
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
                {/*<OrderCoffeButton name="Americano" image="img/americano.png" key="americano"/>*/}
                {/*<OrderCoffeButton name="Cappuccino" image="img/cappuccino.png" key="cappuccino"/>*/}
                {/*<OrderCoffeButton name="Espresso" image="img/espresso.png" key="espresso"/>*/}
                {/*<OrderCoffeButton name="Latte" image="img/latte.png" key="latte"/>*/}

                {availableCoffees}
            </section>
            <section>
                <OrdersForm/>
            </section>
            <h4>Summary:</h4>
            {coffee && <p>Selected coffee: {coffee.name}</p>}

        </>
    )
}

export default withAuth(Orders);