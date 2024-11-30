// Profile.js

import React, { useState } from 'react';
import { user as mockUser } from '../assets/data'; 

function Profile({ isOpen, onClose }) {
  // State for profile data (initially taken from mock user data)
  const [user, setUser] = useState(mockUser);
  
  // State for controlling edit mode
  const [isEditing, setIsEditing] = useState(false);

  // Function to handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  // Function to start editing
  const startEdit = () => {
    setIsEditing(true);
  };

  // Function to save changes and exit edit mode
  const saveChanges = () => {
    setIsEditing(false);
    console.log("Profile Updated: ", user);
  };

  // Function to cancel changes and exit edit mode
  const cancelEdit = () => {
    setUser(mockUser); 
    setIsEditing(false);
  };

  const { _id, name, title, role, email, createdAt } = user;
  const joinedDate = new Date(createdAt).toLocaleDateString();

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg">
            <div className="flex justify-between items-center border-b pb-3">
              <h2 className="text-xl font-bold">User Profile</h2>
              <button onClick={onClose} className="text-xl">&times;</button>
            </div>
            <div className="mt-4">
              <div className="mb-4">
                {isEditing ? (
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleInputChange}
                    className="border border-gray-300 rounded px-2 py-1 w-full"
                  />
                ) : (
                  <h3 className="font-semibold text-lg">{name}</h3>
                )}
              </div>
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <h4 className="font-semibold">User ID:</h4>
                  <p>{_id}</p>
                </div>
                <div>
                  <h4 className="font-semibold">Role:</h4>
                  {isEditing ? (
                    <input
                      type="text"
                      name="role"
                      value={role}
                      onChange={handleInputChange}
                      className="border border-gray-300 rounded px-2 py-1 w-full"
                    />
                  ) : (
                    <p>{role}</p>
                  )}
                </div>
                <div>
                  <h4 className="font-semibold">Title:</h4>
                  {isEditing ? (
                    <input
                      type="text"
                      name="title"
                      value={title}
                      onChange={handleInputChange}
                      className="border border-gray-300 rounded px-2 py-1 w-full"
                    />
                  ) : (
                    <p>{title}</p>
                  )}
                </div>
                <div>
                  <h4 className="font-semibold">Email Address:</h4>
                  {isEditing ? (
                    <input
                      type="email"
                      name="email"
                      value={email}
                      onChange={handleInputChange}
                      className="border border-gray-300 rounded px-2 py-1 w-full"
                    />
                  ) : (
                    <p>{email}</p>
                  )}
                </div>
                <div>
                  <h4 className="font-semibold">Joined Since:</h4>
                  <p>{joinedDate}</p>
                </div>
              </div>
              <div className="mt-6 flex justify-between items-center">
                {!isEditing && (
                  <button
                    onClick={startEdit}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  >
                    Edit Profile
                  </button>
                )}
                <div className="flex gap-4">
                  <button
                    onClick={() => {
                      if (isEditing) {
                        cancelEdit(); 
                      } else {
                        onClose(); 
                      }
                    }}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  >
                    {isEditing ? "Cancel" : "Close"}
                  </button>
                  {isEditing && (
                    <button
                      onClick={saveChanges}
                      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                      Save Changes
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Profile;
