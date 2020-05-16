<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    private function Valid($request)
    {
        $validator = Validator::make(
            $request->all(),
            [
                'password'     => 'required',
                'username'   => 'required',
            ],
            [
                'username.required' => 'Masukkan Username',
                'password.required' => 'Masukkan Password',
            ]
        );
        return $validator;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $post = User::get();
        return response([
            'success' => true,
            'pesan' => 'List Semua User',
            'data' => $post
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function login(Request $request)
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
            $cek = User::whereUsername($request->input('username'))->first();
            if ($cek) {
                if (password_verify($request->input('password'), $cek->password)) {
                    return response()->json([
                        'success' => true,
                        'title' => 'Berhasil',
                        'icon' => 'success',
                        'pesan' => 'Selamat Datang ' . $cek->username,
                        'user' => $cek
                    ], 200);
                } else {
                    return response()->json([
                        'success' => false,
                        'title' => 'Gagal',
                        'icon' => 'error',
                        'pesan' => 'Username atau Password Salah',
                    ], 200);
                }
            } else {
                return response()->json([
                    'success' => false,
                    'title' => 'Gagal',
                    'icon' => 'error',
                    'pesan' => 'Akun Tidak Ditemukan',
                ], 200);
            }
        }
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
            $cek = User::whereUsername($request->input('username'))->first();
            if (!$cek) {
                $post = User::create([
                    'username'     => $request->input('username'),
                    'password'   => password_hash($request->input('password'), PASSWORD_DEFAULT),
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
                    'pesan' => 'Username Sudah Terpakai',
                ], 200);
            }
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $post = User::whereId_user($id)->first();

        if ($post) {
            return response()->json([
                'success' => true,
                'title' => 'Berhasil',
                'icon' => 'success',
                'pesan' => 'Data User',
                'user'    => $post
            ], 200);
        } else {
            return response()->json([
                'success' => false,
                'title' => 'Gagal',
                'icon' => 'error',
                'pesan' => 'User Tidak Ditemukan',
            ], 200);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
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

            $post = User::whereId_user($id)->update([
                'username'     => $request->input('Username'),
                'password'   => password_hash($request->input('password'), PASSWORD_DEFAULT),
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

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $post = User::findOrFail($id);
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
