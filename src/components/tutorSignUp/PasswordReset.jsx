import { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore"; //Import Firestore functions
import '../../.ExternalCss/PasswordReset.css';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import Stack from 'react-bootstrap/Stack';

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
            <div>
                <Form onSubmit={handleResetPassword}>
                    <Stack gap={2} className="col-md-5 mx-auto">
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
                            className="reset-password-button"
                        >
                            {loading ? 'Sending...' : 'Send Reset Email'}
                        </Button>
                        <Button variant="outline-secondary" size="sm" className="reset-password-button">Cancel</Button>
                    </Stack>    
                </Form>
            </div>
        </>
    );
}


