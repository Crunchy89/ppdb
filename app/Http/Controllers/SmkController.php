<?php

namespace App\Http\Controllers;

use App\SmkModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class SmkController extends Controller
{
    private function upload($request, $nama)
    {
        $file = $request->file($nama);
        if ($file) {
            $path = public_path() . '/berkas/';
            $file->move($path, date('His') . $request->input('nisn') . $file->getClientOriginalName());
            return date('His') . $request->input('nisn') . $file->getClientOriginalName();
        } else {
            return 'no_image';
        }
    }
    private function Valid($request)
    {
        $validator = Validator::make(
            $request->all(),
            [
                'nama'     => 'required',
                'namap'   => 'required',
                'jk' => 'required',
                'nisn' => 'required',
                'tempat' => 'required',
                'tanggal' => 'required',
                'agama' => 'required',
                'anak_ke' => 'required',
                'jumlah' => 'required',
                'status' => 'required',
                'alamat' => 'required',
                'no_hp' => 'required',
                'tinggal' => 'required',
                'transportasi' => 'required',
                'jarak' => 'required',
                'asal' => 'required',
                'na' => 'required',
                'nr' => 'required',
                'hobi' => 'required',
                'bidang' => 'required',
                'olahraga' => 'required',
                'cita' => 'required',
                'nama_ayah' => 'required',
                'nama_ibu' => 'required',
                'pk_ayah' => 'required',
                'pk_ibu' => 'required',
                'alamat_ortu' => 'required',
                'no_wali' => 'required',
                'jurusan' => 'required',
                'ijazah' => 'required',
                'skhun' => 'required',
                'foto' => 'required',
                'ktp_ayah' => 'required',
                'ktp_ibu' => 'required',
                'kk' => 'required',
            ],
            [
                'nama.required' => 'Masukkan Nama Lengkap',
                'namap.required' => 'Masukkan Nama Panggilan',
                'jk.required' => 'Pilih Jenis Kelamin',
                'nisn.required' => 'Masukkan NISN',
                'tempat.required' => 'Masukkan Tempat Lahir',
                'tanggal.required' => 'Masukkan Tanggal Lahir',
                'agama.required' => 'Masukkan Agama',
                'anak_ke.required' => 'Tidak Boleh Kosong',
                'jumlah.required' => 'Tidak Boleh Kosong',
                'status.required' => 'Pilih Status Dalam Keluarga',
                'alamat.required' => 'Masukkan Alamat Lengkap',
                'no_hp.required' => 'Masukkan No HP',
                'tinggal.required' => 'Tidak Boleh Kosong',
                'transportasi.required' => 'Pilih Transportasi',
                'jarak.required' => 'Tidak Boleh Kosong',
                'asal.required' => 'Masukkan Asal Sekolah',
                'na.required' => 'Masukkan Nilai Akhir',
                'nr.required' => 'Masukkan Nilai Rata-rata',
                'hobi.required' => 'Masukkan Hobi',
                'bidang.required' => 'Masukkan Bidang Studi',
                'olahraga.required' => 'Masukkan Oralhraga Kesukaan',
                'cita.required' => 'Masukkan Cita - cita',
                'nama_ayah.required' => 'Masukkan nama Ayah',
                'nama_ibu.required' => 'Masukkan nama Ibu',
                'pk_ayah.required' => 'Masukkan Pekerjaan Ayah',
                'pk_ibu.required' => 'Masukkan Pekerjaan Ibu',
                'alamat_ortu.required' => 'Masukkan Alamat Orang Tua',
                'no_wali.required' => 'Masukkan No Hp Wali',
                'jurusan.required' => 'Pilih Jurusan',
                'ijazah.required' => 'Upload Foto Copy Ijazah',
                'skhun.required' => 'Upload Foto Copy SKHUN',
                'foto.required' => 'Upload Foto Diri',
                'ktp_ayah.required' => 'Upload Foto Copy KTP Ayah',
                'ktp_ibu.required' => 'Upload Foto Copy KTP Ibu',
                'kk.required' => 'Upload Foto Copy KTP Ibu',
            ]
        );
        return $validator;
    }
    public function index()
    {
        $post = SmkModel::get();
        return response([
            'success' => true,
            'pesan' => 'List Semua Peserta Didik Baru SMK',
            'data' => $post
        ], 200);
    }
    public function store(Request $request)
    {
        $validator = $this->Valid($request);

        if ($validator->fails()) {

            return response()->json([
                'success' => false,
                'title' => 'Terjadi Kesalahan',
                'icon' => 'warning',
                'pesan' => 'Silahkan Isi Bidang Yang Kosong',
                'data'    => $validator->errors()
            ], 200);
        } else {
            $cek = SmkModel::whereNisn($request->input('nisn'))->first();
            if ($cek) {
                $post = SmkModel::create([
                    'nama'     => $request->input('nama'),
                    'namap'   => $request->input('namap'),
                    'jk' => $request->input('jk'),
                    'nisn' => $request->input('nisn'),
                    'tempat' => $request->input('tempat'),
                    'tanggal' => $request->input('tanggal'),
                    'agama' => $request->input('agama'),
                    'anak_ke' => $request->input('anak_ke'),
                    'jumlah' => $request->input('jumlah'),
                    'status' => $request->input('status'),
                    'alamat' => $request->input('alamat'),
                    'no_hp' => $request->input('no_hp'),
                    'tinggal' => $request->input('tinggal'),
                    'transportasi' => $request->input('transportasi'),
                    'jarak' => $request->input('jarak'),
                    'asal' => $request->input('asal'),
                    'na' => $request->input('na'),
                    'nr' => $request->input('nr'),
                    'hobi' => $request->input('hobi'),
                    'bidang' => $request->input('bidang'),
                    'olahraga' => $request->input('olahraga'),
                    'cita' => $request->input('cita'),
                    'nama_ayah' => $request->input('nama_ayah'),
                    'nama_ibu' => $request->input('nama_ibu'),
                    'pk_ayah' => $request->input('pk_ayah'),
                    'pk_ibu' => $request->input('pk_ibu'),
                    'alamat_ortu' => $request->input('alamat_ortu'),
                    'no_wali' => $request->input('no_wali'),
                    'jurusan' => $request->input('jurusan'),
                    'ijazah' => $this->upload($request, 'ijazah'),
                    'skhun' => $this->upload($request, 'skhun'),
                    'foto' => $this->upload($request, 'foto'),
                    'ktp_ayah' => $this->upload($request, 'ktp_ayah'),
                    'ktp_ibu' => $this->upload($request, 'ktp_ibu'),
                    'kk' => $this->upload($request, 'kk'),
                    'kip' => $this->upload($request, 'kip'),
                    'tahun_diklat' => date('Y') . '/' . ((int) date('Y') + 1)
                ]);


                if ($post) {
                    return response()->json([
                        'success' => true,
                        'title' => 'Berhasil',
                        'icon' => 'success',
                        'pesan' => 'Data Berhasil Disimpan',
                    ], 200);
                } else {
                    return response()->json([
                        'success' => false,
                        'title' => 'Gagal',
                        'icon' => 'error',
                        'pesan' => 'Data Gagal Disimpan',
                    ], 200);
                }
            } else {
                return response()->json([
                    'success' => false,
                    'title' => 'Gagal',
                    'icon' => 'error',
                    'pesan' => 'NISN Sudah Terdaftar',
                ], 200);
            }
        }
    }
    public function update($id, Request $request)
    {
        //validate data
        $validator = $this->Valid($request);

        if ($validator->fails()) {

            return response()->json([
                'success' => false,
                'title' => 'Terjadi Kesalahan',
                'icon' => 'warning',
                'pesan' => 'Silahkan Isi Kolom Yang Kosong',
                'data'    => $validator->errors()
            ], 200);
        } else {

            $post = SmkModel::whereId_smk($id)->update([
                'nama'     => $request->input('nama'),
                'namap'   => $request->input('namap'),
                'jk' => $request->input('jk'),
                'nisn' => $request->input('nisn'),
                'tempat' => $request->input('tempat'),
                'tanggal' => $request->input('tanggal'),
                'agama' => $request->input('agama'),
                'anak_ke' => $request->input('anak_ke'),
                'jumlah' => $request->input('jumlah'),
                'status' => $request->input('status'),
                'alamat' => $request->input('alamat'),
                'no_hp' => $request->input('no_hp'),
                'tinggal' => $request->input('tinggal'),
                'transportasi' => $request->input('transportasi'),
                'jarak' => $request->input('jarak'),
                'asal' => $request->input('asal'),
                'na' => $request->input('na'),
                'nr' => $request->input('nr'),
                'hobi' => $request->input('hobi'),
                'bidang' => $request->input('bidang'),
                'olahraga' => $request->input('olahraga'),
                'cita' => $request->input('cita'),
                'nama_ayah' => $request->input('nama_ayah'),
                'nama_ibu' => $request->input('nama_ibu'),
                'pk_ayah' => $request->input('pk_ayah'),
                'pk_ibu' => $request->input('pk_ibu'),
                'alamat_ortu' => $request->input('alamat_ortu'),
                'no_wali' => $request->input('no_wali'),
                'jurusan' => $request->input('jurusan'),
                'ijazah' => $this->upload($request, 'ijazah'),
                'skhun' => $this->upload($request, 'skhun'),
                'foto' => $this->upload($request, 'foto'),
                'ktp_ayah' => $this->upload($request, 'ktp_ayah'),
                'ktp_ibu' => $this->upload($request, 'ktp_ibu'),
                'kk' => $this->upload($request, 'kk'),
                'kip' => $this->upload($request, 'kip'),
            ]);


            if ($post) {
                return response()->json([
                    'success' => true,
                    'title' => 'Berhasil',
                    'icon' => 'success',
                    'pesan' => 'Data Berhasil di Update',
                ], 200);
            } else {
                return response()->json([
                    'success' => false,
                    'title' => 'Gagal',
                    'icon' => 'error',
                    'pesan' => 'Data Gagal di Update',
                ], 200);
            }
        }
    }

    public function show($id)
    {
        $post = SmkModel::whereId_smk($id)->first();

        if ($post) {
            return response()->json([
                'success' => true,
                'title' => 'Berhasil',
                'icon' => 'success',
                'pesan' => 'Data Siswa',
                'data'    => $post
            ], 200);
        } else {
            return response()->json([
                'success' => false,
                'title' => 'Gagal',
                'icon' => 'error',
                'pesan' => 'Siswa Tidak Ditemukan',
            ], 200);
        }
    }

    public function destroy($id)
    {
        $post = SmkModel::findOrFail($id);
        $post->delete();

        if ($post) {
            return response()->json([
                'success' => true,
                'title' => 'Berhasil',
                'icon' => 'success',
                'pesan' => 'Data Berhasil Dihapus',
            ], 200);
        } else {
            return response()->json([
                'success' => false,
                'title' => 'Gagal',
                'icon' => 'error',
                'pesan' => 'Data Gagal Dihapus',
            ], 200);
        }
    }
}
