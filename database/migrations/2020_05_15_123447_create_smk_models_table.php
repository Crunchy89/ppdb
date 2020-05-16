<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSmkModelsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('smk_models', function (Blueprint $table) {
            $table->bigIncrements('id_smk');
            $table->string('nama');
            $table->string('namap');
            $table->string('jk');
            $table->integer('nisn');
            $table->string('tempat');
            $table->date('tanggal');
            $table->string('agama');
            $table->integer('anak_ke');
            $table->integer('jumlah');
            $table->string('status');
            $table->text('alamat');
            $table->string('no_hp');
            $table->string('tinggal');
            $table->string('transportasi');
            $table->integer('jarak');
            $table->string('asal');
            $table->float('na');
            $table->float('nr');
            $table->string('hobi');
            $table->string('bidang');
            $table->string('olahraga');
            $table->string('cita');
            $table->string('nama_ayah');
            $table->string('nama_ibu');
            $table->string('pk_ayah');
            $table->string('pk_ibu');
            $table->text('alamat_ortu');
            $table->string('no_wali');
            $table->string('jurusan');
            $table->string('ijazah');
            $table->string('skhun');
            $table->string('foto');
            $table->string('ktp_ayah');
            $table->string('ktp_ibu');
            $table->string('kk');
            $table->string('kip');
            $table->string('tahun_diklat');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('smk_models');
    }
}
