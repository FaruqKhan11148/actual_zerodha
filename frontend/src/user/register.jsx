// Frontend: /pages/signup.jsx (Next.js)

import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Register() {
  const router = useRouter();
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    phone: '',
    age: '',
    gender: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('https://tradetrack-zbfc.onrender.com/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include', // send cookies if session-based
        body: JSON.stringify(form),
      });

      if (res.ok) {
        // Redirect to dashboard after successful signup
        router.push('https://tracktrade-lovat.vercel.app');
      } else {
        const error = await res.json();
        alert(error.message || 'Signup failed');
      }
    } catch (err) {
      console.error(err);
      alert('Something went wrong');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="username" placeholder="Username" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="password" type="password" onChange={handleChange} />
      <input name="phone" placeholder="Phone" onChange={handleChange} />
      <input name="age" placeholder="Age" onChange={handleChange} />
      <select name="gender" onChange={handleChange}>
        <option value="">Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <button type="submit">Register</button>
    </form>
  );
}
