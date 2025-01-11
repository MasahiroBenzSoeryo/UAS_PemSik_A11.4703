import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { logout } from "../Redux/AuthSlice";

const AdminLayout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.auth);

    const handleLogout = () => {
        dispatch(logout());
        Swal.fire({
            icon: "success",
            title: "Berhasil Log Out",
        });
        navigate("/");
    };

    return (
        <div className="bg-gray-100 min-h-screen flex flex-row">
            <aside className="bg-gray-900 w-64 text-white p-4">
                <h2 className="font-bold text-xl mb-4 text-center">ReportLongsorNow</h2>
                <nav className="mt-4">
                    <ul>
                        <li className="mb-2">
                            <a
                                href="/admin"
                                className="block bg-blue-600 text-white px-4 py-2 rounded-md text-center hover:bg-blue-900 transition duration-200"
                            >
                                Dashboard
                            </a>
                        </li>
                        <li className="mb-2">
                            <a
                                href="/admin/bencana"
                                className="block bg-blue-600 text-white px-4 py-2 rounded-md text-center hover:bg-blue-900 transition duration-200"
                            >
                                Laporan Tanah Longsor
                            </a>
                        </li>
                    </ul>
                </nav>
            </aside>

            <div className="flex flex-col flex-1">
                <header className="bg-blue-900 py-4 px-6 flex justify-between items-center">
                    <div>
                        <h2 className="font-bold text-white text-xl">Admin ReportLongsorNow</h2>
                    </div>
                    <div className="flex items-center space-x-4">
                        <p className="px-4 py-2 text-white">
                            Welcome, {user.name} ({user.email})
                        </p>
                        <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700">Logout</button>
                    </div>
                </header>

                <main className="p-4 flex-grow">
                    <Outlet />
                </main>

                <footer className="bg-blue-900 p-3 text-white text-center mt-auto">
                    <p>&copy; ReportLongsorNow</p>
                </footer>
            </div>
        </div>
    );
}

export default AdminLayout;
