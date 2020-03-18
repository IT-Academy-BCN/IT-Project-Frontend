import { HttpClient } from '@angular/common/http';
import alumnos from '../../../../../assets/json/alumnos.json'; //?
/* ? */
import { Alumno } from '../tables/model/alumno';
import { Component, OnInit, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const URL = alumnos;

@Injectable({
  providedIn: 'root'
})
export class FilestudentService {

  constructor(private http: HttpClient) { }




}
