import Li from "../ui/Li";
import BtnCategoria from "../ui/btnCategoria";

function ListCategory({ categories }) {
  return (
    <ul className="w-full md:w-[50%] border rounded-md  mt-5 md:mt-0">
      <h1 className=" font-semibold border-b-2 text-center p-5">Categorias</h1>
      <Li className="grid-cols-2 px-5">
        <span>Nombre</span>
        <span>Acciones</span>
      </Li>
      {categories.map((item) => {
        return (
          <Li className="grid-cols-2 px-5" key={item._id}>
            {item.name}
            <button>
              <BtnCategoria id={item._id} />
            </button>
          </Li>
        );
      })}
    </ul>
  );
}

export default ListCategory;
