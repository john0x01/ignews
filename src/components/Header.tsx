export function Header() {
    return (
        <header className="h-20 border border-gray-800">
            <div className="flex max-w-6xl items-center h-20 my-0 mx-auto px-2">
                <img src="/images/logo.svg" alt="ig.news" />
                <nav className="ml-20 h-20">
                    <a
                        className="inline-block relative px-2 h-20 leading-[5rem] 
                        text-white font-bold transition-colors duration-200 after:h-[3px] after:rounded-t-[3px]
                        after:w-full after:absolute after:left-0 after:bottom-[1px] after:bg-yellow-500">
                        Home
                    </a>
                    <a 
                        className="inline-block relative px-2 h-20 leading-[5rem] text-gray-300 
                        hover:text-white active:font-bold transition-colors duration-200 active:after:h-[3px] active:after:rounded-t-[3px]
                        active:after:w-full active:after:absolute active:after:left-0 active:after:bottom-[1px] active:after:bg-yellow-500">
                        Posts
                    </a>
                </nav>
            </div>
        </header>
    )
}