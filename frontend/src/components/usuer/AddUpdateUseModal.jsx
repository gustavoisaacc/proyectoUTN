import { Fragment, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";

import { useUsers } from "../../context/useAuth";
import UserUpdateForm from "./UseUpdateForm";
import { toast } from "react-toastify";

function AddUpdateUserModal() {
  //hook para crear user
  const { getByIdUser, updateUser, getUsers } = useUsers();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  // //obteniendo si el modal exite
  const navitage = useNavigate();
  const location = useLocation();
  const queyParam = new URLSearchParams(location.search);
  const query = queyParam.get("updateuser");
  const show = query ? true : false;
  const paramsObject = {};

  queyParam.forEach((value, key) => {
    paramsObject[key] = value;
  });

  const { id } = paramsObject;

  useEffect(() => {
    getByIdUser(id)
      .then((res) => {
        setValue("name", res.name);
        setValue(
          "role",
          res.role.map((item) => item.name)
        );
      })
      .catch((error) => console.log(error));
  }, [id]);

  const onSubmit = handleSubmit(async (data) => {
    console.log(id);
    const res = await updateUser(id, data);
    toast.success(res.msg);
    getUsers();
    reset();
    navitage(location.pathname);
  });

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
                  <DialogTitle as="h3" className="font-black text-4xl  my-5">
                    Actualizar Usuario
                  </DialogTitle>

                  <form
                    onSubmit={onSubmit}
                    className=" mt-10 bg-white shadow-lg p-10 round-lg "
                  >
                    <UserUpdateForm register={register} errors={errors} />
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

export default AddUpdateUserModal;
