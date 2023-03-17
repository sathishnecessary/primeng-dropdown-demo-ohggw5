import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { SelectItem } from 'primeng/api';
import { SelectItemGroup } from 'primeng/api';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  cities: City[];

  selectedCity1: City;

  selectedCity2: City;

  items: SelectItem[];

  item: string;

  constructor() {
    this.items = [];
    for (let i = 0; i < 10000; i++) {
      this.items.push({ label: 'Item ' + i, value: 'Item ' + i });
    }

    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' },
    ];
  }

  currentvalue: any;
  onChangeType(data: any) {
    if (data?.originalEvent?.inputType == 'insertText')
      this.currentvalue = data.value;
    else this.currentvalue = '';
  }

  mouseLeaveEvent(data: any) {
    debugger;
    if (this.selectedCity2?.name == undefined && this.selectedCity2 != null)
      this.appendCitie(this.selectedCity2);
  }

  appendCitie(data) {
    if (data) {
      let isFound = this.cities.find((t) => t.name == data);
      console.log('isFound' + isFound);
      if (!this.cities.find((t) => t.name == data))
        this.cities.push({ name: data, code: data });
    }
  }

  deleteGroup(data) {
    if (this.selectedCity2) {
      let selectedTest = this.cities.findIndex(
        (t) => t.name == this.selectedCity2.name
      );
      this.cities.splice(selectedTest, 1);
      this.selectedCity2 = null;
    }
  }
}
