import { Fragment, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";

import { useCar } from "../../context/useAuth";

export default function SeeOrderModal() {
  //hook para crear producto
  const { getOrderById } = useCar();
  const [pedido, setPedido] = useState();
  // //obteniendo si el modal exite
  const navitage = useNavigate();
  const location = useLocation();
  const queyParam = new URLSearchParams(location.search);
  const query = queyParam.get("seeorder");

  const show = query ? true : false;

  const paramsObject = {};

  queyParam.forEach((value, key) => {
    paramsObject[key] = value;
  });

  const { id } = paramsObject;
  // console.log(pedido);
  // useEffect(() => {
  //   getOrderById(id)
  //     .then((order) => {
  //       setPedido(order);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    <>
      <Transition appear show={show} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          open={show}
          onClose={() => navitage(location.pathname)}
        >
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/60" />
          </TransitionChild>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <DialogPanel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all p-16">
                  {/* <DialogTitle
                    as="div"
                    className="font-black flex justify-between  my-5"
                  >
                    <p>Mesa N°: {pedido.user}</p>
                    <p>Pedido N°: {pedido.orderNumber}</p>
                  </DialogTitle>
                  <div>
                    {pedido.orderid.products.map((item) => (
                      <div key={item._id} className="mb-4">
                        <p>Producto: {item.name}</p>
                        <p>Cantidad: {item.quantity}</p>
                        <p>Precio: ${item.price}</p>
                        <p>descripcion: {item.description}</p>
                        <p>------------</p>
                      </div>
                    ))}
                  </div> */}
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
