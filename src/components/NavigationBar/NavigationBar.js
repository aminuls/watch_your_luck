import Image from "next/image";

export const NavigationBar = () => {
   const navButton = {
      width: "50px",
      height: "50px",
   };
   return (
      <nav class="navbar bg-body-tertiary fixed-top">
         <div class="container row mx-auto text-center">
            <div className="col-3 text-start">
               <button class="navbar-toggler p-0 border-0 shadow-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                  <div className="p-3 rounded-circle border d-flex justify-content-center align-items-center" style={navButton}>
                     <Image src="/assets/coolicon.png" width="18" height="12"></Image>
                  </div>
               </button>
            </div>
            <div className="col-6">
               <Image src="/assets/watch.svg" width="142" height="98"></Image>
            </div>
            <div className="d-flex gap-4 col-3">
               <div className="p-3 rounded-circle border d-flex justify-content-center align-items-center" style={navButton}>
                  <Image src="/assets/Search.png" width="19" height="20"></Image>
               </div>
               <div className="p-3 rounded-circle border d-flex justify-content-center align-items-center" style={navButton}>
                  <Image src="/assets/Cart.png" width="24" height="24"></Image>
               </div>
               <div className="p-3 rounded-circle border d-flex justify-content-center align-items-center" style={navButton}>
                  <Image src="/assets/Profile.png" width="24" height="24"></Image>
               </div>
            </div>
            <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
               <div class="offcanvas-header">
                  <Image src="/assets/watch.svg" width="142" height="98"></Image>
                  <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
               </div>
               <div class="offcanvas-body">
                  <ul class="navbar-nav justify-content-end text-start fw-semibold flex-grow-1 pe-3">
                     <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">
                           Home
                        </a>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link" href="#">
                           Link
                        </a>
                     </li>
                  </ul>
                  <form class="d-flex mt-3" role="search">
                     <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn p-3 rounded-circle border d-flex justify-content-center align-items-center" style={navButton} type="submit">
                           <Image src="/assets/Search.png" width="19" height="20"></Image>
                        </button>
                  </form>
               </div>
            </div>
         </div>
      </nav>
   );
};
