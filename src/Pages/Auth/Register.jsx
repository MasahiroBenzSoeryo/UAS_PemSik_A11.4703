import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [form, setForm] = useState({ name: '', email: '', password: '' });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }

    const handleCancel = () => {
        setForm({ name: "", email: "", password: "" });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://api-disasters-reports.vercel.app/api/register', form, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.status === 201) {
                Swal.fire({
                    icon: "success",
                    title: "Registrasi Berhasil",
                    text: response.data.message,
                });
                setForm({
                    name: '',
                    email: '',
                    password: '',
                });
                navigate('/');
            }
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Registrasi Gagal",
                text: error.response?.data?.message || "Silahkan coba lagi.",
            })
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
                <h1 className="text-2xl font-bold text-center mb-4 mt-4">Halaman Register</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700"
                            htmlFor="name">Nama:</label>
                        <input
                            type="text"
                            name="name"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                            onChange={handleChange}
                            value={form.name}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700"
                            htmlFor="email">Email:</label>
                        <input
                            type="email"
                            name="email"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                            onChange={handleChange}
                            value={form.email}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700"
                            htmlFor="password">Password:</label>
                        <input
                            type="password"
                            name="password"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                            onChange={handleChange}
                            value={form.password}
                            required
                        />
                    </div>
                    <div className="mt-6 flex justify-between">
                        <button type="button" onClick={handleCancel} className="w-full bg-gray-600 transition duration-200 hover:bg-gray-900 text-white px-4 py-2 rounded mr-2">
                            Batal
                        </button>
                        <button type="submit" className="w-full bg-green-600 transition duration-200 hover:bg-green-900 text-white px-4 py-2 rounded">
                            Register
                        </button>
                    </div>
                    <div className="mt-4 flex justify-between">
                        <a href="/" className="w-full bg-blue-600 transition duration-200 hover:bg-blue-900 text-white text-center px-4 py-2 rounded mt-2">
                            Login
                        </a>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default Register;