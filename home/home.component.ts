import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  providers: [NgbCarouselConfig]

})
export class HomeComponent {
  jiraToken: any;
  showNavigationArrows = "true";
  showNavigationIndicators = "true"
  images = [
    // { title: 'test', short: 'test Slide Short', src: "../../assets/images/banner/banner-1.jpg" },
    { title: 'First Slide', short: 'First Slide Short', src: "../../assets/images/banner/banner-2.jpg" },
    { title: 'Second Slide', short: 'Second Slide Short', src: "../../assets/images/banner/banner-3.jpg" },

  ];
  constructor(config: NgbCarouselConfig,
    private readonly title: Title,private router:Router
  ) {
    config.interval = 8000;
    config.keyboard = true;
    config.pauseOnHover = true;
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }
  ngOnInit(): void {
    this.jiraToken = sessionStorage.getItem("jiraToken");
  }
  confi() {
    this.router.navigate(['/config']);
  }
}
