import { Injectable } from '@angular/core';

import {BehaviorSubject} from "rxjs";
import {LocalStorageService} from "./local-storage.service";

export enum ThemeMode{
  DARK, LIGHT
}

@Injectable()

export class UiStyleToggleService{

  public theme$ = new BehaviorSubject<ThemeMode>(ThemeMode.LIGHT);
  public THEME_KEY = 'THEME';
  public DARK_THEME_VALUE = 'DARK';
  public LIGHT_THEME_VALUE = 'LIGHT';
  public DARK_THEME_CLASS_NAME = 'theme-dark';      
  public darkThemeSelected = false;
  
  constructor(private storage: LocalStorageService){}
  
  public setThemeOnStart(){

    if (this.isDarkThemeSelected()) {
      this.setDarkTheme();
    }else{
      this.setLightTheme();
    }

    setTimeout(() => {
      document.body.classList.add('animate-colors-transition');
    }, 500);
  }  
  
  public toggle(){
    if (this.darkThemeSelected) {
      this.setLightTheme();  
    }else{
      this.setDarkTheme();
    }
  }  

  isDarkThemeSelected(): boolean{
    this.darkThemeSelected = this.storage.get(this.THEME_KEY) === this.DARK_THEME_VALUE;
    return this.darkThemeSelected;
  }
  
  setLightTheme(){
    //pdte. verificar funcionamiento
    this.storage.set(this.THEME_KEY, this.LIGHT_THEME_VALUE);
    document.body.classList.remove(this.DARK_THEME_CLASS_NAME);
    this.darkThemeSelected = false;
    this.theme$.next(ThemeMode.LIGHT);
  }  

  setDarkTheme(){
    //pdte. verificar funcionamiento
        this.storage.set(this.THEME_KEY, this.DARK_THEME_VALUE);
    document.body.classList.add(this.DARK_THEME_CLASS_NAME);
    this.darkThemeSelected = true;
    this.theme$.next(ThemeMode.DARK);
  }  
}