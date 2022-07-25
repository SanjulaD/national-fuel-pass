import jsPDF from 'jspdf';
import React, { useState } from 'react';
import Footer from './components/footer';

function App() {
  const [profileImage, setProfileImage] = useState('');

  const imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setProfileImage(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const generatePDF = () => {
    var doc = new jsPDF('p', 'pt');

    doc.setFontSize(40);
    doc.text(300, 60, 'National Fuel Pass', { align: 'center' });
    doc.addFont('helvetica', 'normal');
    doc.addImage(profileImage, 'JPEG', 50, 100, 500, 500);
    doc.save('demo.pdf');
  };

  return (
    <>
      <section className="flex items-center relative h-screen w-screen bg-yellow-100 flex-wrap">
        <div className="p-4 w-full text-center sm:p-8">
          <div className="mb-2 font-bold text-red-100 lg:text-9xl md:text-9xl sm:text-6xl xl:text-9xl 2xl:text-9xl">
            NATIONAL FUEL PASS
          </div>
          <div className="mb-5 text-black sm:text-xl font-semibold md:text-4xl xl:text-6xl 2xl:text-6xl">
            Upload your QR here
          </div>
          <input
            type="file"
            onChange={imageHandler}
            class=" text-sm
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              mt-5 text-black bg-orange-100 hover:bg-orange-200 font-medium rounded-2xl px-12 sm:px-0 lg:px-0 md:px-0 py-3.5 text-center 
            "
          />
        </div>
        {profileImage && (
          <>
            <div className="grid-rows-2 grid-cols-1 items-center justify-items-center relative -mt-52 mx-auto content-center">
              <div className="aspect-[1/1] object-center w-64">
                <img
                  src={profileImage}
                  alt="qr code"
                  className="shadow-lg rounded max-w-full h-auto align-middle border-none"
                />
              </div>
              <button
                onClick={generatePDF}
                type="button"
                className=" justify-center justify-self-center mx-auto mt-10 items-center text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2"
              >
                Download
              </button>
            </div>
          </>
        )}
      </section>
      <Footer />
    </>
  );
}
export default App;
