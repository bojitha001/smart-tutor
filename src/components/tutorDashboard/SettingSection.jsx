import React, { useState } from 'react';
import styles from "../../.ExternalCss/TutorSettings.module.css";

const Settings = () => {
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

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
        <div className={styles.profileSection}>
          <div className={styles.profileImageContainer}>
            <img src={profileImage} alt="Profile" className={styles.profileImage} />
            <label className={styles.imageUpload}>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                hidden
              />
              Change Photo
            </label>
          </div>
          <div className={styles.profileInfo}>
            <h2>{`${formData.firstName} ${formData.lastName}`}</h2>
            <p>@thevinu_</p>
          </div>
        </div>

        <div className={styles.formGrid}>
          <div className={styles.formGroup}>
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder="Enter your first name"
            />
          </div>

          <div className={styles.formGroup}>
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              placeholder="Enter your last name"
            />
          </div>

          <div className={styles.formGroup}>
            <label>E-mail</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
            />
          </div>

          <div className={styles.formGroup}>
            <label>Contact Info</label>
            <input
              type="tel"
              name="contact"
              value={formData.contact}
              onChange={handleInputChange}
              placeholder="Enter your contact number"
            />
          </div>
        </div>

        <div className={styles.formGroup}>
          <label>Bio & Qualifications</label>
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleInputChange}
            placeholder="Tell us about yourself and your qualifications"
            rows="4"
          />
        </div>

        <div className={styles.passwordSection}>
          <h3>Change Password</h3>
          <div className={styles.formGrid}>
            <div className={styles.formGroup}>
              <label>Current Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Enter current password"
              />
            </div>

            <div className={styles.formGroup}>
              <label>New Password</label>
              <input
                type="password"
                name="newPassword"
                value={formData.newPassword}
                onChange={handleInputChange}
                placeholder="Enter new password"
              />
            </div>

            <div className={styles.formGroup}>
              <label>Confirm New Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                placeholder="Confirm new password"
              />
            </div>
          </div>
        </div>

        <button type="submit" className={styles.saveButton}>
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default Settings;