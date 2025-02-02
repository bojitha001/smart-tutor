import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useState } from "react";
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore"; //Import Firestore functions

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";

export const ResetPassword = () => {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const db = getFirestore();

    const handleResetPassword = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (!email) {
            alert("Please enter your email address.");
            setLoading(false);
            return;
        }

        try{
            const userQuery = query(collection(db, "UserDetails"), where("email", "==", email));
            const querySnapshot = await getDocs(userQuery);

            if (querySnapshot.empty) {
                alert("No user found with this email.");
                setLoading(false);
                return;
            }

            // Send password reset email
            const auth = getAuth();
            await sendPasswordResetEmail(auth, email);
            alert("Password reset email has been sent! Please check your inbox.");
        } catch (error) {
            // Handle specific error cases
            if (error.code === 'auth/user-not-found') {
                alert("No user found with this email.");
            } else {
                alert(`Error: ${error.message}`);
            }
        } finally {
            setLoading(false);
        }

        // const auth = getAuth();
        // sendPasswordResetEmail(auth, email)
        // .then(() => {
        //     alert("Password reset email has been sent!");
        // })
        // .catch((error) => {
        //     const errorCode = error.code;
        //     const errorMessage = error.message;
        //     alert(errorMessage);
        // });
    }

    return(
        <>
            {/* <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                <Form.Control
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </FloatingLabel>
            <Button variant="primary" onClick={handleResetPassword}>
                Send Reset Email
            </Button> */}
            <Form onSubmit={handleResetPassword}>
            <FloatingLabel 
                controlId="floatingInput" 
                label="Email address" 
                className="mb-3"
            >
                <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={loading}
                />
            </FloatingLabel>
            <Button 
                variant="primary" 
                type="submit"
                disabled={loading}
            >
                {loading ? 'Sending...' : 'Send Reset Email'}
            </Button>
        </Form>
        </>
    );
}


