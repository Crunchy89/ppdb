import React, { useState } from "react";

function mts(props) {
    const [search, setSearch] = useState("");
    const url = window.location.origin;
    return (
        <div className="content-wrapper">
            <div className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1 className="m-0 text-dark">
                                Pendaftar Peserta didik MTS
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <section className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="card-title">
                                        Data Pendaftar
                                    </h3>

                                    <div className="card-tools">
                                        <div className="input-group input-group-sm">
                                            <input
                                                type="text"
                                                name="table_search"
                                                className="form-control float-right"
                                                placeholder="Search"
                                                onChange={e =>
                                                    setSearch(e.target.value)
                                                }
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body table-responsive p-0">
                                    <table className="table table-hover text-nowrap">
                                        <thead>
                                            <tr>
                                                <th>No</th>
                                                <th>Nama</th>
                                                <th>Alamat</th>
                                                <th>Nama Ibu</th>
                                                <th>No Wali</th>
                                                <th>Foto</th>
                                                <th>Tahun Diklat</th>
                                                <th>Detail</th>
                                                <th>Aksi</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {props.user
                                                .filter(word =>
                                                    word.nama.includes(search)
                                                )
                                                .map((data, index) =>
                                                    data.nama.length > 0 ? (
                                                        <tr key={index}>
                                                            <td>{index + 1}</td>
                                                            <td>{data.nama}</td>
                                                            <td>
                                                                {data.alamat}
                                                            </td>
                                                            <td>
                                                                {data.nama_ibu}
                                                            </td>
                                                            <td>
                                                                {data.no_wali}
                                                            </td>
                                                            <td>
                                                                <img
                                                                    src={`${url}/berkas/${data.foto}`}
                                                                    width="50px"
                                                                />
                                                            </td>
                                                            <td>
                                                                {
                                                                    data.tahun_diklat
                                                                }
                                                            </td>
                                                            <td>detail</td>
                                                            <td>
                                                                <button className="btn btn-info">
                                                                    <i className="fa fa-fw fa-edit"></i>
                                                                </button>
                                                                &nbsp;
                                                                <button className="btn btn-danger">
                                                                    <i className="fa fa-fw fa-trash"></i>
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    ) : (
                                                        <tr key={index}>
                                                            <td colSpan="3">
                                                                {index + 1}
                                                            </td>
                                                        </tr>
                                                    )
                                                )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default mts;
