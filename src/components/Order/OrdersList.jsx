import { useLoaderData } from "react-router-dom";
import day from "dayjs"
import advancedFormat from "dayjs/plugin/advancedFormat"
day.extend(advancedFormat)

const OrdersList = () => {
  const { meta, orders } = useLoaderData();

  return (
    <div>
      <h4 className="text-xl capitalize my-6">
        Total Orders: {meta.pagination.total}
      </h4>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Products</th>
              <th>Cost</th>
              <th className="hidden md:block">Date</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => {
              const id = order.id;
              const { name, address, numItemsInCart, orderTotal, createdAt } =
                order.attributes;

              const date = day(createdAt).format("hh:mm a - MMM Do, YYYY ")

              return (
                <tr key={id}>
                  <td>{name}</td>
                  <td>{address}</td>
                  <td>{numItemsInCart}</td>
                  <td>{orderTotal}</td>
                  <td className="hidden md:block">{date}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrdersList;
