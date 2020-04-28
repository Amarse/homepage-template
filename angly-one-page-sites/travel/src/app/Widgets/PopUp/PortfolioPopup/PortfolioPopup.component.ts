import { Component, OnInit } from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-portfolio-popup',
  templateUrl: './PortfolioPopup.component.html',
  styleUrls: ['./PortfolioPopup.component.scss']
})
export class PortfolioPopupComponent implements OnInit {
	
	data : any;
	
	constructor(public  activeModal: NgbActiveModal) { }

	ngOnInit() {
	}

}
