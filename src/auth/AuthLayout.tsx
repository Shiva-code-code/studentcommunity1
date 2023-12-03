import { Outlet , Navigate } from 'react-router-dom';


const AuthLayout = () => {
  const isAuthenticated = false;


  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <>
        <section className="flex flex-1 justify-center items-center flex-col py-12">
          <Outlet/>
        </section>

        {/* <img 
          src="/public/assets/images/side-img.svg"
          alt="logo"
          className="hidden xl:block h-screen w-1/2 object-cover bg-no-repeat bg-center"
          /> */}
          <div className="hidden xl:block h-screen w-1/2 object-cover bg-no-repeat">
            <h6 className="h5-bold md:h2-bold pt-5 sm:pt-12"><center><p>STUDENT COMMUNITY WEB </p></center></h6>
            <br></br>
            <p className="text-light-3 small-medium md:base-regular mt-2">The web-based nature of the platform allows easy access to resources through a sharing module, enabling the exchange of educational materials. A dedicated online marketplace supports classifieds for textbooks and housing. Collaboration tools provide essential support for group projects and study groups, enhancing academic teamwork in a virtual environment.</p><br></br>
            <p className="text-light-3 small-medium md:base-regular mt-3">The platform also includes a social networking component that allows students to connect with each other and share information. This feature is particularly useful for incoming freshmen, who can use the platform to meet other students and get to know their new campus before they arrive.</p><br></br>
            <p className="text-light-3 small-medium md:base-regular mt-2">*This is only for MRCET students</p><br></br>
            <img src="/assets/images/mrcet1.png"></img>
          </div>
            
        </>
      )}
    </>
  )
}

export default AuthLayout

{/* <div className="hidden xl:block h-screen w-1/2 object-cover bg-no-repeat">
            <h6 className="h3-bold md:h2-bold pt-5 sm:pt-12"><center><p>STUDENT COMMUNITY WEB </p></center></h6>
            <br></br>
            <p className="text-light-3 small-medium md:base-regular mt-2">The web-based nature of the platform allows easy access to resources through a sharing module, enabling the exchange of educational materials. A dedicated online marketplace supports classifieds for textbooks and housing. Collaboration tools provide essential support for group projects and study groups, enhancing academic teamwork in a virtual environment.</p><br></br>
            <p className="text-light-3 small-medium md:base-regular mt-2">The platform also includes a social networking component that allows students to connect with each other and share information. This feature is particularly useful for incoming freshmen, who can use the platform to meet other students and get to know their new campus before they arrive.</p><br></br>
            <p className="text-light-3 small-medium md:base-regular mt-2">*This is only for MRCET students</p><br></br>
            <img src="/assets/images/mrcet1.png"></img> */}