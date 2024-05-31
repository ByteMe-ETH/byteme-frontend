import {useAuth0} from "@auth0/auth0-react";
import Container from "../components/container";
import ConnectButton from "../hooks/ConnectButton";
import { Button } from "../components/ui/button";

function HomePage() {
    const {isAuthenticated, logout, loginWithPopup, user} = useAuth0();

    return (
        <Container>
            <div className="space-y-6">
                {isAuthenticated ? (
                    <>
                        <h1 className="text-2xl font-bold">Welcome, {user!.name}!</h1>
                        <p>Email: {user!.email}</p>
                        <Button name={'Log Out'} onClick={() => logout({returnTo: window.location.origin})} variant={'destructive'}>Log out</Button>
                        <ConnectButton/>

                    </>
                ) : (
                    <>
                        <h1 className="text-2xl font-bold">
                            Welcome to ByteMe!
                        </h1>
                        <p>
                            Please log in to see more information.
                        </p>
                        <Button name={'Log In'} onClick={loginWithPopup} variant={'default'}>Log in</Button>
                    </>
                )}
            </div>
        </Container>
    );
}

export default HomePage;
