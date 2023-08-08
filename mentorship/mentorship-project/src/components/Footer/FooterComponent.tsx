const FooterComponent = () => {
  return (
    <footer className="relative bg-blueGray-200 pt-8 pb-6">
      <div className="container mx-auto px-4 ">
        <div className="flex flex-wrap text-center lg:text-center sm:justify-center">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl fonat-semibold text-blueGray-700">
              Contacteaza-ne!
            </h4>
            <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
              Ne gasesti pe platformele de mai jos :)
            </h5>
            <div className="mt-6 lg:mb-0 mb-6">
              <a href="https://www.facebook.com/gabrielaracovitailescu">
                <button
                  className="bg-red text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                ></button>
              </a>
              <a href="https://www.instagram.com/ilas.flowers/">
                <button
                  className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                ></button>
              </a>
            </div>
          </div>
        </div>
        <hr className="my-6 border-blueGray-300" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-blueGray-500 font-semibold py-1">
              Creat de &#350;eremet Ion <span>2023</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default FooterComponent;
