import React, { useState , useHistory} from 'react';

export default function Signup() {
  const history = useHistory();


  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    rememberMe: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save form data to local storage
    localStorage.setItem('formData', JSON.stringify(formData));
    // Clear form data
    setFormData({
      username: '',
      email: '',
      password: '',
      rememberMe: false
    });

    // window.location.reload();
    history.push('/'); 
  };

  const handleLogout = () => {
    // Remove the data from local storage
    localStorage.removeItem('formData');
    // Clear the form data state
    setFormData({
        username: '',
        email: '',
        password: '',
        rememberMe: false
    });
    // Refresh the page
    // window.location.reload();
    history.push('/'); 
};
  
  return (
    <div>
      <section className="bg-cover bg-center" style={{backgroundImage: "url(https://images.unsplash.com/photo-1619796696652-a29a854f21a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"}}>
        <div className="flex  flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 ">
            <img className="w-8 h-8 mr-2" src="https://w7.pngwing.com/pngs/663/305/png-transparent-daenerys-targaryen-house-targaryen-sigil-decal-sticker-showcase-dragon-heart-logo-thumbnail.png" alt="logo" />
            Mystical-Bharat   
          </a>
          <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#"  onSubmit={handleSubmit}>

          <div >
          <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 ">Username</label>
            <input type="text" name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-rose-600 focus:border-rose-600 block w-full p-2.5" placeholder="Username" required  value={formData.username} onChange={handleChange}/>
          </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                  <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-rose-600 focus:border-rose-600 block w-full p-2.5" placeholder="name@company.com" required value={formData.email} onChange={handleChange} />
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                  <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-rose-600 focus:border-rose-600 block w-full p-2.5" required value={formData.password} onChange={handleChange}/>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-rose-300" required />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="remember" className="text-gray-500">Remember me</label>
                    </div>
                  </div>
                  <a href="#" className="text-sm font-medium text-primary-600 hover:underline">Forgot password?</a>
                </div>
                <button type="submit" className="w-full text-white bg-rose-600 hover:bg-rose-700 focus:ring-4 focus:outline-none focus:ring-rose-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button>
                <p className="text-sm font-light text-gray-500">
                  Don't have an account yet? <a href="#" className="font-medium text-rose-600 hover:underline">Sign up</a>
                </p>
              </form>
              <div>
        <button type="submit" className="w-full text-white bg-fuchsia-600 hover:bg-fuchsia-700 focus:ring-4 focus:outline-none focus:ring-rose-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" onClick={handleLogout}>
        Logout
      </button>
        </div>
            </div>
          </div>
        </div>
       
      </section>

      
    </div>
  );
}
