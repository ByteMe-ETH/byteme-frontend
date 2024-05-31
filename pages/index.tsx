import {useAuth0} from "@auth0/auth0-react";
import Container from "../components/container";
import Image from "next/image";

function HomePage() {
    const {isAuthenticated, logout, loginWithPopup, user} = useAuth0();

    return (
        <Container>
            <div className="space-y-6">
                {isAuthenticated ? (
                    <>
                        <h1 className="text-2xl font-bold">Welcome, {user.name}!</h1>
                        <p>Email: {user.email}</p>
                        <button
                            onClick={() => logout({returnTo: window.location.origin})}
                            className="bg-blue-500 text-white px-4 py-2 rounded"
                        >
                            Log Out
                        </button>
                    </>
                ) : (
                    <>
                        <h1 className="text-2xl font-bold">
                            Welcome to ByteMe!
                        </h1>
                        <p>
                            Please log in to see more information.
                        </p>
                        <button
                            onClick={loginWithPopup}
                            className="bg-blue-500 text-white px-4 py-2 rounded"
                        >
                            Log In
                        </button>
                    </>
                )}
            </div>
        </Container>
    );
}

export default HomePage;
