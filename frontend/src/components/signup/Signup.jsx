import { useFormik } from 'formik';
import { SignupValidation } from './Vaildations';
import { useNavigate } from 'react-router-dom';

export const Signup = () => {
  const navigate=useNavigate();
  const formik = useFormik({
    initialValues: {
      email: '',
      username: '',
      password: '',
    },
    validate:SignupValidation,
    onSubmit: (values) => {
      console.log('Form submitted:', values);
      
    },
  });

  return (
    <div className="flex items-center justify-center bg-sky-100">
      <div className="card w-96 bg-base-100 shadow-xl mt-10 mb-10">
        <h1 className="text-center text-2xl mt-2 font-semibold">Signup</h1>
        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-8 items-center p-6">
          
          <div className='w-full'>
            <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            className="p-2 border-1 rounded w-full"
            placeholder="equi123@gmail.com"
          />
          {formik.errors.email && <p className="text-xs text-red-500">{formik.errors.email}</p>}
            </div>
          
          <div className='w-full'>
            <input
            id="username"
            name="username"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.username}
            className="p-2 border-1 rounded w-full"
            placeholder="username"
          />
          {formik.errors.username && <p className="text-xs text-red-500">{formik.errors.username}</p>}
          </div>
          <div className='w-full'>
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            className="p-2 border-1 rounded w-full"
            placeholder="password"
          />
          {formik.errors.password && <p className="text-xs text-red-500">{formik.errors.password}</p>}
          </div>
          <button type="submit" className="bg-black text-white p-3 rounded text-sm hover:bg-gray-700 cursor-pointer">
            Signup
          </button>
          <div>
            <p>Already have an account? <span className='text-blue-500 cursor-pointer' onClick={()=>navigate('/login')}>Login</span></p>
          </div>
        </form>
      </div>
    </div>
  );
};