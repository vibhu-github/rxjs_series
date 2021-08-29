import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { concatMap, debounceTime, distinctUntilChanged, filter, map, pluck, switchMap } from 'rxjs/operators';
import { Search } from 'src/app/Interface/search.interface';
import { SearchService } from 'src/app/service/search.service';

@Component({
  selector: 'app-switch-map-search',
  templateUrl: './switch-map-search.component.html',
  styleUrls: ['./switch-map-search.component.scss']
})
export class SwitchMapSearchComponent implements AfterViewInit {
  searchResults?:Search
  searchResultsCount?:number
  @ViewChild('searchForm') searchForm?:NgForm
  constructor(private searchservice:SearchService) { }
  ngAfterViewInit(): void {
    // this.searchservice.getSearches('intro').subscribe(res=>console.log(res))
    const formValue=this.searchForm?.valueChanges
    formValue?.pipe(
      
     //map(data=>data.searchTerm)
     pluck('searchTerm'),debounceTime(500),distinctUntilChanged(),switchMap(res=>this.searchservice.getSearches(res))
    ).subscribe(res=>{console.log(res)
    this.searchResults=res
  this.searchResultsCount=Object.keys(res).length})
  }

  
}
