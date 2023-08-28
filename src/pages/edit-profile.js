import { useState } from 'react';
import Navbar from "../components/Navbar"
import Header from "src/components/Header.js";


const EditProfilePage = () => {
  const [formData, setFormData] = useState({
    phone_nbr: '',
    social_media: '',
    sport: '',
    player: false,
    school: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData((prevData) => ({ ...prevData, [name]: newValue }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/update-profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Profile updated successfully, handle navigation or display a success message
      } else {
        // Handle error response
      }
    } catch (error) {
      // Handle network or other errors
    }
  };

  return (
    <div>
      <Header />
      <Navbar />
      <h1>Edit Profile</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Phone Number</label>
          <input type="text" name="phone_nbr" value={formData.phone_nbr} onChange={handleChange} />
        </div>
        <div>
          <label>Social Media</label>
          <input type="text" name="social_media" value={formData.social_media} onChange={handleChange} />
        </div>
        <div>
          <label>Sport</label>
          <input type="text" name="sport" value={formData.sport} onChange={handleChange} />
        </div>
        <div>
          <label>Player</label>
          <input type="checkbox" name="player" checked={formData.player} onChange={handleChange} />
        </div>
        <div>
          <label>School</label>
          <input type="text" name="school" value={formData.school} onChange={handleChange} />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EditProfilePage;