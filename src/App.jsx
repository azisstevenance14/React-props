import PortofolioCard from './components/PortofolioCards'; // Pastikan nama file-nya pas (tanpa 's' di akhir jika file aslinya PortofolioCard.jsx)

function App(){
  const namaSaya = "Azis Steven S. Ance";
  
  return (
    // Bungkus semuanya dengan Fragment (<> dan </>)
    <>
      <div className="container bg-dark text-white p-4 my-4">
        <h2>Halo, Nama Saya : <strong> {namaSaya}</strong></h2>
      </div>

      <div className="container">
        <hr className="text-white"/>
        
        {/* Komentar yang benar di dalam JSX, dengan data props */}
       <PortofolioCard 
        judul="Frontend Web Development" 
        deskripsi="Membangun tampilan antarmuka modern menggunakan React.js dan Bootstrap." 
        kategori="JavaScript"
      />

      <PortofolioCard 
        judul="IoT & Hardware Engineering" 
        deskripsi="Merakit sistem monitoring menggunakan ESP8266 dan sensor ultrasonik." 
        kategori="Embedded Systems"
      />
      </div>
    </>
  );
}

export default App;