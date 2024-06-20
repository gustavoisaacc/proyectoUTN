import Button from "../components/ui/ButtonLucia"

const CreateRolCategory = (props) => {
    return (
        <>
            <h1>{props.name}</h1>
            <div className="container w-full p-10 ">
                <div className="arriba border p-8 rounded-lg">
                    <div className=" gap-5 mb-5 ">
                        <label htmlFor="name">Nombre</label>
                        <input className="w-full border rounded-lg border-secundary  p-2 " name="name" type="text" placeholder="Nombre" />
                    </div>
                    <div className="bg-primary rounded-lg ">
                        <Button name={"crear " + props.name} />
                    </div>
                </div>
                <div className="abajo mt-5">
                    <div className="Labels flex justify-between ">
                        <label htmlFor="">Nombre</label>
                        <label htmlFor="">Accion</label>
                    </div>
                    <div className="flex justify-between border rounded-lg p-5">
                        <div className="flex border rounded-lg ">
                            <input className="w-full border rounded-lg border-secundary  p-2" name="name" type="text" placeholder="Nombre" />
                        </div>
                        <div className="w-50 flex">
                            <Button name="Editar" />
                            <Button name="Eliminar" />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateRolCategory