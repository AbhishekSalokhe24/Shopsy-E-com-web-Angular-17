import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CatogoryBtnsComponent } from "../catogory-btns/catogory-btns.component";
import { ProductsService } from '../products.service';
import { CatogoryCardsComponent } from '../catogory-cards/catogory-cards.component';

@Component({
    selector: 'app-filters',
    standalone: true,
    templateUrl: './filters.component.html',
    styleUrls: ['./filters.component.css'],
    imports: [CatogoryBtnsComponent, CatogoryCardsComponent]
})
export class FiltersComponent implements OnInit {

    priceVal: any;
    products: any[] = [];
    filteredProducts: any = [];
    catgProducts: any = [];
    
    @Output() productsByPrice = new EventEmitter<any[]>();

    constructor(private productSev: ProductsService) {}

    ngOnInit(): void {
        this.getProducts();
    }

    updateProducts(updatedProducts: any[]) {
        console.log("products from btn to filter...", updatedProducts);
        this.catgProducts = updatedProducts;
        // Filter the products by price after updating the category products
        this.filterProductsByPrice(this.priceVal);
    }

    rangeChange(event: any) {
        console.log("Range changed");
        this.priceVal = event.target.value;
        console.log("Range value:", this.priceVal); // --> string
        // Filter the products by price when the range changes
        this.filterProductsByPrice(this.priceVal);
    }

    getProducts(): void {
        this.productSev.getProducts().subscribe((res: any) => {
            this.products = res;
        });
    }

    filterProductsByPrice(price: string): any {
        if (!price) return;
        // Filter the products by the given price
        this.filteredProducts = this.catgProducts.filter((product: any) => product.price <= price);
        this.productsByPrice.emit(this.filteredProducts);
        console.log("Filtered Products by price...", this.filteredProducts);
        return this.filteredProducts;
    }
}
