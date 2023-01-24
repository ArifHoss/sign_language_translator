const OrderCoffeeButton = ({coffee, onSelect}) => {
    return (
        <button onClick={()=> onSelect(coffee.id)}>
            <aside>
                <img src={coffee.image} alt={coffee.name} width="55"/>
            </aside>
            <section>
                <b>{coffee.name}</b>
            </section>
        </button>
    )
}

export default OrderCoffeeButton