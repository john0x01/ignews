import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

export function SigninButton() {
    const userLogged = true



    return userLogged ? (
        <button type="button" 
            className="h-12 rounded-full bg-gray-700 px-6 flex items-center justify-center text-white font-bold
                hover:brightness-75 duration-100">
            <FaGithub  color="#04d361" size={20} className="mr-4"/>
            João Rocha
            <FiX color="#737380" size={20} className="ml-4"/>
        </button>
    ) : (
        <button type="button" 
            className="h-12 rounded-full bg-gray-700 px-6 flex items-center justify-center text-white font-bold
                hover:brightness-75 duration-100">
            <FaGithub  color="#eba417" size={20} className="mr-4"/>
            Signin with Github
        </button>
    )
}