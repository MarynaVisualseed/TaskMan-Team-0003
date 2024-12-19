import React, { useState } from "react";
import { user as mockUser } from "../assets/data";

const ROLES = ["Administrator", "Project Manager", "Team Member"];

function Profile({ isOpen, onClose, existingUsers = [] }) {
  const [user, setUser] = useState(mockUser);
  const [isEditing, setIsEditing] = useState(false);
  const [errors, setErrors] = useState({});

  const validateInputs = () => {
    const newErrors = {};

    if (!user.name.trim()) {
      newErrors.name = "Name cannot be empty";
    } else if (user.name.length > 30) {
      newErrors.name = "Name cannot exceed 30 characters";
    } else if (
      existingUsers.some(
        (u) => u.name.trim() === user.name.trim() && u._id !== user._id
      )
    ) {
      newErrors.name = "Name must be unique";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!user.email.trim()) {
      newErrors.email = "Email cannot be empty";
    } else if (user.email.length > 50) {
      newErrors.email = "Email cannot exceed 50 characters";
    } else if (!emailRegex.test(user.email)) {
      newErrors.email = "Invalid email format";
    } else if (
      existingUsers.some(
        (u) => u.email.trim() === user.email.trim() && u._id !== user._id
      )
    ) {
      newErrors.email = "Email must be unique";
    }

    if (!user.title.trim()) {
      newErrors.title = "Title cannot be empty";
    } else if (user.title.length > 30) {
      newErrors.title = "Title cannot exceed 30 characters";
    }

    return newErrors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const saveChanges = () => {
    const newErrors = validateInputs();
    if (Object.keys(newErrors).length === 0) {
      setIsEditing(false);
      console.log("Profile Updated: ", user);
    } else {
      setErrors(newErrors);
    }
  };

  const cancelEdit = () => {
    setUser(mockUser);
    setErrors({});
    setIsEditing(false);
  };

  const { _id, name, title, role, email, createdAt } = user;
  const joinedDate = new Date(createdAt).toLocaleDateString();

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg">
            {/* Header */}
            <div className="flex justify-between items-center border-b pb-3">
              <h2 className="text-xl font-bold">User Profile</h2>
              <button onClick={onClose} className="text-xl">
                &times;
              </button>
            </div>

            {/* Profile Fields */}
            <div className="mt-4">
              {/* Name */}
              <div className="mb-4">
                <label className="font-semibold">Name:</label>
                {isEditing ? (
                  <>
                    <input
                      type="text"
                      name="name"
                      value={name}
                      onChange={handleInputChange}
                      className="border border-gray-300 rounded px-2 py-1 w-full"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </>
                ) : (
                  <h3 className="font-semibold text-lg">{name}</h3>
                )}
              </div>

              {/* Role Dropdown */}
              <div className="mb-4">
                <label className="font-semibold">Role:</label>
                {isEditing ? (
                  <>
                    <select
                      name="role"
                      value={role}
                      onChange={handleInputChange}
                      className="border border-gray-300 rounded px-2 py-1 w-full"
                    >
                      {ROLES.map((r) => (
                        <option key={r} value={r}>
                          {r}
                        </option>
                      ))}
                    </select>
                    {errors.role && (
                      <p className="text-red-500 text-sm mt-1">{errors.role}</p>
                    )}
                  </>
                ) : (
                  <p>{role}</p>
                )}
              </div>

              {/* Title */}
              <div className="mb-4">
                <label className="font-semibold">Title:</label>
                {isEditing ? (
                  <>
                    <input
                      type="text"
                      name="title"
                      value={title}
                      onChange={handleInputChange}
                      className="border border-gray-300 rounded px-2 py-1 w-full"
                    />
                    {errors.title && (
                      <p className="text-red-500 text-sm mt-1">{errors.title}</p>
                    )}
                  </>
                ) : (
                  <p>{title}</p>
                )}
              </div>

              {/* Email */}
              <div className="mb-4">
                <label className="font-semibold">Email Address:</label>
                {isEditing ? (
                  <>
                    <input
                      type="email"
                      name="email"
                      value={email}
                      onChange={handleInputChange}
                      className="border border-gray-300 rounded px-2 py-1 w-full"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </>
                ) : (
                  <p>{email}</p>
                )}
              </div>

              {/* Joined Date */}
              <div className="mb-4">
                <label className="font-semibold">Joined Since:</label>
                <p>{joinedDate}</p>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-6 flex justify-between items-center">
              {!isEditing && (
                <button
                  onClick={() => setIsEditing(true)}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Edit Profile
                </button>
              )}
              <div className="flex gap-4">
                <button
                  onClick={() => (isEditing ? cancelEdit() : onClose())}
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
      )}
    </>
  );
}

export default Profile;
