<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class MtsModel extends Model
{
    protected $fillable = [
        'nama',
        'namap',
        'jk',
        'nisn',
        'tempat',
        'tanggal',
        'agama',
        'anak_ke',
        'jumlah',
        'status',
        'alamat',
        'no_hp',
        'asal',
        'na',
        'nr',
        'hobi',
        'bidang',
        'olahraga',
        'cita',
        'nama_ayah',
        'nama_ibu',
        'pk_ayah',
        'pk_ibu',
        'alamat_ortu',
        'no_wali',
        'ijazah',
        'skhun',
        'foto',
        'ktp_ayah',
        'ktp_ibu',
        'kk',
        'kip',
        'tahun_diklat'
    ];
}
