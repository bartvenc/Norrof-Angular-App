import { Injectable, HostListener } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Pokemon } from "../Modules/pokemon";
import { RespResults } from "../Modules/resp-results";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class PokemonFetchService {
  apiURL: string = "https://pokeapi.co/api/v2/pokemon/";
  pokeURL: string = "https://pokeapi.co/api/v2/";
  public firstPage: string = "";
  public prevPage: string = "";
  public nextPage: string = "";
  public lastPage: string = "";

  constructor(private httpClient: HttpClient) {}

  public getAllPokes(url?: string) {
    if (url) {
      return this.httpClient
        .get<RespResults>(url, { observe: "response" })
        .pipe(
          tap(res => {
            this.retrieve_pagination_links(res.body);
          })
        );
    }

    return this.httpClient
      .get<RespResults>(`${this.apiURL}`, { observe: "response" })
      .pipe(
        tap(res => {
          console.log("lol");

          this.retrieve_pagination_links(res.body);
        })
      );
  }
  public retrieve_pagination_links(body) {
    this.nextPage = body.next;
  }

  public getSinglePoke(url) {
    console.log(url);
    return this.httpClient
      .get<any>(`${url}`, { observe: "response" })
      .pipe(
        tap(res => {
          //console.log(res)
        })
      );
  }

  public getPokeProfileDetail(name) {
    return this.httpClient
      .get<any>(`${this.apiURL}${name}`, { observe: "response" })
      .pipe(
        tap(res => {
          console.log(`${this.apiURL}${name}`);
        })
      );
  }
}
