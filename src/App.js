import React from 'react';
import Footer from './components/footer';

function App() {
  return (
    <>
      <section className="flex items-center relative h-screen w-screen bg-yellow-100">
        <div className="p-4 w-full text-center sm:p-8">
          <div className="mb-2 font-bold text-red-100 lg:text-9xl md:text-9xl sm:text-6xl xl:text-9xl 2xl:text-9xl">
            NATIONAL FUEL PASS
          </div>
          <div className="mb-5 text-black sm:text-xl font-semibold md:text-4xl xl:text-6xl 2xl:text-6xl">
            Upload your QR here
          </div>
          <button
            type="button"
            className="mt-5 text-black bg-orange-100 hover:bg-orange-200 font-medium rounded-2xl px-12 py-3.5 text-center "
          >
            Click
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
}
export default App;
