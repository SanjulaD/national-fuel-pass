import React from 'react';
function App() {
  return (
    <>
      <section className="flex items-center relative h-screen w-screen bg-yellow-100">
        <div class="p-4 w-full text-center sm:p-8 0">
          <div class="mb-2 font-bold text-red-100" style={{ fontSize: '92px' }}>
            NATIONAL FUEL PASS
          </div>
          <div
            class="mb-5 text-black sm:text-lg font-semibold"
            style={{ fontSize: '48px' }}
          >
            Upload your QR here
          </div>
          <button
            type="button"
            class="mt-5 text-black bg-orange-100 hover:bg-orange-200 font-medium rounded-2xl px-12 py-3.5 text-center "
          >
            Click
          </button>
        </div>
      </section>
    </>
  );
}
export default App;
