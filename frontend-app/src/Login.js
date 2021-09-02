//Components Login and create account 

export default function Login(){
    return(
        <div className="flex justify-between gap-4 mt-2">
            <div className>
                <button className="text-primary rounded-md p-1 px-2 font-bold hover:bg-quartery">
                Se connecter
                </button>
            </div>
            <div>
                <button className="bg-primary text-white rounded-md p-1 px-2 hover:bg-tertiary">
                    Creer un compte
                </button>
            </div>
        </div>
    )
}