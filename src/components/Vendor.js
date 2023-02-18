import React, {useState} from "react";
import axios from "axios"
import styles from "./Vendor.module.css"
const URL="https://canteensystem.azurewebsites.net/"
const WEB_SOCK="wss://canteensystem.azurewebsites.net/ws/notifications/neworders"

function VendorItems({orders, handler}) {
  return (
      <div className="orders">
       { Array.from(orders.keys()).map(id => <VendorItem id={id} handler={handler} orders={orders} />) }
      </div>
  );
}

function VendorItem({orders, id, handler}) {
  let m = orders.get(id)
  function getOn() {
      handler(m.id)
  }
  return (
    <div className={styles.Top}>
      <button onClick={getOn} className={styles.checkBox}>{m.status}</button>
      <div className={styles.orderId}> {`${m.id} . ${m.From}`} </div>
    </div>
  );
}

function Vendor(props){
    let [orders, setOrders] = useState(new Map())
    let [loading, setLoading ] = useState(true)
    let [timeQ, setTimeQ] = useState(1);
    let [first, setFirst] = useState(true);
    function addToOrders(order) {
        setOrders(orders.set(order.id, order))
    }

    function completeOrder(id) {
        setOrders(orders.delete(id))
    }

    function nextState(status) {
        switch (status) {
            case "pending" : {
                return "preparing";
            }
            case "preparing" : {
                return "finished";
            }
            default: {
                return status;
            }
        }
    }

    function changeStatus(id) {
        let m = orders.get(id);
        setLoading(true)
        axios.put(URL + "/orders", {
            order_id_list : [id],
            next_state : nextState(m.status),
        }).then(function (response) {
            setLoading(false)
            console.log(response)
            setOrders(orders.set(id, m))
        }).catch(function (error) {
            console.log(error);
        });
        for (let [key, value] of orders) {
            console.log(key, value)
        }
    }

    if (first) {
        axios.get(URL + `/orders`, {}).
            then(function (response) {
                (response.data.forEach(e => {  return setOrders(orders.set(e.id, e)) }))
                setLoading(false)
            }).catch(function (error) {
                console.log(error);
            });
        setFirst(false)
    }

    if (loading) {
        return <div class="loading">
            loading
            </div>
    }

    const socket = new WebSocket('wss://canteensystem.azurewebsites.net/ws/notifications/neworders')

    // Connection opened
    socket.addEventListener('open', (event) => {
        socket.send(JSON.stringify({time_quantum:10}));
    });

    // Listen for messages
    socket.addEventListener('message', (event) => {
        console.log('Message from server ', event.data);
        socket.send(JSON.stringify({time_fquantum:10}));

    });

    return (
        <VendorItems handler={changeStatus} orders={orders}/>
    )
}

export default Vendor;
