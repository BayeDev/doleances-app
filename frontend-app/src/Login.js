//Components Login and create account 

export default function Login(){
    return(
        <div className="flex justify-between gap-4">
            <div className="p-1">
                Se connecter
            </div>
            <div>
                <button className="bg-secondary text-white rounded-md p-1 px-2 hover:bg-primary">
                    Creer un compte
                </button>
            </div>
        </div>
    )
}