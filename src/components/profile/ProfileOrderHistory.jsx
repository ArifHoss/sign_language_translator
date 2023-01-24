import ProfileOrderHistoryItem from "./ProfileOrderHistoryItem";

const ProfileOrderHistory = ({orders}) => {
    const orderList = orders.map(order => <ProfileOrderHistoryItem key={order} order={order}/> )

    return (
        <section>
            <h4>Your order history</h4>

            <ul>{orderList}</ul>
        </section>
    )
}


export default ProfileOrderHistory