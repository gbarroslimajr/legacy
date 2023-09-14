import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../api-call.service';

@Component({
  selector: 'app-xyz',
  templateUrl: './xyz.component.html',
  styleUrls: ['./xyz.component.css']
})
export class XyzComponent implements OnInit {
  dados: any[] = [];

  constructor(private apiCallService: ApiCallService) { }

  ngOnInit() : void {
    this.apiCallService.getUsers().subscribe((data) => {
      console.log(data);
      this.dados = data;
    }, (error) => {
      console.log("Erro ao buscar dados: ", error);
    });
  }

}


