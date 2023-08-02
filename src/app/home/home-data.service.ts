import {Injectable} from "@angular/core";
import {HomeComponent} from "./home.component";
import { ListedProizvod, Artikl, Testera } from "./home.model";
import { DataService } from "../data.service";
import {Observable} from "rxjs";

@Injectable()
export class HomeDataService{

  constructor(private http: DataService) {
  }
  getAkcijaProizvodiData(): Observable<ListedProizvod[]> {
    return this.http.getData<ListedProizvod[]>("akcijaproizvodi");
  }
  getNovoProizvodiData() : Observable<ListedProizvod[]>  {
    return this.http.getData<ListedProizvod[]>("novoproizvodi");
  }
  getPreporucujemoProizvodiData(): Observable<ListedProizvod[]> {
    return this.http.getData<ListedProizvod[]>("preporucujemoproizvodi");
  }
  getRasprodajaProizvodiData() : Observable<ListedProizvod[]> {
    return this.http.getData<ListedProizvod[]>("rasprodajaproizvodi");
  }
  getVruciProizvodiData(): Observable<ListedProizvod[]> {
    return this.http.getData<ListedProizvod[]>("vruciproizvodi");
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
