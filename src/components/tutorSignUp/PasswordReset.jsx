import { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore"; //Import Firestore functions
import '../../.ExternalCss/PasswordReset.css';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import styles from "../../.ExternalCss/PasswordReset.module.css";
import image from "../../assets/images/rb_5488.png";

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
    };

    return (
        
        <div className={styles.container}>
            <div className={styles.logo}>SMART <span>TUTOR</span></div>
            <div className={styles.glassBox}>
                <h2 className={styles.title}>Enter Your Email Address To Reset Your Password</h2>
                <Form onSubmit={handleResetPassword} className={styles.form}>
                    <FloatingLabel 
                    controlId="floatingInput" 
                    label="Email address" 
                    className={styles.inputLabel}>
                        
                        <Form.Control
                            type="email"
                            placeholder="name@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled={loading}
                            className={styles.input}
                        />
                    </FloatingLabel>
                    <Button 
                    variant="primary"
                    type="submit" 
                    disabled={loading} 
                    className={styles.button}>
                        {loading ? "Sending..." : "Send Reset Email"}
                    </Button>
                    <p className={styles.cancel}>Cancel</p>
                </Form>
            </div>
            <img src={image} alt="Decorative" className={styles.image} />
        </div>
    );
};


