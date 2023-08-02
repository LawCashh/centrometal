import {Injectable} from "@angular/core";
import {HomeComponent} from "./home.component";
import { ListedProizvod, Artikl, Testera } from "./home.model";
import { DataService } from "../data.service";
import {delay, Observable} from "rxjs";

@Injectable()
export class HomeDataService{

  constructor(private http: DataService) {
  }
  getAkcijaProizvodiData(): Observable<ListedProizvod[]> {
    return this.http.getData<ListedProizvod[]>("akcijaproizvodi").pipe(delay(2000));
  }
  getNovoProizvodiData() : Observable<ListedProizvod[]>  {
    return this.http.getData<ListedProizvod[]>("novoproizvodi").pipe(delay(2000));
  }
  getPreporucujemoProizvodiData(): Observable<ListedProizvod[]> {
    return this.http.getData<ListedProizvod[]>("preporucujemoproizvodi").pipe(delay(2000));
  }
  getRasprodajaProizvodiData() : Observable<ListedProizvod[]> {
    return this.http.getData<ListedProizvod[]>("rasprodajaproizvodi").pipe(delay(2000));
  }
  getVruciProizvodiData(): Observable<ListedProizvod[]> {
    return this.http.getData<ListedProizvod[]>("vruciproizvodi").pipe(delay(2000));
  }
  getMainListLeftData(): Observable<any> {
    return this.http.getData<any>("mainlistleft");
  }
  getMainListLeftIconsData() {
    return this.http.getData<{id: number, url: string}[]>("mainlistlefticons");
  }
  getReklameMainData() {
    return this.http.getData<{id: number, url?: string, artikli?: Artikl[]}[]>("reklamemain");
  }
  getTestereData() {
    return this.http.getData<Testera[]>("testere");
  }
}
