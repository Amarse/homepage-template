import { Component, OnInit ,Input } from '@angular/core';
import { NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { AnglyService } from'../../../Services/Angly.service';

@Component({
	selector: 'app-portfolio-grid',
	templateUrl: './PortfolioGrid.component.html',
	styleUrls: ['./PortfolioGrid.component.scss']
})
export class PortfolioGridComponent implements OnInit {

	@Input() portfolioGrid : any;

	constructor(public service : AnglyService) { }

	ngOnInit() {
	}

	//openPortfolioDialog method is used to open the portfolio dialog.
	openPortfolioDialog(portfolioGrid){
		this.service.openPortfolioDialog(portfolioGrid);
	}
}
