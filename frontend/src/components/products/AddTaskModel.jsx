import { Fragment, useState } from "react";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";

import TaskForm from "./TaskForm";
import { useNavigate } from "react-router-dom";

export default function AddTaskModal() {
  // //obteniendo si el modal esite
  // const navitage = useNavigate();
  const location = useNavigate();
  const queyParam = new URLSearchParams(location.search);
  const queryTask = queyParam.get("newproduct");
  const show = queryTask ? true : false;

  // //obteniendo id de los proyectos
  // const params = useParams();
  // const projectId = params.projectId!;

  // const initialValue = {
  //   name: "",
  //   description: "",
  // };

  // const {
  //   register,
  //   handleSubmit,
  //   reset,
  //   formState: { errors },
  // } = useForm({ defaultValues: initialValue });

  // const queryClient = useQueryClient();
  // const { mutate } = useMutation({
  //   mutationFn: createTask,
  //   onError: (error) => {
  //     toast.error(error.message);
  //   },
  //   onSuccess: (data) => {
  //     toast.success(data);
  //     reset();
  //     navitage(location.pathname, { replace: true });
  //     queryClient.invalidateQueries({ queryKey: ["getProject", projectId] });
  //   },
  // });

  // const handleForm = handleSubmit((formData) => {
  //   const data = {
  //     formData,
  //     projectId,
  //   };
  //   mutate(data);
  // });
  let [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <Transition appear show={show} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          open={show}
          onClose={() => setIsOpen(false)}
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

                  <form className=" mt-10 bg-white shadow-lg p-10 round-lg ">
                    <TaskForm />

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
