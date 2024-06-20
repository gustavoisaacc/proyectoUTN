
function SignIn() {
  return (
       <div className=" bg-[] w-[310px] h-[410px] flex flex-colum-center justify-between items-center bg-primary rounded-lg border-2 border-black text-black shadow-lg shadow-primaryLigth/60">
        <h1 className="px-8 text-center text-xl text-secundary text-bold">Iniciar Sesion</h1>
        <h4 className="px-3 text-center text-sm text-secundary text-bold">o recuperar contraseña</h4>
        <form className="h-52 w-full p-4 space-y-4 items-center border-secundaryDark">
        <input type="text" placeholder="Email" className="inputClass"/>
        <input type="text" placeholder="Contraseña" className="inputClass"/>
      </form>
        <button className="h-[50px] w-[150px] bg-secundary text-white font-bold rounded hover:bg-secundary hover:text-white">Aceptar</button>
        <p className="px-4 text-center text-sm">Estás a un paso de comer rico!</p>
        <h3 className="w-full py-5 border-t-secundaryDark border-t-[0.4px] text-sm font-bold text-center">Aún no tienes una cuenta? Registrate!</h3>
    </div>
  )
}

export default SignIn





