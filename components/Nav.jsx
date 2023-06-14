"use client";

//allow us to navigate link to other pages in our app
import Link from "next/link"
//optimize the images for us
import Image from "next/image"
//when you use hooks or states in react, you need to add "use client" at the top
import { useState, useEffect } from "react"
//this makes the sign in and sign out process simple
import { signIn, signOut, useSession, getProviders } from "next-auth/react"

const Nav = () => {
    //true is when a user is logged in, false is when a user is logged out
    const isUserLoggedIn = true;

    const [ providers, setProviders ] = useState(null)
    //need a state to open up the menu
    const [ menuDropDown, setMenuDropDown ] = useState(false);
    //
    useEffect(() => {
        //this is an async function
        const setProviders = async () => {
            //wait for the response from the getProviders function
            const providers = await getProviders();
            //once we receive a response, we set the providers
            setProviders(response);
        }
        //call the function
        setProviders();
    }, []);

  return (
    <nav className="flex-between w-full mb-16 pt-3">
        <Link href="/" className="flex gap-2 flex-center">
            <Image src="/assets/images/logo.svg" 
            alt="Logo" 
            width={50} 
            height={50} 
            className="object-contain" />
            <p className="logo_text">Prompt-astic</p>
        </Link>

        {/* Desktop Navigation */}
        <div className="sm:flex hidden">
            {/* If the user is sign in and equals to (true), it will show both buttons */}
            {isUserLoggedIn ? (
                <div className="flex gap-3 md:gap-5">
                    <Link href="/create-prompt"
                    className="black_btn">
                        Create Prompt
                    </Link>
                    <button type="button" onClick={signOut} className="outline_btn">
                        Sign Out
                    </button>
                {/* Use logo as a placeholder for now. Profile pic would go here */}
                    <Link href="/profile">
                        <Image src="/assets/images/logo.svg" 
                        alt="profile" 
                        width={37} 
                        height={37}
                        className="rounded-full"/>
                    </Link>
                </div>
            ) : (
                <>
                {providers && Object.values(providers).map((provider) => (
                    <button type="button"
                    key={provider.name}
                    onClick={() => signIn(provider.id)}
                    className="black_btn">
                        Sign In
                    </button>
                ))}
                </>
            )}
        </div>

        {/* Mobile Navigation */}
        <div className="sm:hidden flex relative">
            {isUserLoggedIn ? (
               <div className="flex">
                    <Image src="/assets/images/logo.svg" 
                        alt="profile" 
                        width={37} 
                        height={37}
                        className="rounded-full"
                        // triggers the state for the menu to drop down in mobile view
                        onClick={() => setMenuDropDown(!menuDropDown)}
                        />
                    {/* If the menuDropDown state is true, it will show the menu */}
                    {menuDropDown && (
                        <div className="dropdown">
                            <Link href="/profile"
                            className="dropdown_link"
                            onClick={() => setMenuDropDown(false)}
                            > 
                            My profile
                            </Link>

                            <Link href="/create-prompt"
                            className="dropdown_link"
                            onClick={() => setMenuDropDown(false)}
                            > 
                            Create Prompt
                            </Link>
                            <button 
                                type="button" 
                                onClick={() => {
                                    setMenuDropDown(false);
                                    signOut();
                                }}
                                className="mt-5 w-full black_btn"
                                >
                                Sign Out
                            </button>
                        </div>
                    )}
               </div>
            ) : (
                <>
                {providers && Object.values(providers).map((provider) => (
                    <button type="button"
                    key={provider.name}
                    onClick={() => signIn(provider.id)}
                    className="black_btn">
                        Sign In
                    </button>
                ))}
                </>
            )})
        </div>
    </nav>
  )
}

export default Nav
