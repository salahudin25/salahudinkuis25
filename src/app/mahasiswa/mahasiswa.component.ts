import { Component, OnInit } from '@angular/core';
import { Data } from'../shared/data';

@Component({
  selector: 'app-mahasiswa',
  templateUrl: './mahasiswa.component.html',
  styleUrls: ['./mahasiswa.component.css']
})
export class MahasiswaComponent implements OnInit {
  daftarMahasiswa:Data[] = [];
  nim = '';
  nama = '';
  kelas = '';
  data;

  constructor() { }

  ngOnInit() {
  }

  tambahMahasiswa(){
    this.data = new Data(this.nim, this.nama, this.kelas);
    this.daftarMahasiswa.push(this.data);
    this.nim = '';
    this.nama = '';
    this.kelas = '';
  }

}
