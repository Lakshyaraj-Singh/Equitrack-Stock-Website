import { useFormik } from 'formik';
import { loginValidation } from './Vaildations';
import { useNavigate } from 'react-router-dom';
import { login } from '../../USERAPIS/Uapi';
import toast from 'react-hot-toast';
import { useTrading } from '../../ContextApi';
import { LoginLoading } from '../../Loading';
export const Login = () => {
  let {setIsLoading,isLoading}=useTrading();
   
  const navigate=useNavigate();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validate:loginValidation,
    onSubmit: async(values) => {
      setIsLoading(true);
      console.log('Form submitted:', values);
      let res=await login(values);
      if(res.status==200){
        setTimeout(()=>{
          navigate("/dashboard");
          setIsLoading(false)
        },1500)
        toast.success("Login Successfull...")
       
        console.log(res)


      }

      else{
        setTimeout(()=>{
          setIsLoading(false);
        },1500)
        toast.error("Authentication Problem")
        console.log(res)
      }
      
    },
    

    
  });
  return (<>
    {isLoading&& <LoginLoading message={"Logging In"}/>}

    <div className="flex items-center justify-center bg-sky-100">
      <div className="card w-96 bg-base-100 shadow-xl mt-10 mb-10">
        <h1 className="text-center text-2xl mt-2 font-semibold">Login</h1>
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
          <button type="submit" className="bg-accent-content text-white p-3 rounded text-sm hover:bg-gray-700 cursor-pointer">
            Login
          </button>
          <div>
            <p>Don't have an account? <span className='text-blue-500 cursor-pointer' onClick={()=>navigate('/signup')}>Signup</span></p>
          </div>
        </form>
      </div>
    </div>
    </>);
};