import React, { Component } from "react";
import axios from "axios";
import swal from "sweetalert";

class smk extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                nama: "",
                namap: "",
                jk: "",
                nisn: "",
                tempat: "",
                tanggal: "",
                agama: "",
                anak_ke: "",
                jumlah: "",
                status: "",
                alamat: "",
                no_hp: "",
                tinggal: "",
                transportasi: "",
                jarak: "",
                asal: "",
                na: "",
                nr: "",
                hobi: "",
                bidang: "",
                olahraga: "",
                cita: "",
                nama_ayah: "",
                nama_ibu: "",
                pk_ayah: "",
                pk_ibu: "",
                alamat_ortu: "",
                no_wali: "",
                jurusan: "",
                ijazah: [],
                skhun: [],
                foto: [],
                ktp_ayah: [],
                ktp_ibu: [],
                kk: [],
                kip: []
            },
            errors: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleImageChange = this.handleImageChange.bind(this);
    }
    handleChange(e) {
        const { name, value } = e.target;
        const { data, errors } = this.state;
        this.setState({ ...(data[name] = value) });
        this.setState({ ...(errors[name] = null) });
    }
    handleImageChange(e) {
        const { name, files } = e.target;
        const { data, errors } = this.state;
        this.setState({ ...(data[name] = files[0]) });
        this.setState({ ...(errors[name] = null) });
    }
    handleSubmit(e) {
        e.preventDefault();
        const { data, errors } = this.state;
        const file = new FormData();
        for (let i in data) {
            file.append(i, data[i]);
        }
        const url = window.location.origin;
        axios
            .post(`${url}/api/smk`, file, {
                headers: {
                    "content-type": "multipart/form-data"
                }
            })
            .then(res => {
                swal({
                    title: res.data.title,
                    text: res.data.pesan,
                    icon: res.data.icon
                });
                if (res.data.data) {
                    this.setState({ errors: res.data.data });
                }
            })
            .catch(err => console.log(err.status));
    }
    render() {
        return (
            <div className="container-fluid mt-5">
                <h3 className="text-center mt-3 mb-3 animated fadeInDown">
                    Form Pendaftaran SMK Al-Hasanain NU Beraim
                </h3>
                <form onSubmit={this.handleSubmit} noValidate>
                    <div className="card rounder shadow p-2 mt-2 mb-2 animated fadeIn">
                        <h4 className="mt-3 mb-3 text-center">
                            Keterangan Calon Peserta Didik
                        </h4>
                        <div className="col-12">
                            <div className="row">
                                <div className="col-lg-3 col-md-3 col-sm-10 animated fadeInLeft">
                                    <div className="form-row">
                                        <div className="col-md-12 mb-3">
                                            <label htmlFor="nama">
                                                Nama Lengkap
                                            </label>
                                            <input
                                                type="text"
                                                className={`form-control ${
                                                    this.state.errors.nama
                                                        ? "is-invalid"
                                                        : ""
                                                }`}
                                                id="nama"
                                                name="nama"
                                                placeholder="Masukkan Nama Lengkap"
                                                onChange={this.handleChange}
                                                required
                                            />
                                            <div className="invalid-feedback">
                                                {this.state.errors.nama}
                                            </div>
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label htmlFor="namap">
                                                Nama Panggilan
                                            </label>
                                            <input
                                                type="text"
                                                className={`form-control ${
                                                    this.state.errors.namap
                                                        ? "is-invalid"
                                                        : ""
                                                }`}
                                                id="namap"
                                                name="namap"
                                                placeholder="Masukkan Nama Panggilan"
                                                onChange={this.handleChange}
                                                required
                                            />
                                            <div className="invalid-feedback">
                                                {this.state.errors.namap}
                                            </div>
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label htmlFor="jk">
                                                Jenis Kelamin
                                            </label>
                                            <select
                                                className={`form-control ${
                                                    this.state.errors.jk
                                                        ? "is-invalid"
                                                        : ""
                                                }`}
                                                id="jk"
                                                name="jk"
                                                defaultValue=""
                                                onChange={this.handleChange}
                                                required
                                            >
                                                <option disabled value="">
                                                    Pilih Jenis Kelamin
                                                </option>
                                                <option value="Laki - laki">
                                                    Laki - laki
                                                </option>
                                                <option value="Perempuan">
                                                    Perempuan
                                                </option>
                                            </select>
                                            <div className="invalid-feedback">
                                                {this.state.errors.jk}
                                            </div>
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label htmlFor="nisn">NISN</label>
                                            <input
                                                type="number"
                                                className={`form-control ${
                                                    this.state.errors.nisn
                                                        ? "is-invalid"
                                                        : ""
                                                }`}
                                                id="nisn"
                                                name="nisn"
                                                placeholder="Masukkan NISN"
                                                onChange={this.handleChange}
                                                required
                                            />
                                            <div className="invalid-feedback">
                                                {this.state.errors.nisn}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-10 animated fadeInLeft">
                                    <div className="form-row">
                                        <div className="col-md-12 mb-3">
                                            <label htmlFor="tempat">
                                                Tempat Lahir
                                            </label>
                                            <input
                                                type="text"
                                                className={`form-control ${
                                                    this.state.errors.tempat
                                                        ? "is-invalid"
                                                        : ""
                                                }`}
                                                id="tempat"
                                                name="tempat"
                                                placeholder="Tempat Lahir"
                                                onChange={this.handleChange}
                                                required
                                            />
                                            <div className="invalid-feedback">
                                                {this.state.errors.tempat}
                                            </div>
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label htmlFor="tanggal">
                                                Tanggal Lahir
                                            </label>
                                            <input
                                                type="date"
                                                className={`form-control ${
                                                    this.state.errors.tanggal
                                                        ? "is-invalid"
                                                        : ""
                                                }`}
                                                id="tanggal"
                                                name="tanggal"
                                                placeholder="Tanggal Lahir"
                                                onChange={this.handleChange}
                                                required
                                            />
                                            <div className="invalid-feedback">
                                                {this.state.errors.tanggal}
                                            </div>
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label htmlFor="agama">Agama</label>
                                            <input
                                                type="text"
                                                className={`form-control ${
                                                    this.state.errors.agama
                                                        ? "is-invalid"
                                                        : ""
                                                }`}
                                                id="agama"
                                                name="agama"
                                                placeholder="Masukkan Agama"
                                                onChange={this.handleChange}
                                                required
                                            />
                                            <div className="invalid-feedback">
                                                {this.state.errors.agama}
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="anak_ke">
                                                Anak ke
                                            </label>
                                            <input
                                                type="number"
                                                className={`form-control ${
                                                    this.state.errors.anak_ke
                                                        ? "is-invalid"
                                                        : ""
                                                }`}
                                                id="anak_ke"
                                                name="anak_ke"
                                                placeholder="Anak ke"
                                                onChange={this.handleChange}
                                                required
                                            />
                                            <div className="invalid-feedback">
                                                {this.state.errors.anak_ke}
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="jumlah">
                                                Jumlah saudara
                                            </label>
                                            <input
                                                type="number"
                                                className={`form-control ${
                                                    this.state.errors.jumlah
                                                        ? "is-invalid"
                                                        : ""
                                                }`}
                                                id="jumlah"
                                                name="jumlah"
                                                placeholder="Jumlah"
                                                onChange={this.handleChange}
                                                required
                                            />
                                            <div className="invalid-feedback">
                                                {this.state.errors.jumlah}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-10 animated fadeInRight">
                                    <div className="form-row">
                                        <div className="col-md-12 mb-3">
                                            <label htmlFor="status">
                                                Status Dalam Keluarga
                                            </label>
                                            <select
                                                className={`form-control ${
                                                    this.state.errors.status
                                                        ? "is-invalid"
                                                        : ""
                                                }`}
                                                id="status"
                                                name="status"
                                                defaultValue=""
                                                onChange={this.handleChange}
                                                required
                                            >
                                                <option disabled value="">
                                                    Pilih Status
                                                </option>
                                                <option value="Anak Kandung">
                                                    Anak Kandung
                                                </option>
                                                <option value="Anak Tiri">
                                                    Anak Tiri
                                                </option>
                                                <option value="Anak Angkat">
                                                    Anak Angkat
                                                </option>
                                            </select>
                                            <div className="invalid-feedback">
                                                {this.state.errors.status}
                                            </div>
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label htmlFor="alamat">
                                                Alamat
                                            </label>
                                            <input
                                                type="text"
                                                className={`form-control ${
                                                    this.state.errors.alamat
                                                        ? "is-invalid"
                                                        : ""
                                                }`}
                                                id="alamat"
                                                name="alamat"
                                                placeholder="Masukkan Alamat"
                                                onChange={this.handleChange}
                                                required
                                            />
                                            <div className="invalid-feedback">
                                                {this.state.errors.alamat}
                                            </div>
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label htmlFor="no_hp">
                                                Nomor Telepon
                                            </label>
                                            <input
                                                type="number"
                                                className={`form-control ${
                                                    this.state.errors.no_hp
                                                        ? "is-invalid"
                                                        : ""
                                                }`}
                                                id="no_hp"
                                                name="no_hp"
                                                placeholder="Masukkan Nomor Telepon"
                                                onChange={this.handleChange}
                                                required
                                            />
                                            <div className="invalid-feedback">
                                                {this.state.errors.no_hp}
                                            </div>
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label htmlFor="tinggal">
                                                Tinggal Bersama
                                            </label>
                                            <input
                                                type="text"
                                                className={`form-control ${
                                                    this.state.errors.tinggal
                                                        ? "is-invalid"
                                                        : ""
                                                }`}
                                                id="tinggal"
                                                name="tinggal"
                                                placeholder="Tinggal Bersama"
                                                onChange={this.handleChange}
                                                required
                                            />
                                            <div className="invalid-feedback">
                                                {this.state.errors.tinggal}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-10 animated fadeInRight">
                                    <div className="form-row">
                                        <div className="col-md-12 mb-3">
                                            <label htmlFor="transportasi">
                                                Transportasi ke sekolah
                                            </label>
                                            <select
                                                className={`form-control ${
                                                    this.state.errors
                                                        .transportasi
                                                        ? "is-invalid"
                                                        : ""
                                                }`}
                                                id="transportasi"
                                                name="transportasi"
                                                defaultValue=""
                                                onChange={this.handleChange}
                                                required
                                            >
                                                <option disabled value="">
                                                    Pilih Transportasi
                                                </option>
                                                <option value="Jalan Kaki">
                                                    Jalan Kaki
                                                </option>
                                                <option value="Sepeda Motor">
                                                    Sepeda Motor
                                                </option>
                                                <option value="Sepeda">
                                                    Sepeda
                                                </option>
                                            </select>
                                            <div className="invalid-feedback">
                                                {this.state.errors.transportasi}
                                            </div>
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label htmlFor="jarak">
                                                Jarak rumah ke sekolah
                                            </label>
                                            <input
                                                type="number"
                                                className={`form-control ${
                                                    this.state.errors.jarak
                                                        ? "is-invalid"
                                                        : ""
                                                }`}
                                                id="jarak"
                                                name="jarak"
                                                placeholder="Jarak rumah ke sekolah"
                                                onChange={this.handleChange}
                                                required
                                            />
                                            <div className="invalid-feedback">
                                                {this.state.errors.jarak}
                                            </div>
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label htmlFor="asal">
                                                Asal Sekolah
                                            </label>
                                            <input
                                                type="text"
                                                className={`form-control ${
                                                    this.state.errors.asal
                                                        ? "is-invalid"
                                                        : ""
                                                }`}
                                                id="asal"
                                                name="asal"
                                                placeholder="Asal Sekolah"
                                                onChange={this.handleChange}
                                                required
                                            />
                                            <div className="invalid-feedback">
                                                {this.state.errors.asal}
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="na">Nilai NA</label>
                                            <input
                                                type="number"
                                                className={`form-control ${
                                                    this.state.errors.na
                                                        ? "is-invalid"
                                                        : ""
                                                }`}
                                                id="na"
                                                name="na"
                                                placeholder="Nilai Akhir"
                                                onChange={this.handleChange}
                                                required
                                            />
                                            <div className="invalid-feedback">
                                                {this.state.errors.na}
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="nr">
                                                Nilai Rata-rata
                                            </label>
                                            <input
                                                type="number"
                                                className={`form-control ${
                                                    this.state.errors.nr
                                                        ? "is-invalid"
                                                        : ""
                                                }`}
                                                id="nr"
                                                name="nr"
                                                placeholder="Nilai Rata"
                                                onChange={this.handleChange}
                                                required
                                            />
                                            <div className="invalid-feedback">
                                                {this.state.errors.nr}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card rounder shadow p-2 mt-2 mb-2 animated fadeIn">
                        <h4 className="mt-3 mb-3 text-center">
                            Keterangan Bakat dan Minat Calon Peserta Didik
                        </h4>
                        <div className="col-12">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12 animated fadeInLeft">
                                    <div className="form-row">
                                        <div className="col-md-12 mb-3">
                                            <label htmlFor="hobi">Hobi</label>
                                            <input
                                                type="text"
                                                className={`form-control ${
                                                    this.state.errors.hobi
                                                        ? "is-invalid"
                                                        : ""
                                                }`}
                                                id="hobi"
                                                name="hobi"
                                                placeholder="Masukkan hobi"
                                                onChange={this.handleChange}
                                                required
                                            />
                                            <div className="invalid-feedback">
                                                {this.state.errors.hobi}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="col-md-12 mb-3">
                                            <label htmlFor="bidang">
                                                Bidang studi yang digemari
                                            </label>
                                            <input
                                                type="text"
                                                className={`form-control ${
                                                    this.state.errors.bidang
                                                        ? "is-invalid"
                                                        : ""
                                                }`}
                                                id="bidang"
                                                name="bidang"
                                                placeholder="Masukkan bidang studi"
                                                onChange={this.handleChange}
                                                required
                                            />
                                            <div className="invalid-feedback">
                                                {this.state.errors.bidang}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 animated fadeInRight">
                                    <div className="form-row">
                                        <div className="col-md-12 mb-3">
                                            <label htmlFor="olahraga">
                                                Olahraga yang digemari
                                            </label>
                                            <input
                                                type="text"
                                                className={`form-control ${
                                                    this.state.errors.olahraga
                                                        ? "is-invalid"
                                                        : ""
                                                }`}
                                                id="olahraga"
                                                name="olahraga"
                                                placeholder="Masukkan olahraga yang digemari"
                                                onChange={this.handleChange}
                                                required
                                            />
                                            <div className="invalid-feedback">
                                                {this.state.errors.olahraga}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="col-md-12 mb-3">
                                            <label htmlFor="cita">
                                                Cita - cita
                                            </label>
                                            <input
                                                type="text"
                                                className={`form-control ${
                                                    this.state.errors.cita
                                                        ? "is-invalid"
                                                        : ""
                                                }`}
                                                id="cita"
                                                name="cita"
                                                placeholder="Masukkan Cita - cita"
                                                onChange={this.handleChange}
                                                required
                                            />
                                            <div className="invalid-feedback">
                                                {this.state.errors.cita}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card rounder shadow p-2 mt-2 mb-2 animated fadeIn">
                        <h4 className="mt-3 mb-3 text-center">
                            Keterangan Orang Tua Wali
                        </h4>
                        <div className="col-12">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12 animated fadeInLeft">
                                    <div className="form-row">
                                        <div className="col-md-12 mb-3">
                                            <label htmlFor="nama_ayah">
                                                Nama Ayah
                                            </label>
                                            <input
                                                type="text"
                                                className={`form-control ${
                                                    this.state.errors.nama_ayah
                                                        ? "is-invalid"
                                                        : ""
                                                }`}
                                                id="nama_ayah"
                                                name="nama_ayah"
                                                placeholder="Masukkan nama ayah"
                                                onChange={this.handleChange}
                                                required
                                            />
                                            <div className="invalid-feedback">
                                                {this.state.errors.nama_ayah}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="col-md-12 mb-3">
                                            <label htmlFor="nama_ibu">
                                                Nama ibu
                                            </label>
                                            <input
                                                type="text"
                                                className={`form-control ${
                                                    this.state.errors.nama_ibu
                                                        ? "is-invalid"
                                                        : ""
                                                }`}
                                                id="nama_ibu"
                                                name="nama_ibu"
                                                placeholder="Masukkan bidang studi"
                                                onChange={this.handleChange}
                                                required
                                            />
                                            <div className="invalid-feedback">
                                                {this.state.errors.nama_ibu}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 animated fadeInRight">
                                    <div className="form-row">
                                        <div className="col-md-12 mb-3">
                                            <label htmlFor="pk_ayah">
                                                Pekerjaan ayah
                                            </label>
                                            <input
                                                type="text"
                                                className={`form-control ${
                                                    this.state.errors.pk_ayah
                                                        ? "is-invalid"
                                                        : ""
                                                }`}
                                                id="pk_ayah"
                                                name="pk_ayah"
                                                placeholder="Masukkan pekerjaan ayah"
                                                onChange={this.handleChange}
                                                required
                                            />
                                            <div className="invalid-feedback">
                                                {this.state.errors.pk_ayah}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="col-md-12 mb-3">
                                            <label htmlFor="pk_ibu">
                                                Pekerjaan ibu
                                            </label>
                                            <input
                                                type="text"
                                                className={`form-control ${
                                                    this.state.errors.pk_ibu
                                                        ? "is-invalid"
                                                        : ""
                                                }`}
                                                id="pk_ibu"
                                                name="pk_ibu"
                                                placeholder="Masukkan pekerjaan ibu"
                                                onChange={this.handleChange}
                                                required
                                            />
                                            <div className="invalid-feedback">
                                                {this.state.errors.pk_ibu}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 animated fadeInUp">
                                    <div className="form-row">
                                        <div className="col-md-4 mb-3">
                                            <label htmlFor="alamat_ortu">
                                                Alamat
                                            </label>
                                            <input
                                                type="text"
                                                className={`form-control ${
                                                    this.state.errors
                                                        .alamat_ortu
                                                        ? "is-invalid"
                                                        : ""
                                                }`}
                                                id="alamat_ortu"
                                                name="alamat_ortu"
                                                placeholder="Masukkan alamat orang tua"
                                                onChange={this.handleChange}
                                                required
                                            />
                                            <div className="invalid-feedback">
                                                {this.state.errors.alamat_ortu}
                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label htmlFor="no_wali">
                                                Nomor HP orang tua / wali
                                            </label>
                                            <input
                                                type="number"
                                                className={`form-control ${
                                                    this.state.errors.no_wali
                                                        ? "is-invalid"
                                                        : ""
                                                }`}
                                                id="no_wali"
                                                name="no_wali"
                                                placeholder="Masukkan nomor orang tua / wali"
                                                onChange={this.handleChange}
                                                required
                                            />
                                            <div className="invalid-feedback">
                                                {this.state.errors.no_wali}
                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label htmlFor="jurusan">
                                                Jurusan yang dipilih
                                            </label>
                                            <select
                                                className={`form-control ${
                                                    this.state.errors.jurusan
                                                        ? "is-invalid"
                                                        : ""
                                                }`}
                                                id="jurusan"
                                                name="jurusan"
                                                defaultValue=""
                                                onChange={this.handleChange}
                                                required
                                            >
                                                <option disabled value="">
                                                    Pilih Jurusan
                                                </option>
                                                <option value="RPL">
                                                    RPL ( Rekayasa Perangkat
                                                    Lunak )
                                                </option>
                                                <option value="Perhotelan">
                                                    Perhotelan
                                                </option>
                                            </select>
                                            <div className="invalid-feedback">
                                                {this.state.errors.jurusan}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card rounder shadow p-2 mt-2 mb-2 animated fadeIn">
                        <h4 className="mt-3 mb-3 text-center">Upload Berkas</h4>
                        <div className="form-row">
                            <div className="col-md-4 mb-3 animated fadeIn">
                                <label>Fotocopy Ijazah Legalisir</label>
                                <div className="input-group">
                                    <div className="custom-file">
                                        <input
                                            type="file"
                                            className={`custom-file-input ${
                                                this.state.errors.ijazah
                                                    ? "is-invalid"
                                                    : ""
                                            }`}
                                            id="ijazah"
                                            name="ijazah"
                                            required
                                            onChange={this.handleImageChange}
                                        />
                                        <label
                                            className="custom-file-label"
                                            htmlFor="ijazah"
                                        >
                                            {this.state.data.ijazah ==
                                                undefined ||
                                            !this.state.data.ijazah.name
                                                ? "Upload Foto Copy Ijazah"
                                                : this.state.data.ijazah.name}
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-3 animated fadeIn">
                                <label>Foto Copy SKHUN Legalisir</label>
                                <div className="custom-file mb-3">
                                    <div className="input-group">
                                        <div className="custom-file">
                                            <input
                                                type="file"
                                                className={`custom-file-input ${
                                                    this.state.errors.skhun
                                                        ? "is-invalid"
                                                        : ""
                                                }`}
                                                id="skhun"
                                                name="skhun"
                                                required
                                                onChange={
                                                    this.handleImageChange
                                                }
                                            />
                                            <label
                                                className="custom-file-label"
                                                htmlFor="skhun"
                                            >
                                                {this.state.data.skhun ==
                                                    undefined ||
                                                !this.state.data.skhun.name
                                                    ? "Upload Foto Copy SKHUN"
                                                    : this.state.data.skhun
                                                          .name}
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-3 animated fadeIn">
                                <label>Pas Foto Warna</label>
                                <div className="custom-file mb-3">
                                    <div className="input-group">
                                        <div className="custom-file">
                                            <input
                                                type="file"
                                                className={`custom-file-input ${
                                                    this.state.errors.foto
                                                        ? "is-invalid"
                                                        : ""
                                                }`}
                                                id="foto"
                                                name="foto"
                                                required
                                                onChange={
                                                    this.handleImageChange
                                                }
                                            />
                                            <label
                                                className="custom-file-label"
                                                htmlFor="foto"
                                            >
                                                {this.state.data.foto ==
                                                    undefined ||
                                                !this.state.data.foto.name
                                                    ? "Upload Foto Diri"
                                                    : this.state.data.foto.name}
                                            </label>
                                        </div>
                                    </div>{" "}
                                </div>
                            </div>
                            <div className="col-md-4 mb-3 animated fadeIn">
                                <label>Foto Copy KTP Ayah</label>
                                <div className="custom-file mb-3">
                                    <div className="input-group">
                                        <div className="custom-file">
                                            <input
                                                type="file"
                                                className={`custom-file-input ${
                                                    this.state.errors.ktp_ayah
                                                        ? "is-invalid"
                                                        : ""
                                                }`}
                                                id="ktp_ayah"
                                                name="ktp_ayah"
                                                required
                                                onChange={
                                                    this.handleImageChange
                                                }
                                            />
                                            <label
                                                className="custom-file-label"
                                                htmlFor="ktp_ayah"
                                            >
                                                {this.state.data.ktp_ayah ==
                                                    undefined ||
                                                !this.state.data.ktp_ayah.name
                                                    ? "Upload Foto Copy KTP Ayah"
                                                    : this.state.data.ktp_ayah
                                                          .name}
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-3 animated fadeIn">
                                <label>Foto Copy KTP Ibu</label>
                                <div className="custom-file mb-3">
                                    <div className="input-group">
                                        <div className="custom-file">
                                            <input
                                                type="file"
                                                className={`custom-file-input ${
                                                    this.state.errors.ktp_ibu
                                                        ? "is-invalid"
                                                        : ""
                                                }`}
                                                id="ktp_ibu"
                                                name="ktp_ibu"
                                                required
                                                onChange={
                                                    this.handleImageChange
                                                }
                                            />
                                            <label
                                                className="custom-file-label"
                                                htmlFor="ktp_ibu"
                                            >
                                                {this.state.data.ktp_ibu ==
                                                    undefined ||
                                                !this.state.data.ktp_ibu.name
                                                    ? "Upload Foto Copy KTP Ibu"
                                                    : this.state.data.ktp_ibu
                                                          .name}
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-3 animated fadeIn">
                                <label>Foto Copy KK</label>
                                <div className="custom-file mb-3">
                                    <div className="input-group">
                                        <div className="custom-file">
                                            <input
                                                type="file"
                                                className={`custom-file-input ${
                                                    this.state.errors.kk
                                                        ? "is-invalid"
                                                        : ""
                                                }`}
                                                id="kk"
                                                name="kk"
                                                required
                                                onChange={
                                                    this.handleImageChange
                                                }
                                            />
                                            <label
                                                className="custom-file-label"
                                                htmlFor="kk"
                                            >
                                                {this.state.data.kk ==
                                                    undefined ||
                                                !this.state.data.kk.name
                                                    ? "Upload Foto Copy KK"
                                                    : this.state.data.kk.name}
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-3 animated fadeIn">
                                <label>Foto Copy KIP jika ada</label>
                                <div className="custom-file mb-3">
                                    <div className="input-group">
                                        <div className="custom-file">
                                            <input
                                                type="file"
                                                className={`custom-file-input ${
                                                    this.state.errors.kip
                                                        ? "is-invalid"
                                                        : ""
                                                }`}
                                                id="kip"
                                                name="kip"
                                                required
                                                onChange={
                                                    this.handleImageChange
                                                }
                                            />
                                            <label
                                                className="custom-file-label"
                                                htmlFor="kip"
                                            >
                                                {this.state.data.kip ==
                                                    undefined ||
                                                !this.state.data.kip.name
                                                    ? "Upload KIP"
                                                    : this.state.data.kip.name}
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card rounder shadow p-2 mt-2 mb-5 animated fadeIn">
                        <button
                            type="submit"
                            className="btn btn-success rounded-0 w-100"
                        >
                            Daftar
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default smk;
