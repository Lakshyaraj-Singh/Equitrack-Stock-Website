import { useFormik } from 'formik';
import { SignupValidation } from './Vaildations';
import { useNavigate } from 'react-router-dom';
import { register } from '../../USERAPIS/Uapi';
import { useTrading } from '../../ContextApi';
import { LoginLoading } from '../../Loading';
import toast from 'react-hot-toast';

export const Signup = () => {
   let {setIsLoading,isLoading}=useTrading();
  const navigate=useNavigate();
  const formik = useFormik({
    initialValues: {
      email: '',
      username: '',
      password: '',
    },
    validate:SignupValidation,
    onSubmit: async(values) => {
      console.log('Form submitted:', values);
      setIsLoading(true)
      let res=await register(values);
      if(res.status==200){
        console.log("Hurray!!1")
        setIsLoading(false)
        toast.success("Signed In!!")
        navigate('/login');
      }
      else{
        console.log(res)
        toast.error("Error Signing In!!")
        setIsLoading(false)

      }
    },
  });

  return (<>
    {isLoading && <LoginLoading message={"Signing In"}/>}
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
    </>);
};