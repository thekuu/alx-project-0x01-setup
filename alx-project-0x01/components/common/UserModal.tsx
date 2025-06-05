// components/common/UserModal.tsx

import React, { useState } from 'react';
import { UserData, UserModalProps } from '../../interfaces';

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState<UserData>({
    name: '',
    username: '',
    email: '',
    phone: '',
    website: '',
    address: {
      street: '',
      suite: '',
      city: '',
      zipcode: '',
      geo: {
        lat: '',
        lng: '',
      },
    },
    company: {
      name: '',
      catchPhrase: '',
      bs: '',
    },
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    path?: string[]
  ) => {
    const { name, value } = e.target;
    if (!path || path.length === 0) {
      setFormData(prev => ({ ...prev, [name]: value }));
    } else {
      setFormData(prev => {
        const updated = { ...prev };
        let current: any = updated;
        for (let i = 0; i < path.length - 1; i++) {
          current = current[path[i]];
        }
        current[path[path.length - 1]] = value;
        return updated;
      });
    }
  };

  const handleSubmit = () => {
    onSubmit(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-lg">
        <h2 className="text-xl font-bold mb-4">Add New User</h2>

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full mb-2 p-2 border rounded"
        />
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          className="w-full mb-2 p-2 border rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full mb-2 p-2 border rounded"
        />

        <input
          type="text"
          placeholder="Phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full mb-2 p-2 border rounded"
        />

        <input
          type="text"
          placeholder="Website"
          name="website"
          value={formData.website}
          onChange={handleChange}
          className="w-full mb-2 p-2 border rounded"
        />

        <input
          type="text"
          placeholder="Street"
          value={formData.address.street}
          onChange={e => handleChange(e, ['address', 'street'])}
          className="w-full mb-2 p-2 border rounded"
        />
        <input
          type="text"
          placeholder="City"
          value={formData.address.city}
          onChange={e => handleChange(e, ['address', 'city'])}
          className="w-full mb-2 p-2 border rounded"
        />

        <input
          type="text"
          placeholder="Company Name"
          value={formData.company.name}
          onChange={e => handleChange(e, ['company', 'name'])}
          className="w-full mb-2 p-2 border rounded"
        />

        <div className="flex justify-end gap-4 mt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
