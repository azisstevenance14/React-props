// Tangkap Props yang dikirim dari luar

function PortofolioCard(props){
    return (
        <div className="card bg-secondary text-white p-3 mb-3">
            <div className="card-body">
                {/* Data ditampilkan secara dinamis lewat props */}
                <h4 className="card-title">{props.judul}</h4>
                <p className="card-text">
                    {props.deskripsi}
                </p>
                <button className="btn btn-light text-dark fw-bold">
                        {props.kategori}
                </button>
            </div>
        </div>
    );

}

export default PortofolioCard;