import MenuCardsOrden from "../components/menuCardsOrden"
import BtnMenuLista from "../components/ui/btnMenuLista"

const MenuLista = (props) => {
    return (
        <>
            <div>
                <BtnMenuLista/>
                <div className="grid grid-cols-2 gap-8 bg-secundary h-full">
                    <MenuCardsOrden name="burger" description="asdasas" precio="12.000" className="my-3 mx-3 bg-primary"/>
                    <MenuCardsOrden name="burger" description="asdasas" precio="12.000" className="my-3 mx-3 bg-primary"/>
                    <MenuCardsOrden name="burger" description="asdasas" precio="12.000" className="my-3 mx-3 bg-primary"/>
                    <MenuCardsOrden name="burger" description="asdasas" precio="12.000" className="my-3 mx-3 bg-primary"/>
                </div>
            </div>
        </>
    )
}

export default MenuLista