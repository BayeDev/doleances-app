//Registration Page

export default function RegisterPage(){
    return(
       
    <div className="flex justify-center flex-col flex-1 max-w-screen-xl m-0 bg-gray-50 shadow sm:m-20 sm:rounded-lg">
                    <div className=" my-12 text-center border-b">
                        <div
                            className=" inline-block px-2 text-sm font-medium leading-none tracking-wide text-gray-600 transform translate-y-1/2 bg-white">
                            Inscrivez-vous avec e-mail
                        </div>
                    </div>

                    <div className="max-w-xs mx-auto">
                        <input
                            className="w-full px-6 py-4 text-sm font-medium placeholder-gray-500 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 focus:bg-white"
                            type="text" placeholder="Nom" />
                        <input
                            className="w-full px-6 py-4 mt-5 text-sm font-medium placeholder-gray-500 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 focus:bg-white"
                            type="email" placeholder="Email" />

                        <input
                            className="w-full px-6 py-4 mt-5 text-sm font-medium placeholder-gray-500 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 focus:bg-white"
                            type="password" placeholder="Password" />

                        <button
                            className="flex items-center justify-center w-full py-4 mt-5 font-semibold tracking-wide text-gray-100 transition-all duration-300 ease-in-out bg-primary rounded-lg hover:bg-indigo-700 focus:shadow-outline focus:outline-none">
                            <svg className="w-6 h-6 -ml-2" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                <circle cx="8.5" cy="7" r="4" />
                                <path d="M20 8v6M23 11h-6" />
                            </svg>
                            <span className="ml-3">
                                S'inscrire
                            </span>
                        </button>

                    </div>
                </div>


    )
}