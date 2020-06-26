import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../shared/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  constructor(public customerService: CustomerService) { }
  customerArray = [];
  showDeleteMessage: boolean;
  searchText = '';

  ngOnInit(): void {
    this.customerService.getCustomers().subscribe(
      list => {
        this.customerArray = list.map(item => {
          return{
            $key: item.key,
            ...item.payload.val()
          };
        });
      });
    }

    onDelete(key) {
      if (confirm('Are you sure you want to delete ?')) {
        this.customerService.deleteCustomer(key);
        this.showDeleteMessage = true;
        setTimeout(() => {
          this.showDeleteMessage = false;
        }, 3000);
      }
    }

    filerCondition(customer) {
      return customer.fullName.toLowerCase().indexOf(this.searchText.toLowerCase()) !== -1;
    }
  }

