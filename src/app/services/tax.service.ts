import {Injectable, Input, OnInit} from "@angular/core";

@Injectable()
export class TaxService implements OnInit{

  //Personal Allowance	Up to £12,570	0%
  // Starter rate	£12,571 to £14,732	19%
  // Basic rate	£14,733 to £25,688	20%
  // Intermediate rate	£25,689 to £43,662	21%
  // Higher rate	£43,663 to £150,000	41%
  // Top rate	over £150,000	46%

  // @Input()
  taxableIncomeAmount: number;
  totalTaxAmount: number = 0;
  personalAllowance: number = 12570;
  starterRateStart: number = 12571;
  starterRateEnd:number = 14732;
  starterRate: number = .19;

  basicRateStart: number = 14733;
  basicRateEnd: number = 25688;
  basicRate: number = .20;

  intermediateRateStart: number = 25689;
  intermediateRateEnd: number = 43622;
  intermediateRate: number = .21;

  higherRateStart: number = 43663;
  higherRateEnd: number = 150000;
  higherRate: number = .41;

  topRateStart: number = 150000;
  topRate: number = .46;

  nationalInsuranceToPay: number = 0;
  pensionAmount: number = 0;

  ngOnInit(): void {

  }

  applyPension(percentAmount: number) {
    console.log('salary before pension: ', this.taxableIncomeAmount);
    this.pensionAmount = this.taxableIncomeAmount * (percentAmount / 100);
    this.taxableIncomeAmount -= this.pensionAmount;
    console.log('after pension: ', this.taxableIncomeAmount);
  }

  applyTaxRates() {
    let annualSalary = this.taxableIncomeAmount;
    this.taxableIncomeAmount = this.removePersonalAllowanceFromTaxableIncome(this.taxableIncomeAmount);
    this.totalTaxAmount += this.applyStarterRateTax(this.taxableIncomeAmount);
    this.totalTaxAmount += this.applyBasicRateTax(this.taxableIncomeAmount);
    this.totalTaxAmount += this.applyIntermediateRateTax(this.taxableIncomeAmount);
    this.totalTaxAmount += this.applyHigherRateTax(this.taxableIncomeAmount);
    this.nationalInsuranceToPay = this.calculateNationalInsurance(annualSalary);
  }

  removePersonalAllowanceFromTaxableIncome(amount: number) {
    return amount - this.personalAllowance;
  }

  applyStarterRateTax(amount: number) {
    if (amount > this.starterRateEnd) {
      return (this.starterRateEnd - this.starterRateStart) * this.starterRate;
    }
  }

  applyBasicRateTax(amount: number) {
    if (amount > this.basicRateEnd) {
      return (this.basicRateEnd - this.basicRateStart) * this.basicRate;
    }
  }

  applyIntermediateRateTax(amount: number) {
    if (amount > this.intermediateRateEnd) {
      return (this.intermediateRateEnd - this.intermediateRateStart) * this.intermediateRate;
    }
  }

  applyHigherRateTax(amount: number) {
    if (amount > this.higherRateEnd) {
      return (this.higherRateEnd - this.higherRateStart) * this.higherRate;
    } else {
      return (amount - this.higherRateStart) * this.higherRate;
    }
  }

  //based on weekly earnings
  //nothing on first 242
  //13.25% betwen 242 and 967
  //2.35 above 967
  calculateNationalInsurance(annualAmount: number): number {
    let weeklyAmount = annualAmount / 52;
    console.log('weekly amount: ', weeklyAmount)

    //remove the nothing part
    if (weeklyAmount < 242) {
      return 0;
    } else {
      if (weeklyAmount <= 967) {
        return ((weeklyAmount - 242) * .1325) * 52;
      }
      if (weeklyAmount > 967) {
        console.log('weekly amount: ', weeklyAmount);
        let niAmount = (967-242) * .1325;
        console.log('niAmount: ', niAmount);
        let higherTateNi = (weeklyAmount - 967) * .0325
        console.log('higher rate amount: ', higherTateNi);
        let total = (niAmount + higherTateNi) * 52;
        console.log('total: ', total);
        return total;
      }
    }

    return 0;

  }




}
