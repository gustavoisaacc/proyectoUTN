import { Fragment } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";

import PagoForm from "./PagoForm";
import { useCar } from "../../context/useAuth";

import { toast } from "react-toastify";

export default function AddPagoModal() {
  //hook para crear order
  const { cart, createOrder } = useCar();

  // //obteniendo si el modal exite
  const navitage = useNavigate();
  const location = useLocation();
  const queyParam = new URLSearchParams(location.search);
  const query = queyParam.get("pagoOrder");

  const show = query ? true : false;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    const order = {
      customerInfo: data, // Información del cliente
      products: cart, // Productos del carrito
    };
    const res = await createOrder(order);
    console.log(res);
    if (res) {
      toast.success(res?.msg);
      reset();
      navitage("/menu");
    }
  });

  return (
    <>
      <Transition className="relative z-100" appear show={show} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-100"
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
                  <DialogTitle as="h3" className="font-black text-4xl  my-5">
                    Producto
                  </DialogTitle>

                  <form
                    onSubmit={onSubmit}
                    className=" mt-10 bg-white shadow-lg p-10 round-lg "
                  >
                    <PagoForm register={register} errors={errors} />

                    <input
                      type="submit"
                      value="Enviar"
                      className="w-full bg-cyan-500 shadow-slate-300 hover:bg-cyan-600 rounded-sm px-3 py-2 text-white font-semibold text-2xl uppercase cursor-pointer transition-colors mt-2"
                    />
                  </form>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
