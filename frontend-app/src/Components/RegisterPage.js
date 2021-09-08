//Registration Page

export default function RegisterPage(){
    return(
       
    <div className="flex justify-center flex-1 max-w-screen-xl m-0 bg-white shadow sm:m-20 sm:rounded-lg">

        <div className="flex-1 hidden text-center bg-indigo-100 lg:flex">
            <div className="w-full m-12 bg-center bg-no-repeat bg-contain xl:m-16"></div>
        </div>

        <div className="p-6 lg:w-1/2 xl:w-5/12 sm:p-12">

            <div className="flex flex-col items-center mt-4">
                <h1 className="text-2xl font-extrabold xl:text-3xl">
                    S'inscrire
                </h1>
                <div className="flex-1 w-full mt-8">
                    <div className="flex flex-col items-center">
                        <button
                            className="flex items-center justify-center w-full max-w-xs py-3 font-bold text-gray-800 transition-all duration-300 ease-in-out bg-indigo-100 rounded-lg shadow-sm focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                            <div className="p-2 bg-white rounded-full">
                                <svg className="w-4" viewBox="0 0 533.5 544.3">
                                    <path
                                        d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                                        fill="#4285f4" />
                                    <path
                                        d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                                        fill="#34a853" />
                                    <path
                                        d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                                        fill="#fbbc04" />
                                    <path
                                        d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                                        fill="#ea4335" />
                                </svg>
                            </div>
                            <span className="ml-4">
                                Inscrivez Google
                            </span>
                        </button>

                        <button
                            className="flex items-center justify-center w-full max-w-xs py-3 mt-5 font-bold text-gray-800 transition-all duration-300 ease-in-out bg-indigo-100 rounded-lg shadow-sm focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                            <div className="p-1">
                            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="30px"><linearGradient id="awSgIinfw5_FS5MLHI~A9a" x1="6.228" x2="42.077" y1="4.896" y2="43.432" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#0d61a9"/><stop offset="1" stop-color="#16528c"/></linearGradient><path fill="url(#awSgIinfw5_FS5MLHI~A9a)" d="M42,40c0,1.105-0.895,2-2,2H8c-1.105,0-2-0.895-2-2V8c0-1.105,0.895-2,2-2h32	c1.105,0,2,0.895,2,2V40z"/><path d="M25,38V27h-4v-6h4v-2.138c0-5.042,2.666-7.818,7.505-7.818c1.995,0,3.077,0.14,3.598,0.208	l0.858,0.111L37,12.224L37,17h-3.635C32.237,17,32,18.378,32,19.535V21h4.723l-0.928,6H32v11H25z" opacity=".05"/><path d="M25.5,37.5v-11h-4v-5h4v-2.638c0-4.788,2.422-7.318,7.005-7.318c1.971,0,3.03,0.138,3.54,0.204	l0.436,0.057l0.02,0.442V16.5h-3.135c-1.623,0-1.865,1.901-1.865,3.035V21.5h4.64l-0.773,5H31.5v11H25.5z" opacity=".07"/><path fill="#fff" d="M33.365,16H36v-3.754c-0.492-0.064-1.531-0.203-3.495-0.203c-4.101,0-6.505,2.08-6.505,6.819V22h-4v4	h4v11h5V26h3.938l0.618-4H31v-2.465C31,17.661,31.612,16,33.365,16z"/></svg>                            </div>
                            <span className="ml-2">
                                Incrivez-vous avec Facebook
                            </span>
                        </button>
                        <button
                            className="flex items-center justify-center w-full max-w-xs py-1 mt-5 font-bold text-gray-800 transition-all duration-300 ease-in-out bg-indigo-100 rounded-lg shadow-sm focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                            <div className="p-1">
                                <img src={'\icons8-instagram-logo.svg'}/>                            </div>
                            <span className="ml-2">
                                Inscrivez-vous avec Instagram
                            </span>
                        </button>
                    </div>

                    <div className="my-12 text-center border-b">
                        <div
                            className="inline-block px-2 text-sm font-medium leading-none tracking-wide text-gray-600 transform translate-y-1/2 bg-white">
                            Ou Inscrivez-vous avec e-mail
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

                       {/* <p className="mt-6 text-xs text-center text-gray-600">
                            I agree to the
                            <a href="#" className="border-b border-gray-500 border-dotted">
                                Terms of Service
                            </a>
                            and its
                            <a href="#" className="border-b border-gray-500 border-dotted">
                                Privacy Policy
                            </a>
    </p>*/}

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
            </div>
        </div>

    </div>

    )
}