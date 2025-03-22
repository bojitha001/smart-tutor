import {useState} from 'react'
import styles from '../../.ExternalCss/StudentSettings.module.css'

export const StudentSettings = () => {
  const [formData, setFormData] = useState({
    firstName: 'Thevinu',
    lastName: 'Perera',
    email: 'thevinu@example.com',
    contact: '+94 77 123 4567',
    bio: 'Experienced mathematics tutor specializing in advanced calculus and statistics.',
    password: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [profileImage, setProfileImage] = useState('https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop');

  

  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Settings updated successfully!');
  };
     
    
      return (
        <div className={styles.settingsContainer}>
          <div className={styles.header}>
            <div>
              <h1>Settings</h1>
              <p>Manage your account settings and preferences.</p>
            </div>
          </div>
    
          <form onSubmit={handleSubmit} className={styles.settingsForm}>
            
    
            
    
            <button type="submit" className={styles.saveButton}>
              Save Changes
            </button>
          </form>
        </div>
      );
  
}
export default StudentSettings