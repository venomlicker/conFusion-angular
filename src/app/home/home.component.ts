import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dish: Dish;
  maybeFeaturedLeader: Leader;
  promotion: Promotion;

  constructor(
    private dishService: DishService,
    private leaderService: LeaderService,
    private promotionService: PromotionService) {
    }

  ngOnInit() {
    this.dishService.getFeaturedDish().then(dish => this.dish = dish);
    this.promotionService.getFeaturedPromotion().then(promotion => this.promotion = promotion);
    this.leaderService.getFeaturedLeader().then(leader => this.maybeFeaturedLeader = leader);
  }
}
